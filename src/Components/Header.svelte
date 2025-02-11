<script>
    import gsap from "gsap";
    import GooeyButton from "./GooeyButton/GooeyButton.svelte";
    import { onMount } from "svelte";

    let lastScrollY = 0;
    let header;
    let isScrolled = false;
    let isOpen = false;
    let line1, line2, line3;
    let windowInnerWidth = 0;

    const toggleMenu = () => {
        if (isOpen) {
            // Close menu animation
            gsap.to(header, {
                duration: 0,
                delay: 0.4,
            });
            gsap.to(header, {
                width: "256px",
                height: "48px",
                backgroundColor: "#26282ccc",
            });
            gsap.to(line1, {
                rotation: 0,
                x: 0,
                duration: 0.3,
                y: 0,
            });
            gsap.to(line2, { opacity: 1, duration: 0.3, rotate: 0 });
            gsap.to(line3, {
                rotation: 0,
                x: 0,
                duration: 0.3,
                y: 0,
            });

            // Animate links out when menu is closed
            gsap.to(".menu-link", {
                opacity: 0,
                y: -20,
                stagger: 0.1,
                duration: 0.3,
            });
            document.body.style.overflow = "auto";
        } else {
            // Open menu animation
            gsap.to(header, {
                width: "90%",
                backgroundColor: "#26282ccc",
            });
            gsap.to(header, {
                height: "380px",
                delay: 0.2,
            });
            gsap.to(line1, {
                rotation: 45,
                y: 1.5,
                x: 2.5,
                duration: 0.3,
            });
            gsap.to(line2, { opacity: 0, duration: 0.3, rotate: -45 });
            gsap.to(line3, {
                rotation: -45,
                y: -6,
                x: -0.5,
                duration: 0.3,
            });

            gsap.fromTo(
                ".menu-link",
                {
                    opacity: 0,
                    y: -20,
                },
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.2,
                    duration: 1,
                },
            );
            document.body.style.overflow = "hidden";
        }

        isOpen = !isOpen;
    };

    onMount(() => {
        isOpen = false;
        windowInnerWidth = window.innerWidth;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > 50) {
                if (windowInnerWidth > 991) {
                    gsap.to(header, {
                        width: "960px",
                        backgroundColor: "#26282ccc",
                    });
                } else {
                    if (!isOpen) {
                        gsap.to(header, {
                            width: "256px",
                            backgroundColor: "#26282ccc",
                        });
                    }
                }
            } else {
                if (windowInnerWidth > 991) {
                    gsap.to(header, {
                        width: "100%",
                        backgroundColor: "rgba(0,0,0, 0)",
                    });
                } else {
                    gsap.to(header, {
                        width: "90%",
                        backgroundColor: "#26282ccc",
                    });
                }
            }
            if (currentScrollY > 400) {
                if (currentScrollY > lastScrollY) {
                    gsap.to(header, { y: "-150%", duration: 0.3 });
                } else {
                    gsap.to(header, { y: "0%", duration: 0.3 });
                }
            }

            lastScrollY = currentScrollY <= 0 ? 0 : currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });
</script>

