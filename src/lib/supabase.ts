import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

function createSupabaseClient() {
  if (!supabaseUrl || !supabaseAnonKey) {
    console.warn(
      "Supabase environment variables not configured. Using fallback data."
    );
    return null;
  }
  return createClient(supabaseUrl, supabaseAnonKey);
}

export const supabase = createSupabaseClient();
export const isSupabaseConfigured = !!(supabaseUrl && supabaseAnonKey);
