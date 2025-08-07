"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {
  Brain,
  Cpu,
  Zap,
  Bot,
  Cog,
  CircuitBoardIcon as Circuit,
} from "lucide-react";

export function AnimatedBackground() {
  const { theme } = useTheme();
  const icons = [Brain, Cpu, Zap, Bot, Cog, Circuit];

  const [positions, setPositions] = useState<{ x: number; y: number }[]>([]);

  useEffect(() => {
    // Only run in browser
    const newPositions = icons.map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
    }));
    setPositions(newPositions);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />

      {/* Animated Gradient Orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-1/2 -left-1/2 w-96 h-96 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-1/2 -right-1/2 w-80 h-80 bg-gradient-to-l from-accent/10 to-primary/10 rounded-full blur-3xl"
      />

      {/* Floating AI/Tech Icons */}
      {positions.length > 0 &&
        icons.map((Icon, index) => (
          <motion.div
            key={index}
            initial={{
              x: positions[index].x,
              y: positions[index].y,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              rotate: [0, 360],
            }}
            transition={{
              duration: 20 + index * 5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute opacity-5 dark:opacity-10"
          >
            <Icon className="w-8 h-8 text-primary" />
          </motion.div>
        ))}

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" />

      {/* Circuit Lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10 dark:opacity-20"
        viewBox="0 0 1000 1000"
      >
        <motion.path
          d="M0,500 Q250,300 500,500 T1000,500"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          className="text-primary"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.path
          d="M500,0 Q700,250 500,500 T500,1000"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          className="text-secondary"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }}
        />
      </svg>
    </div>
  );
}
