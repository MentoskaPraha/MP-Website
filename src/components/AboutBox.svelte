<script lang="ts">
  import Avatar from "@assets/avatar.svg";
  import Me from "@assets/me.webp";
  import { crossfade } from "svelte/transition";
  import { quintOut } from "svelte/easing";

  const [outBig, inBig] = crossfade({
    duration: 1000,
    easing: quintOut
  });

  const [outSmall, inSmall] = crossfade({
    duration: 1000,
    easing: quintOut
  });

  let name = $state("MentoskaPraha");
  let accessibilityName = $state("MentoskaPraha");
  let bigImageHovered = $state(false);
  let smallImageHovered = $state(false);
  const age = Math.abs(
    new Date(Date.now() - Date.parse("2007")).getUTCFullYear() - 1970
  );

  function onMouseEnterBig() {
    bigImageHovered = true;
    nameTransition();
  }

  function onMouseLeaveBig() {
    bigImageHovered = false;
    nameTransition();
  }

  function onMouseEnterSmall() {
    smallImageHovered = true;
    nameTransition();
  }

  function onMouseLeaveSmall() {
    smallImageHovered = false;
    nameTransition();
  }

  function nameTransition() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const realName = "Filip J. Stary";
    const displayName = "MentoskaPraha";

    let iteration = 0;

    name = bigImageHovered || smallImageHovered ? realName : displayName;

    let interval = setInterval(() => {
      name = name
        .split("")
        .map((_letter, index) => {
          if (index < iteration) {
            return bigImageHovered || smallImageHovered
              ? realName[index]
              : displayName[index];
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

<div class="flex md:w-2xl mx-auto mt-4 items-center">
  <div
    class="relative w-[300px] h-[300px] rounded-lg overflow-hidden bg-white hidden md:flex"
    role="button"
    tabindex="0"
    onmouseenter={onMouseEnterBig}
    onmouseleave={onMouseLeaveBig}
    onfocus={onMouseEnterBig}
    onblur={onMouseLeaveBig}
    aria-pressed={bigImageHovered}
    aria-label="Reveals my real identity by changing the image and name."
  >
    {#if bigImageHovered}
      <img
        src={Me.src}
        alt="Me (Filip J. Stary)"
        width="300"
        height="300"
        class="absolute inset-0 w-full h-full object-cover"
        in:inBig={{ key: bigImageHovered }}
        out:outBig={{ key: bigImageHovered }}
      />
    {:else}
      <img
        src={Avatar.src}
        alt="My Avatar (MentoskaPraha)"
        width="300"
        height="300"
        class="absolute inset-0 w-full h-full object-cover"
        in:inBig={{ key: bigImageHovered }}
        out:outBig={{ key: bigImageHovered }}
      />
    {/if}
  </div>

  <div class="w-[320px] md:w-[372px] mx-auto md:mr-0 md:ml-4 relative">
    <div
      class="absolute w-[125px] h-[125px] rounded-lg bg-white left-48 md:hidden"
      role="button"
      tabindex="0"
      onmouseenter={onMouseEnterSmall}
      onmouseleave={onMouseLeaveSmall}
      onfocus={onMouseEnterSmall}
      onblur={onMouseLeaveSmall}
      aria-pressed={smallImageHovered}
      aria-label="Reveals my real identity by changing the image and name."
    >
      {#if smallImageHovered}
        <img
          src={Me.src}
          alt="Me (Filip J. Stary)"
          width="125"
          height="125"
          class="absolute inset-0 w-full h-full object-cover"
          in:inSmall={{ key: smallImageHovered }}
          out:outSmall={{ key: smallImageHovered }}
        />
      {:else}
        <img
          src={Avatar.src}
          alt="My Avatar (MentoskaPraha)"
          width="125"
          height="125"
          class="absolute inset-0 w-full h-full object-cover"
          in:inSmall={{ key: smallImageHovered }}
          out:outSmall={{ key: smallImageHovered }}
        />
      {/if}
    </div>

    <h2 class="text-3xl font-bold underline">About Me</h2>
    <div class="flex">
      <h3>Name:</h3>
      <p class="ml-1 select-text" aria-hidden="true">{name}</p>
      <p class="sr-only">{accessibilityName}</p>
    </div>
    <div class="flex">
      <h3>Age:</h3>
      <p class="ml-1 select-text">{age}</p>
    </div>
    <div class="flex">
      <h3>Pronouns:</h3>
      <p class="ml-1 select-text">He/Him</p>
    </div>
    <br />
    <p class="text-justify select-text">
      Hello, this is the part where I talk about myself. I'm not sure what to
      say. My parents would say I'm amazing, which I agree with, but that's a
      bias assessment. I make things, sometimes, mainly computer programs.
      Sometimes those things are even good. I also play video games.
    </p>
  </div>
</div>
