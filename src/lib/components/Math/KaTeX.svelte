<script lang="ts">
    import katex from "katex";
    import "katex/dist/katex.min.css";

    let { content, display = false } = $props<{
        content: string;
        display?: boolean;
    }>();

    const html = $derived.by(() =>
        katex.renderToString(content, {
            displayMode: display,
            throwOnError: false,
        }),
    );
</script>

{@html html}
