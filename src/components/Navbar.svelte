<script lang="ts">
  import { fly, fade } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import logo from "@assets/avatar.svg";

  const navLinks = [
    {
      location: "/about",
      name: "About"
    },
    {
      location: "/projects",
      name: "Projects"
    },
    {
      location: "/blog",
      name: "Blog"
    },
    {
      location: "mailto:contact+website@mentoskapraha.com",
      name: "Contact"
    }
  ];

  //functions for menu toggle
  let menuState = $state(false);
  let windowSize = $state(0);
  $effect(() => {
    document.body.style.overflowY = menuState ? "hidden" : "auto";
  });
</script>

<svelte:window bind:innerWidth={windowSize} />

<header class="sticky top-0 h-14 z-40 bg-blue-600 flex items-center">
  <a href="/" class="flex items-center">
    <img
      src={logo.src}
      alt="Site Logo"
      class="bg-white h-10 w-10 rounded-md ml-2 mr-2"
    />
    <h1 class="text-3xl font-bold flex">MP's Website</h1>
  </a>
  <nav class="ml-auto">
    <ul class="flex mr-2">
      {#if windowSize > 640}
        {#each navLinks as item}
          <li class="ml-2 mr-2 text-xl flex">
            <a
              href={item.location}
              data-astro-prefetch
              class="relative inline-block group"
            >
              {item.name}
              <span
                class="absolute left-0 -bottom-0.5 h-0.5 rounded-full w-full bg-current origin-right scale-x-0 transition-transform duration-150 ease-in-out group-hover:origin-left group-hover:scale-x-100"
              ></span>
            </a>
          </li>
        {/each}
      {:else}
        <li class="flex place-items-center ml-auto">
          <input
            id="nav-toggle"
            class="hidden"
            type="checkbox"
            bind:checked={menuState}
          />
          <label
            class="nav-button-container w-8 h-5 inline-block cursor-pointer"
            for="nav-toggle"
          >
            <div
              id="nav-button"
              class="nav-button block bg-gray-100 absolute h-1 w-8 rounded-sm before:block before:bg-gray-100 before:absolute before:h-1 before:w-8 before:rounded-sm after:block after:bg-gray-100 after:absolute after:h-1 after:w-8 after:rounded-sm"
            ></div>
          </label>
        </li>
      {/if}
    </ul>
  </nav>

  {#if menuState && windowSize < 640}
    <menu class="fixed top-0 h-screen w-screen z-50">
      <button
        transition:fade={{ delay: 0, duration: 500, easing: quintOut }}
        onclick={() => (menuState = false)}
        class="pt-28 bg-white text-gray-50 opacity-60 z-50 fixed w-full h-full hover:cursor-default transition-opacity"
        aria-hidden="true"
      >
        This is a hidden message. Pretty cool right?
      </button>
      <nav
        transition:fly={{
          delay: 0,
          duration: 1000,
          x: 224,
          y: 0,
          opacity: 0,
          easing: quintOut
        }}
        class="bg-blue-600 z-50 ml-auto fixed top-0 right-0 h-screen"
      >
        <ul>
          <li class="pr-8 m-2 w-full">
            <button
              onclick={() => (menuState = false)}
              data-astro-prefetch
              class="relative group inline-block cursor-pointer"
            >
              Close
              <span
                class="absolute left-0 -bottom-0.5 h-0.5 rounded-full w-full bg-current origin-right scale-x-0 transition-transform duration-150 ease-in-out group-hover:origin-left group-hover:scale-x-100"
              ></span>
            </button>
          </li>
          {#each navLinks as item}
            <li class="pr-8 m-2 w-full">
              <a
                href={item.location}
                data-astro-prefetch
                class="relative group inline-block"
              >
                {item.name}
                <span
                  class="absolute left-0 -bottom-0.5 h-0.5 rounded-full w-full bg-current origin-right scale-x-0 transition-transform duration-150 ease-in-out group-hover:origin-left group-hover:scale-x-100"
                ></span>
              </a>
            </li>
          {/each}
        </ul>
      </nav>
    </menu>
  {/if}
</header>

<style scoped>
  .nav-button,
  .nav-button::before,
  .nav-button::after {
    transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
    border-radius: 2px;
  }

  .nav-button::before {
    content: " ";
    margin-top: -8px;
  }

  .nav-button {
    margin-top: 8px;
  }

  .nav-button::after {
    content: " ";
    margin-top: 8px;
  }

  #nav-toggle:checked + .nav-button-container .nav-button::before {
    margin-top: 0px;
    transform: rotate(405deg);
  }

  #nav-toggle:checked + .nav-button-container .nav-button {
    background: rgba(255, 255, 255, 0);
  }

  #nav-toggle:checked + .nav-button-container .nav-button::after {
    margin-top: 0px;
    transform: rotate(-405deg);
  }
</style>
