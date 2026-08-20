<script>
    import External from "$lib/components/Links/External.svelte";
    import Breadcrumbs from "$lib/components/Navigation/Breadcrumbs.svelte";
</script>

<section id="faq">
    <Breadcrumbs />

    <h1>About lanzoor.dev</h1>

    <p>
        Here's a simple FAQ section about the website to help you get started!
        If you have any questions, feel free to <a href="/contact"
            >get in touch</a
        >.
    </p>

    <h2>What is this website?</h2>

    <p>
        <code>lanzoor.dev</code> is a personal website featuring projects, experiments,
        articles, and other things I create.
    </p>

    <h2>Who maintains this website?</h2>

    <p>
        This website is maintained by
        <span class="col bright purple">Lanzoor</span>, an individual developer
        from Korea, as part of the organization
        <External href="https://www.lanzaforge.org/">Lanzaforge</External>. For
        more information about myself, consider checking my
        <a href="/profile">profile</a> page out!
    </p>

    <h2>How was it created?</h2>

    <p>
        The website is currently hosted on
        <External href="https://vercel.com">Vercel</External>
        and built using
        <External href="https://svelte.dev/docs/kit/introduction"
            >SvelteKit</External
        >. The <a href="/domains">domain</a> itself is registered via <External
            href="https://porkbun.com">Porkbun</External
        >.
    </p>

    <h2>Why was it created?</h2>

    <p>
        The website originally started with a simple profile for myself. At that
        time, it was mostly for fun. However, over time, it grew into a
        collection of projects and showcases.
    </p>

    <h2>Can I use the content from this website?</h2>

    <p>
        Unless otherwise stated, the content on this website belongs to
        <External href="https://www.lanzaforge.org">Lanzaforge</External>, and
        primarily Lanzoor. Please ask for permission before redistributing or
        modifying personal works.
    </p>

    <div class="enable-spacing dim">
        <h2>Looking for something else?</h2>

        <ul>
            <li>
                <a href="/domains">Domain information</a>
            </li>
            <li>
                <a href="/contact">Contact methods</a>
            </li>
        </ul>
    </div>
</section>
