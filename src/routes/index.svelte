<script lang="ts">
	import { theme } from '$lib/stores/theme';
	import { invoke } from '@tauri-apps/api';
	import { fade } from 'svelte/transition';
	import audioFile from '../out.mp3';

	let message = '';

	async function call_tauri() {
		message = await invoke('called_from_js');
	}
</script>

<div class="flex flex-col gap-8 items-center font-bold">
	<h1 class="text-4xl mt-16">Welcome</h1>
	<h2 class="text-xl">
		This is a <span class="bg-secondary rounded-md p-1">Svelte-Kit Tauri</span> Template
	</h2>

	<button
		on:click={call_tauri}
		class=" font-extrabold btn btn-outline btn-secondary btn-md"
		>Call Tauri</button
	>
	{#key message}
		<div class="border-b-2 border-secondary outline-secondary text-2xl" in:fade>
			{message}
		</div>
	{/key}
	<audio src={audioFile} controls />
	<audio src={'out.aac'} controls />
	<audio src={'out.mp3'} controls />
</div>
