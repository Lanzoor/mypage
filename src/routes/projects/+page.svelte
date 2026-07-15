<svelte:head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>Projects | lanzoor.dev</title>
</svelte:head>

<section id="projects">
    <span class="breadcrumbs">
        <a href="/">Home</a>

        <span class="separator">›</span>

        <a href="/projects">Projects</a>
    </span>

    <h1>Featured Projects</h1>

    <p>Here are some projects that I've been working on.</p>

    <div id="container">
        <div class="project">
            <h1>core</h1>

            <p class="description">The website you're looking at right now.</p>

            <div class="tags">
                <div class="tag wip">wip</div>
                <div class="tag frontend">frontend</div>
                <div class="tag webpage">webpage</div>
            </div>

            <hr />

            <div class="links">
                <div class="link">
                    Project: <a href="/"> lanzoor.dev </a>
                </div>

                <div class="link">
                    Showcase: <a href="/projects/core"> /projects/core </a>
                </div>

                <div class="link">
                    Changelog: <a href="/projects/core/changelog"> /projects/core/changelog </a>
                </div>
            </div>
        </div>

        <div class="project">
            <h1>core-api</h1>

            <p class="description">The backend behind this website, built with NextJS.</p>

            <div class="tags">
                <div class="tag wip">wip</div>
                <div class="tag backend">backend</div>
                <div class="tag webpage">webpage</div>
            </div>

            <hr />

            <div class="links">
                <div class="link">
                    Project:

                    <a href="https://api.lanzoor.dev" target="_blank" rel="noopener noreferrer">
                        api.lanzoor.dev
                    </a>
                </div>

                <div class="link">
                    Changelog:

                    <a
                        href="/projects/core-api/changelog"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        /projects/core-api/changelog
                    </a>
                </div>
            </div>
        </div>

        <!-- <div class="project">
            <h1>core-status</h1>

            <p class="description">The status page for all of my services. Built with NextJS!</p>

            <div class="tags">
                <div class="tag wip">wip</div>
                <div class="tag frontend">frontend</div>
                <div class="tag backend">backend</div>
                <div class="tag webpage">webpage</div>
            </div>

            <hr />

            <div class="links">
                <div class="link">
                    Project: <a href="https://status.lanzoor.dev" target="_blank"> link </a>
                </div>
            </div>
        </div> -->

        <div class="project">
            <h1>BHOJ <span class="dim">(Bro Had One Job)</span></h1>

            <p class="description">An esoteric programming language compiler, written in Python.</p>

            <div class="tags">
                <div class="tag program">program</div>
                <div class="tag cli">cli</div>
            </div>

            <hr />

            <div class="links">
                <div class="link">
                    Project:

                    <a
                        href="https://github.com/Lanzoor/BHOJ"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        github.com/Lanzoor/BHOJ
                    </a>
                </div>
            </div>
        </div>

        <div class="project">
            <h1>periodica</h1>

            <p class="description">A periodic table CLI made in python.</p>

            <div class="tags">
                <div class="tag archived">archived</div>
                <div class="tag program">program</div>
                <div class="tag cli">cli</div>
            </div>

            <hr />

            <div class="links">
                <div class="link">
                    Project:

                    <a
                        href="https://github.com/Lanzoor/periodica"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        github.com/Lanzoor/periodica
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>

<section id="portal">
    <h1>Projects Portal</h1>

    <p>There's also a plenty of projects hosted directly within this website.</p>

    <ul>
        <li>
            Tools - <a href="/tools">/tools</a><br />
            A collection of some handy tools designed for everyone to use.
        </li>
    </ul>
</section>

