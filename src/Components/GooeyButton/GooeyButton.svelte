<script>
    export let buttonBgColor;
    export let buttonText;

    // Check if the browser supports SVG filter for blur (Chrome and Edge support this)
    let isChromeOrEdge = false;

    if (
        navigator.userAgent.includes("Chrome") ||
        navigator.userAgent.includes("Edg")
    ) {
        isChromeOrEdge = true;
    }
</script>

<main>
    <div class="gooey-container">
        <a href="/">
            <div class="gooey-wrap group">
                <div
                    class="gooey gooey-first"
                    style="background-color: {buttonBgColor}"
                >
                    {buttonText}
                </div>
                {#if isChromeOrEdge}
                    <div
                        class="gooey gooey-hover"
                        style="background-color: {buttonBgColor}"
                    >
                        <svg
                            class="w-3 h-3 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 384 512"
                        >
                            <path
                                d="M328 96h24v288h-48V177.9L81 401l-17 17-33.9-34 17-17 223-223H64V96h264z"
                                fill="black"
                            ></path>
                        </svg>
                    </div>
                {:else}
                    <div
                        class="gooey gooey-no-translate"
                        style="background-color: {buttonBgColor}"
                    >
                        <span
                            class="fallback-icon relative overflow-hidden group-hover:rotate-45 duration-300"
                        >
                            <svg
                                class="w-3 h-3 fill-current group-hover:translate-x-full duration-300 group-hover:-translate-y-full"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 384 512"
                            >
                                <path
                                    d="M328 96h24v288h-48V177.9L81 401l-17 17-33.9-34 17-17 223-223H64V96h264z"
                                    fill="black"
                                ></path>
                            </svg>
                            <div
                                class="absolute top-0 left-0 transition-transform transform translate-y-full -translate-x-full || js-button-arrow-icon-secondary xl:group-hover:translate-x-0 xl:group-hover:translate-y-0"
                            >
                                <svg
                                    class="w-3 h-3 fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512"
                                    ><path
                                        d="M328 96h24v288h-48V177.9L81 401l-17 17-33.9-34 17-17 223-223H64V96h264z"
                                        fill="black"
                                    ></path></svg
                                >
                            </div>
                        </span>
                    </div>
                {/if}
            </div>
        </a>
    </div>

    <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        style="display: none;"
    >
        <defs>
            <filter id="gooey">
                <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="4"
                    result="blur"
                ></feGaussianBlur>
                <feColorMatrix
                    in="blur"
                    type="matrix"
                    values="1 0 0 0 0  
                      0 1 0 0 0  
                      0 0 1 0 0  
                      0 0 0 19 -9"
                    result="gooey"
                ></feColorMatrix>
                <feBlend in="SourceGraphic" in2="gooey" mode="normal"></feBlend>
            </filter>
        </defs>
    </svg>
</main>

<style>
    .gooey-container a {
        position: relative;
        display: block;
        justify-content: center;
        align-items: center;
        filter: url(#gooey);
        cursor: pointer;
    }
    .gooey-wrap {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        filter: url(#gooey);
        cursor: pointer;
        width: max-content;
    }
    .gooey-first {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px 20px 0 20px;
        color: white;
        border-radius: 25px;
        transition: all 0.3s;
        width: max-content !important;
        color: #000;
        line-height: 0;
    }

    .gooey-hover,
    .gooey-no-translate {
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .gooey-no-translate {
        margin-left: -5px;
    }
    .gooey-container a .gooey-wrap > .gooey {
        background-color: #000;
        width: 36px;
        height: 36px;
        transition: all 0.3s;
    }
    .gooey-wrap:hover .gooey-hover {
        transform: translateX(10px) rotate(45deg);
        transition: all 0.3s;
    }
</style>
