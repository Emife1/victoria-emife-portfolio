import { supabase } from "./client";

export async function initCMS() {
  // safe runtime check (no SQL execution required)
  const { error } = await supabase.from("projects").select("*").limit(1);

  if (error) {
    console.log("CMS not initialized yet — using fallback mode");
  }

  return true;
}
