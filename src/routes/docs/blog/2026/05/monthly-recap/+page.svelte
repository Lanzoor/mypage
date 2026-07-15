<script lang="ts" module>
    export const metadata = {
        title: 'Monthly Recap | May 2026',
        description: 'A monthly recap for May 2026',
        tags: ['blog', 'monthly-recap', 'core'],
        published: '2026-05-30',
    };
</script>

<script lang="ts">
    import oldImage from './assets/old.png';
    import newImage from './assets/new.png';
    import Deleted from '$lib/components/Warnings/Deleted.svelte';
</script>

<svelte:head>
    <title>{metadata.title}</title>

    <meta name="description" content={metadata.description} />

    <meta name="tags" content={metadata.tags.join(', ')} />
</svelte:head>

<section>
    <a href="/docs/blog">../ Go back to blogs page</a>

    <h1>Monthly Recap | May 2026</h1>

    <blockquote class="info">
        <b class="col bright green"> From now on, I am going to be posting monthly recaps! </b><br
        />
        Monthly recaps will include some progress I've made within my websites, as well as some additional
        life updates.
    </blockquote>

    <h2>A Complete Design Overhaul</h2>

    <div class="image-grid">
        <img src={oldImage} alt="Old version" />
        <img src={newImage} alt="New version" />
    </div>

    <div class="image-description">The design of the frontpage, before vs after</div>

    <p>
        <b>
            Almost every page and feature across the website has been completely redesigned and
            reworked!
        </b><br />

        This update includes major improvements to the frontpage, navigation panels, layouts, and
        many more.<br />

        <b>I've also started developing a more consistent visual style</b>, which will be the
        foundation for future updates and features moving forward.<br />

        The goal of these changes is to make the website feel
        <span class="col bright green">cleaner</span>,
        <span class="col bright yellow">more modern</span>,
        <span class="col bright purple">easier to navigate</span>, and
        <span class="col bright cyan">more enjoyable</span> to use,

        <b> while still preserving its original personality and charm. </b>
    </p>

    <Deleted />

    <blockquote class="info">
        <b class="col bright green">That's probably it for this monthly recap!</b><br />
        Stay tuned for more monthly recaps, and have a nice day.
    </blockquote>
</section>
