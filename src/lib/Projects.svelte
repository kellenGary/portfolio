<script>
    import ProjectsCarousel from "./ProjectsCarousel.svelte";
</script>

<div class="relative flex flex-col h-screen max-h-screen min-w-screen">
    <img src="./projects/m8.png"
             class="absolute bottom-40 hidden sm:block  max-w-[20dvw] h-auto object-contain"
             alt="m8"
    />

    <p class="absolute text-2xl sm:text-4xl md:text-5xl underline decoration-accent-red underline-offset-6 leading-[0.5] p-2 md:p-8">Projects</p>

    <ProjectsCarousel />
</div>