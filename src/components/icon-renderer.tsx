"use client";

import {
  BookOpen,
  Code,
  Brain,
  Globe,
  Database,
  BarChart3,
  Atom,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  bookopen: BookOpen,
  code: Code,
  brain: Brain,
  globe: Globe,
  database: Database,
  barchart3: BarChart3,
  atom: Atom,
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name.toLowerCase()] ?? BookOpen;
}
