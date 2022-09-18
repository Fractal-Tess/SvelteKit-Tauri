<script lang="ts">
  import { invoke } from '@tauri-apps/api';

  let hashInput = 'Hello world';
  let hashOutput = '';
  $: (async () => {
    hashOutput = await invoke('hash256sum', { hashInput });
  })();
</script>

<div class="form-control">
  <label class="input-group">
    <span>Hash string</span>
    <input
      bind:value={hashInput}
      type="text"
      class="input input-bordered input-primary focus:ring-primary focus:border-primary focus:outline-none"
    />
  </label>
</div>
<span class="text-center text-md">{hashOutput}</span>
