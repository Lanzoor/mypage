<script>
    import Breadcrumbs from "$lib/components/Navigation/Breadcrumbs.svelte";
    import { getPageData } from "$lib/map";
</script>

<section>
    <Breadcrumbs />

    <header>
        <h1>English</h1>

        <p>You can find all of my documents related to English here.</p>
    </header>

    <ul>
        <li>
            <a href="/docs/linguistics/english/past-tenses">Past Tenses</a> - {getPageData(
                "/docs/linguistics/english/past-tenses",
            )?.description}
        </li>
    </ul>
</section>
