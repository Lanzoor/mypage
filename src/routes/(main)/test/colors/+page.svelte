<section id="intro">
    <h1>Color Palette</h1>

    <h2>Text Colors</h2>

    <p>
        <b>The text colors were heavily inspired by terminal text colors.</b>
    </p>

    <div class="colors">
        <div class="color-group">
            <div class="text">Dark</div>
            <div class="color dark-black"></div>
            <div class="color dark-red"></div>
            <div class="color dark-orange"></div>
            <div class="color dark-yellow"></div>
            <div class="color dark-green"></div>
            <div class="color dark-cyan"></div>
            <div class="color dark-blue"></div>
            <div class="color dark-purple"></div>
            <div class="color dark-magenta"></div>
        </div>
        <div class="color-group">
            <div class="text">Normal</div>
            <div class="color black"></div>
            <div class="color red"></div>
            <div class="color orange"></div>
            <div class="color yellow"></div>
            <div class="color green"></div>
            <div class="color cyan"></div>
            <div class="color blue"></div>
            <div class="color purple"></div>
            <div class="color magenta"></div>
        </div>
        <div class="color-group">
            <div class="text">Bright</div>
            <div class="color bright-black"></div>
            <div class="color bright-red"></div>
            <div class="color bright-orange"></div>
            <div class="color bright-yellow"></div>
            <div class="color bright-green"></div>
            <div class="color bright-cyan"></div>
            <div class="color bright-blue"></div>
            <div class="color bright-purple"></div>
            <div class="color bright-magenta"></div>
        </div>
    </div>
</section>

<style>
    .colors {
        display: flex;
        flex-direction: column;
        gap: 0.5em;
    }

    .color-group {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.5em;
    }

    .color-group .text {
        opacity: 0.7;
        width: 10em;
    }

    .color {
        width: 2em;
        height: 2em;
        border-radius: 0.25em;
        transition: 2s ease;
    }

    .color:hover {
        transform: scale(1.25);
        cursor: pointer;
        transition: 200ms ease;
    }

    .color.dark-black {
        background: var(--dark-black);
    }
    .color.black {
        background: var(--black);
    }
    .color.bright-black {
        background: var(--bright-black);
    }

    .color.dark-red {
        background: var(--dark-red);
    }
    .color.red {
        background: var(--red);
    }
    .color.bright-red {
        background: var(--bright-red);
    }

    .color.dark-orange {
        background: var(--dark-orange);
    }
    .color.orange {
        background: var(--orange);
    }
    .color.bright-orange {
        background: var(--bright-orange);
    }

    .color.dark-yellow {
        background: var(--dark-yellow);
    }
    .color.yellow {
        background: var(--yellow);
    }
    .color.bright-yellow {
        background: var(--bright-yellow);
    }

    .color.dark-green {
        background: var(--dark-green);
    }
    .color.green {
        background: var(--green);
    }
    .color.bright-green {
        background: var(--bright-green);
    }

    .color.dark-cyan {
        background: var(--dark-cyan);
    }
    .color.cyan {
        background: var(--cyan);
    }
    .color.bright-cyan {
        background: var(--bright-cyan);
    }

    .color.dark-blue {
        background: var(--dark-blue);
    }
    .color.blue {
        background: var(--blue);
    }
    .color.bright-blue {
        background: var(--bright-blue);
    }

    .color.dark-purple {
        background: var(--dark-purple);
    }
    .color.purple {
        background: var(--purple);
    }
    .color.bright-purple {
        background: var(--bright-purple);
    }

    .color.dark-magenta {
        background: var(--dark-magenta);
    }
    .color.magenta {
        background: var(--magenta);
    }
    .color.bright-magenta {
        background: var(--bright-magenta);
    }
</style>
