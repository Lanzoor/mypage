<script lang="ts">
    import { highlight } from "./highlight";

    let { code, lang = "text" }: { code: string; lang?: string } = $props();

    let highlighted = $state("");

    $effect(() => {
        highlight(code, lang).then((html) => {
            highlighted = html;
        });
    });
</script>

<div class="shiki-codeblock">
    <div class="header">
        <div>
            {"</>"}
            <b>{lang}</b>
        </div>

        <button onclick={() => navigator.clipboard.writeText(code)}>
            Copy
        </button>
    </div>

    <pre class="plain"><code>{@html highlighted}</code></pre>
</div>

<style lang="css">
    .shiki-codeblock {
        overflow: hidden;

        margin: 1.5em 0;

        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 0.75em;

        background: #1a1b26;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);

        user-select: text;
    }

    .shiki-codeblock .header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        padding: 0.55em 0.85em;

        border-bottom: 1px solid rgba(255, 255, 255, 0.08);

        background: rgba(255, 255, 255, 0.025);

        color: rgba(255, 255, 255, 0.6);

        font-family: "JetBrains Mono";
        font-size: 0.8em;
    }

    .shiki-codeblock .header > div {
        display: flex;
        align-items: center;
        gap: 0.5em;
    }

    .shiki-codeblock button {
        padding: 0.3em 0.6em;

        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 0.4em;

        background: rgba(255, 255, 255, 0.04);
        color: rgba(255, 255, 255, 0.65);

        font: inherit;

        cursor: pointer;

        transition: 0.2s ease;
    }

    .shiki-codeblock button:hover {
        background: rgba(255, 255, 255, 0.08);
        color: white;
        border-color: rgba(255, 255, 255, 0.18);
    }

    .shiki-codeblock button:active {
        background: rgba(255, 255, 255, 0.12);
    }

    .shiki-codeblock pre {
        margin: 0;
        padding: 1.1em 1.25em;

        overflow-x: auto;

        background: transparent;

        font-family: "JetBrains Mono", monospace;
        font-size: 0.9em;
        line-height: 1.65;
    }

    .shiki-codeblock code {
        display: block;
        width: max-content;
        min-width: 100%;
    }
</style>
