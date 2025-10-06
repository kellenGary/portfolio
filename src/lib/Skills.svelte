<script>
    import { inView } from '$lib/actions/inView.js';
    const reveal = { threshold: 0.15, className: 'in-view' };

    const skillCategories = [
        {
            category: "Languages",
            skills: [
                { name: "JavaScript", level: 90 },
                { name: "TypeScript", level: 85 },
                { name: "Python", level: 85 },
                { name: "Java", level: 80 },
                { name: "C", level: 75 },
                { name: "SQL", level: 80 }
            ]
        },
        {
            category: "Frameworks & Libraries",
            skills: [
                { name: "React", level: 90 },
                { name: "Next.js", level: 90 },
                { name: "Svelte", level: 85 },
                { name: "Node.js", level: 85 },
                { name: "FastAPI", level: 80 },
                { name: "Spring Boot", level: 75 }
            ]
        },
        {
            category: "Tools & Technologies",
            skills: [
                { name: "Git", level: 90 },
                { name: "Docker", level: 75 },
                { name: "Firebase", level: 85 },
                { name: "Supabase", level: 80 },
                { name: "Tailwind CSS", level: 95 },
                { name: "Three.js", level: 70 }
            ]
        }
    ];
</script>

<div class="relative flex flex-col min-h-screen min-w-screen" id="skills">
    <img src="/about/m5.png"
         class="absolute left-0 top-40 hidden sm:block w-auto max-h-[20vh] max-w-[20vw] object-contain transform scale-[0.85] sm:scale-90 md:scale-100"
         alt="decorative"
    />

    <img src="/about/m7.png"
         class="absolute right-0 bottom-20 hidden sm:block w-auto max-h-[20vh] max-w-[20vw] object-contain transform scale-[0.85] sm:scale-90 md:scale-100"
         alt="decorative"
    />

    <p class="absolute text-2xl sm:text-4xl md:text-5xl underline decoration-accent-red underline-offset-6 leading-[0.5] p-2 md:p-8">Skills & Technologies</p>

    <div class="flex flex-col justify-center items-center gap-8 md:gap-12 grow p-4 md:p-8 pt-20 md:pt-24">
        {#each skillCategories as category, categoryIndex}
            <div class="w-full max-w-5xl reveal" use:inView={reveal} style="--reveal-delay: {categoryIndex * 120}ms;">
                <h3 class="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-center">{category.category}</h3>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {#each category.skills as skill, skillIndex}
                        <div 
                            class="skill-card bg-accent-gray border border-border-gray rounded-lg p-4 md:p-6 reveal transition-all duration-300 hover:border-accent-red hover:scale-105 hover:shadow-lg hover:shadow-accent-red/20"
                            use:inView={reveal}
                            style="--reveal-delay: {(categoryIndex * 120) + (skillIndex * 40)}ms;"
                        >
                            <div class="flex justify-between items-center mb-3">
                                <span class="text-lg md:text-xl font-semibold">{skill.name}</span>
                                <span class="text-sm md:text-base text-gray-400">{skill.level}%</span>
                            </div>
                            <div class="w-full bg-border-gray rounded-full h-2 overflow-hidden">
                                <div 
                                    class="skill-bar bg-gradient-to-r from-accent-red to-red-600 h-full rounded-full transition-all duration-1000 ease-out"
                                    style="width: {skill.level}%"
                                ></div>
                            </div>
                        </div>
                    {/each}
                </div>
            </div>
        {/each}
    </div>
</div>

<style>
    .skill-card {
        will-change: transform, border-color;
    }

    .skill-bar {
        animation: fillBar 1.5s ease-out forwards;
    }

    @keyframes fillBar {
        from {
            width: 0;
        }
    }

    /* Add smooth hover transition */
    .skill-card:hover .skill-bar {
        box-shadow: 0 0 10px rgba(186, 12, 47, 0.5);
    }
</style>
