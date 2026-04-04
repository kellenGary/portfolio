<script>
    import { onMount } from "svelte";
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

    gsap.registerPlugin(ScrollTrigger);

    let container;

    // Use GSAP to animate form appearance
    onMount(() => {
        gsap.fromTo(
            ".contact-reveal",
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: container,
                    start: "top 60%",
                },
            },
        );
    });
</script>

<div
    id="contact"
    bind:this={container}
    class="relative flex flex-col min-h-screen justify-center items-center py-20 px-4 bg-background-color"
>
    <div class="max-w-4xl w-full flex flex-col gap-16">
        <h2
            class="text-7xl md:text-9xl font-black text-center text-text-main uppercase tracking-tighter leading-none contact-reveal"
        >
            Let's<br />Work<br /><span class="text-accent-secondary"
                >Together.</span
            >
        </h2>

        <form
            class="flex flex-col gap-6 w-full md:w-2/3 mx-auto contact-reveal"
            name="contact"
            method="POST"
            action="https://formspree.io/f/xeogzgda"
        >
            <input type="text" name="_gotcha" style="display:none" />

            <div class="group">
                <input
                    id="name"
                    name="name"
                    class="w-full bg-transparent border-b border-text-main/20 py-4 text-2xl text-text-main placeholder-text-main/20 focus:outline-none focus:border-accent-secondary transition-colors"
                    placeholder="Name"
                    required
                />
            </div>

            <div class="group">
                <input
                    id="email"
                    type="email"
                    name="email"
                    class="w-full bg-transparent border-b border-text-main/20 py-4 text-2xl text-text-main placeholder-text-main/20 focus:outline-none focus:border-accent-secondary transition-colors"
                    placeholder="Email"
                    required
                />
            </div>

            <div class="group">
                <textarea
                    id="message"
                    name="message"
                    class="w-full bg-transparent border-b border-text-main/20 py-4 text-2xl text-text-main placeholder-text-main/20 focus:outline-none focus:border-accent-secondary transition-colors resize-none"
                    placeholder="Message"
                    rows="3"
                    required
                ></textarea>
            </div>

            <button
                type="submit"
                class="self-start mt-8 px-8 py-3 rounded-full border border-text-main/30 text-text-main hover:bg-text-main hover:text-background-color hover:border-transparent transition-all duration-300 uppercase tracking-widest text-sm font-bold"
            >
                Send Message
            </button>
        </form>
    </div>

    <!-- Footer -->
    <footer
        class="absolute bottom-8 w-full flex justify-between px-8 md:px-20 text-text-main/40 uppercase tracking-widest text-xs font-mono contact-reveal"
    >
        <div class="flex gap-8">
            <a
                href="https://github.com/kellenGary"
                target="_blank"
                class="hover:text-text-main transition-colors">Github</a
            >
            <a
                href="https://linkedin.com/in/kellen-Gary"
                target="_blank"
                class="hover:text-white transition-colors">LinkedIn</a
            >
        </div>

        <button
            on:click={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            class="hover:text-white transition-colors"
        >
            Back to Top
        </button>
    </footer>
</div>
