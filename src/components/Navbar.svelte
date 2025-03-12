<script lang="ts">
  //code for handling the zooming in and out of the contact button
  let contactButton: Element;
  let contactButtonZoomed = $state(false);
  let contactButtonStyle = $state("");
  let contactButtonStartRect: DOMRect;
  let showContactMenu = $state(false);

  function zoomInContactButton() {
    contactButtonZoomed = true;
    updateContactButtonZoom();
    setTimeout(() => (showContactMenu = true), 1000);
  }

  function zoomOutContactButton() {
    contactButtonStyle = "";
    contactButtonZoomed = false;
    showContactMenu = false;
  }

  function updateContactButtonZoom() {
    if (contactButton && contactButtonZoomed) {
      const rect = contactButton.getBoundingClientRect();
      const centerX = window.innerWidth / 2 - rect.width / 2;
      const centerY = window.innerHeight / 2 - rect.height / 2;
      contactButtonStartRect = rect;

      contactButtonStyle = `
          transform: translate(${centerX - rect.left}px, ${centerY - rect.top}px) scale(2);
        `;
    }
  }
</script>

<svelte:window onresize={updateContactButtonZoom} />

<header class="h-14 bg-blue-600 flex items-center">
  <img
    src="/images/siteLogo.svg"
    alt="Site Logo"
    class="bg-white h-10 w-10 rounded-md ml-2 mr-2"
  />
  <h1 class="text-3xl font-bold">MP's Website</h1>
  <nav class="ml-auto">
    <ul class="flex mr-2">
      <li class="ml-2 mr-2 text-xl">
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

      <li class="ml-2 mr-2 text-xl">
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

      <li class="ml-2 mr-2 text-xl">
        <a href="/blog" data-astro-prefetch class="relative inline-block group">
          Blog
          <span
            class="absolute left-0 -bottom-0.5 h-0.5 rounded-full w-full bg-current origin-right scale-x-0 transition-transform duration-150 ease-in-out group-hover:origin-left group-hover:scale-x-100"
          ></span>
        </a>
      </li>

      <li class="ml-2 mr-2 text-xl">
        <div bind:this={contactButton}>
          <button
            class="relative inline-block group z-10 transition-transform duration-1000 {showContactMenu
              ? 'transition-none duration-0'
              : ''}"
            style={contactButtonStyle}
            onclick={contactButtonZoomed
              ? zoomOutContactButton
              : zoomInContactButton}
          >
            Contact
            <span
              class="absolute left-0 -bottom-0.5 h-0.5 rounded-full w-full bg-current origin-right scale-x-0 transition-transform duration-150 ease-in-out group-hover:origin-left group-hover:scale-x-100 {contactButtonZoomed
                ? 'origin-left scale-x-100'
                : ''}"
            ></span>
          </button>
        </div>
      </li>
    </ul>
  </nav>
</header>

{#if showContactMenu}
  <menu
    class="absolute left-0 top-0 w-full h-full bg-gray-200 bg-opacity-50 flex justify-center"
  >
  </menu>
{/if}
