<script>
  import { onMount } from "svelte";
  import gsap from "gsap";

  let projects = [
    {
      name: "Echo CRM",
      link: "https://github.com/kellenGary/echo-crm",
      stack: "Next.js, TypeScript, Python, Gemini API, ChromaDB, PostgreSQL",
      description: "",
      image: "",
    },
    {
      name: "Petal.",
      link: "https://github.com/kellenGary/petal.",
      stack: "React Native, Expo, TypeScript, .NET, Supabase, SQLite",
      description: "",
      image: "",
    },
    {
      name: "Auscultation Trainer",
      link: "https://github.com/andrewfrueh/CON-XR_Cardiac_Auscultation_Trainer",
      stack: "HTML, Web Audio API, TypeScript, CSS, Three.js, Vite",
      description: "",
      image: "",
    },
    {
      name: "Smarthub Desktop",
      link: "https://github.com/kellenGary/smarthub-desktop",
      stack: "Next.js, Electron, Node.js",
      description:
        "Real-time recording software to analyze and monitor wheelchair data from Smarthub exclusive devices.",
      image: "smarthub.png",
    },
    {
      name: "Triangle Pledge Hub",
      link: "https://github.com/kellenGary/triangle-candidate-website",
      stack: "Next.js, Google APIs",
      description:
        "Minimal website resource with real-time leaderboards and essay submission.",
      image: "pledge.png",
    },
    {
      name: "Degree Audit Assistant",
      link: "https://github.com/kellenGary/OSU-Degree-Audit-Assistant",
      stack: "SpringBoot, JSoup",
      description:
        "Assistant for OSU students to view a clear degree audit and plan schedules.",
      image: "audit.png",
    },
    {
      name: "LockedIn",
      link: "https://github.com/StevenEgnaczyk/LockedIn",
      stack: "React, Three.js, WebGL",
      description: "3D social network visualization for LinkedIn connections.",
      image: "lockedin.png",
    },
    {
      name: "Fruit Ninja AI",
      link: "https://github.com/kellenGary/Fruit-Ninja-YOLO-Slicer",
      stack: "Python, YOLO, Roboflow",
      description:
        "Computer vision AI trained to play Fruit Ninja with 92% accuracy.",
      image: "fruit.png",
    },
    {
      name: "DataBased",
      link: "https://github.com/StevenEgnaczyk/DatabaseD",
      stack: "React, Firebase",
      description:
        "Student material database for bookmarking and sharing resources.",
      image: "databased.png",
    },
  ];

  let cursorRef;

  onMount(() => {
    // Custom cursor logic if needed, or just let CSS handle hover states
    const moveCursor = (e) => {
      if (cursorRef) {
        gsap.to(cursorRef, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.2,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  });
</script>

<div
  id="projects"
  class="relative w-full min-h-screen py-32 z-10 bg-background-color/80 backdrop-blur-md"
>
  <div class="mb-20 px-4 md:px-20">
    <h2
      class="text-6xl md:text-9xl font-black text-text-main/15 uppercase tracking-tighter text-right"
    >
      Selected<br />Works
    </h2>
  </div>

  <!-- Project List -->
  <div class="flex flex-col">
    {#each projects as project, i}
      <a
        href={project.link}
        target="_blank"
        class="group relative py-12 px-4 md:px-20 border-t border-text-main/10 transition-all duration-300 ease-out hover:bg-text-main/5 flex flex-col md:flex-row items-baseline gap-4 md:gap-12"
      >
        <span class="font-mono text-sm text-accent-secondary">0{i + 1}</span>

        <h3
          class="text-4xl md:text-6xl font-bold uppercase tracking-tight group-hover:text-text-main group-hover:translate-x-4 transition-all duration-300 ease-out text-text-main/70"
        >
          {project.name}
        </h3>

        <div class="flex-grow"></div>

        <p
          class="md:text-right font-mono text-sm text-text-main/40 uppercase tracking-widest group-hover:text-accent-secondary transition-colors"
        >
          {project.stack}
        </p>
      </a>
    {/each}
    <div class="border-t border-text-main/10"></div>
  </div>
</div>

<!-- Custom Helper Cursor (Optional) -->
<div
  bind:this={cursorRef}
  class="fixed top-0 left-0 w-4 h-4 rounded-full bg-accent-secondary pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 mix-blend-difference hidden md:block"
></div>
