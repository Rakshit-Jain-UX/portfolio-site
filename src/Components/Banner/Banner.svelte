<script>
    import BannerBG from "$lib/images/banner-background.svg";
    import GooeyButton from "../GooeyButton/GooeyButton.svelte";
</script>

<main>
    <div class="banner relative pt-36">
        <div class="container">
            <div class="relative">
                <div class="bg-image">
                    <img
                        src={BannerBG}
                        alt="banner-background"
                        class="w-full h-full object-cover"
                    />
                </div>
                <div
                    class="banner-content absolute -left-3 top-0 z-20 flex flex-col items-start pb-8 w-auto lg:left-20 xl:left-40"
                >
                    <div
                        class="w-40 bg-bg h-40 absolute top-0 left-0 transform -translate-x-full"
                    ></div>
                    <svg
                        id="Layer_1"
                        class="w-10 h-10 text-bg z-30 fill-current absolute top-[159px] left-[0.5px] transform -translate-x-full"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0"
                        y="0"
                        viewBox="0 0 100 100"
                        xml:space="preserve"
                        ><path
                            d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"
                        ></path></svg
                    >
                    <svg
                        id="Layer_1"
                        class="w-10 h-10 text-bg z-30 fill-current absolute -mt-px -ml-px top-40 -left-40"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0"
                        y="0"
                        viewBox="0 0 100 100"
                        xml:space="preserve"
                        ><path d="M51.9 0v1.9c-27.6 0-50 22.4-50 50H0V0h51.9z"
                        ></path></svg
                    >
                    <div class="w-auto relative">
                        <svg
                            id="Layer_1"
                            class="w-9 h-9 lg:w-10 lg:h-10 text-bg z-30 fill-current absolute top-10 right-0 transform -translate-y-10 translate-x-full"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            x="0"
                            y="0"
                            viewBox="0 0 100 100"
                            xml:space="preserve"
                            ><path
                                d="M51.9 0v1.9c-27.6 0-50 22.4-50 50H0V0h51.9z"
                            ></path></svg
                        >
                        <div class="w-auto relative">
                            <div class="">
                                <h1
                                    class="leading-none tracking-tight text-white dark:text-grayDark-100 bg-bg rounded-b-xl dark:bg-grayDark-650 pt-16 pb-3 js-cross-browser gooey-content"
                                >
                                    <span
                                        class=" flex-shrink-0 truncate inline relative pl-3 lg:pl-5 text-2-5xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl 4xl:text-8xl"
                                        style="z-index: 2"
                                    >
                                        A web design and&nbsp;&nbsp;<br />
                                    </span>
                                    <span
                                        class=" flex-shrink-0 truncate inline relative pl-3 lg:pl-5 text-2-5xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl 4xl:text-8xl"
                                        style="z-index: 1"
                                    >
                                        branding agency&nbsp;&nbsp;<br />
                                    </span>
                                    <span
                                        class=" flex-shrink-0 truncate inline relative pl-3 lg:pl-5 text-2-5xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl 4xl:text-8xl"
                                        style="z-index: 0"
                                    >
                                        in Manchester&nbsp;&nbsp;<br />
                                    </span>
                                    <div class="pl-3 lg:pl-5">
                                        <GooeyButton
                                            buttonText="CONTACT ME"
                                            buttonBgColor="rgba(208,255,113,1)"
                                        />
                                    </div>
                                </h1>
                                <svg
                                    width="0"
                                    height="0"
                                    class="absolute hidden"
                                    color-interpolation-filters="sRGB"
                                >
                                    <defs>
                                        <filter id="goo">
                                            <feGaussianBlur
                                                in="SourceGraphic"
                                                stdDeviation="6"
                                                result="blur"
                                            ></feGaussianBlur>
                                            <feColorMatrix
                                                in="blur"
                                                mode="matrix"
                                                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                                                result="goo"
                                            ></feColorMatrix>
                                            <feComposite
                                                in="SourceGraphic"
                                                in2="goo"
                                                operator="atop"
                                            ></feComposite>
                                        </filter>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
