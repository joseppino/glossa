import { supabase } from "$lib/supabaseClient";

export async function load() {

  const { data, error } = await supabase
    .from("questions")
    .select();
    // .select("phrase, keyword")
    // .eq("category_id", 2);
    console.log(data);
    
}