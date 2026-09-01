<script lang="ts">
    import type { HTMLAnchorAttributes } from "svelte/elements";

    let {
        external = true,
        showArrow = external,
        plain = false,
        href,
        class: className,
        children,
        ...props
    }: HTMLAnchorAttributes & {
        external?: boolean;
        showArrow?: boolean;
        plain?: boolean;
    } = $props();
</script>

<a
    {href}
    class:plain
    class={`-external-link ${className}`}
    target={external ? "_blank" : undefined}
    rel={external ? "noopener noreferrer" : undefined}
    {...props}
>
    {@render children?.()}

    {#if showArrow}
        <img
            class="arrow"
            aria-hidden="true"
            alt="↗"
            src="/assets/icons/external-link.svg"
        />
    {/if}
</a>

<style>
    :global(.-external-link) {
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 0.5em;

        color: white;
    }

    :global(.-external-link:hover) {
        text-decoration: none;
        color: #ddd;
    }

    :global(.-external-link > img) {
        display: inline-block;
        width: 1em;
        height: 1em;
    }
</style>
