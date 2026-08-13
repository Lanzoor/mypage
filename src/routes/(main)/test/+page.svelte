<script>
    import Redirects from "$lib/components/Information/Redirects.svelte";
</script>

<section>
    <h1>Testing</h1>

    <Redirects links={["/testing", "/test"]} />

    <p>
        Hey there!<br />
        This section contains some, "tests" with styles and experimental features
        for debugging purposes. Feel free to just ignore this section of the website.
    </p>

    <ul>
        <li>
            <a href="/test/colors">/test/colors</a>
        </li>
        <li>
            <a href="/test/warnings">/test/warnings</a>
        </li>
    </ul>
</section>
