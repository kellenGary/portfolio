<script>
    import { browser } from '$app/environment';
    import { onMount } from 'svelte';

    // Default dimensions for all project
    const DEFAULT_DIMENSIONS = { width: 800, height: 450 };

    // Initialize all project with default dimensions
    let projects = [
        {
            path: 'smarthub.png',
            dimensions: DEFAULT_DIMENSIONS,
            name: "Smarthub Desktop",
            link: 'smarthub',
            stack: "Next.js, Electron, Node.js, Supabase",
            description: "Real-time recording software to analyze and monitor wheelchair data " +
                "from Smarthub exclusive devices. Using Bluetooth low energy connections, these devices send " +
                "gyroscopic and acceleration data to the Node.js back end to be processed and displayed within the " +
                "Next.js desktop application created using Electron."
        },
        {
            path: 'pledge.png',
            dimensions: DEFAULT_DIMENSIONS,
            name: "Triangle Pledge Hub",
            link: "triangle-pledge-hub",
            stack: "Next.js, Google APIs",
            description: "Minimal website to be used as a resource for the Spring 2025 Pledge Class of OSU Triangle. " +
                "With the power of Next.js API endpoints and the Google APIs, this website has a real-time leaderboard " +
                "for quiz scores and a submission page for an essay. "
        },
        {
            path: 'audit.png',
            dimensions: DEFAULT_DIMENSIONS,
            name: "OSU Degree Audit Assistant",
            link: "osu-degree-audit",
            stack: "HTML, CSS, SpringBoot, JSoup",
            description: "Degree audit assistant for OSU students to view a more clear and concise degree audit. " +
                "Displays current degree completion as well as containers containing remaining requirements to graduate. " +
                "These containers have hyperlinks for course names allowing to quickly schedule and plan your next semester. "
        },
        {
            path: 'lockedin.png',
            dimensions: DEFAULT_DIMENSIONS,
            name: "LockedIn",
            link: "lockedin",
            stack: "React, Three.js, Python, Firebase, WebGL",
            description: "Single page application allowing users to view dynamic social networks through LinkedIn connections. " +
                "This provides an in depth visual for finding that connection that could help you discover " +
                " professional opportunities. "
        },
        {
            path: 'fruit.png',
            dimensions: DEFAULT_DIMENSIONS,
            name: "Fruit Ninja Image Detection",
            link: "fruit-ninja",
            stack: "Python, YOLO, Roboflow",
            description: "Image detection AI trained using YOLO to detect and slice fruits when playing Fruit Ninja. " +
                "The YOLO model was trained using in game images that had added border boxes using Roboflow for quickness. " +
                "Overall the accuracy of the model resulted in 92% of the fruits being sliced. "
        },
        {
            path: 'databased.png',
            dimensions: DEFAULT_DIMENSIONS,
            name: "DataBased",
            link: 'databased',
            stack: "React, CSS, Flask, Firebase, Firestore",
            description: "Student database for all materials college related. Within DataBased users have the ability " +
                "to bookmark, download, and upload files of their choice. The purpose is to allow students to have " +
                "reliable resources when completing homework or studying for the next exam. "
        },
    ];

    // Load actual image dimensions after component mounts (browser-only)
    onMount(() => {
        if (browser) {
            projects.forEach((project, index) => {
                const img = new Image();
                img.onload = () => {
                    projects[index].dimensions = {
                        width: img.width,
                        height: img.height
                    };
                    projects = projects; // Trigger reactivity update
                };
                img.src = `/projects/${project.path}`;
            });
        }
    });

    let selectedIndex = 0;

    function swapFocus(index) {
        selectedIndex = index % projects.length;
    }

    function getPositionInQueue(index) {
        // Calculate position relative to selectedIndex in a circular way
        const position = (index - selectedIndex + projects.length) % projects.length;
        return position;
    }

    function getZIndex(index) {
        // Always give the highest priority to the currently selected item
        if (index === selectedIndex) {
            return 9; // Much higher value to ensure it's always on top
        }

        const position = getPositionInQueue(index);
        // Higher z-index for items closer to the front of the queue
        return projects.length - position;
    }

    function nextImage() {
        selectedIndex = (selectedIndex + 1) % projects.length;
    }

    function previousImage() {
        selectedIndex = (selectedIndex - 1 + projects.length) % projects.length;
    }

    // Add these variables for drag functionality
    let isDragging = false;
    let startX = 0;
    let dragOffset = 0;
    const DRAG_THRESHOLD = 100; // Minimum drag distance to trigger slide change

    function handleDragStart(event) {
        isDragging = true;
        startX = event.type.includes('mouse') ? event.clientX : event.touches[0].clientX;
        event.preventDefault();
    }

    function handleDragMove(event) {
        if (!isDragging) return;

        const currentX = event.type.includes('mouse') ? event.clientX : event.touches[0].clientX;
        dragOffset = currentX - startX;
        event.preventDefault();
    }

    function handleDragEnd() {
        if (!isDragging) return;

        // If dragged far enough, change slide
        if (Math.abs(dragOffset) > DRAG_THRESHOLD) {
            if (dragOffset > 0) {
                // Dragged right, go to previous
                previousImage();
            } else {
                // Dragged left, go to next
                nextImage();
            }
        }

        // Reset drag state
        isDragging = false;
        dragOffset = 0;
    }

    // Update transform function to account for drag
    function getTransform(index) {
        const position = getPositionInQueue(index);
        const baseX = 75 + position * 200; // 200px spacing between items
        const offset = isDragging ? dragOffset : 0;
        return `translateX(${baseX + offset}px)`;
    }

