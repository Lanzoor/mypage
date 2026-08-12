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
            document.body.classList.toggle('disco');

            input = [];
        }
    }
</script>

<svelte:window onkeydown={handleKeydown} />

<style>
    :global(body.disco) {
        animation: disco 0.5s linear infinite;
    }
    @keyframes disco {
        0% {
            filter: hue-rotate(0deg) saturate(2);
            transform: scale(1.01) translateY(0) rotate(0deg);
        }

        25% {
            filter: hue-rotate(90deg) saturate(2);
            transform: translateY(-4px) rotate(-0.5deg);
        }

        50% {
            filter: hue-rotate(180deg) saturate(2);
            transform: scale(1.01) translateY(0) rotate(0deg);
        }

        75% {
            filter: hue-rotate(270deg) saturate(2);
            transform: translateY(4px) rotate(0.5deg);
        }

        100% {
            filter: hue-rotate(360deg) saturate(2);
            transform: scale(1.01) translateY(0) rotate(0deg);
        }
    }
</style>
