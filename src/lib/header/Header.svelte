<script lang="ts">
	import ThemeToggleIcon from '$lib/header/ThemeToggleIcon.svelte';
	import { theme } from '$lib/stores/theme';
</script>

<!-- data-tauri-drag-region` enables window dragging -->
<div
	data-tauri-drag-region
	class="h-12 shadow-2xl bg-base-100 items-center flex"
>
	<button
		on:click={theme.toggleTheme}
		class="hover:text-secondary ml-2"
		aria-live="polite"
	>
		<ThemeToggleIcon cssClass={'w-8'} />
	</button>
</div>
