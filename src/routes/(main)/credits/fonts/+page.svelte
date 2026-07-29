<script lang="ts">
    import { onMount } from 'svelte';

    const fonts = [
        {
            internalName: 'jetbrains-mono',
            name: 'JetBrains Mono',
        },
        {
            internalName: 'fira-code',
            name: 'Fira Code',
        },
        {
            internalName: 'noto-sans',
            name: 'Noto Sans',
        },
        {
            internalName: 'noto-sans-mono',
            name: 'Noto Sans Mono',
        },
    ];

    let activeFont = $state(fonts[0]);

    onMount(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (!entry.isIntersecting) continue;

                    const font = fonts.find((f) => f.internalName === entry.target.id);

                    if (font) {
                        activeFont = font;
                    }
                }
            },
            {
                threshold: 0.6,
            }
        );

        document.querySelectorAll('.font').forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    });

    let animate = $state(false);

    $effect(() => {
        activeFont;

        animate = false;

        requestAnimationFrame(() => {
            animate = true;
        });
    });
</script>

<svelte:head>
    <title>Font Credits | lanzoor.dev</title>
</svelte:head>

<section class="stretched" id="intro">
    <span class="breadcrumbs">
        <a href="/">Home</a>

        <span class="separator">›</span>

        <a href="/credits">Credits</a>

        <span class="separator">›</span>

        <a href="/credits/fonts">Font Credits</a>
    </span>

    <h1>Fonts</h1>

    <blockquote class="dim">
        <b>typography</b> <span class="ipa">/taɪˈpɑːgrəfi/</span>
        <span class="dimmer">(noun)</span>:<br />
        the art and technique of printing with movable type.
    </blockquote>

    <p>
        <b>Fonts make a website truly unique and distinct.</b><br />
        They define <b>the vibe and personality</b> of a website, turning simple text into something
        memorable.<br />
        <b>This website uses multiple fonts, each chosen for its appropriate context.</b>
    </p>

    <p>
        <b>This page lists every font directly used in the website</b>, their sources, as well as
        their use cases.<br />
        If you have any questions, concerns, or problems loading fonts,
        <b>please feel free to <a href="#connections">get in touch</a>!</b>
    </p>

    <span class="dim">
        Some of the fonts below
        <span class="dimmer"> (loaded via distribution) </span>
        had to be converted from <code>.ttf</code> to <code>.woff2</code> (or vice versa) for
        compatiabillity purposes.<br />
    </span>
</section>

<section id="showcase">
    <div id="font-showcase" class={activeFont.internalName} class:animate>
        <h1>{activeFont.name}</h1>

        <p>
            The quick brown fox jumps over the lazy dogs.<br /><br />
            ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
            abcdefghijklmnopqrstuvwxyz<br />
        </p>
    </div>

    <div id="font-description">
        <div class="font jetbrains-mono" id="jetbrains-mono">
            <h1>JetBrains Mono</h1>

            blah blah blah
        </div>

        <div class="font fira-code" id="fira-code">
            <h1>Fira Code</h1>

            blah blah blah
        </div>

        <div class="font noto-sans" id="noto-sans">
            <h1>Noto Sans</h1>

            notorious
        </div>

        <div class="font noto-sans-mono" id="noto-sans-mono">
            <h1>Noto Sans Mono</h1>

            does mono stand for monokuma
        </div>
    </div>
</section>

<style lang="css">
    #showcase {
        background:
            radial-gradient(circle at left top, #333 0%, transparent 40%, transparent 100%),
            radial-gradient(circle at right bottom, #333 0%, transparent 40%, transparent 100%),
            #111;
    }

    #font-showcase {
        display: none;
    }
    @media (min-width: 1080px) {
        #showcase {
            display: flex;
            flex-direction: row;
            gap: 4rem;
            align-items: flex-start;

            overflow: visible; /* i KID YOU NOT i literally spent like 30 minutes trying to debug this. */
        }

        #font-showcase {
            position: sticky;
            top: 0;

            width: 40vw;
            height: 100vh;

            display: flex;
            flex-direction: column;

            justify-content: center;
            align-items: flex-start;

            padding: 2rem;
        }

        #font-showcase.animate {
            animation: fadeIn 0.5s ease;
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        #font-description {
            width: 100vh;
        }

        .font {
            min-height: 100vh;
            width: 100%;

            display: flex;
            flex-direction: column;
            gap: 2em;
            justify-content: center;
        }
    }
</style>
