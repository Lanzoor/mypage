<script>
    import { Legal } from '$lib';
    import External from '$lib/components/Links/External.svelte';

    const privacyPolicy = Legal.LegalInfo.privacyPolicy;
</script>

<svelte:head>
    <title>Privacy Policy | lanzoor.dev</title>

    <meta property="og:title" content="Privacy Policy" />
    <meta
        property="og:description"
        content="A detailed privacy policy that lists all details about data collection."
    />
    <meta property="og:type" content="website" />
    <meta name="theme-color" content="#6f27f5" />
</svelte:head>

<section>
    <div class="breadcrumbs">
        <a href="/">Home</a>

        <div class="separator">›</div>

        <a href="/privacy-policy">Privacy Policy</a>
    </div>

    <header>
        <h1>Privacy Policy</h1>
    </header>

    <p class="dim">
        Last updated @ <b>{privacyPolicy.lastUpdated}</b> | Current version:
        <b>{privacyPolicy.version}</b><br />
    </p>

    <h2 id="data-collection">α. Data Collection</h2>

    <p>
        <b>
            This website does not intentionally collect or use personal data or use analytics
            services. Period.
        </b>
    </p>

    <h2 id="third-party">β. Third-Party Services</h2>

    <blockquote>
        Although we strive to minimize the use of third-party services, some services may be
        required for the operation, security, and delivery of this website. Please understand!
    </blockquote>

    <h3>Information</h3>

    <p>
        These third-party services may process limited information necessary to provide their
        services. The website does not intentionally share personal information with third parties
        for advertising, analytics, or tracking purposes.
    </p>

    <p>
        <b>
            Lanzaforge is not affiliated with the services listed below. Lanzaforge does not control
            how these services process information, and does not access or use information collected
            by these services for its own purposes.
        </b>
    </p>

    <h3>Cloudflare</h3>

    <p>
        <b
            >Cloudflare provides DNS, content delivery, and email routing services for this website.</b
        ><br />
        As part of providing these services, Cloudflare may process technical information such as IP addresses.<br
        />
        For more information, please refer to
        <External href="https://www.cloudflare.com/privacypolicy/">
            Cloudflare's privacy policy
        </External>.
    </p>

    <h3>Vercel</h3>

    <p>
        <b>This website is hosted via Vercel.</b><br />
        As part of normal operation, Vercel may collect technical information such as IP addresses, request
        logs, and performance metrics.<br />For more information, please refer to
        <External href="https://vercel.com/legal/privacy-notice#how-we-use-info">
            Vercel's privacy policy
        </External>.
    </p>

    <h3>Google Fonts</h3>

    <p>
        <b>This website loads fonts via Google Fonts.</b><br />
        For more information, please refer to
        <a
            href="https://developers.google.com/fonts/faq/privacy"
            target="_blank"
            rel="noopener noreferrer"
        >
            Google Fonts' privacy policy
        </a>.
    </p>
</section>
