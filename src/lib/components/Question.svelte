<script lang="ts">
  import debounce from "$lib/scripts/debounce";

  let answerInputBox: HTMLInputElement;

  export let sentence: string;
  export let keyword: string;

  let answer: string;
  // -1 for incorrect; 0 for unset; 1 for correct
  let correctness: number = 0;

  function checkCorrectness() {
    if(keyword === answer) {
      answerInputBox.style.border = "1px solid green";
      return 1;
    } else if(answer.length === 0) {
      answerInputBox.style.border = "";
      return 0;
    } else {
      answerInputBox.style.border = "1px solid red";
      return 0;
    }
  }
</script>

<div>
  <form class="pure-form">
    <p>{sentence.replace(keyword, "_".repeat(keyword.length))}</p>
    <input class="pure-input" type="text" name="" id="" placeholder="Answer"
    bind:this={answerInputBox}
    bind:value={answer}
    on:change={debounce(checkCorrectness(), 1)}>
    <div class="button-row">
      <button class="pure-button" type="button">Skip</button>
      <button class="pure-button" type="button"
      on:click={() => {
        checkCorrectness()
      }
      }>Submit</button>
    </div>
</form>
</div>

<style></style>