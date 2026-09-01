<script lang="ts">
    let { target, plural } = $props<{
        target?: string;
        plural?: boolean;
    }>();
</script>

<a href="../"
    >../ Go back {#if target}to {target} page{#if plural}s{/if}{/if}</a
>
