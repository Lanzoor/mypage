<script lang="ts">
    import SiteMapNode from './SiteMapNode.svelte';
    import type { Page } from '$lib/map';

    let { page } = $props<{ page: Page }>();
</script>

{#if page.children?.length}
    <details open>
        <summary>
            <a href={page.path}>{page.title}</a>
        </summary>

        <ul>
            {#each page.children as child}
                <li>
                    <SiteMapNode page={child} />
                </li>
            {/each}
        </ul>
    </details>
{:else}
    <a href={page.path}>{page.title}</a>
{/if}
