<script>
    import { onMount } from "svelte";
    import gsap from "gsap";

    export let count = 20;

    let container;
    
    // Crosshair corners
    onMount(() => {
    });
</script>

<div bind:this={container} class="fixed inset-0 pointer-events-none z-0 overflow-hidden mix-blend-exclusion">
    


    <!-- Random plus symbols acting as 'stars' but matching the grid aesthetic -->
    {#each Array(count) as _, i}
        <div 
            class="absolute font-mono text-[8px] text-white/20 select-none"
            style="
                left: {Math.random() * 100}vw; 
                top: {Math.random() * 100}vh;
                opacity: {Math.random() * 0.5 + 0.1};
            "
        >
            +
        </div>
    {/each}
</div>
