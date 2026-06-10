"use client";

import { motion } from "framer-motion";

interface ProgressBarProps {
  value: number;
}

export function ProgressBar({ value }: ProgressBarProps) {
  return (
    <div className="h-1.5 w-full rounded-full bg-white/10">
      <motion.div
        className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-400"
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      />
    </div>
  );
}
