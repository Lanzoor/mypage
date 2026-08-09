<script>
    import { sitemap } from '$lib/map';

    import NotImplemented from '$lib/components/Information/NotImplemented.svelte';
    import Redirects from '$lib/components/Information/Redirects.svelte';
    import Breadcrumbs from '$lib/components/Navigation/Breadcrumbs.svelte';
    import SiteMapNode from '$lib/components/Navigation/SiteMapNode.svelte';
</script>

<section>
    <Breadcrumbs />

    <h1>Site Map</h1>

    <p>
        This is a bare-bones site map generated from the internal site map for generating metadata
        and breadcrumbs.
    </p>

    <Redirects links={['/site-map']} />

    <ul class="site-map">
        {#each sitemap as page}
            <li>
                <SiteMapNode {page} />
            </li>
        {/each}
    </ul>
</section>

<style lang="css">
    :global(.site-map li) {
        list-style-type: none;
    }

    :global(.site-map li:not(:has(summary))::before) {
        content: '- ';
    }

    .site-map,
    :global(.site-map ul) {
        list-style: none;
        margin: 0;
        padding: 0 1.5em 0 0;
    }
</style>
