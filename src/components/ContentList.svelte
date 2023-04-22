<script lang="ts" setup>
	import type { contentListEntry } from "../types";
	import { onMount } from "svelte";
	import ContentListEntry from "./ContentListEntry.svelte";
	import ContentListButtons from "./ContentListButtons.svelte";

	export let title = "";
	export let displayTitle = true;
	export let displayImages = true;
	export let entries: contentListEntry[] = [];

	//carousel navigation
	let index = 0;
	let width: number;
	let extraLeft = false;
	let extraRight = false;
	let buttons = false;
	let errorLeft = false;
	let errorRight = false;

	onMount(() => {
		if (width >= 1024) {
			if (entries.length == 2) {
				index = 1;
				extraLeft = true;
				buttons = false;
				return;
			}
			if (entries.length >= 3) {
				index = 1;
				extraLeft = true;
				extraRight = true;
				if (entries.length > 3) {
					buttons = true;
				} else {
					buttons = false;
				}
				return;
			}
		} else {
			extraLeft = false;
			extraRight = false;
			buttons = true;
		}
	});

	function listResize() {
		if (width >= 1024) {
			if (entries.length == 2) {
				index = 1;
				extraLeft = true;
				buttons = false;
				return;
			}
			if (entries.length >= 3) {
				if (index == entries.length - 1) index -= 1;
				if (index == 0) index += 1;

				extraLeft = true;
				extraRight = true;
				if (entries.length > 3) buttons = true;
				return;
			}
		} else {
			extraLeft = false;
			extraRight = false;
			buttons = true;
		}
	}

	function buttonInteraction(event: CustomEvent<{ leftButton: boolean }>) {
		if (!event.detail.leftButton) {
			let newIndex = index + 1;

			if (width >= 1024) {
				if (newIndex + 1 > entries.length - 1) {
					errorRight = true;
					setTimeout(() => {
						errorRight = false;
					}, 350);
					return;
				}

				index = newIndex;

				return;
			}

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

			if (width >= 1024) {
				if (newIndex - 1 < 0) {
					errorLeft = true;
					setTimeout(() => {
						errorLeft = false;
					}, 350);
					return;
				}

				index = newIndex;

				return;
			}

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

<svelte:window bind:innerWidth={width} on:resize={() => listResize()} />

<div>
	{#if displayTitle}
		<h3 class="text-center text-3xl underline mb-4 font-bold">
			{title}
		</h3>
	{/if}

	<ul
		class="lg:text-center select-none flex justify-center"
		draggable="false"
	>
		{#if extraLeft}
			{#each [entries[index - 1]] as item (index)}
				{#key index}
					<li class="my-4 mx-2 inline-block">
						<ContentListEntry
							title={item.title}
							description={item.description}
							image={item.image}
							displayImage={displayImages}
							link={item.link}
							target={item.target}
						/>
					</li>
				{/key}
			{/each}
		{/if}

		{#each [entries[index]] as item (index)}
			{#key index}
				<li class="my-4 mx-2 inline-block">
					<ContentListEntry
						title={item.title}
						description={item.description}
						image={item.image}
						displayImage={displayImages}
						link={item.link}
						target={item.target}
					/>
				</li>
			{/key}
		{/each}

		{#if extraRight}
			{#each [entries[index + 1]] as item (index)}
				{#key index}
					<li class="my-4 mx-2 inline-block">
						<ContentListEntry
							title={item.title}
							description={item.description}
							image={item.image}
							displayImage={displayImages}
							link={item.link}
							target={item.target}
						/>
					</li>
				{/key}
			{/each}
		{/if}
	</ul>

	{#if buttons}
		<ContentListButtons
			{errorLeft}
			{errorRight}
			on:clicked={buttonInteraction}
		/>
	{/if}
</div>
