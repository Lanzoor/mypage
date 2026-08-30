<script>
    import Breadcrumbs from "$lib/components/Navigation/Breadcrumbs.svelte";
    import { getPageData } from "$lib/map";
</script>

<section>
    <Breadcrumbs />

    <h1>Conventions</h1>

    <p>
        This page includes conventions that govern my projects, as some of my
        Lanzaforge projects.
    </p>

    <ul>
        <li>
            <a href="/conventions/changelog">Changelog Conventions</a> - {getPageData(
                "/conventions/changelog",
            )?.description}
        </li>
        <li>
            <a href="/conventions/versioning">Versioning Conventions</a> - {getPageData(
                "/conventions/versioning",
            )?.description}
        </li>
    </ul>
</section>
