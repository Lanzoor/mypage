<script lang="ts">
    import type { HTMLAnchorAttributes } from 'svelte/elements';

    let {
        external = true,
        showArrow = external,
        href,
        children,
        ...props
    }: HTMLAnchorAttributes & {
        external?: boolean;
        showArrow?: boolean;
    } = $props();
</script>

<a
    {href}
    target={external ? '_blank' : undefined}
    rel={external ? 'noopener noreferrer' : undefined}
    {...props}
>
    {@render children?.()}

    {#if showArrow}
        <img
            class="external-link--arrow"
            aria-hidden="true"
            alt="↗"
            src="/assets/icons/external-link.svg"
        />
    {/if}
</a>

<style lang="css">
    a:has(> .external-link--arrow) {
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        gap: 0.5em;

        color: white;
    }

    a > img.external-link--arrow {
        width: 1em;
        height: 1em;
    }
</style>
