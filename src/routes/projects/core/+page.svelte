<svelte:head>
    <title>core | lanzoor.dev</title>
</svelte:head>

<section id="intro" class="stretched">
    <div class="breadcrumbs">
        <a href="/">Home</a>

        <span class="separator">›</span>

        <a href="/projects">Projects</a>

        <span class="separator">›</span>

        <a href="/projects/core">core</a>
    </div>

    <header>
        <h1>core</h1>
        <p class="dim">the frontend codebase behind <b>lanzoor.dev</b></p>
    </header>

    <blockquote>
        <p>
            <code>core</code> is the name for the repository that provides pretty much
            <i>everything</i> you see on this website.
        </p>
    </blockquote>
</section>

<section id="stack">
    <div class="header">
        <h2>The stack behind core</h2>
        <h1>How was core built?</h1>
    </div>
</section>

<section id="open-source">
    <h1>Everything is open source.</h1>

    <div class="buttons">
        <button> View source code </button>
    </div>
</section>

<style lang="css">
    #intro {
        background:
            radial-gradient(ellipse at top center, rgba(90, 0, 200, 0.5), transparent 75%), black;
    }

    #intro header {
        text-align: center;
    }

    #intro header h1 {
        font-family: 'JetBrains Mono';
        font-size: 3em;

        color: rgb(164, 90, 255);
        text-shadow: 0 10px 20px rgba(129, 25, 255, 0.5);
        letter-spacing: 0.05em;

        transition: 0.5s ease;
    }

    #intro header h1:hover {
        color: rgb(199, 152, 255);

        letter-spacing: 0.01em;
        cursor: pointer;

        transform: translateY(-0.1em);
    }

    #stack {
        background:
            radial-gradient(ellipse at top center, rgba(47, 199, 255, 0.25), transparent 45%),
            radial-gradient(ellipse at bottom center, rgba(47, 199, 255, 0.25), transparent 45%),
            black;
    }

    #stack .header h2 {
        color: rgb(47, 199, 255);
    }
</style>
