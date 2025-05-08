<img src="./landing/m1.png"
     class="absolute bottom-20 w-auto max-h-[20vh] max-w-[20vw] object-contain transform scale-[0.85] sm:scale-90 md:scale-100"
     alt="m1"
/>

<img src="./landing/m2.png"
     class="absolute right-0 top-40 w-auto max-h-[20vh] max-w-[20vw] object-contain transform scale-[0.85] sm:scale-90 md:scale-100"
     alt="m2"
/>

<img src="./landing/m3.png"
     class="absolute right-0 bottom-40 w-auto max-h-[20vh] max-w-[20vw] object-contain transform scale-[0.85] sm:scale-90 md:scale-100"
     alt="m3"
/>

<img src="./landing/m4.png"
     class="absolute -z-1 top-0 right-40 w-auto max-h-[20vh] max-w-[20vw] object-contain transform scale-[0.85] sm:scale-90 md:scale-100"
     alt="m4"
/>

<div class="flex flex-col justify-center items-center gap-8 min-h-screen min-w-screen p-4 grow">

<!--    Center of screen content-->
    <div class="flex flex-col md:flex-row gap-8 items-center">
        <img src="./landing/headshot.jpeg"
             class="rounded-full h-36 md:h-[20dvh]"
             alt="headshot"
        />
        <div class="flex flex-col  gap-4">
            <p class="font-bold text-2xl leading-0 md:text-5xl sm:text-4xl md:leading-[0.7]">Student at <span class="underline decoration-accent-red underline-offset-6 ">The Ohio State University</span></p>
            <p class="text-xl md:text-4xl sm:text-3xl">Studying Computer and Information Science</p>
        </div>
    </div>


<!--    Bottom navigation -->
    <div class="flex flex-row gap-12 text-xl md:text-4xl">
        <button on:click={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
            <span class="hover:underline hover:decoration-accent-red hover:underline-offset-6 cursor-pointer">
                About
            </span>
        </button>

        <button on:click={() => window.scrollTo({ top: window.innerHeight * 2, behavior: 'smooth' })}>
            <span class="hover:underline hover:decoration-accent-red hover:underline-offset-6 cursor-pointer">
                Projects
            </span>
        </button>

        <button on:click={() => window.scrollTo({ top: window.innerHeight * 3, behavior: 'smooth' })}>
            <span class="hover:underline hover:decoration-accent-red hover:underline-offset-6 cursor-pointer">
                Contact
            </span>
        </button>
    </div>
</div>

