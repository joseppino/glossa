import { supabase } from "$lib/supabaseClient";

export async function load() {

  const { data, error } = await supabase
    .from("questions")
    .select("phrase, keyword, english_translation")
    .eq("category_id", 2);
  return {
    questions: data  ?? []
  };
}
