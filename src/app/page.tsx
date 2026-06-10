import { supabase, isSupabaseConfigured } from "@/lib/supabase";
import type { Course } from "@/types";
import { Sidebar } from "@/components/sidebar";
import { BentoGrid } from "@/components/bento-grid";
import { HeroTile } from "@/components/hero-tile";
import { CourseTile } from "@/components/course-tile";
import { ActivityTile } from "@/components/activity-tile";

export const dynamic = "force-dynamic";

async function getCourses(): Promise<Course[]> {
  if (!isSupabaseConfigured || !supabase) {
    console.info("Supabase not configured. Using fallback data.");
    return getFallbackCourses();
  }

  try {
    const { data, error } = await supabase
      .from("courses")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Supabase fetch error:", error.message);
      return getFallbackCourses();
    }

    return (data as Course[]) ?? getFallbackCourses();
  } catch (err) {
    console.error("Failed to fetch courses:", err);
    return getFallbackCourses();
  }
}

function getFallbackCourses(): Course[] {
  return [
    {
      id: "fallback-1",
      title: "Advanced React Patterns",
      progress: 75,
      icon_name: "code",
      created_at: new Date().toISOString(),
    },
    {
      id: "fallback-2",
      title: "Machine Learning Fundamentals",
      progress: 42,
      icon_name: "brain",
      created_at: new Date().toISOString(),
    },
    {
      id: "fallback-3",
      title: "System Design Interview Prep",
      progress: 60,
      icon_name: "database",
      created_at: new Date().toISOString(),
    },
  ];
}

export default async function DashboardPage() {
  const courses = await getCourses();

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Sidebar />

      <main className="md:ml-56 lg:ml-56 transition-all duration-300">
        <div className="mx-auto max-w-7xl px-4 pt-4">
          <BentoGrid>
            <HeroTile />

            {courses.map((course) => (
              <CourseTile key={course.id} course={course} />
            ))}

            <ActivityTile />
          </BentoGrid>
        </div>
      </main>
    </div>
  );
}
