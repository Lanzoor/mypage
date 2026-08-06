<section class="disable-initial-padding disable-padding" id="iris-bg">
    <section class="enable-initial-padding fixed-bg centered" id="intro">
        <header>
            <h1 class="logo">
                <span class="head">lanzoor</span><span>.</span><span class="tail">dev</span>
            </h1>

            <p class="adaptive-text-shadow">
                <span class="col black">//</span>
                <span class="col purple"> portfolio </span>
                <span class="col black">//</span>
                <span class="col blue"> archive </span>
                <span class="col black">//</span>
                <span class="col cyan"> projects </span>
                <span class="col black">//</span>
                <span class="col green"> showcases </span>
                <span class="col black">//</span>
            </p>

            <p>
                <b>Hello! 👋</b><br />
                My name is <span class="col bright purple">Lanzoor</span>, a student from South
                Korea who likes
                <span class="col green">programming</span>,
                <span class="col yellow">science</span>,
                <span class="col orange">languages</span> and more.<br />

                You'll find projects, showcases, tools, and whatever my brain decided to finish.
            </p>
        </header>

        <p>
            <b>
                Make yourself at home, explore things at your own pace and
                <span class="col bright purple">have fun!</span> ♥
            </b>
        </p>

        <div class="enable-spacing quick-links">
            <h1>Quick Links</h1>

            <p>
                <i class="col bright purple">Not sure where to start?</i> Here are a few places worth
                checking out.
            </p>

            <div class="links">
                <a class="link plain" href="/about">
                    <h2>🌐 About</h2>
                    <p>
                        <b>Learn more about this website,</b> including its goals, and how it was built.
                    </p>
                </a>
                <a class="link plain" href="/profile">
                    <h2>👤 Profile</h2>
                    <p><b>Learn more about me</b>, my interests, and where to find me online.</p>
                </a>
                <a class="link plain" href="/projects">
                    <h2>💻 Projects</h2>
                    <p>
                        <b>Explore the projects I've been working on,</b> from experiments, simple tools,
                        to larger creations.
                    </p>
                </a>
                <a class="link plain" href="/docs">
                    <h2>📄 Documents</h2>
                    <p>
                        <b>Browse my documents and guides.</b> I really like talking about random stuff
                        there!
                    </p>
                </a>
                <a class="link plain" href="/docs/blog">
                    <h2>📝 Blog</h2>
                    <p>Read announcements, development updates and life updates.</p>
                </a>
                <a class="link plain" href="/projects/core/changelog">
                    <h2>🔄 Changelog</h2>
                    <p>See what's changed, what's new, and what's been improved.</p>
                </a>
            </div>
        </div>
    </section>
</section>

<style lang="css">
    #iris-bg {
        background-image: url('/assets/backgrounds/iris.jpg');
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;
    }

    #intro {
        background: rgba(0, 0, 0, 0.8);
    }

    @keyframes cursorBlink {
        0% {
            opacity: 0%;
        }

        50% {
            opacity: 100%;
        }

        100% {
            opacity: 0%;
        }
    }

    #intro header .logo {
        font-size: 4em;
    }

    #intro header .logo::after {
        position: absolute;
        left: auto;
        content: '_';
        animation: cursorBlink 1s none infinite;
    }

    @media (max-width: 768px) {
        #intro header .logo {
            font-size: 3em;
        }
    }

    @media (max-width: 480px) {
        #intro header .logo {
            font-size: 2em;
        }
    }

    #strawberry-jam {
        background-image: url('/assets/backgrounds/strawberry-jam.jpg');
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;
    }

    .quick-links {
        background: rgba(15, 15, 20, 0.55);

        border: 1px solid rgba(255, 255, 255, 0.1);

        backdrop-filter: blur(12px);

        border-radius: 2em;
        padding: 2em;
    }

    .quick-links .links {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(40vw, 1fr));
        gap: 1em;
    }

    .quick-links .links .link {
        display: block;

        padding: 1.5em;
        border-radius: 1em;

        text-decoration: none;
        color: inherit;

        background: rgba(255, 255, 255, 0.06);
        border: 1px solid rgba(255, 255, 255, 0.12);

        transition: 200ms ease;
    }

    .quick-links .links .link:hover {
        transform: translateY(-4px);
        background: rgba(255, 255, 255, 0.1);
        border-color: rgba(255, 255, 255, 0.25);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
    }

    .quick-links .links .link h2 {
        margin-bottom: 0.5em;
        font-size: 1.5em;
    }

    #quick-links .links .link p {
        margin: 0;
        opacity: 0.9;
    }
</style>
