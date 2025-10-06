<script>
import Landing from "../lib/Landing.svelte";
import About from "../lib/About.svelte";
import Skills from "../lib/Skills.svelte";
import Contact from "../lib/Contact.svelte";
import Projects from "../lib/Projects.svelte";
import { inView } from '$lib/actions/inView.js';
const reveal = { threshold: 0.1, className: 'in-view' };
</script>

<svelte:head>
    <link href="https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@400;700&display=swap" rel="stylesheet">
</svelte:head>

<main class="max-w-screen overflow-x-hidden">
    <header class="absolute pl-2 reveal" use:inView={reveal}>
        <p class="font-bold text-5xl sm:text-7xl md:text-8xl leading-[0.7] ">Kellen Gary</p>
        <p class="text-2xl sm:text-4xl pl-1">Columbus, OH</p>
    </header>

    <section id="landing"><Landing/></section>
    <section id="about"><About/></section>
    <section id="skills"><Skills/></section>
    <section id="projects" class="flex min-h-screen flex-col"><Projects/></section>
    <section id="contact"><Contact/></section>
</main>