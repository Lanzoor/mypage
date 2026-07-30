<script lang="ts">
    import '../app.css';

    // import { Analytics } from '$lib';
    import { onMount } from 'svelte';

    import TopPanel from '$lib/components/Navigation/TopPanel.svelte';
    import FooterPanel from '$lib/components/Navigation/FooterPanel.svelte';
    import NavigationPanel from '$lib/components/Overlays/NavigationPanel.svelte';
    import Notice from '$lib/components/Overlays/LegalNotice.svelte';

    import { cleanupOldData } from '$lib/cleanup';
    import WarpPanel from '$lib/components/Overlays/WarpPanel.svelte';
    import { handleEscape } from '$lib/overlays.svelte';

    let { children } = $props();

    // import Navbar from '$lib/components/Navigation/Navbar.svelte';

    let hydrated = $state(false);

    onMount(() => {
        // Analytics.initialize();
        hydrated = true;
        cleanupOldData();

        const listener = handleEscape();
        document.addEventListener('keydown', listener);
        return () => {
            document.removeEventListener('keydown', listener);
        };
    });
</script>

<TopPanel />

<Notice />

{#if !hydrated}
    <div id="hydration">
        <h1>Loading Page...</h1>

        <p>
            The page is currently loading. This probably shouldn't take more than a second!<br />
            If this message persists, please try again in a few minutes, or
            <a href="#connections">get in touch</a> with the details.
        </p>
    </div>
{/if}
<main>
    {@render children()}
</main>

<FooterPanel />

<NavigationPanel />

<WarpPanel />
