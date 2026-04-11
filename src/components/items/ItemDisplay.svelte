<script lang="ts">
  import Placeholder from "@assets/placeholder.svg";
  import { Image } from "astro:assets";

  const {
    title,
    description,
    image
  }: {
    title: string;
    description: string;
    image: ImageMetadata | undefined;
  } = $props();
</script>

<div id="container" class="w-32 relative rounded-sm">
  <img
    class="w-full h-auto bg-white block rounded-sm"
    src={image == undefined ? Placeholder.src : image.src}
    width="128"
    height="128"
    alt="{title} Logo"
  />
  <div
    id="overlay"
    class="absolute left-0 right-0 bottom-0 overflow-hidden w-full h-0 transition-all backdrop-blur-md rounded-sm"
  >
    <div id="body" class="text-black absolute w-full font-bold p-2">
      <h3 class="text-center underline">
        {title}
      </h3>
      <p class="text-xs text-center font-normal">
        {description}
      </p>
    </div>
  </div>
</div>

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
