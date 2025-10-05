import { motion } from "framer-motion";

const BALL_COUNT = 8;

export const FallingBalls = () => {
  const balls = Array.from({ length: BALL_COUNT }, (_, i) => ({
    id: i,
    delay: i * 0.05,
    x: -100 + (i * 25), // Spread horizontally
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      {balls.map((ball) => (
        <motion.div
          key={ball.id}
          className="absolute top-0 left-1/2 w-6 h-6 rounded-full"
          style={{
            background: "hsl(var(--ball-color))",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3), inset 0 -2px 4px rgba(0, 0, 0, 0.2)",
            left: `calc(50% + ${ball.x}px)`,
          }}
          initial={{ 
            y: -100, 
            rotate: 0,
            opacity: 0,
          }}
          animate={{ 
            y: 180,
            rotate: 720,
            opacity: [0, 1, 1],
          }}
          transition={{
            duration: 0.5,
            delay: ball.delay,
            ease: [0.4, 0, 0.6, 1], // ease-in
          }}
        >
          {/* Shine effect on ball */}
          <div 
            className="absolute top-1 left-1 w-2 h-2 rounded-full bg-white/40 blur-[1px]"
          />
        </motion.div>
      ))}
    </div>
  );
};
