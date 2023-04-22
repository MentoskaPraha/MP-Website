<script lang="ts">
	import { fade } from "svelte/transition";

	export let title = "";
	export let image = "";
	export let description = "";
	export let target = "_blank";
	export let link = "none";
	export let displayImage = true;
</script>

{#if link != "none"}
	<a
		class="block w-72 border-neutral-700 border-solid border-4 rounded-md hover:opacity-50 transition-opacity"
		href={link}
		{target}
		rel="noreferrer"
		draggable="false"
		in:fade={{ delay: 0, duration: 500 }}
	>
		{#if displayImage}
			<img
				class="h-72 w-72 bg-white border-neutral-700 border-solid border-4 mb-3"
				src={image}
				alt="Representation of entry in content list."
				draggable="false"
			/>
		{/if}
		<section
			class="p-2 border-neutral-700 border-solid border-4 bg-black text-center h-32 overflow-hidden"
			draggable="false"
		>
			<h4 class="mb-1 text-xl font-bold">
				{title}
			</h4>
			<p class="line-clamp-3">{description}</p>
		</section>
	</a>
{:else}
	<div
		class="block w-72 mx-auto border-neutral-700 border-solid border-4 rounded-md"
		draggable="false"
		in:fade={{ delay: 0, duration: 500 }}
	>
		{#if displayImage}
			<img
				class="h-72 w-72 bg-white border-neutral-700 border-solid border-4 mb-3"
				src={image}
				alt="Representation of entry in content list."
			/>
		{/if}
		<section
			class="p-2 border-neutral-700 border-solid border-4 bg-black text-center h-32 overflow-hidden"
		>
			<h4 class="mb-1 text-xl font-bold">
				{title}
			</h4>
			<p class="line-clamp-3">{description}</p>
		</section>
	</div>
{/if}
