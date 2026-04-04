<script>
    import { T, useTask } from "@threlte/core";
    import {
        Float,
        OrbitControls,
        Environment,
        ContactShadows,
        Grid,
    } from "@threlte/extras";
    import * as THREE from "three";
    import CyberPlant from "./CyberPlant.svelte";
    import { spring } from "svelte/motion";

    import { theme } from "$lib/stores/theme";

    let rotation = 0;

    // Reactive colors based on theme
    $: lightColor = $theme === "dark" ? "#BA0C2F" : "#BA0C2F"; // Keep red in both for brand
    $: ambientIntensity = $theme === "dark" ? 0.3 : 1.0;
    $: bgEnv = $theme === "dark" ? "city" : "apartment";

    const mouse = spring({ x: 0, y: 0 }, { stiffness: 0.05, damping: 0.25 });

    function onMouseMove(e) {
        mouse.set({
            x: (e.clientX / window.innerWidth) * 2 - 1,
            y: -(e.clientY / window.innerHeight) * 2 + 1,
        });
    }

    useTask((delta) => {
        rotation += delta * 0.2;
    });

    if (typeof window !== "undefined") {
        window.addEventListener("mousemove", onMouseMove);
    }
</script>

<T.PerspectiveCamera makeDefault position={[0, 2, 8]} fov={45}>
    <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableDamping
        autoRotate
        autoRotateSpeed={0.5}
    />
</T.PerspectiveCamera>

<!-- Lighting -->
<T.AmbientLight intensity={ambientIntensity} />
<T.DirectionalLight position={[10, 10, 5]} intensity={1.5} color={lightColor} />
<T.PointLight position={[-10, -10, -5]} intensity={2} color="#8a0923" />

<!-- Environment for Reflections -->
<Environment preset="city" />

<!-- Main Object: Procedural Plant -->
<Float floatIntensity={0.5} rotationIntensity={0.2}>
    <T.Group
        rotation.y={rotation}
        rotation.x={$mouse.y * 0.1}
        rotation.z={$mouse.x * 0.1}
    >
        <CyberPlant depth={6} length={1.2} />
    </T.Group>
</Float>

<!-- Engineering Grid Floor -->
<Grid
    position.y={-3}
    infiniteGrid
    sectionColor="#353535"
    cellColor="#121212"
    fadeDistance={20}
    sectionThickness={1}
/>

<ContactShadows scale={10} blur={2} far={10} opacity={0.5} position.y={-2.99} />
