<script>
    import { T, useTask } from "@threlte/core";
    import * as THREE from "three";
    import { theme } from "$lib/stores/theme";

    // Plant parameters
    export let depth = 5;
    export let length = 1.0;
    export let spread = 0.6;
    export let thickness = 0.08;

    // Data containers
    let branches = [];
    let leaves = [];
    let nodes = []; // Glowing joints

    function generateBranch(
        start,
        dir,
        currentDepth,
        currentLength,
        currentThickness,
    ) {
        if (currentDepth <= 0) {
            // Leaf at the end
            leaves.push({
                position: start.clone(),
                rotation: new THREE.Euler(
                    Math.random() * Math.PI,
                    Math.random() * Math.PI,
                    Math.random() * Math.PI,
                ),
            });
            return;
        }

        // Curved Segment Logic
        // Instead of one cylinder, we curve slightly?
        // For performance, we'll keep straight segments but add "Nodes" (joints)
        // and randomize the end point more organially to simulate curvature over iterations.

        const end = start
            .clone()
            .add(dir.clone().multiplyScalar(currentLength));

        // Add Branch Geometry Data
        // Midpoint for position, Quaternion for rotation
        const mid = start.clone().add(end).multiplyScalar(0.5);
        const quaternion = new THREE.Quaternion().setFromUnitVectors(
            new THREE.Vector3(0, 1, 0),
            dir,
        );
        const rotation = new THREE.Euler().setFromQuaternion(quaternion);

        branches.push({
            position: mid,
            rotation: rotation,
            scale: [currentThickness, currentLength, currentThickness],
        });

        // Add a "Data Node" (fruit/joint) at the start connection if depth is high enough
        if (currentDepth < depth && Math.random() > 0.3) {
            nodes.push({
                position: start.clone(),
                scale: currentThickness * 3, // Node is larger than branch
            });
        }

        // Spawn children
        const numChildren = currentDepth === depth ? 4 : 2; // More branches at root
        for (let i = 0; i < numChildren; i++) {
            // Organic Curve: Randomize direction but bias upwards
            const offset = new THREE.Vector3(
                (Math.random() - 0.5) * spread,
                (Math.random() - 0.2) * spread, // Bias up slightly
                (Math.random() - 0.5) * spread,
            ).normalize();

            const newDir = dir.clone().add(offset).normalize();

            generateBranch(
                end,
                newDir,
                currentDepth - 1,
                currentLength * 0.85,
                currentThickness * 0.7,
            );
        }
    }

    // Generate
    // Root cluster
    const rootStart = new THREE.Vector3(0, -2, 0);
    const rootDir = new THREE.Vector3(0, 1, 0);

    // Clear previous before generating (reactive if probs changed, though simplified here)
    branches = [];
    leaves = [];
    nodes = [];

    generateBranch(rootStart, rootDir, depth, length, thickness);

    // Animation time
    let time = 0;
    useTask((delta) => {
        time += delta;
    });

    $: branchColor = $theme === "dark" ? "#1a1a1a" : "#cccccc";
    $: emissiveColor = "#BA0C2F";
    $: roughness = $theme === "dark" ? 0.1 : 0.8;
    $: metalness = $theme === "dark" ? 0.9 : 0.4;
    $: leafOpacity = $theme === "dark" ? 0.4 : 0.9;
</script>

<T.Group>
    <!-- Branches -->
    {#each branches as branch}
        <T.Mesh
            position={[branch.position.x, branch.position.y, branch.position.z]}
            rotation={[branch.rotation.x, branch.rotation.y, branch.rotation.z]}
            scale={branch.scale}
        >
            <T.CylinderGeometry args={[1, 1, 1, 5]} />
            <T.MeshPhysicalMaterial
                color={branchColor}
                emissive={emissiveColor}
                emissiveIntensity={0.1}
                {metalness}
                {roughness}
                clearcoat={1.0}
            />
        </T.Mesh>
    {/each}

    <!-- Data Nodes: Glowing Fruits -->
    {#each nodes as node}
        <T.Mesh
            position={[node.position.x, node.position.y, node.position.z]}
            scale={node.scale}
        >
            <T.IcosahedronGeometry args={[1, 0]} />
            <T.MeshStandardMaterial
                color={emissiveColor}
                emissive={emissiveColor}
                emissiveIntensity={2}
                toneMapped={false}
            />
        </T.Mesh>
    {/each}

    <!-- Leaves: Holographic Planes -->
    {#each leaves as leaf}
        <T.Mesh
            position={[leaf.position.x, leaf.position.y, leaf.position.z]}
            rotation={[
                leaf.rotation.x + Math.sin(time) * 0.2, // Sway
                leaf.rotation.y + Math.cos(time * 0.7) * 0.2,
                leaf.rotation.z,
            ]}
        >
            <T.PlaneGeometry args={[0.3, 0.6]} />
            <T.MeshBasicMaterial
                color={emissiveColor}
                side={THREE.DoubleSide}
                transparent
                opacity={leafOpacity}
                depthWrite={false}
            />
        </T.Mesh>
    {/each}
</T.Group>