<style lang="css">
    :root {
        --projects-bg:
            radial-gradient(
                circle at top left,
                rgba(0, 72, 255, 0.2) 0%,
                transparent 25%,
                transparent 100%
            ),
            radial-gradient(
                circle at 100% 50%,
                rgba(0, 255, 255, 0.2) 0%,
                transparent 25%,
                transparent 100%
            ),
            radial-gradient(
                circle at bottom left,
                rgba(0, 180, 255, 0.2) 0%,
                transparent 25%,
                transparent 100%
            ),
            black;

        --portal-bg:
            radial-gradient(
                circle at bottom right,
                rgba(0, 72, 255, 0.2) 0%,
                transparent 25%,
                transparent 100%
            ),
            radial-gradient(
                circle at 100% 50%,
                rgba(0, 255, 255, 0.2) 0%,
                transparent 25%,
                transparent 100%
            ),
            radial-gradient(
                circle at top left,
                rgba(0, 180, 255, 0.2) 0%,
                transparent 25%,
                transparent 100%
            ),
            black;
    }

    #projects {
        background: var(--projects-bg);
    }

    #portal {
        background: var(--portal-bg);
    }

    #container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;

        gap: 2em;

        width: 100%;
        margin: 2% 0;
    }

    .project {
        display: flex;
        flex-direction: column;

        min-width: 30%;

        padding: 2em;

        background: radial-gradient(circle at top left, rgba(0, 180, 255, 0.16), #111 45%);

        border: 1px solid rgba(255, 255, 255, 0.06);
        border-radius: 22px;

        transition:
            transform 0.25s ease,
            border-color 0.25s ease,
            box-shadow 0.25s ease;
    }

    .project:hover {
        border-color: rgba(0, 180, 255, 0.4);

        box-shadow: 0 0 25px rgba(0, 180, 255, 0.25);
    }

    .project h1 {
        font-size: 40px;
        margin: 0 0 10px 0;
        letter-spacing: 0.05em;

        font-family: 'JetBrains Mono';

        color: rgb(220, 245, 255);

        text-shadow: 0 0 12px rgba(0, 180, 255, 0.3);

        transition: letter-spacing 0.5s ease;
    }

    .project h1:hover {
        letter-spacing: 0.1em;
    }

    .project .description {
        margin: 0 0 22px 0;

        line-height: 1.6;
        font-size: 20px;

        color: rgba(255, 255, 255, 0.7);
    }

    .project .tags {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;

        margin-bottom: 24px;
    }

    .project .tags .tag {
        font-size: 12.5px;
        font-weight: 600;

        color: #777;
        border: 1px solid rgba(255, 255, 255, 0.25);
        border-radius: 2px;

        background: #111;

        padding: 5px 12px;

        backdrop-filter: blur(10px);
        transition: 0.5s ease;
    }

    .project .tags .tag:hover {
        transform: translateY(-2px) scale(1.05);
        cursor: pointer;
    }

    .project .tags .tag.wip {
        color: rgb(255, 219, 120);
        border: 1px solid rgba(246, 255, 0, 0.5);
        text-shadow: 0 0 10px rgba(246, 255, 0, 0.5);
        box-shadow:
            0 0 10px rgba(246, 255, 0, 0.25),
            inset 0 0 10px rgba(246, 255, 0, 0.25);
    }

    .project .tags .tag.archived {
        color: rgb(255, 120, 120);
        border: 1px solid rgba(255, 0, 0, 0.5);
        text-shadow: 0 0 10px rgba(255, 0, 0, 0.5);
        box-shadow:
            0 0 10px rgba(255, 0, 0, 0.25),
            inset 0 0 10px rgba(255, 0, 0, 0.25);
    }

    .project .tags .tag.backend {
        color: rgb(255, 120, 120);
        border: 1px solid rgba(255, 0, 0, 0.25);
        text-shadow: 0 0 10px rgba(255, 0, 0, 0.5);
        box-shadow: 0 0 10px rgba(255, 0, 0, 0.25);
    }

    .project .tags .tag.frontend {
        color: rgb(120, 255, 120);
        border: 1px solid rgba(4, 255, 0, 0.25);
        text-shadow: 0 0 10px rgba(4, 255, 0, 0.5);
        box-shadow: 0 0 10px rgba(4, 255, 0, 0.25);
    }

    .project .tags .tag.webpage {
        color: rgb(120, 220, 255);
        border: 1px solid rgba(0, 180, 255, 0.25);
        text-shadow: 0 0 10px rgba(0, 180, 255, 0.5);
        box-shadow: 0 0 10px rgba(0, 180, 255, 0.25);
    }

    .project .tags .tag.program {
        color: rgb(120, 122, 255);
        border: 1px solid rgba(85, 105, 255, 0.25);
        text-shadow: 0 0 10px rgba(85, 105, 255, 0.5);
        box-shadow: 0 0 10px rgba(85, 105, 255, 0.25);
    }

    .project .tags .tag.cli {
        color: rgb(228, 120, 255);
        border: 1px solid rgba(204, 85, 255, 0.25);
        text-shadow: 0 0 10px rgba(204, 85, 255, 0.5);
        box-shadow: 0 0 10px rgba(204, 85, 255, 0.25);
    }

    .project hr {
        height: 1px;

        margin: 0 0 18px 0;
    }

    .project .links {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .project .link {
        padding: 10px 14px;

        background: rgba(255, 255, 255, 0.03);

        border-radius: 12px;

        transition:
            background 0.2s ease,
            transform 0.2s ease;
    }

    .project .link:hover {
        background: rgba(255, 255, 255, 0.06);
        transform: translateX(4px);
    }

    .project .link a {
        color: rgb(100, 210, 255);

        text-decoration: none;
        text-shadow: 0 0 10px rgba(52, 130, 255, 0.5);
    }

    .project .link a:hover {
        text-decoration: underline;
    }
</style>
