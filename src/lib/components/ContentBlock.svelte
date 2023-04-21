<script lang="ts" setup>
	import { base } from "$app/paths";

	export let title = "";
	export let description = "";
	export let image = "";
	export let links = true;
	export let git = "none";
	export let external = "none";
</script>

<div
	class="m-4 mx-auto md:grid md:auto-cols-min md:grid-cols-2 md:items-center md:gap-4"
>
	<img
		src="{base}{image}"
		alt="Represents the content displayed in this content block."
		class="w-72 h-72 mx-auto mb-3 bg-white md:mb-0 md:mx-0 md:ml-auto"
	/>
	<section class="mx-auto w-72 md:w-80 md:mx-0 md:mr-auto">
		<h3 class="text-center text-2xl font-bold underline">
			{title}
		</h3>
		<p class="text-justify">
			{@html description}
		</p>
		{#if links}
			<ul class="m-3 text-center">
				{#if git != "none"}
					<li class="inline-block relative rounded-full mx-2">
						<a
							href={git}
							target="_blank"
							rel="noreferrer"
							class="toolTip hover:cursor-pointer inline-block rounded-full bg-black"
						>
							<span
								class="toolTipText w-40 bg-white text-black absolute bottom-full left-1/2 -ml-20 mb-3 rounded-lg transition-opacity after:absolute after:top-full after:left-1/2 after:border-solid after:border-8 after:-ml-2"
								>Link to the project's Github page.</span
							>
							<img
								class="w-14 h-14 hover:opacity-50 transition-opacity border-white border-4 rounded-full bg-white"
								src="{base}/images/logos/github-mark.svg"
								alt="Copy link icon."
							/>
						</a>
					</li>
				{/if}

				{#if external != "none"}
					<li class="inline-block relative rounded-full mx-2">
						<a
							href={external}
							target="_blank"
							rel="noreferrer"
							class="toolTip hover:cursor-pointer inline-block rounded-full bg-black"
						>
							<span
								class="toolTipText w-40 bg-white text-black absolute bottom-full left-1/2 -ml-20 mb-3 rounded-lg transition-opacity after:absolute after:top-full after:left-1/2 after:border-solid after:border-8 after:-ml-2"
								>Link to the project's external website.</span
							>
							<img
								class="w-14 h-14 hover:opacity-50 transition-opacity border-white border-4 rounded-full bg-white"
								src="{base}/images/externalLink.svg"
								alt="Copy link icon."
							/>
						</a>
					</li>
				{/if}
			</ul>
		{/if}
	</section>
</div>

<style scoped>
	.toolTipText {
		visibility: hidden;
		opacity: 0;
	}

	.toolTipText::after {
		content: " ";
		border-color: white transparent transparent transparent;
	}

	.toolTip:hover .toolTipText {
		visibility: visible;
		opacity: 1;
	}
</style>
