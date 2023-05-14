<script lang="ts">
	import { fly, fade } from "svelte/transition";
	import { quintOut } from "svelte/easing";

	const navLinks = [
		{
			location: "/",
			name: "Home"
		},
		{
			location: "/about",
			name: "About"
		},
		{
			location: "/event",
			name: "Event"
		},
		{
			location: "/speakers",
			name: "Speakers"
		},
		{
			location: "/sponsors",
			name: "Sponsors"
		}
	];

	//functions for menu toggle
	let menuState = false;
</script>

<nav class="fixed top-0 z-50 w-full">
	<div class="flex flex-wrap bg-black relative z-50 h-14">
		<ul class="flex place-items-center">
			<li class="inline">
				<img
					src="/images/siteLogo.svg"
					alt="Page logo."
					class="bg-black w-28 mr-1 md:ml-2"
				/>
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
					class="nav-button block bg-gray-100 absolute h-1 w-8 rounded-sm before:block before:bg-gray-100 before:absolute before:h-1 before:w-8 before:rounded-sm after:block after:bg-gray-100 after:absolute after:h-1 after:w-8 after:rounded-sm"
				/>
			</label>
		</div>
	</div>
	{#if menuState}
		<div class="flex flex-wrap h-screen w-screen">
			<button
				in:fade={{ delay: 0, duration: 150, easing: quintOut }}
				out:fade={{
					delay: 150 + 50 * navLinks.length,
					duration: 150,
					easing: quintOut
				}}
				on:click={() => (menuState = false)}
				class="pt-28 bg-white text-gray-100 opacity-60 z-30 fixed w-full h-full hover:cursor-default transition-opacity"
			>
				This is a hidden message. Pretty cool right?
			</button>
			<div
				in:fly={{
					delay: 0,
					duration: 300,
					x: 224,
					y: 0,
					opacity: 0,
					easing: quintOut
				}}
				out:fly={{
					delay: 150 + 50 * navLinks.length,
					duration: 300,
					x: 224,
					y: 0,
					opacity: 0,
					easing: quintOut
				}}
				class="bg-tedRed z-40 ml-auto"
			>
				<ul>
					{#each navLinks as item, index}
						<li class="block">
							<a
								transition:fly={{
									delay: 150 + 50 * index,
									duration: 300,
									x: 56,
									y: 0,
									opacity: 0,
									easing: quintOut
								}}
								href={item.location}
								class="navLinkContainer inline-block pr-8 m-2 w-full"
							>
								<p
									class="navLink inline-block relative text-white font-bold text-lg xl:text-3xl 2xl:text-4xl after:absolute after:w-full after:bottom-0 after:left-0 after:bg-white after:h-1 after:rounded"
								>
									{item.name}
								</p>
							</a>
						</li>
					{/each}
				</ul>
			</div>
		</div>
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

	.navLink::after {
		content: "";
		transform: scaleX(0);
		transform-origin: bottom right;
		transition: transform 0.25s ease-out;
	}

	.navLinkContainer:hover .navLink::after {
		transform: scaleX(1);
		transform-origin: bottom left;
	}
</style>
