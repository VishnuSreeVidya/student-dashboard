import { Sidebar } from "@/components/sidebar";

function SkeletonTile({ className }: { className?: string }) {
  return (
    <div
      className={`rounded-2xl border border-white/5 bg-gray-900/50 p-5 ${className ?? ""}`}
    >
      <div className="skeleton-pulse h-4 w-24 rounded-md" />
      <div className="skeleton-pulse mt-3 h-3 w-full rounded-md" />
      <div className="skeleton-pulse mt-2 h-3 w-3/4 rounded-md" />
    </div>
  );
}

function SkeletonHero() {
  return (
    <div className="rounded-2xl border border-white/5 bg-gray-900/50 p-6 md:col-span-2 lg:col-span-2">
      <div className="skeleton-pulse h-8 w-64 rounded-md" />
      <div className="skeleton-pulse mt-3 h-4 w-40 rounded-md" />
      <div className="mt-6 flex gap-4">
        {Array.from({ length: 7 }).map((_, i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <div className="skeleton-pulse h-3 w-4 rounded" />
            <div className="skeleton-pulse h-2 w-5 rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Loading() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Sidebar />
      <main className="md:ml-56 lg:ml-56 transition-all duration-300">
        <div className="mx-auto max-w-7xl px-4 pt-4">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-4 pb-24 pt-4 md:grid-cols-2 md:pb-4 lg:grid-cols-3">
            <SkeletonHero />
            <SkeletonTile />
            <SkeletonTile />
            <SkeletonTile />
            <div className="rounded-2xl border border-white/5 bg-gray-900/50 p-5 md:col-span-2 lg:col-span-1">
              <div className="skeleton-pulse h-4 w-16 rounded-md" />
              <div className="skeleton-pulse mt-2 h-3 w-24 rounded-md" />
              <div className="mt-4 flex gap-0.5">
                {Array.from({ length: 20 }).map((_, wi) => (
                  <div key={wi} className="flex flex-col gap-0.5">
                    {Array.from({ length: 7 }).map((_, di) => (
                      <div
                        key={di}
                        className="skeleton-pulse h-2.5 w-2.5 rounded-sm"
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
