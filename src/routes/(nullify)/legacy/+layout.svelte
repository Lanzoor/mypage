<script lang="ts">
    import './styles.css';

    let { children } = $props();
</script>

<div id="legacy-marker">
    <p>
        <b>- LANZOOR.DEV LEGACY CONTENT MARKER -</b><br />
        You are currently viewing legacy content. This content may be outdated or incomplete and is preserved
        solely for archival purposes. Legacy pages are not connected to or affected by the main website
        in any way.<br />
        <a href="https://www.lanzoor.dev">Return to website</a>
    </p>
</div>

<div id="legacy-wrapper">
    {@render children()}
</div>

<style>
    :global(#legacy-marker) {
        font-family: 'JetBrains Mono' !important;
        color: white !important;
        position: absolute !important;
        inset: 0 !important;
        background: #111 !important;
        border-bottom: 2px solid #222 !important;
        padding: 1em !important;
        height: min-content !important;
        z-index: 999999999999999999999999999 !important;
    }

    :global(#legacy-marker),
    :global(#legacy-marker *) {
        all: revert;
    }

    :global(#legacy-wrapper) {
        all: revert;
        margin-top: 10em !important;
    }
</style>
