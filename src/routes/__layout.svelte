<script>
	import '$styles/app.scss';
	import { theme } from '$lib/stores/theme';
	import Header from '$lib/header/Header.svelte';
	import Footer from '$lib/footer/Footer.svelte';
</script>

{#await theme.load() then}
	<div
		data-theme={$theme}
		class="{$theme} bg-base-100 text-base-content h-screen w-screen overflow-hidden flex flex-col "
	>
		<header>
			<Header />
		</header>
		<main class="flex-1 shadow-lg">
			<slot />
		</main>
		<footer>
			<Footer />
		</footer>
	</div>
{/await}
