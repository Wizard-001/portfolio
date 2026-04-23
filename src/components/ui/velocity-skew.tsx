"use client";
import React, { useRef } from "react";
import { motion, useScroll, useVelocity, useTransform, useSpring } from "framer-motion";

export const VelocitySkew = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  
  // Transform velocity into a skew angle. Range -5 to 5 degrees.
  const skew = useTransform(scrollVelocity, [-2000, 2000], [-5, 5]);
  
  // Smooth out the skew with a spring
  const smoothSkew = useSpring(skew, { damping: 50, stiffness: 400 });

  return (
    <motion.div
      style={{ skewY: smoothSkew }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
