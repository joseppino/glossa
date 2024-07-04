<script lang="ts">
  import debounce from "$lib/scripts/debounce";
  import "$lib/styles/question.css";

  let questionForm: HTMLFormElement;
  let answerInputBox: HTMLInputElement;

  export let sentence: string;
  export let keyword: string;

  let answer: string;

  function checkCorrectness() {
    // -1 for incorrect; 0 for unset; 1 for correct
    if(keyword === answer) {
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
</script>

<div>
  <form class="pure-form" bind:this={questionForm}>
    <p>{sentence.replace(keyword, "_".repeat(keyword.length))}</p>
    <input class="pure-input" type="text" name="" placeholder="Answer"
    bind:this={answerInputBox}
    bind:value={answer}
    on:input={debounce(checkCorrectness, 500)}>
    <div class="button-row">
      <button class="pure-button" type="button">Skip</button>
      <button class="pure-button" type="button"
        on:click={() => {
          checkCorrectness();
        }
      }>Submit</button>
    </div>
</form>
</div>

<style>
  .button-row {
    margin-top: 10px;
  }
</style>