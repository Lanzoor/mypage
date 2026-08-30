<script>
    import Breadcrumbs from "$lib/components/Navigation/Breadcrumbs.svelte";
    import { getPageData } from "$lib/map";
</script>

<section>
    <Breadcrumbs />

    <header>
        <h1>Linguistics</h1>

        <p>You can find all of my documents related to linguistics here.</p>
    </header>

    <ul>
        <li>
            <a href="/docs/linguistics/english">English</a> - {getPageData(
                "/docs/linguistics/english",
            )?.description}
        </li>
    </ul>
</section>
