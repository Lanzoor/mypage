<script>
    import External from '$lib/components/Links/External.svelte';
</script>

<svelte:head>
    <title>Showcase | core</title>
</svelte:head>

<section id="intro">
    <div class="breadcrumbs">
        <a href="/">Home</a>

        <div class="separator">›</div>

        <a href="/projects">Projects</a>

        <div class="separator">›</div>

        <a href="/projects/core">core</a>
    </div>

    <header>
        <h1>core</h1>

        <blockquote>
            the frontend source code for <code>lanzoor.dev</code>, which is the website you're
            looking at right now.
        </blockquote>
    </header>

    <h1>What is core?</h1>

    <p>
        <b
            ><code>core</code> is the name of the repository that contains the frontend source code
            for
            <code>lanzoor.dev</code>, which is the website you're looking at right now.</b
        >
        <code>core</code> powers pretty much everything you see on this website.
    </p>

    <h1>How is core built?</h1>

    <p>
        <b>
            <code>core</code> is built using <External
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
            This project is almost completed!
        </li>
    </ul>

    <h2>Links</h2>

    <ul>
        <li>
            <a href="https://lanzoor.dev">Project</a><br />
            <code>core</code> is deployed to <a href="https://lanzoor.dev">https://lanzoor.dev</a>.
        </li>
        <li>
            <a href="/projects/core/changelog">Changelog</a><br />
            A list of changes made to <code>core</code>.
        </li>
        <li>
            <External href="https://github.com/Lanzoor/core">Source</External><br />
            Everything you see on this website is open source and available for everyone to see or contribute.
        </li>
    </ul>
</section>
