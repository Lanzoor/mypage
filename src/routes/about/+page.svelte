<script>
    import External from '$lib/components/Links/External.svelte';
</script>

<svelte:head>
    <title>About | lanzoor.dev</title>
</svelte:head>

<section id="faq">
    <div class="breadcrumbs">
        <a href="/">Home</a>

        <div class="separator">›</div>

        <a href="/about">About</a>
    </div>

    <h1>About lanzoor.dev</h1>

    <p>Here's a simple FAQ section about the website to help you get started!</p>

    <h2>What is this website?</h2>

    <p>
        <code>lanzoor.dev</code> is a personal website featuring projects, experiments, articles, and
        other things I create.
    </p>

    <h2>Why was it created?</h2>

    <p>
        The website originally started with a simple profile for myself. At that time, it was mostly
        for fun. However, over time, it grew into a collection of projects and showcases.
    </p>

    <h2>How was it created?</h2>

    <p>
        The website is hosted on
        <External href="https://vercel.com">Vercel</External>
        and built using
        <External href="https://svelte.dev/docs/kit/introduction">SvelteKit</External>.
    </p>

    <h2>Who maintains this website?</h2>

    <p>
        This website is maintained by
        <span class="col bright purple">Lanzoor</span>, an individual developer from Korea, under
        the organization
        <External href="https://www.lanzaforge.org/">Lanzaforge</External>.
    </p>
</section>

<section id="contact">
    <h1>Contact</h1>

    <p>
        If you have any
        <b>
            <span class="col bright black">questions</span>,
            <span class="col bright yellow">suggestions</span>, or
            <span class="col bright red">concerns</span>,
        </b>
        feel free use the connections below to get in touch!
    </p>

    <ul>
        <li>
            <b>
                Discord

                <External href="https://discord.com/users/1160164047111606292">@lanzoor</External>
            </b><br />

            I strongly recommend using Discord since I check it quite often.
        </li>
        <li>
            <b>
                Email

                <a href="mailto:mail@lanzoor.dev">mail@lanzoor.dev</a>
                <span class="dim">+3 others</span>
            </b><br />

            Emails sent to
            <b>mail@lanzoor.dev</b>,
            <b>noreply@lanzoor.dev</b>,
            <b>hello@lanzoor.dev</b>, or
            <b>support@lanzoor.dev</b>
            are forwarded to my personal email address,
            <a href="mailto:lanzoor-general@proton.me">lanzoor-general@proton.me</a>.
            <br />

            <b>
                Replies will currently come from
                <a href="mailto:lanzoor-general@proton.me">lanzoor-general@proton.me</a>, not the
                <code>@lanzoor.dev</code> addresses. Thank you for your understanding.
            </b>
        </li>
    </ul>

    <blockquote class="warning">
        <b class="col bright yellow"> ⚠ Please use this contact method responsibly. </b><br /><br />

        <b
            >Messages containing spam, scams, harassment, abuse, or other inappropriate content may
            be ignored, blocked, reported, or otherwise dealt with at my discretion.</b
        >

        Please be respectful and keep your messages relevant. Constructive feedback, questions, bug
        reports, and genuine inquiries are always welcome.<br /><br />

        <b>
            <i>
                <u>
                    Please do not interact with me if all you're doing is being a jerk,
                    disrespecting my efforts, or attempting to manipulate me. I am a human being,
                    not your servant.
                </u>
            </i>
        </b>
    </blockquote>
</section>

<section id="domain">
    <h1>Domains</h1>

    <h2>Registered Domains</h2>

    <p>
        <b> As of now, the only domain(s) I have purchased are: </b>
    </p>

    <ul>
        <li>
            <code>lanzoor.dev</code> (the main website)
        </li>
        <li>
            <code>lanzoor.xyz</code> (the website for my profile)
        </li>
        <li>
            <code>lanzaforge.com</code> (redirects to <code>lanzaforge.org</code>)
        </li>
        <li>
            <code>lanzaforge.org</code> (nothing yet :c)
        </li>
    </ul>

    <p>
        <b>Do note that subdomains within every website above are indeed mine.</b> Examples include
        <code><span class="dim">api</span>.lanzoor.dev</code>
        and <code><span class="dim">discord</span>.lanzaforge.org</code>.
    </p>

    <p>
        If you see ANY other domain that's not on the list above,
        <i class="col bright red"><b>it's not affiliated with me, nor Lanzaforge.</b></i>
    </p>

    <p class="dim">
        I also do not own <code>lanzoor.com</code>. I don't even know what it's about.
    </p>

    <h2>Registrar</h2>

    <p>
        <b
            >All of my domains are registered via <External href="https://porkbun.com/"
                >Porkbun</External
            >.</b
        >
    </p>
</section>

<section id="legal">
    <h1>Legal Information</h1>

    <h2>Definition</h2>

    <p>
        As stated in our <a href="/tos#definitions">Terms of Service</a>, <b>Legal Information</b> refers
        to the Terms of Service and the Privacy Policy.
    </p>

    <h2>Notices</h2>

    <p>
        When you first visit the website, or when existing Legal Information is updated, a notice
        will appear asking you to accept the Legal Information.<br />
        <b>Clicking "I Accept" means that you accept the Legal Information.</b>
        This notice intentionally does not appear on any Legal Information pages, including this page.
    </p>

    <p>
        This feature uses the <code>acceptedLegalInfo</code> value stored in your browser's
        <code>localStorage</code>, which contains the versions of the Legal Information you have
        previously accepted.
    </p>

    <p>
        Since this information is stored in your browser's <code>localStorage</code>, using a
        different browser or clearing <code>localStorage</code> may cause this notice to appear again.
    </p>
</section>
