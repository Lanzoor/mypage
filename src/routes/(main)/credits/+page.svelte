<script>
    import Breadcrumbs from "$lib/components/Navigation/Breadcrumbs.svelte";
    import { getPageData } from "$lib/map";
</script>

<section>
    <Breadcrumbs />

    <header>
        <h1>Credits</h1>
    </header>

    <ul>
        <li>
            <a href="/credits/contributors">Contributors</a>
            - {getPageData("/credits/contributors")?.description}
        </li>

        <li>
            <a href="/credits/fonts">Fonts</a>
            - {getPageData("/credits/fonts")?.description}
        </li>

        <li>
            <a href="/credits/assets">Assets</a>
            - {getPageData("/credits/assets")?.description}
        </li>
    </ul>
</section>
