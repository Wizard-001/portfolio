"use client";
import React, { useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Cpu, BrainCircuit, Binary, Zap, Code, Database, Globe } from "lucide-react";

const icons = [Cpu, BrainCircuit, Binary, Zap, Code, Database, Globe];

export const BackgroundDebris = () => {
  const { scrollYProgress } = useScroll();

  const debris = useMemo(() => {
    return Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      Icon: icons[Math.floor(Math.random() * icons.length)],
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 400}%`, // Spread across multiple "pages"
      size: Math.random() * 20 + 10,
      speed: Math.random() * 1000 + 500,
      rotation: Math.random() * 360,
      opacity: Math.random() * 0.2 + 0.05,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {debris.map((item) => (
        <DebrisItem key={item.id} {...item} scrollYProgress={scrollYProgress} />
      ))}
    </div>
  );
};

const DebrisItem = ({ Icon, left, top, size, speed, rotation, opacity, scrollYProgress }: any) => {
  const y = useTransform(scrollYProgress, [0, 1], [0, speed]);
  const rotate = useTransform(scrollYProgress, [0, 1], [rotation, rotation + 360]);
  
  // Add blur for depth of field based on speed (simulating distance)
  const blur = speed > 1200 ? "blur(4px)" : speed < 700 ? "blur(1px)" : "none";

  return (
    <motion.div
      style={{
        position: "absolute",
        left,
        top,
        y,
        rotate,
        opacity,
        filter: blur,
      }}
      className="text-white"
    >
      <Icon size={size} strokeWidth={1} />
    </motion.div>
  );
};
