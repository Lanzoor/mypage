<section id="footer-panel" class="no-padding">
    <section id="navigation">
        <nav id="navigation-links">
            <div class="group">
                <h2>General</h2>
                <a href="/">Frontpage</a>
                <a href="/about">About</a>
                <a href="/privacy-policy">Privacy Policy</a>
                <a href="/map">Site map</a>
            </div>
            <div class="group">
                <h2>Documents</h2>
                <a href="/docs">Documents</a>
                <a href="/docs/blog">Blog</a>
            </div>
            <div class="group">
                <h2>Projects</h2>
                <a href="/projects">Projects</a>
                <a href="/tools">Tools</a>
                <a href="https://www.youtube.com/@lanzoormakesvideos">Videos</a>
                <a href="/projects/conlangs">Conlangs</a>
            </div>
            <div class="group">
                <h2>Credits</h2>
                <a href="/credits">Credits</a>
                <a href="/credits/contributors">Contributors</a>
                <a href="/credits/fonts">Font credits</a>
                <a href="/credits/assets">Asset credits</a>
            </div>
        </nav>
    </section>

    <section class="spacing" id="bottom">
        <div class="spacing">
            <h1 class="logo">
                <span class="head">lanzoor</span>.<span class="tail">dev</span>
            </h1>
            A website by Lanzoor, including projects, showcases, documents, and more!
        </div>

        <hr />

        <div id="footer">
            <div id="connections">
                <a href="https://www.discord.com" target="_blank">
                    <img src="/assets/icons/socials/discord.svg" alt="Discord" />
                </a>

                <a href="https://www.reddit.com/user/Lanzoor/" target="_blank">
                    <img src="/assets/icons/socials/reddit.svg" alt="Reddit" />
                </a>

                <a href="https://github.com/Lanzoor" target="_blank">
                    <img src="/assets/icons/socials/github.svg" alt="GitHub" />
                </a>

                <a href="https://steamcommunity.com/id/lanzoor/" target="_blank">
                    <img src="/assets/icons/socials/steam.svg" alt="steam" />
                </a>

                <a href="https://www.youtube.com/@lanzoorgaming" target="_blank">
                    <img src="/assets/icons/socials/youtube.svg" alt="YouTube" />
                </a>

                <a href="mailto:mail@lanzoor.dev">
                    <img src="/assets/icons/socials/email.svg" alt="Email" />
                </a>
            </div>

            <footer>© 2026 | Lanzaforge</footer>
        </div>
    </section>
</section>

<style lang="css">
    @layer component {
        :root {
            --footer-panel-bg: radial-gradient(circle at 50% -25%, #22054d 0%, #000 100%);
        }

        #footer-panel {
            padding: auto 10%;
            background: var(--footer-panel-bg);
            border-top: 3px solid rgba(133, 91, 224, 0.5);

            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            gap: 2%;

            font-family: 'JetBrains Mono';
        }

        #footer-panel section {
            width: 100%;
        }

        #footer-panel #navigation {
            padding: 4% 10%;
            border-bottom: 3px solid rgba(133, 91, 224, 0.5);
        }

        #footer-panel #navigation #navigation-links {
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: center;
            flex-wrap: wrap;

            gap: 6em;
        }

        #footer-panel #navigation #navigation-links .group {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            gap: 5px;
        }

        #footer-panel #navigation #navigation-links .group h2 {
            margin: 0.25em 0 0.5em 0;
            font-family: 'JetBrains Mono';
            font-size: 30px;

            color: rgb(123, 61, 255);
        }

        #footer-panel #navigation #navigation-links a {
            display: inline-block;

            color: #bbb;
        }

        #footer-panel #navigation #navigation-links a:hover {
            color: #eee;
            text-decoration: none;
        }

        #footer-panel #footer {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            width: 100%;
        }

        @media (max-width: 768px) {
            #footer-panel #footer {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: center;
                gap: 1em;
            }

            #footer-panel #footer footer {
                align-self: flex-end;
            }
        }

        #footer-panel #connections {
            display: flex;
            flex-direction: column;
        }

        #footer-panel #connections {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            gap: 0.75em;
        }

        #footer-panel #connections img {
            width: 1.75em;
            height: 1.75em;
            opacity: 0.6;

            transition: 0.5s ease;
        }

        #footer-panel #connections img:hover {
            opacity: 1;
        }

        #footer-panel #footer footer {
            opacity: 0.75;
        }

        @media (max-width: 1080px) {
            #footer-panel #navigation #navigation-links {
                flex-wrap: wrap;
            }

            #footer-panel #footer footer {
                font-size: 0.75em;
            }
        }
    }
</style>
