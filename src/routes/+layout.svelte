<script lang="ts">
    import '../app.css';

    import { Analytics } from '$lib';
    import Notice from '$lib/components/Analytics/Notice.svelte';

    import { onMount } from 'svelte';

    import TopPanel from '$lib/components/Navigation/TopPanel.svelte';
    import FooterPanel from '$lib/components/Navigation/FooterPanel.svelte';

    // import Navbar from '$lib/components/Navigation/Navbar.svelte';

    onMount(() => {
        Analytics.initialize();
    });

    let { children } = $props();
</script>

<TopPanel />

<Notice />

<!-- <Navbar /> -->

<!-- <svelte:head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head> -->

<main>
    {@render children()}
</main>

<FooterPanel />
