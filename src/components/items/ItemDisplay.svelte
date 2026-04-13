<script lang="ts">
  import Placeholder from "@assets/placeholder.svg";
  import { onMount } from "svelte";

  const {
    title,
    description,
    image
  }: {
    title: string;
    description: string;
    image: string | undefined;
  } = $props();

  let darkText = $state(true);
  let img: HTMLImageElement;

  function analyzeImage(img: HTMLImageElement) {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    if (!context) return;

    canvas.width = img.naturalWidth || 128;
    canvas.height = img.naturalHeight || 128;
    context.drawImage(img, 0, 0, canvas.width, canvas.height);

    try {
      const { data } = context.getImageData(0, 0, canvas.width, canvas.height);
      let totalBrightness = 0;

      for (let i = 0; i < data.length; i += 4) {
        const alpha = data[i + 3] / 255;

        const r = data[i] * alpha + 255 * (1 - alpha);
        const g = data[i + 1] * alpha + 255 * (1 - alpha);
        const b = data[i + 2] * alpha + 255 * (1 - alpha);

        totalBrightness += 0.299 * r + 0.587 * g + 0.114 * b;
      }

      const avgBrightness = totalBrightness / (data.length / 4);
      darkText = avgBrightness > 128;
    } catch {
      darkText = true;
    }

    canvas.remove();
  }

  onMount(() => analyzeImage(img));
</script>

<div id="container" class="w-32 h-32 relative rounded-sm">
  <img
    class="w-full h-full bg-white block rounded-sm"
    src={image == undefined ? Placeholder.src : image}
    width="128"
    height="128"
    alt="{title} Logo"
    bind:this={img}
  />
  <div
    id="overlay"
    class="absolute left-0 right-0 bottom-0 overflow-hidden w-full h-0 transition-all backdrop-blur-md rounded-sm"
  >
    <div
      id="body"
      class="{darkText
        ? 'text-black'
        : 'text-white'} absolute w-full font-bold p-2"
    >
      <h3 class="text-center underline">
        {title}
      </h3>
      <p class="text-xs text-center font-normal">
        {description}
      </p>
    </div>
  </div>
</div>

<style scoped>
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
