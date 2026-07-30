<script>
    import External from '$lib/components/Links/External.svelte';
</script>

<svelte:head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>Projects | lanzoor.dev</title>
</svelte:head>

<section id="projects">
    <span class="breadcrumbs">
        <a href="/">Home</a>

        <span class="separator">›</span>

        <a href="/projects">Projects</a>
    </span>

    <h1>Featured Projects</h1>

    <p>Here are some projects that I've been working on.</p>

    <div id="container">
        <div class="project">
            <div class="header">
                <h1>core</h1>

                <div class="status wip">wip</div>
            </div>

            <p class="description">
                The frontend source code for lanzoor.dev, which is the website you're looking at
                right now.
            </p>

            <div class="tags">
                <div class="tag frontend">frontend</div>
                <div class="tag webpage">webpage</div>
            </div>

            <hr />

            <div class="links">
                links:

                <a href="/"> project </a>
                <a href="/projects/core"> showcase </a>
                <a href="/projects/core/changelog"> changelog </a>
                <External href="https://github.com/Lanzoor/core">source</External>
            </div>
        </div>

        <div class="project">
            <div class="header">
                <h1>core-api</h1>

                <div class="status wip">wip</div>
            </div>

            <p class="description">
                The frontend & backend source code for api.lanzoor.dev, built with NextJS.
            </p>

            <div class="tags">
                <div class="tag backend">backend</div>
                <div class="tag webpage">webpage</div>
            </div>

            <hr />

            <div class="links">
                links:

                <External href="https://api.lanzoor.dev">project</External>
                <External href="/projects/core-api/changelog">changelog</External>
                <External href="https://github.com/Lanzoor/core-api">source</External>
            </div>
        </div>

        <div class="project">
            <div class="header">
                <h1>core-xyz</h1>

                <div class="status wip">wip</div>
            </div>

            <p class="description">A small website dedicated to my profile.</p>

            <div class="tags">
                <div class="tag frontend">frontend</div>
                <div class="tag webpage">webpage</div>
            </div>

            <hr />

            <div class="links">
                links:

                <External href="https://lanzoor.xyz">project</External>
                <External href="https://github.com/Lanzoor/core-xyz">source</External>
            </div>
        </div>

        <div class="project">
            <div class="header">
                <h1>core-legacy</h1>

                <div class="status complete">complete</div>
            </div>

            <p class="description">
                An archive containing previous documents related to me that are no longer actively
                maintained.
            </p>

            <div class="tags">
                <div class="tag frontend">frontend</div>
                <div class="tag webpage">webpage</div>
            </div>

            <hr />

            <div class="links">
                links:

                <External href="https://legacy.lanzoor.dev">project</External>
                <External href="https://github.com/Lanzoor/core-legacy">source</External>
            </div>
        </div>

        <div class="project">
            <div class="header">
                <h1>tzepak</h1>

                <div class="status wip">wip</div>
            </div>

            <p class="description">
                A strong deterministic password generator that creates unique, reproducible
                passwords, written in Python.
            </p>

            <div class="tags">
                <div class="tag program">program</div>
                <div class="tag cli">cli</div>
            </div>

            <hr />

            <div class="links">
                links

                <External href="https://github.com/Lanzoor/tzepak">source</External>
            </div>
        </div>

        <div class="project">
            <div class="header">
                <h1>BHOJ <span class="dim">(Bro Had One Job)</span></h1>

                <div class="status complete">complete</div>
            </div>

            <p class="description">An esoteric programming language compiler, written in Python.</p>

            <div class="tags">
                <div class="tag program">program</div>
                <div class="tag cli">cli</div>
            </div>

            <hr />

            <div class="links">
                links:

                <External href="https://github.com/Lanzoor/BHOJ">source</External>
            </div>
        </div>
    </div>

    <p>
        For archived projects, please refer to
        <External href="https://legacy.lanzoor.dev">legacy.lanzoor.dev</External>.
    </p>
