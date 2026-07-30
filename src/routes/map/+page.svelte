<script>
    import NotImplemented from '$lib/components/Information/NotImplemented.svelte';
    import Redirects from '$lib/components/Information/Redirects.svelte';
</script>

<section>
    <span class="breadcrumbs">
        <a href="/">Home</a>

        <span class="separator">›</span>

        <a href="/map">Site Map</a>
    </span>

    <h1>Site Map</h1>

    <Redirects links={['/site-map']} />
    <NotImplemented />
</section>