<main>
    <header
        bind:this={header}
        class="fixed top-0 left-0 w-full z-50 mx-auto flex sm:p-[22px] p-[14.5px] items-start my-3 sm:rounded-full rounded-3xl overflow-hidden"
    >
        <div class="flex justify-between items-center w-full relative">
            <svg
                width="242"
                height="48"
                viewBox="0 0 242 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="w-[96px] h-auto"
            >
                <path
                    d="M-0.0079999 47V4.76H16.312C18.5307 4.76 20.5573 4.952 22.392 5.336C24.2693 5.67733 25.912 6.18933 27.32 6.872C28.7707 7.55467 29.9867 8.408 30.968 9.432C31.9493 10.4133 32.696 11.5653 33.208 12.888C33.72 14.168 33.976 15.5973 33.976 17.176C33.976 18.6693 33.7413 20.0347 33.272 21.272C32.8027 22.4667 32.0987 23.512 31.16 24.408C30.264 25.304 29.112 26.0507 27.704 26.648C26.3387 27.2027 24.7387 27.608 22.904 27.864V28.696C24.8667 28.952 26.4667 29.4427 27.704 30.168C28.984 30.8933 30.008 31.896 30.776 33.176C31.544 34.456 32.2053 36.0987 32.76 38.104L35.32 47H26.424L24.44 38.808C24.056 37.1013 23.4587 35.736 22.648 34.712C21.88 33.688 20.8987 32.9627 19.704 32.536C18.5093 32.1093 17.0587 31.896 15.352 31.896H8.056V47H-0.0079999ZM8.056 25.688H15.736C18.936 25.688 21.368 25.0907 23.032 23.896C24.7387 22.7013 25.592 20.8667 25.592 18.392C25.592 15.9173 24.7813 14.0827 23.16 12.888C21.5813 11.6933 19.1493 11.096 15.864 11.096H8.056V25.688ZM50.038 47.832C48.2033 47.832 46.5607 47.4907 45.11 46.808C43.6593 46.0827 42.5073 45.016 41.654 43.608C40.8433 42.2 40.438 40.4507 40.438 38.36C40.438 36.6107 40.758 35.1173 41.398 33.88C42.0807 32.6427 43.0833 31.64 44.406 30.872C45.7287 30.0613 47.3713 29.4 49.334 28.888C51.2967 28.3333 53.6007 27.864 56.246 27.48C57.6967 27.2667 58.87 27.0533 59.766 26.84C60.7047 26.6267 61.3873 26.3067 61.814 25.88C62.2407 25.4107 62.454 24.728 62.454 23.832C62.454 22.5093 61.9847 21.3787 61.046 20.44C60.15 19.4587 58.678 18.968 56.63 18.968C55.3927 18.968 54.198 19.1813 53.046 19.608C51.9367 20.0347 50.9767 20.7173 50.166 21.656C49.3553 22.552 48.8007 23.7467 48.502 25.24L41.27 23C41.7393 21.2933 42.422 19.8213 43.318 18.584C44.214 17.304 45.3233 16.216 46.646 15.32C47.9687 14.424 49.4833 13.7627 51.19 13.336C52.8967 12.9093 54.774 12.696 56.822 12.696C59.9367 12.696 62.4967 13.208 64.502 14.232C66.5073 15.2133 68.0007 16.7707 68.982 18.904C69.9633 20.9947 70.454 23.704 70.454 27.032V33.304C70.454 34.7547 70.4753 36.2693 70.518 37.848C70.6033 39.384 70.6887 40.9413 70.774 42.52C70.902 44.056 71.0513 45.5493 71.222 47H63.99C63.8193 45.8053 63.67 44.5253 63.542 43.16C63.414 41.7947 63.3073 40.408 63.222 39H62.198C61.6007 40.6213 60.7473 42.1147 59.638 43.48C58.5287 44.8027 57.1633 45.8693 55.542 46.68C53.9633 47.448 52.1287 47.832 50.038 47.832ZM53.238 41.88C54.0913 41.88 54.9447 41.7307 55.798 41.432C56.694 41.1333 57.5687 40.6853 58.422 40.088C59.2753 39.4907 60.0647 38.7653 60.79 37.912C61.5153 37.016 62.134 35.9707 62.646 34.776L62.518 29.08L64.054 29.336C63.3287 29.9333 62.4327 30.4027 61.366 30.744C60.2993 31.0853 59.1687 31.3413 57.974 31.512C56.822 31.6827 55.6487 31.896 54.454 32.152C53.302 32.3653 52.2567 32.664 51.318 33.048C50.3793 33.3893 49.6327 33.9013 49.078 34.584C48.5233 35.224 48.246 36.12 48.246 37.272C48.246 38.7227 48.7153 39.8533 49.654 40.664C50.5927 41.4747 51.7873 41.88 53.238 41.88ZM79.169 47V1.496H87.105V27.032C88.5557 26.136 89.9423 25.1547 91.265 24.088C92.5877 22.9787 93.8037 21.8267 94.913 20.632C96.0223 19.4373 97.0037 18.2427 97.857 17.048C98.7103 15.8107 99.4143 14.6373 99.969 13.528H109.249C108.566 15.192 107.67 16.8347 106.561 18.456C105.452 20.0773 104.15 21.5707 102.657 22.936C101.206 24.3013 99.5637 25.496 97.729 26.52C95.8943 27.5013 93.9317 28.184 91.841 28.568V29.464C94.4863 29.08 96.705 29.208 98.497 29.848C100.289 30.488 101.804 31.448 103.041 32.728C104.278 34.008 105.302 35.5013 106.113 37.208C106.966 38.872 107.756 40.5787 108.481 42.328L110.145 47H101.249L100.225 43.928C99.4143 41.7947 98.561 39.9173 97.665 38.296C96.8117 36.632 95.7237 35.352 94.401 34.456C93.121 33.5173 91.457 33.048 89.409 33.048H87.105V47H79.169ZM128.974 47.832C126.712 47.832 124.664 47.5973 122.83 47.128C121.038 46.7013 119.502 46.0827 118.222 45.272C116.942 44.4187 115.918 43.416 115.15 42.264C114.382 41.0693 113.912 39.7467 113.742 38.296L120.078 35.928C120.163 37.0373 120.59 38.04 121.358 38.936C122.126 39.7893 123.192 40.472 124.558 40.984C125.923 41.496 127.566 41.752 129.486 41.752C131.619 41.752 133.262 41.432 134.414 40.792C135.608 40.1093 136.206 39.1493 136.206 37.912C136.206 37.016 135.886 36.312 135.246 35.8C134.606 35.2453 133.667 34.7973 132.43 34.456C131.235 34.072 129.784 33.7093 128.078 33.368C126.499 33.0267 124.899 32.6427 123.278 32.216C121.699 31.7467 120.227 31.1493 118.862 30.424C117.539 29.656 116.451 28.6747 115.598 27.48C114.787 26.2427 114.382 24.6853 114.382 22.808C114.382 20.76 114.915 18.9893 115.982 17.496C117.091 16.0027 118.67 14.8293 120.718 13.976C122.808 13.1227 125.326 12.696 128.27 12.696C131.043 12.696 133.432 13.08 135.438 13.848C137.486 14.616 139.15 15.7253 140.43 17.176C141.71 18.584 142.52 20.2693 142.862 22.232L136.206 24.344C136.078 23.1493 135.672 22.1467 134.99 21.336C134.307 20.4827 133.39 19.8427 132.238 19.416C131.086 18.9893 129.742 18.776 128.206 18.776C126.243 18.776 124.707 19.1173 123.598 19.8C122.488 20.4827 121.934 21.4 121.934 22.552C121.934 23.4907 122.275 24.2373 122.958 24.792C123.683 25.3467 124.664 25.7947 125.902 26.136C127.182 26.4773 128.632 26.8187 130.253 27.16C131.96 27.5013 133.603 27.9067 135.182 28.376C136.803 28.8027 138.254 29.3787 139.534 30.104C140.814 30.8293 141.838 31.7893 142.606 32.984C143.374 34.136 143.757 35.6293 143.757 37.464C143.757 39.6827 143.16 41.5813 141.966 43.16C140.771 44.696 139.064 45.8693 136.846 46.68C134.67 47.448 132.046 47.832 128.974 47.832ZM150.544 47V26.2V1.56H158.672V11.992C158.672 12.888 158.629 13.8053 158.544 14.744C158.501 15.6827 158.416 16.6427 158.288 17.624C158.16 18.6053 158.011 19.5867 157.84 20.568C157.712 21.5493 157.563 22.5307 157.392 23.512H158.736C159.333 21.208 160.101 19.2667 161.04 17.688C161.979 16.0667 163.173 14.8293 164.624 13.976C166.117 13.1227 167.931 12.696 170.064 12.696C173.947 12.696 176.848 14.0613 178.768 16.792C180.688 19.48 181.648 23.576 181.648 29.08V47H173.52V30.232C173.52 26.5627 172.965 23.8533 171.856 22.104C170.789 20.3547 169.168 19.48 166.992 19.48C165.2 19.48 163.707 20.0347 162.512 21.144C161.317 22.2107 160.4 23.64 159.76 25.432C159.12 27.224 158.736 29.2507 158.608 31.512V47H150.544ZM190.169 47V13.528H198.233V47H190.169ZM194.201 8.28C192.58 8.28 191.321 7.93866 190.425 7.256C189.572 6.53067 189.145 5.50667 189.145 4.184C189.145 2.86133 189.572 1.85866 190.425 1.176C191.321 0.450665 192.58 0.0879974 194.201 0.0879974C195.908 0.0879974 197.188 0.429331 198.041 1.112C198.894 1.79467 199.321 2.81866 199.321 4.184C199.321 5.50667 198.873 6.53067 197.977 7.256C197.124 7.93866 195.865 8.28 194.201 8.28ZM219.006 47.768C215.465 47.768 212.862 46.8293 211.198 44.952C209.534 43.032 208.702 40.0667 208.702 36.056V19.992H203.774L203.902 13.592H207.166C208.403 13.592 209.321 13.4 209.918 13.016C210.515 12.632 210.878 11.9493 211.006 10.968L211.774 6.104H216.446V13.528H225.278V20.248H216.446V35.736C216.446 37.3147 216.809 38.4667 217.534 39.192C218.302 39.9173 219.433 40.28 220.926 40.28C221.737 40.28 222.526 40.1947 223.294 40.024C224.105 39.8107 224.851 39.4693 225.534 39V46.68C224.211 47.1067 222.995 47.384 221.886 47.512C220.819 47.6827 219.859 47.768 219.006 47.768ZM236.097 47.768C234.347 47.768 233.025 47.384 232.129 46.616C231.233 45.848 230.785 44.6533 230.785 43.032C230.785 41.368 231.233 40.152 232.129 39.384C233.025 38.616 234.347 38.232 236.097 38.232C237.931 38.232 239.297 38.616 240.193 39.384C241.131 40.152 241.601 41.368 241.601 43.032C241.601 46.1893 239.766 47.768 236.097 47.768Z"
                    fill="white"
                />
            </svg>
            <div class="hidden items-center sm:flex">
                <div>
                    <a
                        href="/"
                        class="hover-header relative flex items-center h-full px-4 m group"
                    >
                        <span
                            class=" transition-all duration-300 group-hover:-translate-y-4 group-hover:opacity-0"
                        >
                            Home
                        </span>
                        <span
                            class=" absolute transition-all duration-300 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                        >
                            Home
                        </span>
                    </a>
                </div>
                <div>
                    <a
                        href="/"
                        class="hover-header relative flex items-center h-full px-4 group"
                    >
                        <span
                            class=" transition-all duration-300 group-hover:-translate-y-4 group-hover:opacity-0"
                        >
                            About
                        </span>
                        <span
                            class=" absolute transition-all duration-300 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                        >
                            About
                        </span>
                    </a>
                </div>
                <div>
                    <a
                        href="/"
                        class="hover-header relative flex items-center h-full px-4 group"
                    >
                        <span
                            class=" transition-all duration-300 group-hover:-translate-y-4 group-hover:opacity-0"
                        >
                            Work
                        </span>
                        <span
                            class=" absolute transition-all duration-300 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                        >
                            Work
                        </span>
                    </a>
                </div>
                <div>
                    <a
                        href="/"
                        class="hover-header relative flex items-center h-full px-4 group"
                    >
                        <span
                            class=" transition-all duration-300 group-hover:-translate-y-4 group-hover:opacity-0"
                        >
                            Blogs
                        </span>
                        <span
                            class=" absolute transition-all duration-300 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                        >
                            Blogs
                        </span>
                    </a>
                </div>
                <div>
                    <a
                        href="/"
                        class="hover-header relative flex items-center h-full px-4 group"
                    >
                        <span
                            class=" transition-all duration-300 group-hover:-translate-y-4 group-hover:opacity-0"
                        >
                            Contact
                        </span>
                        <span
                            class=" absolute transition-all duration-300 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                        >
                            Contact
                        </span>
                    </a>
                </div>
            </div>
            <div class="sm:block hidden">
                <GooeyButton
                    buttonBgColor="rgba(208,255,113,1)"
                    buttonText="CONTACT ME"
                />
            </div>
            <div class="sm:hidden block">
                <!-- svelte-ignore a11y_click_events_have_key_events -->
                <!-- svelte-ignore a11y_no_static_element_interactions -->
                <div
                    class="hamburger w h-4 flex justify-between flex-col cursor-pointer"
                    on:click={toggleMenu}
                >
                    <div
                        class="line bg-white h-0.5 w-5"
                        style="transform-origin: left;"
                        bind:this={line1}
                    ></div>
                    <div
                        class="line bg-white h-0.5 w-5"
                        bind:this={line2}
                    ></div>
                    <div
                        class="line bg-white h-0.5 w-5"
                        bind:this={line3}
                    ></div>
                </div>
            </div>
            <div class="sm:hidden block absolute top-10 left-0">
                <div>
                    <p>Have a look around...</p>
                </div>
                <div class="link text-4xl my-3">
                    <div class="sublink">
                        <a href="/" class="menu-link translate-y-10">Home</a>
                    </div>
                    <div class="sublink">
                        <a href="/" class="menu-link translate-y-10">About</a>
                    </div>
                    <div class="sublink">
                        <a href="/" class="menu-link translate-y-10">Work</a>
                    </div>
                    <div class="sublink">
                        <a href="/" class="menu-link translate-y-10">Blogs</a>
                    </div>
                    <div class="sublink">
                        <a href="/" class="menu-link translate-y-10">Contact</a>
                    </div>
                </div>

                <div class="md:block">
                    <GooeyButton
                        buttonBgColor="rgba(208,255,113,1)"
                        buttonText="CONTACT ME"
                    />
                </div>
            </div>
        </div>
    </header>
</main>

<style>
    header {
        left: 50%;
        transform: translateX(-50%);
        backdrop-filter: blur(10px);
    }
</style>
