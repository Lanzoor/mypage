<script lang="ts">
    let confirmations = $state([false, false, false, false]);

    let canStart = $derived(confirmations.every(Boolean));
</script>

<section>
    <h1>What is the site's name?</h1>

    <p>This is a VERY LONG puzzle game about the name of this website.</p>

    <p>
        <b
            >Before you start, please ensure that you're playing on <a href="/"
                >lanzoor.dev</a
            >.</b
        >
    </p>

    <p>
        <b style="color: red">
            Before you start, please ensure that you're playing on lanzoor.dev.
        </b>
    </p>

    <p>
        <b style="color: orange">
            Before you start, please ensure that you're playing on lanzoor.dev.
        </b>
    </p>

    <p>
        <b style="color: yellow">
            Before you start, please ensure that you're playing on lanzoor.dev.
        </b>
    </p>

    <p>
        <b style="color: green">
            Before you start, please ensure that you're playing on lanzoor.dev.
        </b>
    </p>

    <p>
        <b style="color: cyan">
            Before you start, please ensure that you're playing on lanzoor.dev.
        </b>
    </p>

    <p>
        <b style="color: blue">
            Before you start, please ensure that you're playing on lanzoor.dev.
        </b>
    </p>

    <p>
        <b style="color: purple">
            Before you start, please ensure that you're playing on lanzoor.dev.
        </b>
    </p>

    <label class="checkbox">
        <input type="checkbox" bind:checked={confirmations[0]} />
        <span class="box"></span>
        I agree that the name of the website is lanzoor.dev.
    </label>
    <label class="checkbox">
        <input type="checkbox" bind:checked={confirmations[1]} />
        <span class="box"></span>
        I agree that I am currently playing on lanzoor.dev.
    </label>
    <label class="checkbox">
        <input type="checkbox" bind:checked={confirmations[2]} />
        <span class="box"></span>
        I agree that I have read all of the warnings above.
    </label>
    <label class="checkbox">
        <input type="checkbox" bind:checked={confirmations[3]} />
        <span class="box"></span>
        I agree that I have confirmed my choices above.
    </label>

    <button
        disabled={!canStart}
        onclick={() =>
            window.location.replace("/games/what-is-the-sites-name/00")}
    >
        Start Game
    </button>
</section>

<style>
    .checkbox {
        display: inline-flex;
        align-items: center;
        gap: 0.5em;
        cursor: pointer;
    }

    .checkbox input {
        display: none;
    }

    .box {
        width: 1.5em;
        height: 1.5em;
        border: 2px solid #777;
        border-radius: 0.5em;
    }

    .checkbox input:checked + .box {
        background: #6400ff;
    }
    .checkbox input:checked + .box::after {
        content: "✓";
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        color: white;
        font-weight: bold;
    }

    button:disabled {
        color: red;
        cursor: not-allowed;
    }
</style>
