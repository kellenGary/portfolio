<script>
  import { onMount } from "svelte";
  import gsap from "gsap";

  let container;

  const experiences = [
    {
      date: "2026 - Present",
      title: "Associate Software Engineer",
      company: "NetJets",
      description:
        "Working on building the next generation of flight management software for NetJets.",
      side: "right",
    },
    {
      date: "2023 - 2026",
      title: "B.S. Computer Science",
      company: "The Ohio State University",
      description:
        "Focus on Software Engineering and Artificial Intelligence.",
      side: "left",
    },
    {
      date: "2024 - 2025",
      title: "Software Engineer",
      company: "Smarthub",
      description:
        "Building real-time data analysis tools for wheelchair users. Developing cross-platform applications with Electron, Next.js, and Node.js.",
      side: "right",
    },
  ];

  onMount(async () => {
    const { ScrollTrigger } = await import("gsap/dist/ScrollTrigger");
    gsap.registerPlugin(ScrollTrigger);

    // Animate timeline entries
    const entries = gsap.utils.toArray(".timeline-entry");
    entries.forEach((entry, i) => {
      const isLeft = experiences[i].side === "left";
      gsap.fromTo(
        entry,
        { opacity: 0, x: isLeft ? -50 : 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: entry,
            start: "top 80%",
          },
        },
      );
    });

    // Animate the central line growing
    gsap.fromTo(
      ".timeline-line",
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top center",
          end: "bottom center",
          scrub: 1,
        },
      },
    );
  });
</script>

<section
  id="timeline"
  bind:this={container}
  class="relative w-full py-32 px-4 md:px-20 overflow-hidden bg-surface/50 backdrop-blur-sm"
>
  <!-- Section Header -->
  <div class="mb-24 text-center">
    <h2
      class="text-5xl md:text-7xl lg:text-8xl font-black text-text-main/20 uppercase tracking-tighter"
    >
      Experience
    </h2>
  </div>

  <!-- Timeline Container -->
  <div class="relative max-w-4xl mx-auto">
    <!-- Central Line -->
    <div
      class="timeline-line absolute left-4 md:left-1/2 top-0 w-0.5 h-full bg-gradient-to-b from-accent-primary via-accent-secondary to-transparent origin-top"
    ></div>

    <!-- Data Stream Particles (CSS Animation) -->
    <div
      class="absolute left-4 md:left-1/2 top-0 w-1 h-full overflow-hidden pointer-events-none -translate-x-1/2"
    >
      {#each Array(8) as _, i}
        <div
          class="absolute w-1 h-4 bg-accent-primary/60 rounded-full blur-[2px] animate-data-stream"
          style="animation-delay: {i * 0.5}s; left: 0;"
        ></div>
      {/each}
    </div>

    <!-- Timeline Entries -->
    {#each experiences as exp, i}
      <div
        class="timeline-entry relative flex flex-col md:flex-row {exp.side === 'left'
          ? 'md:flex-row'
          : 'md:flex-row-reverse'} items-start md:items-center gap-8 mb-16 pl-12 md:pl-0"
      >
        <!-- Content Card -->
        <div
          class="w-full md:w-5/12 p-6 bg-surface/80 backdrop-blur-md rounded-lg border border-text-main/10 hover:border-accent-primary/30 transition-colors duration-300"
        >
          <span class="text-accent-secondary font-mono text-sm tracking-widest">
            {exp.date}
          </span>
          <h3 class="text-2xl font-bold text-text-main mt-2">{exp.title}</h3>
          <p class="text-accent-primary font-medium mt-1">{exp.company}</p>
          <p class="text-text-main/60 mt-4 text-sm leading-relaxed">
            {exp.description}
          </p>
        </div>

        <!-- Connection Node -->
        <div
          class="flex absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent-primary border-4 border-background-color z-10"
        ></div>

        <!-- Spacer for opposite side -->
        <div class="hidden md:block w-5/12"></div>
      </div>
    {/each}
  </div>
</section>

<style>
  @keyframes data-stream {
    0% {
      top: -10%;
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      top: 110%;
      opacity: 0;
    }
  }

  .animate-data-stream {
    animation: data-stream 4s linear infinite;
  }
</style>
