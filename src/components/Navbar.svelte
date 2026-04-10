<script lang="ts">
  import { fade } from "svelte/transition";
  import logo from "@assets/avatar.svg";

  let menuButton: Element;
  let menuElement: Element | undefined = $state();
  let menuButtonZooming = $state(false);
  let menuButtonZoomed = $state(false);
  let menuButtonStyle = $state("");
  let menuButtonStartRect: DOMRect;
  let showNavbarMenu = $state(false);
  let navbarMenuStyle = $state("");

  function zoomInContactButton() {
    if (menuButtonZooming) return;
    menuButtonZooming = true;
    menuButtonZoomed = true;
    document.body.style = "overflow: hidden";
    updateContactButtonZoom();
    setTimeout(() => {
      showNavbarMenu = true;
      navbarMenuStyle = `top: ${window.scrollY}px`;
      document.addEventListener("click", handleClickOutsideEvent, true);
      menuButtonZooming = false;
    }, 1000);
  }

  function zoomOutContactButton() {
    if (menuButtonZooming) return;
    menuButtonZooming = true;
    showNavbarMenu = false;
    document.body.style = "";
    document.removeEventListener("click", handleClickOutsideEvent, true);
    menuButtonStyle = "";
    setTimeout(() => {
      menuButtonZoomed = false;
      menuButtonZooming = false;
    }, 1000);
  }

  function updateContactButtonZoom() {
    if (window.innerWidth >= 640 && showNavbarMenu) {
      zoomOutContactButton();
      return;
    }

    if (menuButton && menuButtonZoomed) {
      const rect = menuButton.getBoundingClientRect();
      const centerX = window.innerWidth / 2 - rect.width / 2;
      const centerY = window.innerHeight / 2 - rect.height / 2;
      menuButtonStartRect = rect;

      menuButtonStyle = `
          transform: translate(${centerX - rect.left}px, ${centerY - rect.top}px) scale(2);
        `;
    }
  }

  function handleKeypress(event: KeyboardEvent) {
    if (event.key == "Escape" && showNavbarMenu) {
      if (document.activeElement instanceof HTMLButtonElement)
        document.activeElement.blur();
      zoomOutContactButton();
    }
  }

  function handleClickOutsideEvent(event: MouseEvent) {
    if (!showNavbarMenu) return;

    if (event.target instanceof Element) {
      if (
        menuElement != undefined &&
        !menuElement.contains(event.target) &&
        !event.defaultPrevented
      ) {
        zoomOutContactButton();
      }
    }
  }

  function handleMenuButtonClick() {
    if (menuButtonZooming) return;
    if (menuButtonZoomed) {
      zoomOutContactButton();
    } else {
      zoomInContactButton();
    }
  }
</script>

<svelte:window
  onresize={updateContactButtonZoom}
  onkeydown={handleKeypress}
  onclick={handleClickOutsideEvent}
/>

