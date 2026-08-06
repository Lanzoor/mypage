<script>
    import External from '$lib/components/Links/External.svelte';
    import Breadcrumbs from '$lib/components/Navigation/Breadcrumbs.svelte';
</script>

<section id="intro">
    <Breadcrumbs />

    <header>
        <h1>core-api</h1>

        <blockquote>
            the source code for <code>api.lanzoor.dev</code>, which powers the backend of
            <code>core</code>.
        </blockquote>
    </header>

    <h1>What is core-api?</h1>

    <p>
        <b
            ><code>core-api</code> is the name of the repository that contains the the source code
            for <code>api.lanzoor.dev</code>, which powers the backend of
            <code>core</code>.</b
        >
        <code>core</code> powers pretty much everything you see on this website.
    </p>

    <h1>How is core-api built?</h1>

    <p>
        <b>
            <code>core</code> is built using <External href="https://nextjs.org/">Next.js</External
            >,</b
        > an amazing framework powered by React.
    </p>
</section>

<section id="information">
    <h1>Information</h1>

    <ul>
        <li>
            Tags: <span class="col bright orange">backend</span>,
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
            <External href="https://api.lanzoor.dev">Project</External><br />
            <code>core-api</code> is deployed to
            <External href="https://api.lanzoor.dev">https://api.lanzoor.dev</External>.
        </li>
        <li>
            <External href="/projects/core-api/changelog">Changelog</External><br />
            A list of changes made to <code>core-api</code>.
        </li>
        <li>
            <External href="https://github.com/Lanzoor/core-api">Source</External><br />
            Everything within <code>core-api</code> is open source and available for everyone to see or
            contribute.
        </li>
    </ul>
</section>
