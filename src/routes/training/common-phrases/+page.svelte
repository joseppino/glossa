<script lang="ts">
  import Question from "$lib/components/Question.svelte";

  export let data;

  let currentQIndex: number = 0;
  $: questions = data.questions;
  $: currentQuestion = questions[currentQIndex];
  let correctness: number;
  let correctCount, skippedCount, incorrectCount: number;

  let submitted: boolean = false;
  $: if(submitted) {
    submitted = false;
    if(currentQIndex < questions.length-1) {
      currentQIndex += 1;
    }
  }

  
</script>

<h2>Question {currentQIndex+1}/{questions.length}</h2>
<Question
  phrase={currentQuestion.phrase}
  keyword={currentQuestion.keyword}
  translation={currentQuestion.english_translation}
  bind:submitted={submitted}
  bind:correctness={correctness}
/>