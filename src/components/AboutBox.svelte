<script lang="ts">
  import Avatar from "@assets/avatar.svg";
  import Placeholder from "@assets/placeholder.svg";
  import { crossfade } from "svelte/transition";
  import { quintOut } from "svelte/easing";

  const [send, recieve] = crossfade({
    duration: 1000,
    easing: quintOut
  });

  let name = $state("MentoskaPraha");
  let accessibilityName = $state("MentoskaPraha");
  let imageHovered = $state(false);
  const age = Math.abs(
    new Date(Date.now() - Date.parse("04/04/2007")).getUTCFullYear() - 1970
  );

  function onMouseEnter() {
    imageHovered = true;
    nameTransition();
  }

  function onMouseLeave() {
    imageHovered = false;
    nameTransition();
  }

  function nameTransition() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const realName = "Filip J. Stary";
    const displayName = "MentoskaPraha";

    let iteration = 0;

    name = imageHovered ? realName : displayName;

    let interval = setInterval(() => {
      name = name
        .split("")
        .map((_letter, index) => {
          if (index < iteration) {
            return imageHovered ? realName[index] : displayName[index];
          } else {
            return letters[Math.floor(Math.random() * 26)];
          }
        })
        .join("");

      if (iteration >= name.length) {
        clearInterval(interval);
        accessibilityName = name;
      }

      iteration += 1 / 3;
    }, 25);
  }
</script>

<div class="flex w-2xl mx-auto mt-4">
  <div
    class="relative w-[300px] h-[300px] rounded-lg overflow-hidden bg-white"
    role="button"
    tabindex="0"
    onmouseenter={onMouseEnter}
    onmouseleave={onMouseLeave}
    onfocus={onMouseEnter}
    onblur={onMouseLeave}
    aria-pressed={imageHovered}
    aria-label="Reveals my real identity by changing the image and name."
  >
    {#if imageHovered}
      <img
        src={Placeholder.src}
        alt="Me (Filip J. Stary)"
        width="300"
        height="300"
        class="absolute inset-0 w-full h-full object-cover"
        in:recieve={{ key: imageHovered }}
        out:send={{ key: imageHovered }}
      />
    {:else}
      <img
        src={Avatar.src}
        alt="Me (MentoskaPraha)"
        width="300"
        height="300"
        class="absolute inset-0 w-full h-full object-cover"
        in:recieve={{ key: imageHovered }}
        out:send={{ key: imageHovered }}
      />
    {/if}
  </div>

  <div class="select-text w-[372px] ml-4">
    <h2 class="text-3xl font-bold underline">About Me</h2>
    <div class="flex">
      <h3>Name:</h3>
      <p class="ml-1" aria-hidden="true">{name}</p>
      <p class="sr-only">{accessibilityName}</p>
    </div>
    <div class="flex">
      <h3>Age:</h3>
      <p class="ml-1">{age}</p>
    </div>
    <div class="flex">
      <h3>Pronouns:</h3>
      <p class="ml-1">He/Him</p>
    </div>
    <br />
    <p class="text-justify">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut modi
      voluptatum commodi obcaecati fugit, mollitia aspernatur distinctio fugiat?
      Quasi animi sed molestiae. Quos nulla consectetur pariatur facilis ipsa
      quaerat? Iste.
    </p>
  </div>
</div>
