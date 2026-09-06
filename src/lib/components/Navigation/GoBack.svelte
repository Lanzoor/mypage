<script lang="ts">
    let { target, plural, href } = $props<{
        target?: string;
        plural?: boolean;
        href?: string;
    }>();
</script>

<a href={href ?? "../"}
    >../ Go back {#if target}to {target} page{#if plural}s{/if}{/if}</a
>
