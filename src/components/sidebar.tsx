"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  BookOpen,
  MessageSquare,
  Settings,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
} from "lucide-react";

const navItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "courses", label: "Courses", icon: BookOpen },
  { id: "messages", label: "Messages", icon: MessageSquare },
  { id: "settings", label: "Settings", icon: Settings },
];

export function Sidebar() {
  const [active, setActive] = useState("dashboard");
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      {/* Desktop & Tablet Sidebar */}
      <nav
        className={`fixed left-0 top-0 z-30 hidden h-screen flex-col border-r border-white/5 bg-black/60 backdrop-blur-xl transition-all duration-300 md:flex ${
          collapsed ? "w-16" : "w-56"
        }`}
      >
        <div className="flex items-center gap-2 border-b border-white/5 px-4 py-5">
          <GraduationCap className="h-6 w-6 shrink-0 text-violet-400" />
          {!collapsed && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="font-semibold text-white"
            >
              LearnHub
            </motion.span>
          )}
        </div>

        <div className="flex flex-1 flex-col gap-1 px-2 py-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.id;

            return (
              <button
                key={item.id}
                onClick={() => setActive(item.id)}
                className="group relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors"
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-highlight"
                    className="absolute inset-0 rounded-lg bg-white/10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <Icon
                  className={`relative z-10 h-5 w-5 shrink-0 ${
                    isActive ? "text-violet-400" : "text-white/40 group-hover:text-white/70"
                  } transition-colors`}
                />
                {!collapsed && (
                  <span
                    className={`relative z-10 ${
                      isActive ? "text-white" : "text-white/50"
                    } transition-colors`}
                  >
                    {item.label}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="hidden border-t border-white/5 p-4 text-white/30 hover:text-white/60 transition-colors lg:block"
        >
          {collapsed ? <ChevronRight className="h-4 w-4 mx-auto" /> : <ChevronLeft className="h-4 w-4 mx-auto" />}
        </button>
      </nav>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-30 flex items-center justify-around border-t border-white/5 bg-black/80 backdrop-blur-xl md:hidden">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className="relative flex flex-col items-center gap-1 px-4 py-3"
            >
              {isActive && (
                <motion.div
                  layoutId="mobile-nav-highlight"
                  className="absolute inset-0 mx-2 rounded-lg bg-white/10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <Icon
                className={`relative z-10 h-5 w-5 ${
                  isActive ? "text-violet-400" : "text-white/40"
                }`}
              />
              <span
                className={`relative z-10 text-[10px] ${
                  isActive ? "text-white" : "text-white/40"
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>
    </>
  );
}
