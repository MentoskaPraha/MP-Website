<script lang="ts">
  import { onMount } from "svelte";
  import banner from "@assets/banner.webp";

  const title = "MP's Website";
  let displayedTitle = $state(title);

  //set banner height
  let bannerElement: HTMLElement;
  let titleElement: HTMLElement;

  onMount(() => {
    setBannerHeight();
    runLetterEffect();
  });

  function setBannerHeight() {
    bannerElement.style.height = `${window.innerHeight}px`;
  }

  //Make a cool letter effect
  let runningLetterEffect = false;

  function runLetterEffect() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (runningLetterEffect) {
      return;
    } else {
      runningLetterEffect = true;
    }

    let iteration = 0;

    let interval = setInterval(() => {
      displayedTitle = displayedTitle
        .split("")
        .map((_letter, index) => {
          if (index < iteration) {
            return title[index];
          } else {
            return letters[Math.floor(Math.random() * 26)];
          }
        })
        .join("");

      if (iteration >= displayedTitle.length) {
        clearInterval(interval);
        if (window.scrollY == 0) {
          window.scrollBy({
            top: window.innerHeight / 2 - titleElement.clientHeight / 2,
            behavior: "smooth"
          });
        }
        runningLetterEffect = false;
      }

      iteration += 1 / 3;
    }, 60);
  }
</script>

<svelte:window onresize={setBannerHeight} />

<div
  bind:this={bannerElement}
  class="flex justify-center items-center bg-cover bg-no-repeat bg-center"
  style="background-image: url({banner.src});"
>
  <!-- svelte-ignore a11y_hidden -->
  <h1
    bind:this={titleElement}
    class="font-mono text-center text-4xl font-bold md:text-5xl lg:text-6xl absolute z-10 p-4"
    onmouseenter={() => runLetterEffect()}
    aria-hidden="true"
  >
    {displayedTitle}
  </h1>
  <h1 class="sr-only">
    {title}
  </h1>
</div>
