<script lang="ts">
  import Placeholder from "@assets/placeholder.svg";
  import type { ItemDisplayItem } from "@types";

  const { items }: { items: ItemDisplayItem[] } = $props();

  const images = import.meta.glob<{ default: ImageMetadata }>(
    "/src/assets/technology/*.{webp,svg}",
    { eager: true }
  );
</script>

<div class="flex justify-center">
  <div class="grid grid-cols-8 grid-rows-3 gap-0">
    {#each items as item}
      <img
        class="w-32 h-32 bg-white"
        src={images[item.image] == undefined
          ? Placeholder.src
          : images[item.image].default.src}
        alt="{item.title} Logo"
      />
    {/each}
  </div>
</div>
