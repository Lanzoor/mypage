<script lang="ts">
    let hasSeen = $state(false);
</script>

<section>
    <h1>Do not play this game</h1>

    <p>
        Read the title. Do not play this game. Do not press start. Nothing to
        see here.
    </p>

    <button
        onclick={() => {
            if (!hasSeen) {
                alert("Do not press start again.");
                hasSeen = true;
            } else {
                alert("Do not append '/game' to the end of the url.");
            }
        }}
    >
        Start
    </button>

    <p class="dim">
        Note: this is sort of a meta game where you'll have to go back and forth
        and gather clues. There aren't any saving features, and this game is
        quite <span title={`Do not append '/d/o/n/o/t' do the end of the url.`}
            >long</span
        >. Your goal is to solve everything in one go, as fast as possible. Good
        luck!
    </p>
</section>