</script>

<div class="flex flex-col justify-around md:flex-row grow">
    <div class="flex flex-col justify-center md:min-w-1/3 md:max-w-1/3 p-8 pt-24 md:pt-0">
        <p class="font-bold text-4xl">{projects[selectedIndex].name}</p>
        <p class="font-semibold text-xl">{projects[selectedIndex].stack}</p>
        <p class="text-xl">{projects[selectedIndex].description}</p>
        <a href='/project/{projects[selectedIndex].link}'>
            <span class="font-bold underline hover:animate-pulse decoration-accent-red underline-offset-6 cursor-pointer">Explore</span>
        </a>
    </div>

    <div class="relative shrink-0 grow flex overflow-hidden"
         aria-label="Draggable projects carousel. Swipe left or right to navigate between projects."
         role="region">
        <div class="relative mb-10 scale-50 sm:scale-100 sm:h-full flex items-center">
            {#each projects as project, index}
                <button class="absolute select-none transition-all"
                        on:mousedown={handleDragStart}
                        on:mousemove={handleDragMove}
                        on:mouseup={handleDragEnd}
                        on:mouseleave={handleDragEnd}
                        on:touchstart={handleDragStart}
                        on:touchmove={handleDragMove}
                        on:touchend={handleDragEnd}
                        on:touchcancel={handleDragEnd}
                        style="transform: {getTransform(index)};
                        z-index: {getZIndex(index)};
                        transition: {isDragging ? 'none' : 'transform 500ms ease-in-out 300ms, opacity 500ms ease-in-out 100ms, z-index 300ms ease-in-out'};
                        opacity: {getPositionInQueue(index) < projects.length/2 ? 1 : 0.5};"
                        on:click={() => !isDragging && swapFocus(index)}
                >
                    <img
                            src={`/projects/${project.path}`}
                            alt={project.name}
                            class="rounded-lg cursor-pointer max-w-2xl"
                            style="transform: scale({getPositionInQueue(index) === 0 ? 1.2 : (1 - getPositionInQueue(index) * 0.1)});
                            transition: {isDragging ? 'none' : 'transform 500ms ease-in-out'}"
                    />
                </button>
            {/each}
        </div>
    </div>
</div>

