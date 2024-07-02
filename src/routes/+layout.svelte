<script>
  import "purecss";
  import "$lib/global.css";
  import Menu from "$lib/components/Menu.svelte";
</script>

<main>
  <Menu />
  <slot></slot>
</main>

<style>
  main {
    box-shadow: 3px 1px 2px black;
  }
</style>