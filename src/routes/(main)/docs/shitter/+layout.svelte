<script lang="ts">
    import { Ba } from "$lib/components/Links";

    let { children } = $props();
</script>

<svelte:head>
    <title>Shitter Explained, For Real!!</title>
</svelte:head>

<div id="shitter-wrapper">
    <nav class="shitter-panel">
        <Ba href="/docs/shitter/intro">
            <h2>Shitter Explained,<br />For Real!!</h2>
        </Ba>

        <a href="/docs/shitter/part-0">
            Part 0: <span class="dim">A SHOT IN THE DARK</span>
        </a>
        <a href="/docs/shitter/part-1">
            Part 1: <span class="dim">NO SOUND, NO MEMORY</span>
        </a>
        <a href="/docs/shitter/part-2">
            Part 2: <span class="dim">SHIP OF FOOLS</span>
        </a>
        <a href="/docs/shitter/part-3">
            Part 3: <span class="dim">THE WITLESS</span>
        </a>
        <a href="/docs/shitter/part-4">
            Part 4: <span class="dim">DEATH AT 20,000 VOLTS</span>
        </a>
        <a href="/docs/shitter/part-5">
            Part 5: <span class="dim">HEART OF THE SUNRISE</span>
        </a>
        <a href="/docs/shitter/appendix">Appendix</a>
    </nav>

    <main class="shitter-main">
        {@render children()}
    </main>
</div>

<style>
    #shitter-wrapper {
        display: flex;
        height: 100vh;
        overflow: hidden;
    }

    .shitter-panel {
        flex: 0 0 30em;

        width: 100%;
        height: 100vh;
        overflow-y: auto;

        padding: 2em;
        padding-top: calc(20vh + 2em);

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5em;
    }

    .shitter-panel :global(.-block-anchor) {
        font-size: 1em;
        text-align: center;
        align-self: center;
        margin-bottom: 1em;
    }

    .shitter-panel a {
        border-radius: 2em;
        font-size: 0.9em;
        padding: 0.25em 1em;
        color: white;

        transition: background 0.2s ease;
    }

    .shitter-panel a:hover {
        background: rgba(255, 255, 255, 0.1);
        text-decoration: none;
    }

    .shitter-main {
        flex: 1;
        min-width: 0;
        height: 100vh;
        overflow-y: auto;
    }

    @media (max-width: 1024px) {
        .shitter-panel {
            display: none;
        }
    }
</style>
