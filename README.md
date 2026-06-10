# LearnHub — Student Dashboard

A futuristic, animated student dashboard built for a frontend engineering challenge. Fetches live course data from Supabase and renders it in a Bento Grid layout with hardware-accelerated Framer Motion animations.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Database:** Supabase (PostgreSQL)
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React

## Getting Started

1. Clone the repo and install dependencies:
   ```bash
   npm install
   ```

2. Copy the environment template and fill in your Supabase credentials:
   ```bash
   cp .env.example .env.local
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

## Supabase Setup

1. Create a free project at [supabase.com](https://supabase.com).
2. In the SQL Editor, run:
   ```sql
   CREATE TABLE courses (
     id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
     title TEXT NOT NULL,
     progress INTEGER NOT NULL DEFAULT 0,
     icon_name TEXT NOT NULL DEFAULT 'bookopen',
     created_at TIMESTAMPTZ DEFAULT now()
   );

   INSERT INTO courses (title, progress, icon_name) VALUES
     ('Advanced React Patterns', 75, 'code'),
     ('Machine Learning Fundamentals', 42, 'brain'),
     ('System Design Interview Prep', 60, 'database'),
     ('Rust Programming', 28, 'atom');
   ```
3. Copy your project URL and anon key from the Supabase dashboard **Settings → API** into `.env.local`.

> **Note:** The app ships with fallback hardcoded data so you can preview the UI without configuring Supabase.

## Architecture

### Server/Client Component Split

- **Server Components** — `page.tsx` is an async server component that fetches courses from Supabase via the server-side Supabase client (`@supabase/supabase-js`). No API route needed; data flows directly from Postgres to the page.
- **Client Components** — All visual tiles (`HeroTile`, `CourseTile`, `ActivityTile`), the `Sidebar`, and the `BentoGrid` wrapper are `"use client"` because they use Framer Motion hooks and respond to user interaction.
- **Why this split?** The inherently static data-fetching work stays on the server (no client-side waterfall, no anon key exposure to the browser). Animations and interactivity live only where they're needed, keeping the JS bundle lean.

### Data Flow

```
Supabase → page.tsx (Server Component) → BentoGrid (Client) → Tile Components
```

The page calls `supabase.from('courses').select('*')`, passes the result as props to the client tree, and Suspense boundaries can be added around individual sections without breaking the server/client boundary.

### Animations

All animations use **`transform` and `opacity` only** — zero layout shifts:
- **Staggered entrance:** Tiles fade in and translate upward sequentially via Framer Motion's `staggerChildren`.
- **Card hover:** `scale: 1.02` with spring physics (`stiffness: 300`, `damping: 20`). A border glow appears via CSS opacity transitions.
- **Sidebar highlight:** The active nav indicator snaps between items using Framer Motion's `layoutId`.
- **Progress bars:** Animate from 0 → actual value on mount.

### Responsive Design

| Breakpoint | Sidebar | Grid |
|---|---|---|
| >1024px | Full-width (w-56) | 3 columns |
| 768–1024px | Icon-only (w-16) | 2 columns |
| <768px | Bottom navigation bar | 1 column |

## Challenges Faced

- **Tailwind v4 API:** The new `@theme inline` syntax and removal of `@tailwind` directives required adjusting the CSS setup.
- **Supabase SSR vs basic client:** The `@supabase/ssr` package expects cookies and middleware for server rendering; since this is a simple dashboard with public anon-key access, `@supabase/supabase-js` sufficed, with the client created only on the server.
- **TypeScript with Supabase responses:** Casting the raw Postgres rows to the `Course` type required explicit typing since the generic `SupabaseClient` wasn't parameterized with a schema.

## Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)
