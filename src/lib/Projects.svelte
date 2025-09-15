<script>
    import ProjectsCarousel from "./ProjectsCarousel.svelte";
    import { inView } from '$lib/actions/inView.js';
    const reveal = { threshold: 0.15, className: 'in-view' };
    const revealSlow = { threshold: 0.15, className: 'in-view' };
</script>

<div class="relative flex flex-col flex-1 min-h-0 min-w-screen" id="projects">
    <img src="/projects/m8.png"
             class="absolute bottom-40 hidden sm:block w-auto max-h-[20vh] max-w-[20vw] object-contain transform scale-[0.85] sm:scale-90 md:scale-100"
             alt="m8"
    />

    <p class="absolute text-2xl sm:text-4xl md:text-5xl underline decoration-accent-red underline-offset-6 leading-[0.5] p-2 md:p-8 reveal" use:inView={reveal}>Projects</p>

    <div class="reveal grow flex" use:inView={revealSlow} style="--reveal-delay: 120ms;">
        <ProjectsCarousel />
    </div>
</div>

