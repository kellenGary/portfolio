<img src="./landing/m1.png"
     class="absolute bottom-20"
     alt="m1"
/>

<img src="./landing/m2.png"
     class="absolute right-0 top-40"
     alt="m2"
/>

<img src="./landing/m3.png"
     class="absolute right-0 bottom-40"
     alt="m3"
/>

<img src="./landing/m4.png"
     class="absolute right-140"
     alt="m4"
/>

<div class="flex flex-col justify-center items-center gap-8 min-h-screen min-w-screen">

<!--    Center of screen content-->
    <div class="flex flex-row gap-8 items-center">
        <img src="./landing/headshot.jpeg"
             class="rounded-full max-h-[20vh]"
             alt="headshot"
        />
        <div class="flex flex-col  gap-4">
            <p class="font-bold text-5xl leading-[0.7]">Student at <span class="underline decoration-accent-red underline-offset-6 ">The Ohio State University</span></p>
            <p class="text-4xl">Studying Computer and Information Science</p>
        </div>
    </div>


<!--    Bottom navigation -->
    <div class="flex flex-row gap-12 text-4xl">
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

