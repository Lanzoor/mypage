<script lang="ts">
    import type { Snippet } from "svelte";

    let {
        href,
        class: className,
        children,
        external,
        ...rest
    }: {
        href: string;
        children: Snippet;
        class?: string;
        external?: boolean;
        [key: string]: unknown;
    } = $props();
</script>

<a
    class={`-block-anchor ${className ?? ""}`}
    {href}
    {...rest}
    target={external ? "_blank" : undefined}
    rel={external ? "noopener noreferrer" : undefined}
>
    {@render children()}
</a>
