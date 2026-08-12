<script>
    import ContentWarning from '$lib/components/Information/ContentWarning.svelte';
    import Deleted from '$lib/components/Information/Deleted.svelte';
    import Experimental from '$lib/components/Information/Experimental.svelte';
    import NotImplemented from '$lib/components/Information/NotImplemented.svelte';
    import Outdated from '$lib/components/Information/Outdated.svelte';
    import Redirects from '$lib/components/Information/Redirects.svelte';
</script>

<section>
    <Deleted />
    <Experimental description={`{insert description}`} />
    <NotImplemented />
    <Outdated />
    <ContentWarning>insert description</ContentWarning>
    <Redirects links={['/a', '/b', '/c']} />
    <Redirects links={['/a', '/b', '/c', '/d', '/e', '/f']} />
    <Redirects
        links={[
            '/bingchillingbingchillingbingchillingbingchillin',
            '/bingchillingbingchillingbingchillingbingchillinbingchillingbingchillinbingchillingbingchillin',
            '/bingchillingbingchillingbingchillingbingchillinbingchillingbingchillinbingchillingbingchillinbingchillingbingchillinbingchillingbingchillin',
        ]}
    />
</section>
