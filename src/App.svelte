<script lang="ts">
	import Ps1 from "@components/Ps1.svelte";
	import Input from "@components/Input.svelte";
	import History from "@components/History.svelte";
	import theme from "$theme";
</script>

<main
	class="h-full border-2 rounded-md p-4 overflow-auto text-xs sm:text-sm md:text-base"
	style={`background-color: ${theme.background}; color: ${theme.foreground}; border-color: ${theme.green};`}
>
	<History />

	<div class="flex flex-col md:flex-row">
		<Ps1 />

		<Input />
	</div>
</main>
