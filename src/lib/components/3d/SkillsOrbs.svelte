<script>
  import { T, useTask } from "@threlte/core";
  import { OrbitControls, Float, Text } from "@threlte/extras";
  import * as THREE from "three";
  import { theme } from "$lib/stores/theme";

  // Skills data with categories
  const skills = [
    // Frontend (Red accent)
    { name: "React", category: "frontend", position: [-3, 1, 0] },
    { name: "Svelte", category: "frontend", position: [-2, 2.5, 1] },
    { name: "Next.js", category: "frontend", position: [-1.5, 0.5, 2] },
    { name: "Three.js", category: "frontend", position: [-2.5, -0.5, -1] },

    // Backend (Blue)
    { name: "Node.js", category: "backend", position: [2, 1.5, 0] },
    { name: "Python", category: "backend", position: [3, 0, 1] },
    { name: "Java", category: "backend", position: [2.5, -1, -1] },
    { name: "SpringBoot", category: "backend", position: [1.5, 2, -0.5] },

    // Tools (Green)
    { name: "Git", category: "tools", position: [0, 3, 0] },
    { name: "Docker", category: "tools", position: [0.5, -2, 1] },
    { name: "Firebase", category: "tools", position: [-0.5, -1.5, -1.5] },
    { name: "AWS", category: "tools", position: [0, 0, 2.5] },
  ];

  // Category colors
  const categoryColors = {
    frontend: "#BA0C2F", // Red (brand)
    backend: "#3B82F6", // Blue
    tools: "#10B981", // Green
  };

  let time = 0;
  let hoveredSkill = null;

  useTask((delta) => {
    time += delta;
  });

  $: bgColor = $theme === "dark" ? "#050505" : "#E5E5E5";
</script>

<T.PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />

<OrbitControls
  enableZoom={false}
  enablePan={false}
  autoRotate
  autoRotateSpeed={0.3}
  enableDamping
/>

<!-- Ambient & Point Lights -->
<T.AmbientLight intensity={0.4} />
<T.PointLight position={[5, 5, 5]} intensity={1} color="#BA0C2F" />
<T.PointLight position={[-5, -5, 5]} intensity={0.8} color="#3B82F6" />

<!-- Skill Orbs -->
{#each skills as skill, i}
  {@const color = categoryColors[skill.category]}
  <Float floatIntensity={0.5} rotationIntensity={0.3} speed={2 + i * 0.1}>
    <T.Group position={skill.position}>
      <!-- The Orb -->
      <T.Mesh
        on:pointerenter={() => (hoveredSkill = skill.name)}
        on:pointerleave={() => (hoveredSkill = null)}
        scale={hoveredSkill === skill.name ? 1.3 : 1}
      >
        <T.IcosahedronGeometry args={[0.5, 1]} />
        <T.MeshStandardMaterial
          {color}
          emissive={color}
          emissiveIntensity={hoveredSkill === skill.name ? 1.5 : 0.5}
          metalness={0.8}
          roughness={0.2}
          transparent
          opacity={0.9}
        />
      </T.Mesh>

      <!-- Skill Label (visible on hover) -->
      {#if hoveredSkill === skill.name}
        <Text
          text={skill.name}
          fontSize={0.25}
          position={[0, 0.8, 0]}
          color={$theme === "dark" ? "#ffffff" : "#121212"}
          anchorX="center"
          anchorY="middle"
          font="/fonts/Inter-Bold.woff"
        />
      {/if}
    </T.Group>
  </Float>
{/each}
