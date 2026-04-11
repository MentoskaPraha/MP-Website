<script lang="ts">
  import ItemDisplay from "@components/items/ItemDisplay.svelte";
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
          <ItemDisplay
            title={item.title}
            description={item.description}
            image={images[item.id]?.default}
          />
        </a>
      {:else}
        <ItemDisplay
          title={item.title}
          description={item.description}
          image={images[item.id]?.default}
        />
      {/if}
    {/each}
  </div>
</div>
