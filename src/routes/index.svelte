<script lang="ts">
	import { invoke } from '@tauri-apps/api';
	import { fade } from 'svelte/transition';

	let message = '';

	async function call_tauri() {
		message = await invoke('called_from_js');
	}
</script>

<div class="flex flex-col gap-8 items-center font-bold my-12">
	<h3>This should be a video</h3>
	<!-- svelte-ignore a11y-media-has-caption -->
	<video src="testing/video.mp4" controls />
	<h3>This should be an audio</h3>
	<audio src="testing/audio.aac" controls />
	<h3>This should be an image</h3>
	<!-- svelte-ignore a11y-missing-attribute -->
	<img src="testing/image.jpg" />
</div>
