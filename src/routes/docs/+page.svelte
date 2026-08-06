<script>
    import Breadcrumbs from '$lib/components/Navigation/Breadcrumbs.svelte';
</script>

<section>
    <Breadcrumbs />

    <header>
        <h1>Document Portal</h1>

        <p>
            Hello there! This is a page where you can find all of my documents.<br />
            <i>Click one of the links below to warp into that page!</i>
        </p>
    </header>

    <ul>
        <li>
            <b>Blogs</b> - <a href="/docs/blog/">./blog/</a> - Official notices, updates, or important
            information.
        </li>
        <li>
            <b>API Documentation</b> - <a href="/api/docs/">/api/docs/</a> - Official documentation for
            the API of this website.
        </li>
    </ul>

    <h2>Topics</h2>

    <ul>
        <li>
            <b>Math</b> - <a href="/docs/math">./math/</a> - My documents related to math.
        </li>
        <li>
            <b>Linguistics</b> - <a href="/docs/linguistics">./linguistics/</a> - My documents related
            to linguistics.
        </li>
    </ul>
</section>
