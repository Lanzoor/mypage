<script lang="ts">
    import { onMount } from 'svelte';
    import { page } from '$app/state';

    type TopPanelDestination = { href: string; name: string };

    const topPanelDestinations: TopPanelDestination[] = [
        { href: '/', name: 'welcome!' },
        { href: '/about', name: 'about' },
        { href: '/projects', name: 'projects' },
        { href: '/docs', name: 'documents' },
    ];

    const HIDE_THRESHOLD = 100;
    let hidden = $state(false);
    let atTop = $state(true);

    onMount(() => {
        let lastY = window.scrollY;

        function handleScroll() {
            const currentY = window.scrollY;
            const isScrollingDown = currentY > lastY;

            hidden = isScrollingDown && currentY > HIDE_THRESHOLD;
            atTop = currentY === 0;

            lastY = currentY;
        }

        window.addEventListener('scroll', handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });
</script>

<div id="top-panel" class:hidden class:at-top={atTop}>
    <a href="/" class="logo plain">
        <span class="head">lanzoor</span>.<span class="tail">dev</span>
    </a>

    <nav id="top-panel--links">
        {#each topPanelDestinations as destination}
            <a
                href={destination.href}
                class:current={destination.href === '/'
                    ? page.url.pathname === '/'
                    : page.url.pathname.startsWith(destination.href)}
            >
                [ {destination.name} ]
            </a>
        {/each}
    </nav>

    <div id="top-panel--buttons">
        <img
            src="/assets/icons/hamburger.svg"
            alt="☰"
            class="panel-icon"
            id="toggle--navigation"
        />
    </div>
</div>

<style lang="css">
    @layer component {
        :root {
            --top-panel-max-height: 20vh;

            --top-panel-text: #aaa;
            --top-panel-bg: rgba(0, 0, 0, 0.5);
        }

        :global(main > section:first-of-type) {
            padding-top: calc(var(--top-panel-max-height) + 4em);
        }

        :global(main) {
            min-height: 100vh;
        }

        #top-panel,
        #top-panel * {
            border-radius: 0;
            user-select: none;
        }

        #top-panel-root a {
            position: relative;
            display: inline-block;
        }

        #top-panel {
            position: fixed;
            inset: 0 0 auto 0;

            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;

            padding: 2%;
            gap: 4%;

            max-height: var(--top-panel-max-height);

            z-index: 2147483647;
            background: var(--top-panel-bg);

            backdrop-filter: blur(4px);

            overflow-x: hidden;
            overflow-y: hidden;
            transition:
                transform 0.3s ease-in-out,
                background 0.3s ease,
                box-shadow 0.3s ease;
        }

        #top-panel.hidden {
            transform: translateY(-200%);
        }

        #top-panel a {
            padding: 0;

            text-shadow: none;
            color: var(--top-panel-text);
            text-decoration: none;

            font-size: 200%;
            font-family: 'Noto Sans Mono';

            transition:
                color 0.5s ease,
                text-shadow 0.5s ease;
        }

        #top-panel .logo,
        #top-panel .logo * {
            transition: all 0.5s ease;
        }

        #top-panel .logo:hover {
            text-shadow: 0 0 20px white;
        }

        #top-panel .logo:hover .head {
            text-shadow: 0 0 20px rgb(174, 103, 255);
            color: rgb(175, 138, 255);
        }

        #top-panel .logo:hover .tail {
            text-shadow: 0 0 20px #777;
        }

        #top-panel--buttons {
            padding: 0;
            margin: 0;

            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            align-items: center;
            height: 100%;
        }

        #top-panel--links {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);

            width: 100%;
            height: 100%;

            gap: 5px;

            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;

            pointer-events: none;
        }

        #top-panel--links a {
            text-decoration: none;

            font-family: 'JetBrains Mono';
            font-size: 20px;

            padding: 5px 10px;
            color: #aaa;

            pointer-events: auto;

            transition: 0.5s ease;
        }

        #top-panel--links a.current {
            background: rgb(28, 4, 78);
            color: rgb(141, 83, 255);
        }

        #top-panel--links a.current:hover {
            color: rgb(168, 124, 255);
            text-shadow: 0 0 10px rgb(168, 124, 255, 0.5);
        }

        #top-panel--links a:not(.current):hover {
            color: rgba(220, 220, 220);
            text-shadow: 0 0 10px rgba(220, 220, 220, 0.5);
        }

        .panel-icon {
            margin: 0;
            padding: 0;
            border: none;

            width: min(40px, 75%);
            height: min(40px, 75%);

            box-shadow: none;

            transition: all 0.5s ease;
            pointer-events: auto;
        }

        .panel-icon:hover {
            filter: drop-shadow(0 0 10px #bbb);
            cursor: pointer;
        }

        @media (max-width: 768px) {
            #top-panel {
                backdrop-filter: none;
            }
        }

        @media (max-width: 1200px) {
            #top-panel--links {
                display: none;
            }
        }

        @media (max-width: 1600px) {
            #top-panel .logo {
                font-size: 1.5em;
            }
            #top-panel--links a {
                font-size: 0.5em;
            }
        }
    }
</style>
