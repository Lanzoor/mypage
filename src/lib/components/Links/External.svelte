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
