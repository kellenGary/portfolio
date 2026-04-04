<script>
    import { onMount } from "svelte";
    import gsap from "gsap";
    import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

    gsap.registerPlugin(ScrollTrigger);

    let container;

    onMount(() => {
        const sections = gsap.utils.toArray(".about-section");

        // Section reveals
        sections.forEach((section) => {
            gsap.fromTo(
                section,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: section,
                        start: "top 80%",
                        end: "top 50%",
                        scrub: 1,
                    },
                },
            );
        });

        // Vine Growth Animation
        const vines = gsap.utils.toArray(".vine-path");
        vines.forEach((vine) => {
            const length = vine.getTotalLength();
            gsap.set(vine, {
                strokeDasharray: length,
                strokeDashoffset: length,
            });

            gsap.to(vine, {
                strokeDashoffset: 0,
                ease: "none",
                scrollTrigger: {
                    trigger: container,
                    start: "top center",
                    end: "bottom bottom",
                    scrub: 1,
                },
            });
        });
    });
</script>

<section
    id="about"
    bind:this={container}
    class="relative w-full py-24 px-4 md:px-20 overflow-hidden bg-background-color/50 backdrop-blur-sm"
>
    <!-- Digital Vines (Abstract SVGs) -->
    <svg
        class="absolute top-0 left-0 w-full h-full pointer-events-none z-0 opacity-30"
        preserveAspectRatio="none"
    >
        <!-- Main central vine -->
        <path
            class="vine-path"
            d="M 50% 0 Q 60% 200, 40% 400 T 50% 800 T 60% 1200"
            fill="none"
            stroke="#00FF9D"
            stroke-width="2"
        />
        <!-- Side branches -->
        <path
            class="vine-path"
            d="M 50% 300 Q 80% 350, 90% 500"
            fill="none"
            stroke="#008F58"
            stroke-width="1"
        />
        <path
            class="vine-path"
            d="M 50% 600 Q 20% 650, 10% 800"
            fill="none"
            stroke="#008F58"
            stroke-width="1"
        />
    </svg>

    <!-- Header -->
    <div class="mb-32 about-section relative z-10">
        <h2
            class="text-6xl md:text-9xl font-black text-text-main/15 uppercase tracking-tighter"
        >
            About<br /><span class="text-accent-primary/30">Me</span>
        </h2>
    </div>

    <!-- Intro -->
    <div
        class="grid grid-cols-1 md:grid-cols-2 gap-16 mb-40 about-section relative z-10"
    >
        <div class="md:col-start-2">
            <h3
                class="text-4xl md:text-5xl font-bold mb-8 leading-tight text-text-main"
            >
                Engineering <span class="text-accent-primary">Scalable</span> and
                <span class="text-accent-primary">Performant Systems</span>.
            </h3>
            <p
                class="text-xl md:text-2xl font-light text-text-muted leading-relaxed mb-6"
            >
                I am a 22-year-old <span class="text-white">Ohio State University graduate</span> and currently work as an <span class="text-white">Associate Software Engineer at NetJets</span>.
            </p>
            <p
                class="text-lg md:text-xl font-light text-text-muted leading-relaxed mb-8"
            >
                With previous experience spanning biomedical software engineering and leadership roles, I blend deep analytical rigor with a passion for building robust, clean, and highly functional digital architectures.
            </p>
            <a
                href="/resume.pdf"
                target="_blank"
                class="inline-block border-b border-white/20 pb-1 text-text-muted uppercase tracking-widest text-sm hover:text-white hover:border-white transition-colors"
                >View Resume</a
            >
        </div>
    </div>

    <!-- Education -->
    <!-- <div
        class="grid grid-cols-1 md:grid-cols-2 gap-16 mb-40 about-section border-t border-white/10 pt-16"
    >
        <div>
            <h4 class="text-sm font-mono text-accent-secondary uppercase mb-4">
                Education
            </h4>
            <h3 class="text-3xl md:text-4xl font-bold mb-2">
                The Ohio State University
            </h3>
            <p class="text-xl text-white/60">
                Computer and Information Science
            </p>
        </div>
        <div class="flex items-center justify-end opacity-50">
            <span class="text-9xl font-black text-white/5">01</span>
        </div>
    </div> -->

    <!-- Employment / Organizations -->
    <!-- <div
        class="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20 about-section border-t border-white/10 pt-16"
    >
        <div>
            <h4 class="text-sm font-mono text-accent-secondary uppercase mb-4">
                Experience
            </h4>

            <div class="mb-12">
                <h3 class="text-3xl md:text-4xl font-bold mb-2">
                    Biomedical Software Engineer
                </h3>
                <p class="text-lg text-white/60">
                    Independent Study, The Ohio State University
                </p>
            </div>

            <div>
                <h3 class="text-3xl md:text-4xl font-bold mb-2">
                    Triangle Fraternity
                </h3>
                <p class="text-lg text-white/60">New Member Educator</p>
            </div>
        </div>
        <div class="flex items-center justify-end opacity-50">
            <span class="text-9xl font-black text-white/5">02</span>
        </div>
    </div> -->
</section>
