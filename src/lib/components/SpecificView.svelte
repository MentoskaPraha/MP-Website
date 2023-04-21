<script lang="ts" setup>
	import type { specificViewEntry } from "$lib/assets/types";
	import { fade } from "svelte/transition";
	import ContentBlock from "./ContentBlock.svelte";
	import ContentListButtons from "./ContentListButtons.svelte";
	import { base } from "$app/paths";

	export let title = "Specific View";
	export let entries: specificViewEntry[] = [];

	//carousel navigation
	let index = 0;
	let width: number;
	let errorLeft = false;
	let errorRight = false;

	function buttonInteraction(event: CustomEvent<{ leftButton: boolean }>) {
		if (!event.detail.leftButton) {
			let newIndex = index + 1;

			if (newIndex > entries.length - 1) {
				errorRight = true;
				setTimeout(() => {
					errorRight = false;
				}, 350);
				return;
			}

			index = newIndex;
			return;
		} else {
			let newIndex = index - 1;

			if (newIndex < 0) {
				errorLeft = true;
				setTimeout(() => {
					errorLeft = false;
				}, 350);
				return;
			}

			index = newIndex;
			return;
		}
	}
</script>

<svelte:window bind:innerWidth={width} />

<div>
	<h2 class="text-center text-3xl underline mb-4 font-bold">
		{title}
	</h2>
	<div class="lg:flex lg:place-content-center">
		<div class="mx-4 lg:w-72">
			{#each [entries[index]] as item (index)}
				{#key index}
					<div
						class="block w-72 mx-auto border-neutral-700 border-solid border-4 rounded-md"
						draggable="false"
						in:fade={{ delay: 0, duration: 500 }}
					>
						<img
							class="h-72 w-72 bg-white border-neutral-700 border-solid border-4 mb-3"
							src="{base}{item.image}"
							alt="Representation of entry in content list."
						/>
						<section
							class="p-2 border-neutral-700 border-solid border-4 bg-black text-center h-32 overflow-hidden"
						>
							<h3 class="mb-1 text-xl font-bold">
								{item.title}
							</h3>
							<p class="line-clamp-3">{item.description}</p>
						</section>
					</div>
				{/key}
			{/each}

			<ContentListButtons
				{errorLeft}
				{errorRight}
				on:clicked={buttonInteraction}
			/>
		</div>

		<div>
			{#each [entries[index]] as item (index)}
				{#key index}
					<div in:fade={{ delay: 0, duration: 500 }}>
						<ContentBlock
							title={item.title}
							description={item.description}
							image={item.image}
							links={item.links}
							git={item.git}
							external={item.external}
						/>
					</div>
				{/key}
			{/each}
		</div>
	</div>
</div>
