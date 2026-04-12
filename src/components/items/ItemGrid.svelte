<script lang="ts">
  import ItemDisplay from "@components/items/ItemDisplay.svelte";
  import type { ItemDisplayItem } from "@types";

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

  let win_width = $state(0);
  let colNum = $derived(Math.floor((win_width - 32) / 144));
  let rowNum = $derived(Math.ceil(items.length / colNum));
</script>

<svelte:window bind:innerWidth={win_width} />

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
