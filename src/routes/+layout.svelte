<script>
  import "../app.css";
  import ScrollGraphics from "$lib/ScrollGraphics.svelte";
  import { onMount } from "svelte";
  import Lenis from "lenis";

  onMount(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });
</script>

<ScrollGraphics />

<!-- Desktop grid pattern background over main scroll area -->
<div class="fixed inset-0 pointer-events-none bg-grid-pattern opacity-40 mix-blend-overlay z-0"></div>

<main
  class="relative z-10 w-full min-h-screen text-text-main font-body selection:bg-white selection:text-black overflow-x-hidden"
>
  <slot />
</main>
