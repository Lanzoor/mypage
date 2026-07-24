<script>
    import { Legal } from '$lib';

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
    <span class="breadcrumbs">
        <a href="/">Home</a>

        <span class="separator">›</span>

        <a href="/privacy-policy">Privacy Policy</a>
    </span>

    <header>
        <h1>Privacy Policy</h1>
    </header>

    <p class="dim">
        Last updated @ <b>{privacyPolicy.lastUpdated}</b> | Current version:
        <b>{privacyPolicy.version}</b><br />
    </p>

    <h2 id="data-collection">Data Collection</h2>

    <p>
        <b>
            This website does not intentionally collect or use personal data or use analytics
            services. Period.
        </b>
    </p>

    <h2 id="third-party">Third-Party Services</h2>

    <blockquote>
        Although we strive to minimize the use of third-party services, some services may be
        required for the operation, security, and delivery of this website. Please understand!
    </blockquote>

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
        <b>
            We use Cloudflare to provide DNS, content delivery, and email routing services. As part
            of providing these services, Cloudflare may process technical information such as IP
            addresses. For more information, please refer to
            <a
                href="https://www.cloudflare.com/privacypolicy/"
                target="_blank"
                rel="noopener noreferrer"
            >
                Cloudflare's privacy policy
            </a>.
        </b>
    </p>

    <h3>Vercel</h3>

    <p>
        <b>
            This website is hosted via Vercel. As part of normal operation, Vercel may collect
            technical information such as IP addresses, request logs, and performance metrics. For
            more information, please refer to
            <a
                href="https://vercel.com/legal/privacy-notice#how-we-use-info"
                target="_blank"
                rel="noopener noreferrer"
            >
                Vercel's privacy policy
            </a>.
        </b>
    </p>

    <h3>Google Fonts</h3>

    <p>
        <b>
            This website loads fonts via Google Fonts. For more information, please refer to
            <a
                href="https://developers.google.com/fonts/faq/privacy"
                target="_blank"
                rel="noopener noreferrer"
            >
                Google Fonts' privacy policy
            </a>.
        </b>
    </p>
</section>
