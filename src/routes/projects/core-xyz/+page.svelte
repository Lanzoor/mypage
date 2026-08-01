<script>
    import External from '$lib/components/Links/External.svelte';
</script>

<svelte:head>
    <title>Showcase | core-xyz</title>
</svelte:head>

<section id="intro">
    <div class="breadcrumbs">
        <a href="/">Home</a>

        <div class="separator">›</div>

        <a href="/projects">Projects</a>

        <div class="separator">›</div>

        <a href="/projects/core-xyz">core-xyz</a>
    </div>

    <header>
        <h1>core-xyz</h1>

        <blockquote>
            the frontend source code for <code>lanzoor.xyz</code>, a small website dedicated to my
            profile.
        </blockquote>
    </header>

    <h1>What is core-xyz?</h1>

    <p>
        <b
            ><code>core-xyz</code> is the name of the repository that contains the frontend source
            code for
            <code>lanzoor.xyz</code>.</b
        >
        <code>lanzoor.xyz</code> is a small website dedicated to my profile and myself. For more
        information, please check <External href="https://www.lanzoor.xyz/about"
            >lanzoor.xyz/about</External
        >.
    </p>

    <h1>How is core-xyz built?</h1>

    <p>
        <b>
            <code>core-xyz</code> is built using <External
                href="https://svelte.dev/docs/kit/introduction">SvelteKit</External
            >,</b
        > an amazing framework for developing web applications like this.
    </p>
</section>

<section id="information">
    <h1>Information</h1>

    <ul>
        <li>
            Tags: <span class="col bright green">frontend</span>,
            <span class="col bright cyan">webpage</span>
        </li>
        <li>
            <b>Status: <span class="col bright yellow">WIP</span></b><br />
            This project still in development, and we would love to experiment a bit more with it.
        </li>
    </ul>

    <h2>Links</h2>

    <ul>
        <li>
            <a href="https://lanzoor.xyz">Project</a><br />
            <code>core-xyz</code> is deployed to
            <a href="https://lanzoor.xyz">https://lanzoor.xyz</a>.
        </li>
        <li>
            <External href="https://github.com/Lanzoor/core-xyz">Source</External><br />
            Everything you see within <code>core-xyz</code> is open source and available for everyone
            to see or contribute.
        </li>
    </ul>
</section>
