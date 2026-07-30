<svelte:head>
    <title>Contributors | lanzoor.dev</title>
</svelte:head>

<section class="centered horizontally" id="intro">
    <span class="breadcrumbs">
        <a href="/">Home</a>

        <span class="separator">›</span>

        <a href="/credits">Credits</a>

        <span class="separator">›</span>

        <a href="/credits/contributors">Contributors</a>
    </span>

    <header>
        <h1>Contributors</h1>

        <p>
            Here's an updating list of amazing contributors, who helped create and improve the
            website for everyone!<br />
            If you're curious on how to get involved, read <a href="/contribution">this article</a>!
        </p>
    </header>
</section>

<section id="amethyst">
    <h1>Amethyst Team</h1>

    <p>
        <span class="col bright purple">The Amethyst Team</span> refers to a certain group of people that
        frequently work together in order to improve the website for everyone.
    </p>

    <div class="contributors">
        <div class="contributor">
            <img src="/assets/contributors/iris-modern.png" />

            <div class="description">
                <h1>Lanzoor</h1>

                <div class="roles">Founder · Developer · Professional Procrastinator</div>

                <p>Maintains the website infrastructure, frontend systems, and backend services.</p>

                <div class="quote">i like mangoes. mangoes are a way of life.</div>
            </div>
        </div>

        <div class="contributor">
            <img src="/assets/contributors/kiui6.png" />

            <div class="description">
                <h1>
                    <span lang="jp" class="jp">きゐ</span>
                </h1>

                <div class="roles">Security · Quality Assurance</div>

                <p>
                    Literally made a whole in-depth analysis for the website, pointing out potential
                    issues.
                </p>

                <div class="quote">He is Russian. He's probably built different. 🥵🥶💀</div>
            </div>
        </div>

        <div class="contributor">
            <img src="/assets/contributors/derukugi.png" />

            <div class="description">
                <h1>derukugi</h1>

                <div class="roles">Security · Quality Assurance</div>

                <p>Gave some great inspirations and feedback for the website.</p>

                <div class="quote">I'm a big fan of Drastic</div>
            </div>
        </div>
    </div>
</section>

<section id="jade">
    <h1>Jade Team</h1>

    <p>
        <span class="col bright cyan">The Jade Team</span> refers to the amazing contributors that helped
        build this website.
    </p>

    <div class="contributors">
        <div class="contributor">
            <img src="/assets/contributors/default.png" />

            <div class="description">
                <h1>conaxsilver</h1>

                <p>Gave some great quality Assurance and bug reports for the website.</p>

                <div class="quote jp" lang="jp">むいむい！</div>
            </div>
        </div>

        <div class="contributor">
            <img src="/assets/contributors/sweden_finlandia.hoi4.png" />

            <div class="description">
                <h1>ASEANCoin</h1>

                <p>Drew my original character, Iris.</p>

                <div class="quote">
                    His drawing skills are so good they should honestly be illegal. Also, a huge
                    HOI4 fan.
                </div>
            </div>
        </div>

        <div class="contributor">
            <img src="/assets/contributors/tactical02_.png" />

            <div class="description">
                <h1>Suw</h1>

                <p>Gave some great suggestions and direct fixes for the website.</p>

                <div class="quote">:OkuuMindblown:</div>
            </div>
        </div>
    </div>

    <!--    <div id="contributors" class="flex-grid">

                <div class="contributor">
                    <h1>blackrose | <code>blackrose00.</code></h1>

                    <img src="/assets/contributors/default.png">

                    <p>
                        Pointed out several security-related issues with the website.
                    </p>

                    <div class="quote">
                        placeholder
                    </div>
                </div>

            </div> -->
</section>

<style lang="css">
    #amethyst {
        background:
            radial-gradient(circle at top left, rgba(40, 7, 112, 0.5), transparent 40%),
            radial-gradient(circle at bottom right, rgba(40, 7, 112, 0.5), transparent 40%),
            linear-gradient(
                to bottom,
                rgba(40, 7, 112, 0.25) 0%,
                black 40%,
                black 60%,
                rgba(40, 7, 112, 0.25) 100%
            ),
            black;
    }

    #jade {
        background:
            radial-gradient(circle at top left, rgba(9, 82, 95, 0.5), transparent 40%),
            linear-gradient(
                to right,
                rgba(9, 82, 95, 0.25) 0%,
                black 40%,
                black 60%,
                rgba(9, 82, 95, 0.25) 100%
            ),
            black;
    }

    .contributors {
        display: flex;
        flex-direction: column;
        align-items: left;
        gap: 4em;

        padding: 2em;
        width: 100%;
    }

    .contributors .contributor {
        display: flex;
        gap: 2em;

        padding: 2em;

        background: rgba(255, 255, 255, 0.03);
        border: 2px solid rgba(255, 255, 255, 0.08);
        border-radius: 24px;

        backdrop-filter: blur(4px);

        transition: 0.2s ease;
    }

    .contributors .contributor:hover {
        transform: translateY(-2px);
        background: rgba(255, 255, 255, 0.05);
        box-shadow: 0 20px 20px rgba(255, 255, 255, 0.025);
    }

    .contributors .description h1 {
        margin-bottom: 0.25em;
        font-size: 2em;
    }

    .roles {
        opacity: 0.65;

        font-size: 0.8em;
        letter-spacing: 0.05em;

        margin-bottom: 1em;
    }

    .quote {
        margin-top: 1em;
        width: fit-content;

        padding: 0.5em;
        padding-left: 1em;

        opacity: 0.75;
    }

    #amethyst .quote {
        border-left: 5px solid rgb(150, 100, 255);
        background: rgba(150, 100, 255, 0.25);
        box-shadow: 0 0 10px rgba(121, 61, 252, 0.25);
    }

    #jade .quote {
        border-left: 5px solid rgb(100, 232, 255);
        background: rgba(100, 232, 255, 0.25);
        box-shadow: 0 0 10px rgba(100, 232, 255, 0.25);
    }

    .quote:before {
        content: '“';
    }

    .quote:after {
        content: '”';
        margin-top: 1em;
    }

    .contributors .contributor img {
        width: 7.5em;
        height: 7.5em;

        border-radius: 50%;

        flex-shrink: 0;
    }
</style>
