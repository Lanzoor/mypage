<script>
    import Breadcrumbs from "$lib/components/Navigation/Breadcrumbs.svelte";
    import { getPageData } from "$lib/map";
</script>

<section>
    <Breadcrumbs />

    <header>
        <h1>Tools Portal</h1>

        <p>
            Hello there! This is a page where you can find all of my tools.<br
            />
            <i>Click one of the links below to warp into that page!</i>
        </p>
    </header>

    <ul>
        <li>
            <a href="/tools/manual-bpm-checker">Manual BPM Checker</a> - {getPageData(
                "/tools/manual-bpm-checker",
            )?.description}
        </li>
        <li>
            <a href="/tools/number-formatter">Number Formatter</a> - {getPageData(
                "/tools/number-formatter",
            )?.description}
        </li>
    </ul>
</section>
