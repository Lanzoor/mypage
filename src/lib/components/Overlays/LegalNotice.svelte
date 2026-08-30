<script lang="ts">
    import { LegalInfo, AcceptedLegalInfo } from "$lib/legal";
    import { legalNoticeOverlay } from "$lib/overlays.svelte";

    let acceptedLegalInfo = $state(AcceptedLegalInfo.get());

    let isPrivacyPolicyUpToDate = $derived(
        acceptedLegalInfo?.privacyPolicy ===
            LegalInfo.privacyPolicy.formatVersion(),
    );

    let isTermsOfServiceUpToDate = $derived(
        acceptedLegalInfo?.termsOfService ===
            LegalInfo.termsOfService.formatVersion(),
    );

    $effect(() => {
        if (!isPrivacyPolicyUpToDate || !isTermsOfServiceUpToDate) {
            legalNoticeOverlay.open = true;
        } else {
            legalNoticeOverlay.open = false;
        }
    });

    function acceptLegalChanges() {
        const newConf = {
            privacyPolicy: LegalInfo.privacyPolicy.formatVersion(),
            termsOfService: LegalInfo.termsOfService.formatVersion(),
        };

        AcceptedLegalInfo.set(newConf);

        acceptedLegalInfo = newConf;
        legalNoticeOverlay.open = false;
    }
</script>

<div
    id="legal-notice"
    class:open={legalNoticeOverlay.open}
    aria-hidden={!legalNoticeOverlay.open}
>
    <h1>[ notice ]</h1>

    {#if !acceptedLegalInfo}
        <p>
            Hello! By continuing, you accept the Privacy Policy and Terms of
            Service.
        </p>
    {:else}
        <p>
            Hey there!<br />
            <b
                >Since your last visit, the Legal Information of this website
                has been modified.</b
            >
        </p>
    {/if}

    {#if !isPrivacyPolicyUpToDate}
        <h2>Privacy Policy</h2>

        <p>
            <b>
                The Privacy Policy was updated to version {LegalInfo
                    .privacyPolicy.version} at
                {LegalInfo.privacyPolicy.formatTime()}.
            </b><br />
            For more information, please refer to
            <a href="/legal/privacy-policy/">/privacy-policy</a>.
        </p>

        <p>
            <i>
                This website does not intentionally collect or use personal data
                or use analytics services. Period.
            </i>
        </p>
    {/if}

    {#if !isTermsOfServiceUpToDate}
        <h2>Terms of Service</h2>

        <p>
            <b>
                The Terms of Service were updated to version {LegalInfo
                    .termsOfService.version} at
                {LegalInfo.termsOfService.formatTime()}.
            </b><br />
            For more information, please refer to
            <a href="/legal/tos">/tos</a>.
        </p>

        <p>
            <i>
                You probably won't need to read this unless you're curious about
                the details.<br />
                <b>We don't do any wacky stuff!</b>
            </i>
        </p>
    {/if}

    <div class="bye">
        <button onclick={() => acceptLegalChanges()}>I Accept</button>

        <p>
            <b
                >Clicking "I Accept" means that you accept the Legal
                Information.</b
            ><br />
            This action will prevent this notice from popping up,<br />
            unless a new change is made to the Legal Information.<b
                ><br />
                This panel intentionally does not pop up in any of the Legal Information
                pages.
            </b>

            <br /><br />
            For more information, please refer to
            <a href="/legal#notices">this article</a>.
        </p>
    </div>
</div>

<style lang="css">
    #legal-notice {
        position: fixed;
        top: 4%;
        left: 4%;
        width: 92%;
        height: 92%;

        background: rgba(20, 0, 0, 0.95);
        box-shadow: 0 10px 50px rgba(150, 0, 0, 0.6);
        backdrop-filter: blur(8px);
        border: 1px solid rgba(255, 60, 60, 0.3);
        border-radius: 8px;

        display: flex;
        flex-direction: column;
        align-items: stretch;
        justify-content: flex-start;

        gap: 1.5em;
        padding: 2em;
        font-size: 1em;

        opacity: 0;
        pointer-events: none;

        overflow-y: auto;
        transition: opacity 0.3s ease;
        z-index: 2147483649;
    }

    #legal-notice.open {
        opacity: 1;
        pointer-events: auto;
    }

    #legal-notice.open {
        opacity: 1;
        pointer-events: auto;
    }

    #legal-notice button {
        background: transparent;
        padding: 0.5em 1em;

        color: white;
        border: 2px solid rgba(255, 255, 255, 0.5);
        border-radius: 2147483647px;

        transition: 0.25s ease;
    }

    #legal-notice button:hover {
        color: rgb(20, 0, 0);
        background: white;
        box-shadow: 0 0 20px white;
    }

    #legal-notice h1 {
        color: rgba(255, 150, 150);
        margin: 10px 0;
    }

    #legal-notice .bye {
        text-align: center;
    }

    #legal-notice .bye p {
        margin: 2em 0;
        font-size: 0.8em;
        letter-spacing: 0.1em;
        text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
    }
</style>
