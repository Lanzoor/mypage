<script lang="ts" module>
    export const metadata = {
        title: 'Retirement of the Old Profile Website',
        tags: ['important', 'announcement', 'core'],
        published: new Date('2026-02-07T00:00:00+09:00'),
    };
</script>

<script lang="ts">
    import Outdated from '$lib/components/Information/Outdated.svelte';
</script>

<svelte:head>
    <title>{metadata.title}</title>

    <meta name="tags" content={metadata.tags.join(', ')} />
</svelte:head>

<section>
    <a href="/docs/blog">../ Go back to blogs page</a>

    <h1>Retirement of the Old Profile Website</h1>

    <Outdated />

    <p>
        After about 4 months of using the somewhat empty profile website, <b
            >I have decided to make a new profile website!</b
        ><br />
        Unlike the previous profile website, this new profile website is supposed to be more interactive
        and modern.<br />
        <b
            >I am also developing a responsive design, so that the website becomes more accessible
            for all devices.</b
        ><br />
        Since <b>the new profile website is <i>incomplete</i> as of right now;</b> I have also made
        a backup of the old profile website, and published it to GitHub.<br />
        Thank you for your understanding!
    </p>

    <h2>The Portal</h2>

    <p>
        <b>New profile website (experimental, <i>incomplete</i>)</b> -
        <a href="/profile/index.html">lanzoor.dev/profile</a><br />
        Old profile website (old, <i>complete</i>) -
        <a href="/profile-old/index.html">lanzoor.dev/profile-old</a>
    </p>
</section>
