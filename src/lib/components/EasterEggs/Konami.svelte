<script lang="ts">
    const konamiCode = [
        'ArrowUp',
        'ArrowUp',
        'ArrowDown',
        'ArrowDown',
        'ArrowLeft',
        'ArrowRight',
        'ArrowLeft',
        'ArrowRight',
        'b',
        'a',
    ];

    let input: string[] = [];

    function handleKeydown(event: KeyboardEvent) {
        input = [...input, event.key].slice(-konamiCode.length);

        if (input.join(',') === konamiCode.join(',')) {
            document.body.classList.toggle('spin');

            input = [];
        }
    }
</script>

<svelte:window onkeydown={handleKeydown} />

<style>
    :global(body.spin) {
        animation: disco 1s linear infinite;
    }

    @keyframes disco {
        0% {
            filter: hue-rotate(0deg) saturate(2);
        }

        20% {
            filter: hue-rotate(72deg) saturate(3);
        }

        40% {
            filter: hue-rotate(144deg) saturate(2);
        }

        60% {
            filter: hue-rotate(216deg) saturate(3);
        }

        80% {
            filter: hue-rotate(288deg) saturate(2);
        }

        100% {
            filter: hue-rotate(360deg) saturate(3);
        }
    }
</style>
