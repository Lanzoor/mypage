<script>
    import { Legal } from '$lib';
    import Redirects from '$lib/components/Information/Redirects.svelte';
    import KaTeX from '$lib/components/Math/KaTeX.svelte';
    import Breadcrumbs from '$lib/components/Navigation/Breadcrumbs.svelte';

    const termsOfService = Legal.LegalInfo.termsOfService;
</script>

<section>
    <Breadcrumbs />

    <header>
        <h1>Terms of Service</h1>
    </header>

    <p class="dim">
        Last updated @ <b>{termsOfService.formatTime()}</b> | Current version:
        <b>{termsOfService.formatVersion()}</b><br />
    </p>

    <Redirects links={['/tos']} />

    <h2 id="definitions">Definitions</h2>

    <ul>
        <li>
            <b>We / Us / Our</b> shall refer to Lanzaforge (the owner and operator of this service).
        </li>
        <li><b>You / User</b> shall refer to any individual or entity using our services.</li>
        <li>
            <b>Services</b> shall refer to all websites, APIs, features, and content provided under lanzoor.dev
            and api.lanzoor.dev, unless otherwise specified.
        </li>
        <li>
            <b>Legal Information</b> shall refer to this Terms of Service and the Privacy Policy.
        </li>
    </ul>

    <h2>α. Data Collection and Privacy</h2>

    <p>
        By using our Services, you consent to the collection and processing of certain data, as
        described in our <a href="/privacy-policy">Privacy Policy</a>. This includes anonymous usage
        analytics unless you explicitly opt out.
    </p>

    <h2>β. Service State</h2>

    <h3>β-1. Service Availability</h3>

    <p>
        We strive to keep the Services available at all times, but we do not guarantee uninterrupted
        access.
    </p>

    <h3>β-2. Service Modifications</h3>

    <p>
        We reserve the right to modify, suspend, or discontinue any part of the Services at any time
        without prior notice.
    </p>

    <h2>γ. Acceptable Use</h2>

    <p>
        You agree to use the Services only for lawful purposes and in accordance with these Terms.<br
        />
        You <i>absolutely</i> may not:
    </p>

    <ul>
        <li>Attempt to gain unauthorized access to the Services, systems, or accounts.</li>
        <li>Abuse, overload, or interfere with the normal operation of the Services.</li>
        <li>Use the Services for any illegal activity or to violate applicable laws.</li>
        <li>Upload or transmit malicious code, malware, or harmful content.</li>
        <li>Collect or misuse data belonging to other users.</li>
        <li>Reverse engineer, modify, or exploit the Services beyond permitted use.</li>
        <li>Bypass security measures, rate limits, or access restrictions.</li>
    </ul>

    <h2>δ. Termination</h2>

    <h3>δ-1. Termination by User</h3>

    <p>You may stop using the Services at any time.</p>

    <h3>δ-2. Termination by Us</h3>

    <p>
        We reserve the right to suspend or terminate your access at any time, with or without
        notice, for any reason.<br />
        We usually take such action if we believe you have violated these Terms.
    </p>

    <h2>ε. Changes to Legal Information</h2>

    <p>
        We may <span class="dim">(and <i>absolutely</i> will)</span>
        update Legal Information from time to time.<br />
        We will notify you of any changes through a notice on the website.<br />
        For more information, please refer to <a href="/about#legal">this section</a>!
    </p>

    <p>
        Your continued use of the Services after such changes constitutes your acceptance of the
        updated Terms.
    </p>
</section>
