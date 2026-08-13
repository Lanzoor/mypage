<script>
    import Breadcrumbs from "$lib/components/Navigation/Breadcrumbs.svelte";
    import { getPageData } from "$lib/map";
</script>

<section>
    <Breadcrumbs />

    <header>
        <h1>Credits</h1>
    </header>

    <blockquote class="warning">
        <b class="col bright yellow">
            This page, as well as every page under <code>/credits</code>, is
            currently being moved to Lanzaforge, where credits and attribution
            information will be maintained across all projects.
        </b>
        <br />
        Some information here may be outdated during the migration. Thanks for your
        patience!
    </blockquote>

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
