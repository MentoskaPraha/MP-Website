<script lang="ts">
	import { onMount } from "svelte";
	import { siteInfo } from "$config";
	import { fly, fade } from "svelte/transition";
	import { bounceOut } from "svelte/easing";

	//set banner variables
	let bannerElement: HTMLElement;
	let bannerTitle = siteInfo.baseTitle;
	let oldHeight: number;
	let showArrow = false;

	onMount(() => {
		//set banner height
		bannerElement.style.height = `${window.innerHeight - 68}px`;
		oldHeight = window.innerHeight;

		/**
		 * The following code was adapted from https://codepen.io/Hyperplexed/pen/rNrJgrd.
		 * The code was changed to Svelte tooling. Thanks to Hyperplexed for the code :)
		 */
		//run hacker effect
		const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		const titleText = bannerTitle;
		let iteration = 0;

		let interval = setInterval(() => {
			bannerTitle = bannerTitle
				.split("")
				.map((letter, index) => {
					if (index < iteration) return titleText[index];

					if (titleText[index] == " ") return " ";

					return letters[Math.floor(Math.random() * 26)];
				})
				.join("");

			if (iteration >= titleText.length) clearInterval(interval);

			if (bannerTitle == titleText) showArrow = true;

			iteration += 1 / 3;
		}, 50);
	});

	//set banner height
	function updateBannerHeight() {
		if (window.innerHeight == oldHeight) return;

		bannerElement.style.height = `${window.innerHeight - 68}px`;
		oldHeight = window.innerHeight;
	}

	//make scroll button appear/disappear
	function updateScrollButton(){
		if(window.scrollY > 50){
			showArrow = false;
		} else {
			showArrow = true;
		}
	}
</script>

<svelte:window on:scroll={updateScrollButton} on:resize={updateBannerHeight} />

<div
	bind:this={bannerElement}
	class="banner mt-17 flex justify-center items-center bg-cover bg-no-repeat bg-center"
	style="background-image: url(/images//banners/main.webp); height: 500px"
>
	<h1
		class="text-center text-4xl font-bold md:text-5xl lg:text-6xl absolute z-20"
	>
		{bannerTitle}
	</h1>

	{#if showArrow}
		<button
			on:click={() => window.scrollBy({
				top: Math.floor(window.innerHeight/2) - 68,
				left: 0,
				behavior: "smooth",
			})}
			in:fly={{
				delay: 0,
				duration: 1000,
				easing: bounceOut,
				x: 0,
				y: 150,
				opacity: 1
			}}
			out:fade={{
				delay: 0,
				duration: 250
			}}
			class="absolute bottom-8"
		>
			<img src="/images/arrow.svg" alt="Down arrow." />
		</button>
	{/if}
</div>

<style scoped>
button{
	animation: bounce 2s infinite;

}

@keyframes bounce {
	0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-20px);
    }
} 
</style>
