<script>
    import ProjectsCarousel from "./ProjectsCarousel.svelte";
</script>

<div class="relative flex flex-col h-screen max-h-screen min-w-screen">
    <img src="./projects/m8.png"
             class="absolute bottom-40"
             alt="m8"
    />

    <p class="absolute text-5xl underline decoration-accent-red underline-offset-6 leading-[0.5] p-8">Projects</p>

    <ProjectsCarousel />
</div>