<script>
    import { Legal } from '$lib';
    import Redirects from '$lib/components/Information/Redirects.svelte';
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
            <b>Service</b> shall refer to all websites, features, and content provided under this
            website, <code>lanzoor.dev</code>.
        </li>
        <li>
            <b>Legal Information</b> shall refer to this Terms of Service and the Privacy Policy.
        </li>
    </ul>

    <h2>α. Data Collection and Privacy</h2>

    <p>
        By using the Service, you consent to the collection and processing of certain data, as
        described in our <a href="/privacy-policy">Privacy Policy</a>.
    </p>

    <h2>β. Service State</h2>

    <h3>β-1. Service Availability</h3>

    <p>
        We strive to keep the Service available at all times, but we do not guarantee uninterrupted
        access.
    </p>

    <h3>β-2. Service Modifications</h3>

    <p>
        We reserve the right to modify, suspend, or discontinue any part of the Service at any time
        without prior notice.
    </p>

    <h2>γ. Acceptable Use and Prohibited Activities</h2>

    <p>
        You agree to use the Service only for lawful purposes and in accordance with these Terms.<br
        />
        You <i>absolutely</i> may not engage in the following prohibited activities:
    </p>

    <h3>γ-1. Confidentiality</h3>

    <ul>
        <li>Attempt to gain unauthorized access to the Service or systems.</li>
        <li>Bypass security measures or access restrictions.</li>
    </ul>

    <h3>γ-2. Integrity</h3>

    <ul>
        <li>Upload or transmit malicious code, malware, or harmful content (using GitHub).</li>
        <li>
            Reverse engineer, modify, or exploit the Service in ways not permitted by the Legal
            Information.
        </li>
    </ul>

    <h3>γ-3. Availability</h3>

    <ul>
        <li>Abuse, overload, or interfere with the normal operation of the Service.</li>
    </ul>

    <h3>γ-4. Others</h3>

    <ul>
        <li>Use the Service for any illegal activity or to violate applicable laws.</li>
    </ul>

    <h2>δ. Termination</h2>

    <h3>δ-1. Termination by User</h3>

    <p>You may stop using the Service at any time.</p>

    <h3>δ-2. Termination by Us</h3>

    <p>
        <b
            >We reserve the right to suspend or terminate your access at any time, with or without
            notice, for any reason.</b
        ><br />
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
        Your continued use of the Service after such changes constitutes your acceptance of the
        updated Legal Information.
    </p>
</section>
