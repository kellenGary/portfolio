<script>
  import { onMount } from "svelte";
  import gsap from "gsap";

  // Text splitting can be faked with simple mapping for this effect
  const titleLines = ["KELLEN", "GARY"];
  const subTitle = "Associate Software Engineer at NetJets";
  const subTitle2 = "Columbus, OH";

  let titleRefs = [];
  let subtitleRef;
  let subtitle2Ref;

  onMount(() => {
    // Setup initial states
    gsap.set(titleRefs, { y: 100, opacity: 0 });
    gsap.set([subtitleRef, subtitle2Ref], { opacity: 0, x: -20 });

    // Intro Animation
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    tl.to(titleRefs, {
      y: 0,
      opacity: 1,
      duration: 1.5,
      stagger: 0.15,
      delay: 0.2,
    }).to(
      [subtitleRef, subtitle2Ref],
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.2,
      },
      "-=1.0",
    );

    // Subtle hover effects setup
    document.querySelectorAll(".hover-text").forEach((el) => {
      el.addEventListener("mouseenter", () => {
        gsap.to(el, {
          letterSpacing: "0.2em",
          duration: 0.4,
          ease: "power2.out",
          color: "#aaaaaa",
        });
      });
      el.addEventListener("mouseleave", () => {
        gsap.to(el, {
          letterSpacing: "normal",
          duration: 0.4,
          ease: "power2.out",
          color: "#f0f0f0",
        });
      });
    });

    // NetJets Ode - Randomized Multiple Jets
    document.querySelectorAll(".netjets-blip").forEach((jet) => {
      animateJet(jet);
    });
  });

  function animateJet(jet) {
    if (!jet) return;
    // Four possible starting edges: 0: top, 1: right, 2: bottom, 3: left
    const side = Math.floor(Math.random() * 4);
    let startX, startY, endX, endY;

    if (side === 0) { // Top to bottom
      startX = Math.random() * 100; startY = -20;
      endX = startX + (Math.random() * 60 - 30); endY = 120;
    } else if (side === 1) { // Right to left
      startX = 120; startY = Math.random() * 100;
      endX = -20; endY = startY + (Math.random() * 60 - 30);
    } else if (side === 2) { // Bottom to top
      startX = Math.random() * 100; startY = 120;
      endX = startX + (Math.random() * 60 - 30); endY = -20;
    } else { // Left to right
      startX = -20; startY = Math.random() * 100;
      endX = 120; endY = startY + (Math.random() * 60 - 30);
    }

    // Determine correct visual angle taking viewport aspect ratio into account
    const dy = (endY - startY) * window.innerHeight;
    const dx = (endX - startX) * window.innerWidth;
    const angle = Math.atan2(dy, dx) * (180 / Math.PI);

    gsap.fromTo(jet, 
      { 
        x: `${startX}vw`, 
        y: `${startY}vh`, 
        rotation: angle,
        opacity: 0
      },
      {
        x: `${endX}vw`,
        y: `${endY}vh`,
        opacity: Math.random() * 0.4 + 0.3, // Varying opacity
        duration: Math.random() * 15 + 15,  // Slow sweeping movement
        ease: "none",
        delay: Math.random() * 8, // Stagger appearances
        onComplete: () => animateJet(jet) // Once done, pick a new random pattern! //
      }
    );
  }

  const scroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
</script>

<section
  id="landing"
  class="relative z-10 w-full min-h-screen flex flex-col justify-end p-8 md:p-16 pointer-events-none mix-blend-difference overflow-hidden"
>
  <!-- Ambient randomized jets array -->
  {#each Array(3) as _}
    <div
      class="netjets-blip absolute top-0 left-0 z-50 w-max flex items-center gap-1 opacity-0 pointer-events-none select-none text-white origin-left"
    >
      <!-- Ensure origin is at left to rotate around the tail/center well -->
      <div
        class="w-48 md:w-80 h-[1.5px] bg-gradient-to-r from-transparent to-white/60"
      ></div>
      <svg
        class="w-[18px] h-[18px] text-white rotate-90"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"
        />
      </svg>
    </div>
  {/each}
  <!-- Main Content Bottom Left Aligned -->
  <div
    class="relative z-20 mix-blend-difference w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-12 pb-12"
  >
    <div class="flex flex-col gap-2">
      {#each titleLines as line, i}
        <div class="overflow-hidden leading-none">
          <h1
            bind:this={titleRefs[i]}
            class="text-[14vw] md:text-[10vw] leading-[0.8] font-black tracking-tighter text-text-main hover-text"
            style="text-transform: uppercase;"
          >
            {line}
          </h1>
        </div>
      {/each}
    </div>

    <div class="flex flex-col w-full md:w-1/3 gap-4 pointer-events-auto">
      <p
        bind:this={subtitleRef}
        class="text-lg md:text-xl font-light text-text-main/90 leading-tight"
      >
        {subTitle}
      </p>
      <p
        bind:this={subtitle2Ref}
        class="text-sm font-mono text-text-muted mt-2"
      >
        {subTitle2}
      </p>
    </div>
  </div>
</section>
