"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export const LensFlare = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  
  // Follow the scroll - moves from top right to bottom left roughly
  const x = useTransform(scrollYProgress, [0, 1], ["80%", "20%"]);
  const y = useTransform(scrollYProgress, [0, 1], ["10%", "90%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [0, 0.4, 0.2, 0.4, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

  const smoothX = useSpring(x, { damping: 20, stiffness: 100 });
  const smoothY = useSpring(y, { damping: 20, stiffness: 100 });

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-[60] overflow-hidden">
      <motion.div
        style={{
          left: smoothX,
          top: smoothY,
          opacity,
          scale,
        }}
        className="absolute w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2"
      >
        {/* Main Glow */}
        <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-[120px]" />
        
        {/* Core Flare */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white/40 rounded-full blur-sm" />
        
        {/* Cinematic Rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-blue-400/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-[40%] -translate-y-1/2 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-[150%] -translate-y-[80%] w-24 h-24 bg-blue-400/5 rounded-full blur-3xl opacity-50" />
      </motion.div>
    </div>
  );
};
