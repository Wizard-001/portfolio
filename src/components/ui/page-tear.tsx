"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const PageTear = () => {
  const { scrollYProgress } = useScroll();
  
  // Controls the "tear" opening. At 0, it's closed. At 1, it's wide open.
  const scaleX = useTransform(scrollYProgress, [0.1, 0.3], [0, 1.5]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.25], [0, 1]);

  return (
    <div className="relative h-[200px] w-full overflow-hidden pointer-events-none z-50 -mt-20 -mb-20">
      <motion.div 
        style={{ scaleX, opacity }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <svg viewBox="0 0 1000 200" className="w-[120%] h-full fill-black">
          <path d="M0,0 L1000,0 L1000,200 L0,200 L30,190 L10,170 L50,150 L20,130 L60,110 L15,90 L55,70 L25,50 L45,30 L0,0 Z" />
          <path d="M1000,0 L0,0 L0,200 L1000,200 L970,192 L990,175 L950,158 L980,140 L940,122 L985,105 L945,88 L975,70 L955,52 L1000,0 Z" />
        </svg>
      </motion.div>
    </div>
  );
};
