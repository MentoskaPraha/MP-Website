<script lang="ts">
  import Placeholder from "@assets/placeholder.svg";
  import type { ItemDisplayItem } from "@types";
  import { onMount } from "svelte";

  const {
    items,
    images
  }: {
    items: ItemDisplayItem[];
    images: Record<
      string,
      {
        default: ImageMetadata;
      }
    >;
  } = $props();

  let colNum = $state(8);
  let rowNum = $derived(Math.ceil(items.length / colNum));

  function updateGridSize() {
    let grid_width = 128 * colNum + 16 * colNum + 16 * 2;
    const win_width = window.innerWidth;
    if (grid_width > win_width) {
      while (grid_width > win_width) {
        colNum--;
        grid_width = grid_width - (128 + 16);
      }
    } else if (grid_width + 128 + 16 < win_width) {
      while (grid_width + 128 + 16 < win_width) {
        colNum++;
        grid_width = grid_width + (128 + 16);
      }
    }
  }

  onMount(() => updateGridSize());
</script>

<svelte:window onresize={updateGridSize} />

<div class="flex justify-center">
  <div
    class="grid gap-4 mx-4"
    style="grid-template-columns: repeat({colNum}, minmax(0, 1fr)); grid-template-rows: repeat({rowNum}, minmax(0, 1fr));"
  >
    {#each items as item}
      {#if item.link != null}
        <a href={item.link} target="_blank" rel="noopener noreferrer">
          {@render item_snippet(item)}
        </a>
      {:else}
        {@render item_snippet(item)}
      {/if}
    {/each}
  </div>
</div>

{#snippet item_snippet(item: ItemDisplayItem)}
  <div id="container" class="w-32 relative rounded-sm">
    <img
      class="w-full h-auto bg-white block rounded-sm"
      src={images[item.id] == undefined
        ? Placeholder.src
        : images[item.id].default.src}
      width="128"
      height="128"
      alt="{item.title} Logo"
    />
    <div
      id="overlay"
      class="absolute left-0 right-0 bottom-0 overflow-hidden w-full h-0 transition-all backdrop-blur-md rounded-sm"
    >
      <div id="body" class="text-black absolute w-full font-bold p-2">
        <h3 class="text-center underline">
          {item.title}
        </h3>
        <p class="text-xs text-center font-normal">
          {item.description}
        </p>
      </div>
    </div>
  </div>
{/snippet}

<style>
  #container:hover #overlay {
    height: 100%;
  }
  #overlay {
    transition-property: height;
    transition-timing-function: var(
      --tw-ease,
      var(--default-transition-timing-function)
        /* cubic-bezier(0.4, 0, 0.2, 1) */
    );
    transition-duration: var(
      --tw-duration,
      var(--default-transition-duration) /* 150ms */
    );
  }
</style>
