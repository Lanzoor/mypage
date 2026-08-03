<script lang="ts" module>
    export const metadata = {
        title: 'What Happened to Light Mode?',
        tags: ['announcement', 'core'],
        published: new Date('2026-05-30T00:00:00+09:00'),
    };
</script>

<svelte:head>
    <title>{metadata.title}</title>

    <meta name="tags" content={metadata.tags.join(', ')} />
</svelte:head>

<section>
    <a href="/docs/blog">../ Go back to blogs page</a>

    <header>
        <h1>What happened to light mode?</h1>
    </header>

    <p>
        If you've been here for a while, you may remember the bare-bones feature where you could
        customize the theme of the website with a single click. <b
            >Unfortunately, I've decided to stop working on that feature, and to focus on other
            things meanwhile.</b
        >
    </p>
</section>
