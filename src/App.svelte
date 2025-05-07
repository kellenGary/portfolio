<script>
  import Landing from "./lib/Landing.svelte";
  import About from "./lib/About.svelte";
  import Contact from "./lib/Contact.svelte";
  import Projects from "./lib/Projects.svelte";
</script>

<svelte:head>
  <link href="https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@400;700&display=swap" rel="stylesheet">
</svelte:head>

<main class="max-w-screen overflow-x-hidden">
  <header class="absolute pl-2">
    <p class="font-bold text-8xl leading-[0.7] ">Kellen Gary</p>
    <p class="text-4xl pl-1">Columbus, OH</p>
  </header>

  <Landing/>
  <About/>
  <Projects/>
  <Contact/>
</main>
