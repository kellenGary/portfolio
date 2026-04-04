<script>
    import { Canvas } from "@threlte/core";
    import HeroExperience from "./HeroExperience.svelte";
    import { onMount } from "svelte";
    import * as THREE from "three";

    let pixelRatio = 1;

    onMount(() => {
        pixelRatio = window.devicePixelRatio;
    });
</script>

<div class="fixed inset-0 w-full h-full -z-10 bg-background-color">
    <Canvas toneMapping={THREE.NoToneMapping}>
        <HeroExperience />
    </Canvas>
</div>
