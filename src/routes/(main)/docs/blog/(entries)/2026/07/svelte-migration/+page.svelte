<script lang="ts" module>
    export const metadata = {
        title: 'Svelte Migration',
        description: 'A notice regarding the core migration',
        tags: ['important', 'announcement', 'core'],
        published: new Date('2026-07-11T00:00:00+09:00'),
    };
</script>

<svelte:head>
    <title>{metadata.title}</title>

    <meta name="tags" content={metadata.tags.join(', ')} />
</svelte:head>

<section>
    <a href="/docs/blog">../ Go back to blogs page</a>

    <blockquote class="info">
        Hey! Future Lanzoor here.<br />
        The Svelte migration has been completed as of July 15th. For more information, please refer to
        <a href="/projects/core/changelog#v26-25-0">the changelog</a>.
    </blockquote>

    <h1 id="svelte">A Major Change for <code>core</code></h1>

    <meta name="description" content={metadata.description} />

    <p>
        After some consideration,
        <b>
            we've decided to migrate the entire project from our outdated custom routing system to
            <span style="color: rgb(255, 54, 36)">SvelteKit</span>!
        </b>
    </p>

    <h2>Why?</h2>

    <p>
        <b>Why the sudden switch, you may ask? Good question!</b>
        As the site continued to grow, maintaining the codebase became increasingly challenging. Our previous
        custom Vite-based setup had become outdated and difficult to work with.<br />
        This is when one of my <a href="/credits/contributors">team members</a> recommended SvelteKit.
        After trying it out, I realized it was a much better fit for what I wanted to achieve with the
        project.
    </p>

    <h2>What should I expect from the transition?</h2>

    <p>
        Unfortunately, since this is a significant transition,
        <b>
            we won't be making any new changes to the existing project until the migration is
            complete.
        </b>
        <i>This will likely be the last version we release for a while.</i>
        <b> We will also not be collecting any analytics during the transition. </b>

        <br /><br />
        We appreciate your understanding in the meantime.
    </p>

    <h2>Will the website change in any way?</h2>

    <p>
        If you're asking about the public-facing structure
        <span class="dim">(e.g. styles, structure, accessibility, features, API, etc.)</span>,
        <b>then nope!</b>
        The new version will be thoroughly reviewed before release, so you won't have to worry about a
        thing.<br />
    </p>

    <p>
        However, the codebase will be
        <b>significantly revamped, so team members are expected to adapt to the new structure.</b
        ><br />

        Don't worry! Svelte is just some intelligent HTML code. I think so.
    </p>

    <h2>Will the previous version still be available to the public?</h2>

    <p>
        <b>Unfortunately, no.</b> The previous <code>core-svelte</code> directory is planned to be
        merged into <code>core</code> once the migration is 100% complete.<br />
    </p>

    <p>
        Although not complete yet, we'll make sure to make an announcement and update this article
        when the decision is made.
    </p>
</section>
