<script lang="ts">
    import { onMount } from "svelte";
    import External from "../Links/External.svelte";

    let frontendVersion: string = $state("...");
    let backendVersion: string = $state("...");

    onMount(() => {
        const cleanFunc = () => {
            frontendVersion = "...";
            backendVersion = "...";
        };

        async function loadVersions() {
            const result = await fetch("https://api.lanzoor.dev/status");

            if (!result.ok) {
                console.error(
                    `error: failed to fetch versions: api.lanzoor.dev/status responded with an error\n\t`,
                    Error(result.statusText),
                );

                return cleanFunc;
            }

            const jsonResult = await result.json();

            if (jsonResult.success === true) {
                frontendVersion = jsonResult?.data.versions.frontend;
                backendVersion = jsonResult?.data.versions.backend;
            } else {
                console.error(
                    `error: failed to fetch versions: api.lanzoor.dev/status responded with an error\n\t`,
                    Error(jsonResult),
                );
            }
        }

        loadVersions();

        return cleanFunc;
    });
</script>

<section id="footer-panel" class="disable-padding">
    <section id="navigation">
        <nav id="navigation-links">
            <div class="group">
                <h2>General</h2>
                <a href="/">Frontpage</a>
                <a href="/profile">Profile</a>
                <a href="/map">Site map</a>
            </div>
            <div class="group">
                <h2>Projects</h2>
                <a href="/projects">Projects</a>
                <a href="/tools">Tools</a>
                <External href="/projects/videos">Videos</External>
                <a href="/projects/conlangs">Conlangs</a>
            </div>
            <div class="group">
                <h2>Documents</h2>
                <a href="/docs">Documents</a>
                <a href="/docs/blog">Blog</a>
            </div>
            <div class="group">
                <h2>Meta</h2>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
                <a href="/projects/core/changelog">Changelog</a>
                <a href="/credits">Credits</a>
            </div>
            <div class="group">
                <h2>Legal</h2>
                <a href="/legal">About</a>
                <a href="/legal/privacy">Privacy Policy</a>
                <a href="/legal/terms">Terms of Service</a>
            </div>
        </nav>
    </section>

    <section class="enable-spacing" id="bottom">
        <div class="enable-spacing">
            <h1 class="logo">
                <span class="head">lanzoor</span>.<span class="tail">dev</span>
            </h1>

            <p>
                A website by Lanzoor, including projects, showcases, documents,
                and more!<br />

                <span class="dim">
                    frontend <code>{frontendVersion}</code> | backend
                    <code>{backendVersion}</code>
                </span>
            </p>
        </div>

        <hr />

        <div id="footer" class="enable-spacing">
            <div id="connections">
                <External
                    href="https://www.discord.com"
                    showArrow={false}
                    class="link"
                >
                    <img
                        src="/assets/icons/socials/discord.svg"
                        alt="Discord"
                    />

                    <span class="handle">
                        @<span class="col bright purple">lanzoor</span>
                    </span>
                </External>

                <External
                    href="https://www.reddit.com/user/Lanzoor/"
                    showArrow={false}
                    class="link"
                >
                    <img src="/assets/icons/socials/reddit.svg" alt="Reddit" />

                    <span class="handle">
                        u/<span class="col bright purple">Lanzoor</span>
                    </span>
                </External>

                <External
                    href="https://github.com/Lanzoor"
                    showArrow={false}
                    class="link"
                >
                    <img src="/assets/icons/socials/github.svg" alt="GitHub" />

                    <span class="handle">
                        <span class="col bright purple">Lanzoor</span>
                    </span>
                </External>

                <External
                    href="https://steamcommunity.com/id/lanzoor/"
                    showArrow={false}
                    class="link"
                >
                    <img src="/assets/icons/socials/steam.svg" alt="steam" />

                    <span class="handle">
                        <span class="col bright purple">Lanzoor</span>
                    </span>
                </External>

                <External
                    href="https://www.youtube.com/@lanzoormakesvideos"
                    showArrow={false}
                    class="link"
                >
                    <img
                        src="/assets/icons/socials/youtube.svg"
                        alt="YouTube"
                    />

                    <span class="handle">
                        @<span class="col bright purple">lanzoor</span
                        >makesvideos
                    </span>
                </External>

                <!-- <External href="https://ko-fi.com/lanzoor" showArrow={false} class="link">
                    <img src="/assets/icons/socials/ko-fi.svg" alt="Ko-fi" />

                    <span class="handle">
                        <span class="col bright purple">lanzoor</span>
                    </span>
                </External> -->

                <a href="mailto:mail@lanzoor.dev" class="link">
                    <img src="/assets/icons/socials/email.svg" alt="Email" />

                    <span class="handle">
                        mail@<span class="col bright purple">lanzoor</span>.dev
                    </span>
                </a>
            </div>

            <footer>
                © 2026 <External href="https://lanzaforge.org"
                    >Lanzaforge</External
                > ⬩ built with ♡
            </footer>
        </div>
    </section>
</section>

<style lang="css">
    :root {
        --footer-panel-bg: radial-gradient(
            circle at 50% -25%,
            #22054d 0%,
            #000 100%
        );
    }

    #footer-panel {
        padding: auto 10%;
        background: var(--footer-panel-bg);
        border-top: 3px solid rgba(133, 91, 224, 0.5);

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 2%;

        font-family: "JetBrains Mono";
    }

    #footer-panel section {
        width: 100%;
    }

    #footer-panel #navigation {
        padding: 4em;
        border-bottom: 3px solid rgba(133, 91, 224, 0.5);
    }

    #footer-panel #navigation #navigation-links {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(10vw, 1fr));
        gap: 2em;
    }

    @media (max-width: 1200px) {
        #footer-panel #navigation #navigation-links {
            grid-template-columns: repeat(auto-fit, minmax(30vw, 1fr));
        }
    }

    #footer-panel #navigation #navigation-links .group {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.25em;
    }

    #footer-panel #navigation #navigation-links .group h2 {
        margin: 0.25em 0 0.5em 0;
        font-family: "JetBrains Mono";
        font-size: 1.1em;
        color: rgb(123, 61, 255);
    }

    #footer-panel #connections {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        column-gap: 1.5em;
        row-gap: 0.5em;

        margin: 0 2em;
    }

    :global(#footer-panel #connections a:not(.plain):has(> img)) {
        opacity: 0.75;
        transition: opacity 500ms ease;
    }

    :global(#footer-panel #connections a:not(.plain):has(> img):hover) {
        opacity: 1;
        text-decoration: none;
    }

    #footer-panel #connections .handle {
        color: rgb(110, 55, 192);
    }

    #footer-panel footer {
        font-size: 0.75em;
        opacity: 0.5;
        text-align: center;
    }

    @media (max-width: 768px) {
        :global(#footer-panel #connections a > img) {
            width: 2em;
            height: 2em;
        }

        #footer-panel #connections {
            justify-content: flex-start;
            column-gap: 1em;
            row-gap: 0.25em;

            margin: 0;
        }

        #footer-panel #connections .handle {
            display: none;
        }
    }
</style>
