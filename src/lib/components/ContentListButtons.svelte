<script lang="ts">
	import { base } from "$app/paths";
	import { createEventDispatcher } from "svelte";

	export let errorLeft = false;
	export let errorRight = false;
	const event = createEventDispatcher<{ clicked: { leftButton: boolean } }>();

	function leftClicked() {
		event("clicked", { leftButton: true });
	}

	function rightClicked() {
		event("clicked", { leftButton: false });
	}
</script>

<div class="flex place-content-center m-4">
	<button
		class="m-4 w-16 h-16 bg-white rounded-full hover:opacity-50 transition-all"
		name="Previous entry."
		on:click={leftClicked}
	>
		<img
			class="w-16 h-16 rounded-full {errorLeft ? 'bg-red-600' : ''}"
			src="{base}/images/arrow-left.svg"
			alt="Left arrow."
		/>
	</button>
	<button
		class="m-4 w-16 h-16 bg-white rounded-full hover:opacity-50 transition-all"
		name="Next entry"
		on:click={rightClicked}
	>
		<img
			class="w-16 h-16 rounded-full {errorRight ? 'bg-red-600' : ''}"
			src="{base}/images/arrow-right.svg"
			alt="Left arrow."
		/>
	</button>
</div>
