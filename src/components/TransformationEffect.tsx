import { motion } from "framer-motion";

export const TransformationEffect = () => {
  return (
    <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
      {/* Light streaks morphing into @ shape */}
      {[...Array(12)].map((_, i) => {
        const angle = (i * 30) * Math.PI / 180;
        const startRadius = 60;
        const endX = Math.cos(angle) * 80;
        const endY = Math.sin(angle) * 80;
        
        return (
          <motion.div
            key={i}
            className="absolute w-1 h-8 rounded-full"
            style={{
              background: `linear-gradient(to bottom, hsl(var(--glow-primary)), transparent)`,
              left: "50%",
              top: "50%",
              transformOrigin: "center",
            }}
            initial={{
              x: Math.cos(angle) * startRadius,
              y: Math.sin(angle) * startRadius,
              rotate: (angle * 180 / Math.PI) + 90,
              opacity: 1,
              scale: 1,
            }}
            animate={{
              x: [
                Math.cos(angle) * startRadius,
                endX,
                0,
              ],
              y: [
                Math.sin(angle) * startRadius,
                endY,
                0,
              ],
              opacity: [1, 0.8, 0],
              scale: [1, 1.2, 0.5],
            }}
            transition={{
              duration: 0.8,
              ease: [0.34, 1.56, 0.64, 1],
            }}
          />
        );
      })}

      {/* Central glow pulse */}
      <motion.div
        className="absolute w-32 h-32 rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(var(--glow-primary) / 0.4), transparent 70%)",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ 
          scale: [0.5, 1.5, 1],
          opacity: [0, 0.8, 0],
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      />

      {/* Rotating energy ring */}
      <motion.div
        className="absolute w-24 h-24 rounded-full border-2"
        style={{
          borderColor: "hsl(var(--accent))",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
        initial={{ scale: 0.8, opacity: 1, rotate: 0 }}
        animate={{ 
          scale: 1.2,
          opacity: 0,
          rotate: 180,
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      />
    </div>
  );
};
