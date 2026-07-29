<script lang="ts">
    import { changelogSearchOverlay } from '$lib/overlays.svelte';

    let searchValue = $state('');
    let searchDescription = $state('Search for a version!');

    const versionIds = [
        'v26-27-0',
        'v26-26-0',
        'v26-25-0',
        'v26-25-2147483648',
        'v26-24-2147483647',
        'v26-24-0',
        'v26-23-9',
        'v26-23-8',
        'v26-23-7',
        'v26-23-6',
        'v26-23-5',
        'v26-23-4',
        'v26-23-3',
    ];

    function handleSearch() {
        let version = searchValue.trim().toLowerCase();

        if (!version.startsWith('v')) {
            version = 'v' + version;
        }

        if (!/^v?\d+(\.\d+)*$/i.test(version)) {
            searchDescription = 'Invalid version format! Please try again.';
            return;
        }

        const targetId = version.replaceAll('.', '-');

        if (!versionIds.includes(targetId)) {
            searchDescription = "Sorry, we couldn't find that version!";
            return;
        }

        document.getElementById(targetId)?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });

        history.replaceState(null, '', `#${targetId}`);

        searchDescription = `Successfully found version ${version}! Closing...`;

        setTimeout(() => {
            changelogSearchOverlay.open = false;
        }, 750);
    }
</script>

<div
    id="search-overlay"
    class:visible={changelogSearchOverlay.open}
    onclick={() => (changelogSearchOverlay.open = false)}
>
    <p id="search-description">
        <b>{searchDescription}</b><br />
        Press the <kbd class="plain">Escape</kbd> key to cancel
    </p>

    <div id="search-options" onclick={(event) => event.stopPropagation()}>
        <input
            type="text"
            bind:value={searchValue}
            id="search-bar"
            placeholder="Enter a version (e.g. v26.1.0)"
            onkeydown={(e) => e.key === 'Enter' && handleSearch()}
        />

        <button id="search-button" onclick={handleSearch}> Search </button>
    </div>
</div>

<style lang="css">
    #search-overlay {
        opacity: 0;
        pointer-events: none;
        transform: translateY(50%);

        position: fixed;
        inset: 0;

        padding: 2em 0;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        cursor: pointer;
        gap: 1em;

        background: var(--search-overlay-bg);
        z-index: 2147483646;

        transition:
            opacity 0.5s ease,
            transform 0.5s ease;
    }

    #search-overlay.visible {
        opacity: 1;
        pointer-events: auto;
        transform: translateY(0);
    }

    #search-description {
        text-align: center;
        font-size: 0.75em;
        letter-spacing: 0.1em;
    }

    #search-options {
        display: flex;
        flex-direction: row;
        justify-content: center;
        cursor: default;
    }

    #search-bar {
        width: 600px;
        max-width: 75vw;
    }

    #search-options {
        max-width: 75vw;
    }

    #search-button {
        font-family: 'JetBrains Mono';

        background: #7155ff;
        border: none;
        color: white;

        padding: 0 10px;

        transition: 0.5s ease;
    }

    #search-button:hover {
        background: #aa91ff;
        cursor: pointer;
    }

    @media (max-width: 1080px) {
        :root {
            --search-overlay-bg: radial-gradient(circle at bottom, rgb(0, 0, 0), transparent 75%);
        }
    }
</style>
