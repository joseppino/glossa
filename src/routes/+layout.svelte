<script>
  import "purecss";
  import "$lib/global.css";
  import Menu from "$lib/components/Menu.svelte";
</script>

<main>
  <Menu />
  <slot></slot>
</main>