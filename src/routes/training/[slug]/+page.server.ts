import type { PageServerLoad } from './$types';
import { supabase } from "$lib/supabaseClient";
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
  let questionSet: any[];
  switch(params.slug) {
    case "random": {
      questionSet = await fetchRandomSet();
      break;
    }
    default: error(404);
  }
	return {
		questions: questionSet ?? []
	};
};

async function fetchRandomSet() {
  const { data, error } = await supabase
    .from("random_questions")
    .select("*")
    .limit(20);
  if(!error) {
    return data;
  } else {
    throw new Error(error.code);
  }
}