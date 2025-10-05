import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FallingBalls } from "./FallingBalls";
import { Machine } from "./Machine";
import { TransformationEffect } from "./TransformationEffect";
import { FinalLogo } from "./FinalLogo";

type AnimationPhase = "falling" | "processing" | "transforming" | "revealed";

export const LogoAnimation = () => {
  const [phase, setPhase] = useState<AnimationPhase>("falling");
  const [loopCount, setLoopCount] = useState(0);

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];

    // Phase progression timeline
    timers.push(setTimeout(() => setPhase("processing"), 500));
    timers.push(setTimeout(() => setPhase("transforming"), 1500));
    timers.push(setTimeout(() => setPhase("revealed"), 2300));
    
    // Loop back to start
    timers.push(setTimeout(() => {
      setPhase("falling");
      setLoopCount(prev => prev + 1);
    }, 3800));

    return () => timers.forEach(timer => clearTimeout(timer));
  }, [loopCount]);

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Ambient glow background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
      
      {/* Main animation container */}
      <div className="relative w-full max-w-2xl h-[600px] flex items-center justify-center">
        <AnimatePresence mode="sync">
          {phase === "falling" && (
            <FallingBalls key={`falling-${loopCount}`} />
          )}
        </AnimatePresence>

        {/* Machine - always visible but changes state */}
        <Machine 
          isProcessing={phase === "processing"} 
          isTransforming={phase === "transforming"}
        />

        {/* Transformation effects */}
        {phase === "transforming" && (
          <TransformationEffect key={`transform-${loopCount}`} />
        )}

        {/* Final logo reveal */}
        {phase === "revealed" && (
          <FinalLogo key={`logo-${loopCount}`} />
        )}
      </div>

      {/* Phase indicator (optional - can be removed for production) */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground text-sm font-mono"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
      >
        Phase: {phase}
      </motion.div>
    </div>
  );
};
