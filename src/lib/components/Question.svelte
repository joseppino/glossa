<script lang="ts">
  import debounce from "$lib/scripts/debounce";
  import capitaliseFirstLetter from "$lib/scripts/capitaliseFirstLetter";
  import "$lib/styles/question.css";
  import { onMount } from "svelte";

  let questionForm: HTMLFormElement;
  let answerInputBox: HTMLInputElement;

  export let phrase: string;
  export let keyword: string;
  export let translation: string;
  export let submitted: boolean = false;
  export let correctCount: number;

  // -1 for incorrect; 0 for unset; 1 for correct
  export let correctness: number;

  let answer: string;
  let utterance: SpeechSynthesisUtterance;

  onMount(() => {
    // preemptively instantiate utterance object for better efficiency
    utterance = new SpeechSynthesisUtterance();
    // focus on input box
    answerInputBox.focus();
  })

  function redactAndFormatPhrase(p: string, k: string) {
    return capitaliseFirstLetter(p.toLowerCase().replace(keyword.toLowerCase(), "_".repeat(keyword.length)))
  }

  function checkCorrectness() {
    if(keyword.toLowerCase() === answer.toLowerCase()) {
      answerInputBox.classList.remove("input-incorrect");
      answerInputBox.classList.add("input-correct");
      return 1;
    } else if(answer.length === 0) {
      answerInputBox.classList.remove("input-incorrect");
      answerInputBox.classList.remove("input-correct");
      return 0;
    } else {
      answerInputBox.classList.remove("input-correct");
      answerInputBox.classList.add("input-incorrect");
      return -1;
    }
  }

  function resetInputBox() {
    answerInputBox.value = "";
    answerInputBox.classList.remove("input-incorrect");
    answerInputBox.classList.remove("input-correct");
  }

  function utterSpeech(text: string) {
    utterance.text = text;
    utterance.lang = "IT";
    window.speechSynthesis.speak(utterance);
  }
  
  async function handleSubmit() {
    if(answerInputBox.value.length > 0) {
      correctness = checkCorrectness();
      if(correctness === 1 || correctness === -1) {
        if(navigator.userAgent.includes("Chrome")) {
          utterSpeech(phrase);
        }
      }
      if(correctness === 1) { // if correct
        correctCount += 1;
      }
      submitted = true;
      resetInputBox();
    } else {
      answerInputBox.classList.remove("input-correct");
      answerInputBox.classList.add("input-incorrect");
    }
  }
</script>

<div>
  <form class="pure-form" bind:this={questionForm}>
    <p>{redactAndFormatPhrase(phrase, keyword)}</p>
    <p class="translation">{translation}</p>
    <input class="pure-input" type="text" name="" placeholder="Answer"
    bind:this={answerInputBox}
    bind:value={answer}
    on:input={debounce(checkCorrectness, 300)}>
    <div class="button-row">
      <button id="btn-skip" class="pure-button" type="button"
      on:click={() => {
        submitted = true;
        resetInputBox();
      }}>Skip</button>
      <button id="btn-submit" class="pure-button" type="button"
        on:click={handleSubmit}>Submit</button>
    </div>
</form>
</div>

<style>
  .button-row {
    margin-top: 10px;
  }

  .translation {
    font-size: smaller;
    font-style: italic;
  }
</style>