<header class="h-14 bg-blue-600 flex items-center">
  <a href="/" class="flex items-center">
    <img
      src={logo.src}
      alt="Site Logo"
      class="bg-white h-10 w-10 rounded-md ml-2 mr-2"
    />
    <h1 class="text-3xl font-bold hidden xs:flex">MP's Website</h1>
  </a>
  <nav class="ml-auto">
    <ul class="flex mr-2">
      <li class="ml-2 mr-2 text-xl hidden sm:flex">
        <a
          href="/about"
          data-astro-prefetch
          class="relative inline-block group"
        >
          About
          <span
            class="absolute left-0 -bottom-0.5 h-0.5 rounded-full w-full bg-current origin-right scale-x-0 transition-transform duration-150 ease-in-out group-hover:origin-left group-hover:scale-x-100"
          ></span>
        </a>
      </li>

      <li class="ml-2 mr-2 text-xl hidden sm:flex">
        <a
          href="/projects"
          data-astro-prefetch
          class="relative inline-block group"
        >
          Projects
          <span
            class="absolute left-0 -bottom-0.5 h-0.5 rounded-full w-full bg-current origin-right scale-x-0 transition-transform duration-150 ease-in-out group-hover:origin-left group-hover:scale-x-100"
          ></span>
        </a>
      </li>

      <li class="ml-2 mr-2 text-xl hidden sm:flex">
        <a href="/blog" data-astro-prefetch class="relative inline-block group">
          Blog
          <span
            class="absolute left-0 -bottom-0.5 h-0.5 rounded-full w-full bg-current origin-right scale-x-0 transition-transform duration-150 ease-in-out group-hover:origin-left group-hover:scale-x-100"
          ></span>
        </a>
      </li>

      <li class="ml-2 mr-2 text-xl sm:hidden">
        <div
          class={menuButtonZoomed ? "cursor-default" : ""}
          bind:this={menuButton}
        >
          <button
            class="cursor-pointer relative inline-block group z-50 {showNavbarMenu
              ? 'transition-none duration-0'
              : ''} transition-transform duration-1000"
            style={menuButtonStyle}
            onclick={handleMenuButtonClick}
          >
            Menu
            <span
              class="absolute left-0 -bottom-0.5 h-0.5 rounded-full w-full bg-current origin-right scale-x-0 transition-transform duration-150 ease-in-out group-hover:origin-left group-hover:scale-x-100 {menuButtonZoomed
                ? 'origin-left scale-x-100'
                : ''}"
            ></span>
          </button>
        </div>
      </li>

      <li class="ml-2 mr-2 text-xl">
        <a
          href="mailto:contact+website@mentoskapraha.com"
          class="relative inline-block group"
        >
          Contact
          <span
            class="absolute left-0 -bottom-0.5 h-0.5 rounded-full w-full bg-current origin-right scale-x-0 transition-transform duration-150 ease-in-out group-hover:origin-left group-hover:scale-x-100"
          ></span>
        </a>
      </li>
    </ul>
  </nav>

  {#if showNavbarMenu}
    <menu
      class="absolute w-full h-full bg-gray-200/50 flex justify-center z-40"
      style={navbarMenuStyle}
      transition:fade
    >
      <div
        bind:this={menuElement}
        class="relative top-1/2 -translate-y-1/4 w-full h-30 bg-blue-600 flex flex-col items-center justify-between"
      >
        <ul class="flex mt-auto mb-3.5">
          <li class="ml-auto mr-2 text-2xl" in:fade={{ delay: 600 }}>
            <a
              href="/about"
              data-astro-prefetch
              class="relative inline-block group"
            >
              About
              <span
                class="absolute left-0 -bottom-0.5 h-0.5 rounded-full w-full bg-current origin-right scale-x-0 transition-transform duration-150 ease-in-out group-hover:origin-left group-hover:scale-x-100"
              ></span>
            </a>
          </li>

          <li class="ml-2 mr-2 text-2xl" in:fade={{ delay: 1200 }}>
            <a
              href="/projects"
              data-astro-prefetch
              class="relative inline-block group"
            >
              Projects
              <span
                class="absolute left-0 -bottom-0.5 h-0.5 rounded-full w-full bg-current origin-right scale-x-0 transition-transform duration-150 ease-in-out group-hover:origin-left group-hover:scale-x-100"
              ></span>
            </a>
          </li>

          <li class="ml-2 mr-auto text-2xl" in:fade={{ delay: 1800 }}>
            <a
              href="/blog"
              data-astro-prefetch
              class="relative inline-block group"
            >
              Blog
              <span
                class="absolute left-0 -bottom-0.5 h-0.5 rounded-full w-full bg-current origin-right scale-x-0 transition-transform duration-150 ease-in-out group-hover:origin-left group-hover:scale-x-100"
              ></span>
            </a>
          </li>
        </ul>
      </div>
    </menu>
  {/if}
</header>
