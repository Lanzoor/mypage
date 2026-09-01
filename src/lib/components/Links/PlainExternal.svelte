<script lang="ts">
    import type { HTMLAnchorAttributes } from "svelte/elements";

    let { href, children, ...props }: HTMLAnchorAttributes & {} = $props();
</script>

<a {href} target="_blank" rel="noopener noreferrer" {...props}>
    {@render children?.()}
</a>
