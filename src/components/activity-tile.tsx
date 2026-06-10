"use client";

import { motion } from "framer-motion";
import { itemVariants } from "./bento-grid";

function generateContributions() {
  const weeks = 20;
  const days = 7;
  const data: number[][] = [];

  for (let w = 0; w < weeks; w++) {
    const week: number[] = [];
    for (let d = 0; d < days; d++) {
      week.push(Math.random());
    }
    data.push(week);
  }

  return data;
}

function getIntensity(value: number): string {
  if (value < 0.2) return "bg-white/5";
  if (value < 0.4) return "bg-violet-500/20";
  if (value < 0.6) return "bg-violet-500/40";
  if (value < 0.8) return "bg-violet-500/60";
  return "bg-violet-400/80";
}

export function ActivityTile() {
  const contributions = generateContributions();

  return (
    <motion.section
      variants={itemVariants}
      whileHover={{
        scale: 1.01,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
      className="group relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-gray-900 via-zinc-900 to-black p-5 md:col-span-2 lg:col-span-1"
    >
      <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 blur-xl" />
      </div>

      <div className="relative z-10">
        <h3 className="text-sm font-medium text-white">Activity</h3>
        <p className="mt-0.5 text-xs text-white/40">Last 20 weeks</p>

        <div className="mt-4 flex gap-0.5">
          {contributions.map((week, wi) => (
            <div key={wi} className="flex flex-col gap-0.5">
              {week.map((day, di) => (
                <motion.div
                  key={`${wi}-${di}`}
                  className={`h-2.5 w-2.5 rounded-sm ${getIntensity(day)}`}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + (wi + di) * 0.003, duration: 0.2 }}
                />
              ))}
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center gap-1.5 text-xs text-white/30">
          <span>Less</span>
          <div className="h-2.5 w-2.5 rounded-sm bg-white/5" />
          <div className="h-2.5 w-2.5 rounded-sm bg-violet-500/20" />
          <div className="h-2.5 w-2.5 rounded-sm bg-violet-500/40" />
          <div className="h-2.5 w-2.5 rounded-sm bg-violet-500/60" />
          <div className="h-2.5 w-2.5 rounded-sm bg-violet-400/80" />
          <span>More</span>
        </div>
      </div>
    </motion.section>
  );
}
