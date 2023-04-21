<script lang="ts">
	import { base } from "$app/paths";
	import { onMount } from "svelte";

	//banner variables
	export let title = "";
	export let description = "";

	//set banner height
	let bannerElement: HTMLElement;
	let descriptionElement: HTMLElement;

	onMount(() => setBannerHeight());

	function setBannerHeight() {
		const height =
			window.innerHeight - 56 - descriptionElement.clientHeight - 32;
		bannerElement.style.height = `${height}px`;
	}
</script>

<svelte:window on:resize={setBannerHeight} />

<div
	bind:this={bannerElement}
	class="banner mt-14 flex justify-center items-center bg-cover bg-no-repeat bg-center"
	style="background-image: url({base}/images/banner.webp);"
>	
	<h1 class="text-center text-4xl font-bold md:text-5xl lg:text-6xl absolute z-20">
		{title}
	</h1>
</div>

<div bind:this={descriptionElement}>
	<hr />
	<p class="mx-5 text-center md:w-1/2 md:mx-auto xl:w-1/3 2xl:w-1/4">
		{description}
	</p>
	<hr />
</div>
