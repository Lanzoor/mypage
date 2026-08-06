<script lang="ts">
    import { page } from '$app/state';
    import { pageIndex } from '$lib/map';
    import { normalizePath } from '$lib/path';

    const currentPage = $derived(pageIndex.get(normalizePath(page.url.pathname)));

    const breadcrumbs = $derived.by(() => {
        const result = [];

        let current = currentPage;

        while (current) {
            result.unshift(current);
            current = current.parent;
        }

        const home = pageIndex.get('/');

        if (home && result[0]?.path !== '/') {
            result.unshift(home);
        }

        return result;
    });
</script>

<div class="breadcrumbs">
    {#each breadcrumbs as crumb, i}
        {#if i !== 0}
            <div class="separator">›</div>
        {/if}

        <a href={crumb.path}>
            {crumb.path === '/' ? 'Home' : crumb.title}
        </a>
    {/each}
</div>