</section>

<section id="portal">
    <h1>Projects Portal</h1>

    <p>There's also a plenty of projects hosted directly within this website.</p>

    <ul>
        <li>
            Tools - <a href="/tools">/tools</a><br />
            A collection of some handy tools designed for everyone to use.
        </li>

        <li>
            Conlangs - <a href="/conlangs">/conlangs</a><br />
            A collection of my constructed languages.
        </li>
    </ul>
</section>

<style lang="css">
    :root {
        --projects-bg:
            radial-gradient(
                circle at top left,
                rgba(0, 72, 255, 0.1) 0%,
                transparent 25%,
                transparent 100%
            ),
            radial-gradient(
                circle at 100% 50%,
                rgba(0, 255, 255, 0.1) 0%,
                transparent 25%,
                transparent 100%
            ),
            radial-gradient(
                circle at bottom left,
                rgba(0, 180, 255, 0.1) 0%,
                transparent 25%,
                transparent 100%
            ),
            black;
    }

    #projects {
        background: var(--projects-bg);
    }

    #portal {
        background: black;
    }

    #container {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        justify-content: center;

        gap: 3em;

        width: 100%;
        margin: 3em 0;
    }

    .project {
        display: flex;
        flex-direction: column;
        gap: 1em;

        padding: 2em;

        background: black;
        border: 2px solid #222;
        border-radius: 2em;
    }

    .project h1 {
        font-size: 2em;
        letter-spacing: 0.05em;
        text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);

        font-family: 'JetBrains Mono';

        transition: letter-spacing 0.5s ease;
    }

    .project h1:hover {
        letter-spacing: 0.1em;
    }

    .project .header {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    .project .header .status {
        background: #111;
        padding: 0.3em 0.5em;
    }

    .project .header .status::before {
        content: '[ ';
    }

    .project .header .status::after {
        content: ' ]';
    }

    .project .header .status.complete {
        color: var(--bright-green);
        background: color-mix(in oklch, black, var(--bright-green) 25%);
    }

    .project .header .status.wip {
        color: var(--bright-yellow);
        background: color-mix(in oklch, black, var(--bright-yellow) 25%);
    }

    .project .description {
        line-height: 1.6;
        font-size: 0.9em;

        color: rgba(255, 255, 255, 0.7);
    }

    .project .tags {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }

    .project .tags .tag {
        font-size: 12.5px;
        font-weight: 600;

        color: #777;
        border: 1px solid rgba(255, 255, 255, 0.25);

        background: #111;

        padding: 0.3em 1em;

        backdrop-filter: blur(10px);
    }

    .project .tags .tag.backend {
        border: 1px solid var(--orange);
        color: var(--bright-orange);
        background: color-mix(in oklch, #111, var(--bright-orange) 10%);
    }

    .project .tags .tag.frontend {
        border: 1px solid var(--green);
        color: var(--bright-green);
        background: color-mix(in oklch, #111, var(--bright-green) 10%);
    }

    .project .tags .tag.webpage {
        border: 1px solid var(--cyan);
        color: var(--bright-cyan);
        background: color-mix(in oklch, #111, var(--bright-cyan) 10%);
    }

    .project .tags .tag.program {
        border: 1px solid var(--purple);
        color: var(--bright-purple);
        background: color-mix(in oklch, #111, var(--bright-purple) 10%);
    }

    .project .tags .tag.cli {
        border: 1px solid var(--magenta);
        color: var(--bright-magenta);
        background: color-mix(in oklch, #111, var(--bright-magenta) 10%);
    }

    .project hr {
        height: 1px;

        margin: 0 0 18px 0;
    }

    .project .links {
        display: flex;
        flex-direction: row;
        gap: 20px;
    }

    .project .links :global(a) {
        color: white;
        transition: 200ms ease;
    }

    .project .links :global(a):hover {
        text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
    }
</style>
