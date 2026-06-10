"use client";

import { motion } from "framer-motion";
import { itemVariants } from "./bento-grid";
import { ProgressBar } from "./progress-bar";
import { getIcon } from "./icon-renderer";
import type { Course } from "@/types";

interface CourseTileProps {
  course: Course;
}

export function CourseTile({ course }: CourseTileProps) {
  const Icon = getIcon(course.icon_name);

  return (
    <motion.article
      variants={itemVariants}
      whileHover={{
        scale: 1.02,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
      className="group relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-gray-900 via-zinc-900 to-black p-5"
    >
      <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 blur-xl" />
      </div>

      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-violet-500/10 to-cyan-500/5 blur-2xl" />

      <div className="relative z-10">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5">
          <Icon className="h-5 w-5 text-violet-400" />
        </div>

        <h3 className="mt-4 text-sm font-medium text-white">{course.title}</h3>

        <div className="mt-4">
          <div className="mb-1.5 flex items-center justify-between text-xs">
            <span className="text-white/40">Progress</span>
            <span className="text-white/60">{course.progress}%</span>
          </div>
          <ProgressBar value={course.progress} />
        </div>
      </div>
    </motion.article>
  );
}
