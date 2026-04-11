<script lang="ts">
  import ItemDisplay from "@components/items/ItemDisplay.svelte";
  import type { ItemDisplayItem } from "@types";

  const {
    title,
    items,
    images
  }: {
    title: string;
    items: ItemDisplayItem[];
    images: Record<
      string,
      {
        default: ImageMetadata;
      }
    >;
  } = $props();
</script>

<div class="mx-4">
  <h3 class="text-center underline">{title}</h3>
  <div class="mt-4 mb-8 grid gap-4 place-items-center">
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
