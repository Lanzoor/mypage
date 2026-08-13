<script lang="ts">
    type Scene = "before" | "during" | "result";
    let scene = $state<Scene>("before");

    const SECONDS = 1000;
    const TIME_LIMIT = 20 * SECONDS;
    const MIN_TAPS = 16;

    let elapsedTime = $state(0);
    let timer: number;
    let tapRecord = $state<number[]>([]);

    let averageBPM = $state<number | null>(null);
    let medianBPM = $state<number | null>(null);

    let hasSurpassedTimeLimit = $state<boolean>(false);
    let hasSurpassedTapsLimit = $state<boolean>(false);

    function pulse() {
        document
            .getElementById("main")
            ?.animate([{ background: "#222" }, { background: "black" }], {
                duration: 350,
                easing: "ease",
            });
    }

    function reset() {
        scene = "before";
        elapsedTime = 0;
        averageBPM = null;
        medianBPM = null;
        hasSurpassedTimeLimit = false;
        hasSurpassedTapsLimit = false;
        tapRecord = [];
    }

    function handleTaps() {
        const now = Date.now();

        if (scene === "before") {
            scene = "during";

            timer = window.setInterval(() => {
                if (tapRecord.length === 0) return;

                elapsedTime = Date.now() - tapRecord[0];

                hasSurpassedTimeLimit = elapsedTime >= TIME_LIMIT;
                hasSurpassedTapsLimit = tapRecord.length >= MIN_TAPS;

                if (hasSurpassedTimeLimit && hasSurpassedTapsLimit) {
                    calculateResults();
                }
            }, 50);
        }

        if (scene === "during") {
            pulse();
            tapRecord.push(now);
        }
    }

    function calculateResults() {
        clearInterval(timer);

        const intervals: number[] = [];

        for (let interval = 1; interval < tapRecord.length; interval++) {
            intervals.push(tapRecord[interval] - tapRecord[interval - 1]);
        }

        if (intervals.length === 0) {
            reset();
            return;
        }

        const average = intervals.reduce((a, b) => a + b, 0) / intervals.length;

        averageBPM = Math.round(60000 / average);

        const sorted = [...intervals].sort((a, b) => a - b);

        const medianInterval =
            sorted.length % 2 === 0
                ? (sorted[sorted.length / 2 - 1] + sorted[sorted.length / 2]) /
                  2
                : sorted[Math.floor(sorted.length / 2)];

        medianBPM = Math.round(60000 / medianInterval);

        scene = "result";
    }
</script>

<svelte:window
    onclick={handleTaps}
    onkeydown={(event) => {
        if (event.code === "Space") {
            event.preventDefault();
            handleTaps();
        }
    }}
/>

{#if scene === "before"}
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <section id="main">
        <p class="info">Click anywhere to start measuring BPM</p>
        <p>
            <b>This is a manual BPM checker.</b><br />
            You'll have to manually tap to the song (or audio) in order to get the
            BPM value.
        </p>
    </section>
{:else if scene === "during"}
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <section id="main">
        <h1>Measuring...</h1>
        <p>
            End conditions:<br />

            <b
                class={hasSurpassedTimeLimit
                    ? "col bright green"
                    : "col bright red"}
            >
                {(elapsedTime / 1000).toFixed(1)}s {">="}
                {TIME_LIMIT / SECONDS}s
            </b>
            &
            <b
                class={hasSurpassedTapsLimit
                    ? "col bright green"
                    : "col bright red"}
            >
                at least {MIN_TAPS} taps
            </b>
        </p>
    </section>
{:else}
    <section id="main">
        <h1>Results</h1>

        <p class="results">
            Median (likely BPM): {medianBPM} BPM
            <br />
            Average: {averageBPM} BPM
        </p>

        <!-- svelte-ignore a11y_invalid_attribute -->
        <a
            href=""
            onclick={(event) => {
                event.preventDefault();
                reset();
            }}
        >
            Measure again?
        </a>
    </section>
{/if}

<style lang="css">
    #main {
        background: black;
        height: 100vh;

        align-items: center;
        text-align: center;

        cursor: pointer;
        user-select: none;
    }

    #main .info {
        font-size: 1.5em;
    }
</style>
