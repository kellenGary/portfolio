<script>
  import { onMount } from "svelte";
  import { Canvas } from "@threlte/core";
  import SkillsOrbs from "./components/3d/SkillsOrbs.svelte";
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

  gsap.registerPlugin(ScrollTrigger);

  let container;

  onMount(() => {
    gsap.fromTo(
      ".skills-reveal",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        scrollTrigger: {
          trigger: container,
          start: "top 70%",
        },
      },
    );
  });
</script>

<section
  id="skills"
  bind:this={container}
  class="relative w-full min-h-screen py-24 px-4 md:px-20 overflow-hidden bg-background-color"
>
  <!-- Section Header -->
  <div class="mb-16 skills-reveal">
    <h2
      class="text-6xl md:text-8xl font-black text-text-main/10 uppercase tracking-tighter"
    >
      Tech<br /><span class="text-accent-primary/20">Stack</span>
    </h2>
  </div>

  <!-- 3D Canvas -->
  <div class="w-full h-[60vh] md:h-[70vh] skills-reveal">
    <Canvas>
      <SkillsOrbs />
    </Canvas>
  </div>

  <!-- Legend -->
  <div class="flex flex-wrap justify-center gap-8 mt-12 skills-reveal">
    <div class="flex items-center gap-2">
      <span class="w-3 h-3 rounded-full bg-accent-primary"></span>
      <span
        class="text-text-main/60 text-sm font-mono uppercase tracking-widest"
        >Frontend</span
      >
    </div>
    <div class="flex items-center gap-2">
      <span class="w-3 h-3 rounded-full bg-blue-500"></span>
      <span
        class="text-text-main/60 text-sm font-mono uppercase tracking-widest"
        >Backend</span
      >
    </div>
    <div class="flex items-center gap-2">
      <span class="w-3 h-3 rounded-full bg-emerald-500"></span>
      <span
        class="text-text-main/60 text-sm font-mono uppercase tracking-widest"
        >Tools</span
      >
    </div>
  </div>
</section>
