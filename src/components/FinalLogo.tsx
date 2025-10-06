import { motion } from "framer-motion";

export const FinalLogo = () => {
  return (
    <div className="relative flex items-center justify-center pointer-events-none">
      {/* Particle burst background */}
      {[...Array(12)].map((_, i) => {
        const angle = (i * 30) * Math.PI / 180;
        const distance = 60 + Math.random() * 40;
        
        return (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: "hsl(var(--accent))",
              boxShadow: "0 0 6px hsl(var(--accent))",
              left: "50%",
              top: "50%",
            }}
            initial={{ 
              x: 0, 
              y: 0, 
              scale: 1,
              opacity: 1,
            }}
            animate={{ 
              x: Math.cos(angle) * distance,
              y: Math.sin(angle) * distance,
              scale: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
          />
        );
      })}

      {/* Main SsP logo - letters appearing sequentially */}
      <motion.div
        className="relative z-10 flex items-center justify-center gap-2"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ 
          scale: [0.8, 1.1, 1],
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
          ease: [0.34, 1.56, 0.64, 1], // Bounce effect
        }}
      >
        {/* First S */}
        <motion.div
          className="text-8xl font-bold bg-gradient-to-br from-[hsl(var(--logo-gradient-start))] to-[hsl(var(--logo-gradient-end))] bg-clip-text text-transparent"
          style={{
            fontFamily: 'system-ui, -apple-system, sans-serif',
            letterSpacing: '0.05em',
          }}
          initial={{ opacity: 0, y: 20, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.4, delay: 0, ease: "easeOut" }}
        >
          S
        </motion.div>

        {/* Second s */}
        <motion.div
          className="text-8xl font-bold bg-gradient-to-br from-[hsl(var(--logo-gradient-start))] to-[hsl(var(--logo-gradient-end))] bg-clip-text text-transparent"
          style={{
            fontFamily: 'system-ui, -apple-system, sans-serif',
            letterSpacing: '0.05em',
          }}
          initial={{ opacity: 0, y: 20, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.25, ease: "easeOut" }}
        >
          s
        </motion.div>

        {/* P */}
        <motion.div
          className="text-8xl font-bold bg-gradient-to-br from-[hsl(var(--logo-gradient-start))] to-[hsl(var(--logo-gradient-end))] bg-clip-text text-transparent"
          style={{
            fontFamily: 'system-ui, -apple-system, sans-serif',
            letterSpacing: '0.05em',
          }}
          initial={{ opacity: 0, y: 20, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.5, ease: "easeOut" }}
        >
          P
        </motion.div>

        {/* Shine effect overlay */}
        <motion.div
          className="absolute inset-0 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1.5, delay: 0.8 }}
        >
          <motion.div
            className="absolute inset-0 w-8 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
            initial={{ x: "-100%" }}
            animate={{ x: "300%" }}
            transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>

      {/* Ambient glow around logo */}
      <motion.div
        className="absolute w-48 h-48 rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(var(--glow-primary) / 0.2), transparent 70%)",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ 
          scale: 1,
          opacity: 0.6,
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      />
    </div>
  );
};
