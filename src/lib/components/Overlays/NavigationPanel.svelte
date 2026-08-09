<script lang="ts">
    import { navigationOverlay, warpOverlay } from '$lib/overlays.svelte';
    import { onMount } from 'svelte';
    import External from '../Links/External.svelte';

    onMount(() => {
        const listener = (event: KeyboardEvent) => {
            if (event.ctrlKey && event.shiftKey && event.code === 'KeyN') {
                event.preventDefault();
                navigationOverlay.open = !navigationOverlay.open;
            }
        };

        document.addEventListener('keydown', listener);

        return () => {
            document.removeEventListener('keydown', listener);
        };
    });
</script>

<div id="navigation" class:open={navigationOverlay.open}>
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="bg" onclick={() => (navigationOverlay.open = false)}>
        <div class="panel enable-spacing" onclick={(event) => event.stopPropagation()}>
            <div class="header">
                <h1 class="logo">
                    <span class="head">lanzoor</span>.<span class="tail">dev</span>
                </h1>

                <button onclick={() => (navigationOverlay.open = false)}>
                    <img src="/assets/icons/close.svg" alt="x" />

                    <p class="mobile-failsafe">Close</p>
                </button>
            </div>
            <hr />
            <nav class="links">
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/map">Site Map</a>
                    </li>
                    <li>
                        <details open>
                            <summary> Legal </summary>
                            <ul>
                                <li>
                                    <a href="/legal">About</a>
                                </li>
                                <li>
                                    <a href="/legal/privacy-policy">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="/legal/tos">Terms Of Service</a>
                                </li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details open>
                            <summary> Projects </summary>
                            <ul>
                                <li>
                                    <a href="/projects">Projects Portal</a>
                                </li>
                                <li>
                                    <a href="/tools">Tools</a>
                                </li>
                                <li>
                                    <a href="/tools">Conlangs</a>
                                </li>
                                <li>
                                    <External href="https://www.youtube.com/@lanzoormakesvideos">
                                        Videos
                                    </External>
                                </li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details open>
                            <summary> Documents </summary>
                            <ul>
                                <li>
                                    <a href="/docs">Document Portal</a>
                                </li>
                                <li>
                                    <a href="/docs/blog">Blog</a>
                                </li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details open>
                            <summary> Credits </summary>
                            <ul>
                                <li>
                                    <a href="/credits">Credits Portal</a>
                                </li>
                                <li>
                                    <a href="/credits/fonts">Font Credits</a>
                                </li>
                                <li>
                                    <a href="/credits/assets">Asset Credits</a>
                                </li>
                                <li>
                                    <a href="/credits/contributors">Contributors</a>
                                </li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </nav>

            <button onclick={() => (warpOverlay.open = true)}>Open Warp Panel</button>
        </div>
    </div>
</div>

<style lang="css">
    #navigation {
        position: fixed;
        inset: 0;

        opacity: 0;
        pointer-events: none;
        z-index: 2147483647;
    }

    #navigation.open {
        opacity: 1;
        pointer-events: auto;

        transition: 0.5s ease;
    }

    #navigation .bg {
        background: rgba(0, 0, 0, 0.5);
        width: 100%;
        height: 100%;
        cursor: pointer;
    }

    #navigation .panel {
        position: fixed;
        inset: 0 0 0 auto;
        text-align: left;
        background: rgba(0, 0, 0, 0.75);
        min-width: 40%;
        max-width: 100vw;
        cursor: default;

        padding: 1.5em;
    }

    #navigation .panel .header {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: 2em;
    }

    #navigation .panel .header * {
        padding: 0;
        margin: 0;
    }

    #navigation .panel .header img {
        max-width: 2em;
        max-height: 2em;

        transition: filter 200ms ease;
    }

    #navigation .panel .header img:hover {
        filter: drop-shadow(0 0 10px #bbb);
    }
    #navigation .panel .header button {
        display: flex;
        flex-direction: row;
        align-items: center;
        align-self: flex-end;
        justify-content: center;
        gap: 0.5em;
    }
    #navigation .panel .header button .mobile-failsafe {
        display: none;
    }
    #navigation .panel .header button:hover {
        cursor: pointer;
    }

    #navigation .panel .header .logo {
        font-size: 1.5em;
    }

    #navigation .panel .links {
        overflow-y: auto;
    }
    #navigation .panel .links ul {
        list-style-type: none;
        padding: 0;
    }
    #navigation .panel .links li:not(:has(details))::before {
        content: '- ';
    }
    #navigation .panel .links li details > summary {
        user-select: none;
    }
    #navigation .panel .links li details > ul {
        padding: 0 2em 0.5em 2em;
    }
    #navigation .panel .links li {
        padding: 0.1em 0;
    }

    @media (max-width: 480px) {
        #navigation .panel .header {
            justify-content: flex-start;
        }

        #navigation .panel .header .logo {
            display: none;
        }

        #navigation .panel .header img {
            width: 1.5em;
            height: 1.5em;
        }

        #navigation .panel .header button .mobile-failsafe {
            display: inline-block;
        }
    }
</style>
