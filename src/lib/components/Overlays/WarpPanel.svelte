<script lang="ts">
    import { warpOverlay } from '$lib/overlays.svelte';
    import { onMount } from 'svelte';
    import External from '../Links/External.svelte';

    onMount(() => {
        const listener = (event: KeyboardEvent) => {
            if (event.ctrlKey && event.shiftKey && event.code === 'Slash') {
                event.preventDefault();
                tip = randomTip();
                warpOverlay.open = !warpOverlay.open;
            }
        };

        document.addEventListener('keydown', listener);

        return () => {
            document.removeEventListener('keydown', listener);
        };
    });

    const tips: string[] = [
        'You can also access this menu using the keybind <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>/</kbd>.',
        'You can use URL syntaxes such as <code>#intro</code> and <code>?query=abc</code>.',
    ] as const;

    function randomTip() {
        return Math.random() < 0.99
            ? tips[Math.floor(Math.random() * tips.length)]
            : 'Look behind you.';
    }

    let tip = $state(randomTip());
</script>

<div id="warp" class:open={warpOverlay.open}>
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="bg" onclick={() => (warpOverlay.open = false)}>
        <div class="panel enable-spacing" onclick={(event) => event.stopPropagation()}>
            <h1>Warp Panel</h1>

            <p>Select a destination to warp to!</p>

            <input type="text" placeholder="Type a destination... (e.g. /projects, /)" />

            <p class="dim">
                <b>Quick tip!</b><br />{@html tip}
            </p>
        </div>
    </div>
</div>

<style lang="css">
    #warp {
        position: fixed;
        inset: 0;

        opacity: 0;
        pointer-events: none;
        z-index: 2147483648;
    }

    #warp.open {
        opacity: 1;
        pointer-events: auto;

        transition: 0.5s ease;
    }

    #warp .bg {
        background: rgba(0, 0, 0, 0.5);
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 2em;
    }

    #warp .panel {
        overflow: auto;
        background: #111;
        border: 2px solid #222;
        border-radius: 2em;
        padding: 2em;
        font-size: 0.75em;
        align-items: center;
        text-align: center;
    }

    #warp .panel input[type='text'] {
        width: 100%;
    }
</style>
