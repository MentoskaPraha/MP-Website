<script lang="ts">
	import { onMount } from "svelte";
	import { quotes, legal } from "$config";
	import type { quote } from "$types";

	//functions to handle quotes
	let quote: quote = {
		content: "You shouldn't see this.",
		author: "System"
	};
	onMount(() => quote = quotes[Math.floor(Math.random() * quotes.length)]);
</script>

<footer class="bg-quaternary text-black pb-4">
	<ul class="p-4">
		<li>
			<p class="text-center text-2xl">"{quote.content}"</p>
		</li>
		<li>
			<p class="text-center text-lg">- {quote.author}</p>
		</li>
	</ul>

	<ul class="md:grid md:grid-cols-2 md:gap-4 md:mx-4">
		<li class="grid auto-rows-auto gap-1 m-4">
			<h2 class="text-center text-3xl font-bold">Privacy Policy</h2>
			<p class="text-justify">
				{legal.privacy_policy}
			</p>
		</li>

		<li class="grid auto-rows-auto gap-1 m-4">
			<h2 class="text-center text-3xl font-bold">Copyright</h2>
			<p class="text-justify">
				{legal.copyright}
			</p>
		</li>
	</ul>
</footer>
