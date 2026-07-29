<script lang="ts" module>
    export const metadata = {
        title: 'Monthly Recap | June 2026',
        description: 'A monthly recap for June 2026',
        tags: ['blog', 'monthly-recap', 'core'],
        published: '2026-06-30',
    };
</script>

<script lang="ts">
    import footerOld from './assets/footer-old.png';
    import footerNew from './assets/footer-new.png';

    import panelOld from './assets/panel-old.png';
    import panelNew from './assets/panel-new.png';
</script>

<svelte:head>
    <title>{metadata.title}</title>

    <meta name="description" content={metadata.description} />

    <meta name="tags" content={metadata.tags.join(', ')} />
</svelte:head>

<section>
    <a href="/docs/blog">../ Go back to blogs page</a>

    <h1>Monthly Recap | June 2026</h1>

    <p>
        Hello! It's already been a month, huh?<br />
        A lot of things happened in June, so I've gathered up all of the important details and summarized
        'em.<br />
        <b>So without further ado, let's begin!</b>
    </p>

    <h2>Navigation UI/UX Overhaul</h2>

    <p>
        <b>The long-awaited Navigation UI/UX overhaul has been finally released!</b>
        For full details, check out the
        <a href="/projects/core/changelog#v26-24-0">changelog</a>. We believe this update marks a
        strong step toward improving the overall user experience.

        <br /><br />

        <b>That said, since this update is rather experimental, we'd like to hear more from you!</b>
        Feel free to <a href="#connections">get in touch</a> for any feedback or questions.
    </p>

    <div class="image-grid">
        <img src={footerOld} alt="Old Footer" />
        <img src={footerNew} alt="New Footer" />
    </div>

    <div class="image-description">The design of the footer panel, before vs after</div>

    <div class="image-grid">
        <img src={panelOld} alt="Old Panel" />
        <img src={panelNew} alt="New Panel" />
    </div>

    <div class="image-description">
        The design of the navigation panel, before vs after<br />
        As you can probably see, the old one was pretty much unmaintained for months, and also had an
        outdated font. The new overhaul fixed this by applying the correct font, improving the styles,
        and even improving compatiability for mobile devices.
    </div>

    <blockquote class="warning">
        For this specific section,

        <b
            >it's highly recommended that you refer to
            <a href="/docs/blog/2026/07/svelte-migration">this article</a> instead.
        </b>
    </blockquote>

    <h2 id="svelte">A Major Change for <code>core</code></h2>

    <p>
        After some consideration,
        <b>
            we've decided to migrate the entire project from our outdated custom routing system to
            <span style="color: rgb(255, 54, 36)">SvelteKit</span>!
        </b>
    </p>

    <h3>Why?</h3>

    <p>
        <b>Why the sudden switch, you may ask? Good question!</b>
        As the site continued to grow, maintaining the codebase became increasingly challenging. Our previous
        custom Vite-based setup had become outdated and difficult to work with.<br />
        This is when one of my <a href="/credits/contributors">team members</a> recommended SvelteKit.
        After trying it out, I realized it was a much better fit for what I wanted to achieve with the
        project.
    </p>

    <h3>What should I expect from the transition?</h3>

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

    <h3>Will the website change in any way?</h3>

    <p>
        If you're asking about the public-facing structure
        <span class="dim">(e.g. styles, structure, accessibility, features, API, etc.)</span>,
        <b>then nope!</b>
        The new version will be thoroughly reviewed before release, so you won't have to worry about a
        thing.<br /><br />

        However, the codebase will be
        <b>significantly revamped, so team members are expected to adapt to the new structure.</b>
    </p>

    <div style="height: 50vh"></div>

    <h2>A Small Note</h2>

    <p>
        <b>Lately, I've been dealing with some suicide-related issues again.</b><br />
        I wasn't able to make any significant progress on any of my projects
        <span class="dim"
            >(including <code>core</code>, <code>core-status</code> and the NITA project)</span
        >, which contributed even more to my motivation issues.<br />

        I am currently actively looking for ways to continue working on my projects, but please do
        note that progress might be minimal for the next month.
        <b>Thank you for your understanding.</b>
    </p>
</section>
