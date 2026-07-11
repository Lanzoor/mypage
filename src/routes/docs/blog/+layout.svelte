<script lang="ts">
    let { data, children } = $props();
</script>

<!--
<svelte:head>
    <title>{data.metadata?.title ?? 'Blog'}</title>

    <meta name="description" content={data.metadata?.description ?? ''} />

    <meta name="tags" content={data.metadata?.tags?.join(', ') ?? ''} />
</svelte:head>
-->

{@render children()}
