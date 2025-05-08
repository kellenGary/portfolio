<div class="relative flex flex-col min-h-screen min-w-screen">
    <img src="./contact/m9.png"
         class="absolute  right-0 bottom-40 hidden sm:block w-auto max-h-[20vh] max-w-[20vw] object-contain transform scale-[0.85] sm:scale-90 md:scale-100"
         alt="m5"
    />

    <img src="./contact/m10.png"
         class="absolute -z-1 right-0 top-70 hidden sm:block w-auto max-h-[20vh] max-w-[20vw] object-contain transform scale-[0.85] sm:scale-90 md:scale-100"
         alt="m6"
    />

    <img src="./contact/m11.png"
         class="absolute top-35 hidden sm:block w-auto max-h-[20vh] max-w-[20vw] object-contain transform scale-[0.85] sm:scale-90 md:scale-100"
         alt="m7"
    />

    <p class="absolute text-2xl sm:text-4xl md:text-5xl underline decoration-accent-red underline-offset-6 leading-[0.5] p-2 md:p-8">Contact</p>

    <div class="flex flex-col grow justify-center items-center gap-12">
        <p class="font-bold text-6xl sm:text-7xl pl-12 md:text-8xl tracking-tight self-end mr-[6%] md:w-[30%] leading-[0.7]">Let's work together.</p>

        <form class="flex flex-col gap-4 w-[50%]" on:submit|preventDefault={() => console.log('Form submitted')}>

            <div class="flex flex-col gap-2">
                <label for="email" class="text-lg font-semibold">Email</label>
                <input id="email" type="email" class="border border-border-gray bg-accent-gray p-2 rounded" placeholder="Enter your email" required />
            </div>
            <div class="flex flex-col gap-2">
                <label for="subject" class="text-lg font-semibold">Subject</label>
                <input id="subject" type="text" class="border border-border-gray bg-accent-gray p-2 rounded" placeholder="Enter the subject" required />
            </div>
            <div class="flex flex-col gap-2">
                <label for="message" class="text-lg font-semibold">Message</label>
                <textarea id="message" class="border border-border-gray bg-accent-gray p-2 rounded" placeholder="Enter your message" rows="5" required></textarea>
            </div>
            <button
                    type="submit"
                    class="bg-accent-red font-bold text-xl md:text-2xl self-center md:w-1/4 text-white py-2 mt-4 px-4 rounded cursor-pointer"
            >
                Submit
            </button>
        </form>
    </div>

    <footer class="flex flex-row gap-4 self-center p-2 md:p-8 bg-accent-gray w-full justify-center">
        <p class="text-lg hover:underline hover:decoration-accent-red hover:underline-offset-6 cursor-pointer">Github</p>
        <p> | </p>

        <button on:click={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span class="text-lg hover:underline hover:decoration-accent-red hover:underline-offset-6 cursor-pointer">Return to top</span>
        </button>
        <p> |</p>
        <p class="text-lg hover:underline hover:decoration-accent-red hover:underline-offset-6 cursor-pointer">LinkedIn</p>
    </footer>
</div>