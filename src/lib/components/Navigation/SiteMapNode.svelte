<script lang="ts">
    import SiteMapNode from "./SiteMapNode.svelte";
    import type { Page } from "$lib/map";

    let { page } = $props<{ page: Page }>();
</script>

<span class="site-map-node">
    <a href={page.path}>{page.title}</a>

    {#if page.children?.length}
        <ul>
            {#each page.children as child}
                <li>
                    <SiteMapNode page={child} />
                </li>
            {/each}
        </ul>
    {/if}
</span>
