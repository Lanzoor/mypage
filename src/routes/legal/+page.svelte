<script>
    import Breadcrumbs from '$lib/components/Navigation/Breadcrumbs.svelte';
    import { getPageData } from '$lib/map';
</script>

<section>
    <Breadcrumbs />

    <h1>Legal Information</h1>

    <p>You can view all Legal Information here.</p>

    <ul>
        <li>
            <a href="/legal/privacy-policy">Privacy Policy</a> - {getPageData(
                '/legal/privacy-policy'
            )?.description}
        </li>
        <li>
            <a href="/legal/tos">Terms Of Service</a> -
            {getPageData('/legal/terms-of-service')?.description}
        </li>
    </ul>

    <h2>Definition</h2>

    <p>
        As stated in our <a href="/legal/tos">Terms of Service</a>,
        <b>Legal Information</b> refers to the Terms of Service and the Privacy Policy.
    </p>

    <h2 id="voices">Notices</h2>

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
