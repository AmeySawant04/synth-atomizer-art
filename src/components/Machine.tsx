import { motion } from "framer-motion";

interface MachineProps {
  isProcessing: boolean;
  isTransforming: boolean;
}

export const Machine = ({ isProcessing, isTransforming }: MachineProps) => {
  return (
    <motion.div 
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Machine body */}
      <svg width="280" height="200" viewBox="0 0 280 200" fill="none">
        {/* Funnel top */}
        <motion.path
          d="M 90 40 L 190 40 L 160 80 L 120 80 Z"
          fill="url(#machineGradient)"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          initial={{ opacity: 0.8 }}
          animate={{ 
            opacity: isProcessing ? 1 : 0.8,
          }}
        />
        
        {/* Main processing chamber */}
        <motion.rect
          x="80"
          y="80"
          width="120"
          height="80"
          rx="8"
          fill="url(#machineGradient)"
          stroke="hsl(var(--primary))"
          strokeWidth="3"
        />

        {/* Inner glow when processing */}
        <motion.rect
          x="90"
          y="90"
          width="100"
          height="60"
          rx="4"
          fill="hsl(var(--glow-primary))"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: isProcessing || isTransforming ? [0.2, 0.5, 0.2] : 0,
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Gear decoration */}
        {[0, 120, 240].map((rotation, i) => (
          <motion.g
            key={i}
            animate={{ 
              rotate: isProcessing ? 360 : 0,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ transformOrigin: "140px 120px" }}
          >
            <circle
              cx="140"
              cy="120"
              r="15"
              fill="hsl(var(--muted))"
              stroke="hsl(var(--primary))"
              strokeWidth="2"
            />
            {[0, 60, 120, 180, 240, 300].map((angle) => (
              <rect
                key={angle}
                x="138"
                y="105"
                width="4"
                height="8"
                fill="hsl(var(--primary))"
                style={{
                  transformOrigin: "140px 120px",
                  transform: `rotate(${angle}deg)`,
                }}
              />
            ))}
          </motion.g>
        ))}

        {/* Light beam effect */}
        {isProcessing && (
          <motion.line
            x1="100"
            y1="95"
            x2="180"
            y2="95"
            stroke="hsl(var(--glow-secondary))"
            strokeWidth="2"
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{ 
              opacity: [0, 1, 0],
              pathLength: [0, 1, 0],
              x1: [100, 180],
              x2: [100, 180],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        )}

        {/* Output pipe */}
        <path
          d="M 140 160 L 140 180"
          stroke="hsl(var(--primary))"
          strokeWidth="8"
          strokeLinecap="round"
        />

        {/* Gradient definitions */}
        <defs>
          <linearGradient id="machineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--machine-gradient-start))" stopOpacity="0.3" />
            <stop offset="100%" stopColor="hsl(var(--machine-gradient-end))" stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </svg>

      {/* Spark particles during transformation */}
      {isTransforming && (
        <>
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{
                background: "hsl(var(--spark-color))",
                boxShadow: "0 0 8px hsl(var(--spark-color))",
                left: "50%",
                top: "50%",
              }}
              initial={{ 
                x: 0, 
                y: 0, 
                opacity: 1,
                scale: 1,
              }}
              animate={{ 
                x: Math.cos(i * 60 * Math.PI / 180) * 50,
                y: Math.sin(i * 60 * Math.PI / 180) * 50,
                opacity: 0,
                scale: 0.5,
              }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeOut",
              }}
            />
          ))}
        </>
      )}
    </motion.div>
  );
};
