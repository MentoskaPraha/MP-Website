<script lang="ts">
	import { fly, fade } from "svelte/transition";
	import { quintOut } from "svelte/easing";
	import { siteInfo } from "../content.json";

	const navLinks = [
		{
			location: "/",
			name: "Home"
		},
		{
			location: "/about",
			name: "About Me"
		},
		{
			location: "/projects",
			name: "Projects"
		}
	];

	//scroll functionality
	async function navigate(location: string) {
		const aboutScroll = document.getElementById("/about") as HTMLElement;
		const projectsScroll = document.getElementById(
			"/projects"
		) as HTMLElement;

		switch (location) {
			case "/": {
				window.scrollTo({ top: 0, left: 0, behavior: "auto" });
				break;
			}
			case "/about": {
				aboutScroll.scrollIntoView({
					block: "start",
					inline: "nearest",
					behavior: "auto"
				});
				window.scrollBy({ top: -76, left: 0, behavior: "auto" });
				break;
			}
			case "/projects": {
				projectsScroll.scrollIntoView({
					block: "start",
					inline: "nearest",
					behavior: "auto"
				});
				window.scrollBy({ top: -56, left: 0, behavior: "auto" });
				break;
			}
		}

		toggleMenu();
	}

	//functions for menu toggle
	let menuState = false;

	function toggleMenu() {
		if (menuState) {
			menuState = false;
		}
	}
</script>

<nav class="fixed top-0 z-50 w-full">
	<div class="flex flex-wrap bg-gray-300 relative z-50 h-14">
		<ul class="flex place-items-center m-1">
			<li class="inline">
				<img
					src="/images/siteLogo.svg"
					alt="Page logo."
					class="bg-white w-8 h-8 mr-1 md:ml-2"
				/>
			</li>
			<li class="inline">
				<h1 class="font-bold text-black text-sm sm:text-xl">
					{siteInfo.title}
				</h1>
			</li>
		</ul>

		<div class="flex place-items-center ml-auto mr-3 sm:mr-6">
			<input
				id="nav-toggle"
				class="hidden"
				type="checkbox"
				bind:checked={menuState}
			/>
			<label
				class="nav-button-container w-8 h-5 inline-block cursor-pointer"
				for="nav-toggle"
			>
				<div
					class="nav-button block bg-gray-900 absolute h-1 w-8 rounded-sm before:block before:bg-gray-900 before:absolute before:h-1 before:w-8 before:rounded-sm after:block after:bg-gray-900 after:absolute after:h-1 after:w-8 after:rounded-sm"
				/>
			</label>
		</div>
	</div>
	{#if menuState}
		<div
			in:fly={{
				delay: 0,
				duration: 300,
				x: 0,
				y: -56,
				opacity: 0.5,
				easing: quintOut
			}}
			out:fly={{
				delay: 100,
				duration: 300,
				x: 0,
				y: -56,
				opacity: 0.5,
				easing: quintOut
			}}
			class="flex flex-wrap place-content-center bg-gray-600 relative z-40 h-14"
		>
			<ul class="place-items-center flex justify-center text-white">
				{#each navLinks as item}
					<li class="inline">
						{#if document.location.pathname == "/"}
							<button
								on:click={() => navigate(item.location)}
								class="bg-gray-900 h-10 m-1 p-2 rounded hover:opacity-50 transition-opacity"
							>
								{item.name}
							</button>
						{:else}
							<a
								href="/"
								class="bg-gray-900 inline-block h-10 m-1 p-2 rounded hover:opacity-50 transition-opacity"
							>
								{item.name}
							</a>
						{/if}
					</li>
				{/each}
			</ul>
		</div>

		<button
			in:fade={{ delay: 100, duration: 150, easing: quintOut }}
			out:fade={{ delay: 0, duration: 150, easing: quintOut }}
			on:click={toggleMenu}
			class="w-full pt-28 bg-white text-gray-100 opacity-60 h-screen relative z-30 hover:cursor-default transition-opacity"
		>
			This is a hidden message. Pretty cool right?
		</button>
	{/if}
</nav>

<style scoped>
	.nav-button,
	.nav-button::before,
	.nav-button::after {
		transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
		border-radius: 2px;
	}

	.nav-button::before {
		content: " ";
		margin-top: -8px;
	}

	.nav-button {
		margin-top: 8px;
	}

	.nav-button::after {
		content: " ";
		margin-top: 8px;
	}

	#nav-toggle:checked + .nav-button-container .nav-button::before {
		margin-top: 0px;
		transform: rotate(405deg);
	}

	#nav-toggle:checked + .nav-button-container .nav-button {
		background: rgba(255, 255, 255, 0);
	}

	#nav-toggle:checked + .nav-button-container .nav-button::after {
		margin-top: 0px;
		transform: rotate(-405deg);
	}
</style>
