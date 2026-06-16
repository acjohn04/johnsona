<script lang="ts">
  import { theme, toggleTheme, getResolved, type Theme } from "$lib/theme";

  let currentTheme: Theme = $state("system");
  theme.subscribe((v) => (currentTheme = v));

  let resolved = $derived(getResolved(currentTheme));
  let mounted = $state(false);

  import { onMount } from "svelte";
  onMount(() => {
    mounted = true;
  });
</script>

{#if !mounted}
  <button class="c-theme-toggle-placeholder" aria-hidden="true"></button>
{:else}
  <button
    class="c-theme-toggle"
    onclick={toggleTheme}
    aria-label="Toggle Dark Mode"
  >
    <span
      class="material-symbols-outlined c-theme-toggle__icon"
      aria-hidden="true"
      >{resolved === "dark" ? "light_mode" : "dark_mode"}</span
    >
  </button>
{/if}

<style>
  .c-theme-toggle {
    background: transparent;
    border: 1px solid var(--color-outline-variant);
    color: var(--color-on-surface);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .c-theme-toggle:hover {
    background: var(--color-surface-container);
    border-color: var(--color-primary);
  }

  .c-theme-toggle__icon {
    margin-top: 8px; /* Optical adjustment for material symbols if needed, but line-height: 1 usually fixes it */
  }

  .c-theme-toggle-placeholder {
    width: 40px;
    height: 40px;
    background: transparent;
    border: none;
  }
</style>
