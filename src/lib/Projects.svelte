<script>
    import ProjectsCarousel from "./ProjectsCarousel.svelte";
</script>

<div class="relative flex flex-col h-screen max-h-screen min-w-screen">
    <img src="./projects/m8.png"
             class="absolute bottom-40 hidden sm:block w-auto max-h-[20vh] max-w-[20vw] object-contain transform scale-[0.85] sm:scale-90 md:scale-100"
             alt="m8"
    />

    <p class="absolute text-2xl sm:text-4xl md:text-5xl underline decoration-accent-red underline-offset-6 leading-[0.5] p-2 md:p-8">Projects</p>

    <ProjectsCarousel />
</div>