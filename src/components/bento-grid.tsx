"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 24,
    },
  },
};

interface BentoGridProps {
  children: React.ReactNode;
}

export function BentoGrid({ children }: BentoGridProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-4 pb-24 pt-4 md:grid-cols-2 md:pb-4 lg:grid-cols-3"
    >
      {children}
    </motion.div>
  );
}
