<script lang="ts">
  import '$styles';
  import { fade } from 'svelte/transition';

  import Header from '$lib/components/Header.svelte';

  import { theme } from '$lib/stores/theme';
  $: {
    document.documentElement.setAttribute('data-theme', $theme);
    document.documentElement.classList.value = $theme;
  }
</script>

{#await theme.load() then}
  <div
    class="bg-base-100 text-base-content h-screen flex flex-col overflow-y-auto overflow-x-hidden"
  >
    <Header />
    <main class="flex-1" in:fade={{ delay: 300, duration: 1000 }}>
      <slot />
    </main>
  </div>
{/await}
