"use client";

import { AlertTriangle, RefreshCw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0a0a0a]">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-500/10">
          <AlertTriangle className="h-8 w-8 text-red-400" />
        </div>
        <h2 className="text-xl font-semibold text-white">Something went wrong</h2>
        <p className="max-w-sm text-sm text-white/40">
          {error.message || "Failed to load dashboard data. Please try again."}
        </p>
        <button
          onClick={reset}
          className="flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm text-white transition-colors hover:bg-white/15"
        >
          <RefreshCw className="h-4 w-4" />
          Try again
        </button>
      </div>
    </div>
  );
}
