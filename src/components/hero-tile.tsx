"use client";

import { motion } from "framer-motion";
import { Flame } from "lucide-react";
import { itemVariants } from "./bento-grid";

export function HeroTile() {
  return (
    <motion.section
      variants={itemVariants}
      whileHover={{
        scale: 1.01,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
      className="group relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-gray-900 via-zinc-900 to-black p-6 md:col-span-2 lg:col-span-2"
    >
      <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 blur-xl" />
      </div>

      <div className="relative z-10">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white md:text-3xl">
              Welcome back, Alex
            </h1>
            <p className="mt-1 text-sm text-white/40">
              Ready to continue your learning journey?
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-xl border border-amber-500/20 bg-amber-500/10 px-3 py-2">
            <Flame className="h-5 w-5 text-amber-400" />
            <span className="text-sm font-medium text-amber-400">5-day streak</span>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-4">
          {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => (
            <div key={`${day}-${i}`} className="flex flex-col items-center gap-1">
              <span className="text-xs text-white/30">{day}</span>
              <div
                className={`h-2 w-full rounded-full ${
                  i < 5
                    ? "bg-gradient-to-r from-violet-500 to-cyan-400"
                    : "bg-white/5"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
