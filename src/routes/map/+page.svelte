<script>
    import NotImplemented from '$lib/components/Information/NotImplemented.svelte';
    import Redirects from '$lib/components/Information/Redirects.svelte';
</script>

<section>
    <div class="breadcrumbs">
        <a href="/">Home</a>

        <div class="separator">›</div>

        <a href="/map">Site Map</a>
    </div>

    <h1>Site Map</h1>

    <Redirects links={['/site-map']} />
    <NotImplemented />
</section>
