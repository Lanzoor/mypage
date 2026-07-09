<script lang="ts">
    import { Analytics } from '$lib';
    import { page } from '$app/state';
    import { onMount } from 'svelte';

    let isNoticeOpen = $state(false);
    const isInPrivacyPolicy = $derived(page.url.pathname === '/privacy-policy/');

    function enableAnalytics() {
        Analytics.setEnabled(true);
        Analytics.initialize();

        localStorage.setItem('hasSeenNotice', 'true');
        isNoticeOpen = false;
    }

    function disableAnalytics() {
        Analytics.setEnabled(false);

        localStorage.setItem('hasSeenNotice', 'true');
        isNoticeOpen = false;
    }

    onMount(() => {
        if (!isInPrivacyPolicy) {
            isNoticeOpen = localStorage.getItem('hasSeenNotice') !== 'true';
        }
    });
</script>

<div class="analytics-notice-panel" class:open={isNoticeOpen} class:mobile-hide={isInPrivacyPolicy}>
    <div class="description">
        <h1>[ notice ]</h1>

        <p>
            This website collects a limited amount of information such as your approximate country,
            the pathname of your visit, and more. <b>We do not collect your data by default.</b>
            Please refer to <a href="/privacy-policy">our privacy policy</a> for more information.
            <br />
            You can use the buttons to the right to either enable or disable analytics.
            <b>Clicking either button will hide this panel.</b>
        </p>

        <p class="mobile">
            <br />
            <b
                >Your viewport width is small, which changed the layout of this panel to cover the
                entire screen.</b
            >
            Visiting the privacy policy page won't show this panel,
            <b>and no changes to your preferences will be made.</b>
        </p>
    </div>

    <div class="buttons">
        <button class="disable" onclick={disableAnalytics}> Disable analytics </button>

        <button class="enable" onclick={enableAnalytics}> Enable analytics </button>
    </div>
</div>

<style lang="css">
    .analytics-notice-panel {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: 40px;

        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;

        padding: 1.5em;

        background: rgba(20, 0, 0);
        box-shadow: 0 10px 50px rgb(150, 0, 0);
        border-top: 2px solid rgba(255, 200, 200);
        backdrop-filter: blur(4px);

        z-index: 9999;

        font-size: 0.6em;

        opacity: 0;
        pointer-events: none;
    }

    .analytics-notice-panel.open {
        opacity: 1;
        pointer-events: auto;
    }

    .analytics-notice-panel .buttons {
        min-width: 30%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;

        gap: 20px;
    }

    .analytics-notice-panel button {
        font-family: 'JetBrains Mono';
        font-size: 1em;

        background: transparent;
        border: none;
        cursor: pointer;
        border-radius: 2147483647px;
        padding: 0.5em 1em;

        color: white;
        border: 2px solid rgba(255, 255, 255, 0.5);

        transition: 0.25s ease;
    }

    .analytics-notice-panel button.enable {
        background: rgba(255, 255, 255, 0.25);
        border-color: transparent;
    }

    .analytics-notice-panel button:hover {
        color: rgb(20, 0, 0);
        background: white;
        box-shadow: 0 0 20px white;
    }

    .analytics-notice-panel h1 {
        color: rgba(255, 150, 150);
        margin: 10px 0;
    }

    .analytics-notice-panel .mobile {
        display: none;
    }
</style>
