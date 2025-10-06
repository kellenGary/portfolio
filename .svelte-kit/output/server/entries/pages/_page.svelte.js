import { c as pop, p as push, f as ensure_array_like, e as escape_html, h as attr, i as attr_style, j as stringify, k as head } from "../../chunks/index.js";
import "clsx";
function Landing($$payload, $$props) {
  push();
  $$payload.out += `<img src="/landing/m1.png" class="absolute bottom-20 w-auto max-h-[20vh] max-w-[20vw] object-contain transform animate-slide-from-left" alt="m1"> <img src="/landing/m2.png" class="absolute right-0 top-40 w-auto max-h-[20vh] max-w-[20vw] object-contain transform animate-slide-from-right" alt="m2"> <img src="/landing/m3.png" class="absolute hidden sm:block right-0 bottom-40 w-auto max-h-[20vh] max-w-[20vw] object-contain transform animate-slide-from-right" alt="m3"> <img src="/landing/m4.png" class="absolute hidden sm:block top-0 right-40 w-auto max-h-[20vh] max-w-[20vw] object-contain transform animate-slide-from-top" alt="m4"> <div class="flex flex-col justify-center items-center gap-8 min-h-screen min-w-screen p-4 grow"><div class="flex flex-col md:flex-row gap-8 items-center animate-fade-in"><a href="/secret"><img src="/landing/headshot.jpeg" class="rounded-full h-36 md:h-[20dvh]" alt="headshot"></a> <div class="flex flex-col gap-4"><p class="font-bold text-2xl leading-0 md:text-5xl sm:text-4xl md:leading-[0.7]">Student at <span class="underline decoration-accent-red underline-offset-6">The Ohio State University</span></p> <p class="text-xl md:text-4xl sm:text-3xl">Studying Computer and Information Science</p></div></div> <div class="flex flex-row gap-12 text-xl md:text-4xl animate-fade-in-delayed"><button><span class="hover:underline hover:decoration-accent-red hover:underline-offset-6 cursor-pointer">About</span></button> <button><span class="hover:underline hover:decoration-accent-red hover:underline-offset-6 cursor-pointer">Projects</span></button> <button><span class="hover:underline hover:decoration-accent-red hover:underline-offset-6 cursor-pointer">Contact</span></button></div></div>`;
  pop();
}
function About($$payload) {
  $$payload.out += `<div class="relative flex min-h-screen min-w-screen" id="about"><img src="/about/m5.png" class="absolute right-0 bottom-40 hidden sm:block w-auto max-h-[20vh] max-w-[20vw] object-contain transform scale-[0.85] sm:scale-90 md:scale-100" alt="m5"> <img src="/about/m6.png" class="absolute right-0 top-20 hidden sm:block w-auto max-h-[20vh] max-w-[20vw] object-contain transform scale-[0.85] sm:scale-90 md:scale-100" alt="m6"> <img src="/about/m7.png" class="absolute -z-1 top-70 hidden sm:block w-auto max-h-[20vh] max-w-[20vw] object-contain transform scale-[0.85] sm:scale-90 md:scale-100" alt="m7"> <p class="absolute text-2xl sm:text-4xl md:text-5xl underline decoration-accent-red underline-offset-6 leading-[0.5] p-2 md:p-8">About</p> <div class="flex flex-col-reverse md:flex-row justify-center gap-12 md:gap-4 md:justify-around items-center grow"><div class="flex flex-col gap-4 sm:gap-8 w-full sm:w-[60dvw] md:w-fit"><div class="flex flex-col gap-2"><p class="text-center sm:text-left text-xl sm:text-2xl reveal">Education</p> <div class="flex flex-row items-center sm:gap-4 bg-accent-gray sm:py-4 pl-4 sm:rounded-lg reveal" style="--reveal-delay: 80ms;"><img src="/about/block_o.png" class="scale-50 md:scale-100" alt="block_o"> <div><p class="font-semibold text-lg sm:text-2xl">The Ohio State University</p> <p class="text-xl">Computer and Information Science</p></div></div></div> <div class="flex flex-col gap-2"><p class="text-center sm:text-left text-xl sm:text-2xl reveal" style="--reveal-delay: 120ms;">Current Employment</p> <div class="flex flex-row items-center sm:gap-4 bg-accent-gray sm:py-4 pl-4 sm:rounded-lg pr-8 reveal" style="--reveal-delay: 200ms;"><img src="/about/BME.png" class="scale-50 md:scale-100" alt="BME"> <div><p class="font-semibold text-lg sm:text-2xl">Independent Study, The Ohio State University</p> <p class="text-xl">Biomedical Software Engineer</p></div></div></div> <div class="flex flex-col gap-2"><p class="text-center sm:text-left text-xl sm:text-2xl reveal" style="--reveal-delay: 140ms;">Organizations</p> <div class="flex flex-row items-center sm:gap-4 bg-accent-gray sm:py-4 pl-4 sm:rounded-lg reveal" style="--reveal-delay: 260ms;"><img src="/about/triangle.png" class="scale-50 md:scale-100" alt="triangle"> <div><p class="font-semibold text-lg sm:text-2xl">Triangle Fraternity</p> <p class="text-xl">New Member Educator</p></div></div></div></div> <div class="flex flex-col sm:max-w-[60vw] sm:gap-2 shrink-0 px-8 sm:p-0 reveal"><div class="flex flex-row sm:flex-col grow gap-2"><p class="font-bold text-2xl md:text-5xl sm:text-4xl md:leading-[0.7]">Hello,</p> <p class="font-bold text-2xl md:text-5xl sm:text-4xl md:leading-[0.7]">I'm Kellen.</p></div> <p class="text-xl sm:p-0 md:max-w-[28vw] md:text-2xl">I am a 21 year old Software Engineer finishing my Bachelors of Science at The Ohio State University.
                I currently have 2 years of developing experience with a desire for exploring new languages and technologies.</p> <a href="./Kellen Gary Resume.pdf" target="_blank"><span class="font-bold underline hover:animate-pulse decoration-accent-red underline-offset-6 cursor-pointer">View my resume</span></a></div></div></div>`;
}
function Contact($$payload) {
  $$payload.out += `<div class="relative flex flex-col min-h-screen min-w-screen" id="contact"><img src="/contact/m9.png" class="absolute right-0 bottom-40 hidden sm:block w-auto max-h-[20vh] max-w-[20vw] object-contain transform scale-[0.85] sm:scale-90 md:scale-100" alt="m5"> <img src="/contact/m10.png" class="absolute -z-1 right-0 top-70 hidden sm:block w-auto max-h-[20vh] max-w-[20vw] object-contain transform scale-[0.85] sm:scale-90 md:scale-100" alt="m6"> <img src="/contact/m11.png" class="absolute top-35 hidden sm:block w-auto max-h-[20vh] max-w-[20vw] object-contain transform scale-[0.85] sm:scale-90 md:scale-100" alt="m7"> <p class="absolute text-2xl sm:text-4xl md:text-5xl underline decoration-accent-red underline-offset-6 leading-[0.5] p-2 md:p-8 reveal">Contact</p> <div class="flex flex-col grow justify-center items-center gap-12"><p class="font-bold text-6xl sm:text-7xl pl-12 md:text-8xl tracking-tight self-end md:mx-auto leading-[0.7] reveal">Let's work together.</p> <form class="flex flex-col gap-4 w-[50%]" name="contact" method="POST" action="https://formspree.io/f/xeogzgda"><input type="text" name="_gotcha" style="display:none"> <div class="flex flex-col gap-2 reveal" style="--reveal-delay: 60ms;"><label for="name" class="text-lg font-semibold">Name</label> <input id="name" name="name" class="border border-border-gray bg-accent-gray p-2 rounded" placeholder="Enter your name" required></div> <div class="flex flex-col gap-2 reveal" style="--reveal-delay: 120ms;"><label for="email" class="text-lg font-semibold">Email</label> <input id="email" type="email" name="email" class="border border-border-gray bg-accent-gray p-2 rounded" placeholder="Enter your email" required></div> <div class="flex flex-col gap-2 reveal" style="--reveal-delay: 180ms;"><label for="message" class="text-lg font-semibold">Message</label> <textarea id="message" name="message" class="border border-border-gray bg-accent-gray p-2 rounded" placeholder="Enter your message" rows="5" required></textarea></div> <button type="submit" class="bg-accent-red font-bold text-xl md:text-2xl self-center md:w-1/4 text-white py-2 mt-4 px-4 rounded cursor-pointer reveal" style="--reveal-delay: 240ms;">Submit</button></form></div> <footer class="flex flex-row gap-4 self-center p-2 md:p-8 bg-accent-gray w-full justify-center reveal" style="--reveal-delay: 120ms;"><a href="https://github.com/kellenGary" target="_blank"><p class="text-lg hover:underline hover:decoration-accent-red hover:underline-offset-6 cursor-pointer">Github</p></a> <p>|</p> <button><span class="text-lg hover:underline hover:decoration-accent-red hover:underline-offset-6 cursor-pointer">Return to top</span></button> <p>|</p> <a href="https://linkedin.com/in/kellen-Gary" target="_blank"><p class="text-lg hover:underline hover:decoration-accent-red hover:underline-offset-6 cursor-pointer">LinkedIn</p></a></footer></div>`;
}
function ProjectsCarousel($$payload, $$props) {
  push();
  const DEFAULT_DIMENSIONS = { width: 800, height: 450 };
  let projects = [
    {
      path: "smarthub.png",
      dimensions: DEFAULT_DIMENSIONS,
      name: "Smarthub Desktop",
      link: "https://github.com/kellenGary/smarthub-desktop",
      stack: "Next.js, Electron, Node.js, Python, FastAPI, Supabase",
      description: "Real-time recording software to analyze and monitor wheelchair data from Smarthub exclusive devices. Using Bluetooth low energy connections, these devices send gyroscopic and acceleration data to the Node.js back end to be processed and displayed within the Next.js desktop application created using Electron."
    },
    {
      path: "pledge.png",
      dimensions: DEFAULT_DIMENSIONS,
      name: "Triangle Pledge Hub",
      link: "https://github.com/kellenGary/triangle-candidate-website",
      stack: "Next.js, Google APIs",
      description: "Minimal website to be used as a resource for the Spring 2025 Pledge Class of OSU Triangle. With the power of Next.js API endpoints and the Google APIs, this website has a real-time leaderboard for quiz scores and a submission page for an essay. "
    },
    {
      path: "audit.png",
      dimensions: DEFAULT_DIMENSIONS,
      name: "Degree Audit Assistant",
      link: "https://github.com/kellenGary/OSU-Degree-Audit-Assistant",
      stack: "HTML, CSS, SpringBoot, JSoup",
      description: "Degree audit assistant for OSU students to view a more clear and concise degree audit. Displays current degree completion as well as containers containing remaining requirements to graduate. These containers have hyperlinks for course names allowing to quickly schedule and plan your next semester. "
    },
    {
      path: "lockedin.png",
      dimensions: DEFAULT_DIMENSIONS,
      name: "LockedIn",
      link: "https://github.com/StevenEgnaczyk/LockedIn",
      stack: "React, Three.js, Python, Firebase, WebGL",
      description: "Single page application allowing users to view dynamic social networks through LinkedIn connections. This provides an in depth visual for finding that connection that could help you discover  professional opportunities. "
    },
    {
      path: "fruit.png",
      dimensions: DEFAULT_DIMENSIONS,
      name: "Fruit Ninja Image Detection",
      link: "https://github.com/kellenGary/Fruit-Ninja-YOLO-Slicer",
      stack: "Python, YOLO, Roboflow",
      description: "Image detection AI trained using YOLO to detect and slice fruits when playing Fruit Ninja. The YOLO model was trained using in game images that had added border boxes using Roboflow for quickness. Overall the accuracy of the model resulted in 92% of the fruits being sliced. "
    },
    {
      path: "databased.png",
      dimensions: DEFAULT_DIMENSIONS,
      name: "DataBased",
      link: "https://github.com/StevenEgnaczyk/DatabaseD",
      stack: "React, CSS, Flask, Firebase, Firestore",
      description: "Student database for all materials college related. Within DataBased users have the ability to bookmark, download, and upload files of their choice. The purpose is to allow students to have reliable resources when completing homework or studying for the next exam. "
    }
  ];
  let selectedIndex = 0;
  function getPositionInQueue(index) {
    const position = (index - selectedIndex + projects.length) % projects.length;
    return position;
  }
  function getZIndex(index) {
    if (index === selectedIndex) {
      return 9;
    }
    const position = getPositionInQueue(index);
    return projects.length - position;
  }
  function getTransform(index) {
    const position = getPositionInQueue(index);
    const baseX = 75 + position * 200;
    const offset = 0;
    return `translateX(${baseX + offset}px)`;
  }
  const each_array = ensure_array_like(projects);
  $$payload.out += `<div class="flex flex-col justify-around md:flex-row grow"><div class="flex flex-col justify-center md:min-w-1/3 md:max-w-1/3 p-8 pt-24 md:pt-0 grow reveal"><p class="font-bold text-4xl">${escape_html(projects[selectedIndex].name)}</p> <p class="font-semibold text-xl">${escape_html(projects[selectedIndex].stack)}</p> <p class="text-xl">${escape_html(projects[selectedIndex].description)}</p> <a${attr("href", projects[selectedIndex].link)}><span class="font-bold underline hover:animate-pulse decoration-accent-red underline-offset-6 cursor-pointer">Explore</span></a></div> <div class="relative shrink-0 grow flex overflow-hidden" aria-label="Draggable projects carousel. Swipe left or right to navigate between projects." role="region"><div class="relative mb-10 scale-50 sm:scale-100 sm:h-full flex items-center"><!--[-->`;
  for (let index = 0, $$length = each_array.length; index < $$length; index++) {
    let project = each_array[index];
    $$payload.out += `<button class="absolute select-none transition-all"${attr_style(`transform: ${stringify(getTransform(index))}; z-index: ${stringify(getZIndex(index))}; transition: ${stringify("transform 500ms ease-in-out 300ms, opacity 500ms ease-in-out 100ms, z-index 300ms ease-in-out")}; opacity: ${stringify(getPositionInQueue(index) < projects.length / 2 ? 1 : 0.5)};`)}><img${attr("src", `/projects/${project.path}`)}${attr("alt", project.name)} class="rounded-lg cursor-pointer max-w-2xl"${attr_style(`transform: scale(${stringify(getPositionInQueue(index) === 0 ? 1.2 : 1 - getPositionInQueue(index) * 0.1)}); transition: ${stringify("transform 500ms ease-in-out")}`)}></button>`;
  }
  $$payload.out += `<!--]--></div></div></div>`;
  pop();
}
function Projects($$payload) {
  $$payload.out += `<div class="relative flex flex-col flex-1 min-h-0 min-w-screen" id="projects"><img src="/projects/m8.png" class="absolute bottom-40 hidden sm:block w-auto max-h-[20vh] max-w-[20vw] object-contain transform scale-[0.85] sm:scale-90 md:scale-100" alt="m8"> <p class="absolute text-2xl sm:text-4xl md:text-5xl underline decoration-accent-red underline-offset-6 leading-[0.5] p-2 md:p-8 reveal">Projects</p> <div class="reveal grow flex" style="--reveal-delay: 120ms;">`;
  ProjectsCarousel($$payload);
  $$payload.out += `<!----></div></div>`;
}
function _page($$payload) {
  head($$payload, ($$payload2) => {
    $$payload2.out += `<link href="https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@400;700&amp;display=swap" rel="stylesheet">`;
  });
  $$payload.out += `<main class="max-w-screen overflow-x-hidden"><header class="absolute pl-2 reveal"><p class="font-bold text-5xl sm:text-7xl md:text-8xl leading-[0.7]">Kellen Gary</p> <p class="text-2xl sm:text-4xl pl-1">Columbus, OH</p></header> <section id="landing">`;
  Landing($$payload);
  $$payload.out += `<!----></section> <section id="about">`;
  About($$payload);
  $$payload.out += `<!----></section> <section id="projects" class="flex min-h-screen flex-col">`;
  Projects($$payload);
  $$payload.out += `<!----></section> <section id="contact">`;
  Contact($$payload);
  $$payload.out += `<!----></section></main>`;
}
export {
  _page as default
};
