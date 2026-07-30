<svelte:head>
    <title>Welcome! | lanzoor.dev</title>

    <meta property="og:title" content="lanzoor.dev" />
    <meta
        property="og:description"
        content="A website by Lanzoor, including projects, showcases, documents, and more!"
    />
    <meta property="og:url" content="https://lanzoor.dev" />
    <meta property="og:type" content="website" />
    <meta name="theme-color" content="#6f27f5" />
</svelte:head>

<section class="disable-initial-padding no-padding" id="iris-background">
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
                I'm
                <i class="col bright purple">Lanzoor</i>, a student from
                <span class="col bright blue">South</span>
                <span class="col bright red">Korea</span> who likes
                <span class="col green">programming</span>,
                <span class="col cyan">science</span>,
                <span class="col blue">languages</span> and more.<br />

                You'll find projects, showcases, tools, and more.
            </p>
        </header>

        <p>
            <b>
                Make yourself at home, explore things at your own pace and
                <span class="col bright purple">have fun!</span> ♥
            </b>
        </p>

        <blockquote class="warning">
            <b class="col bright yellow"> This site is still under construction! </b><br />

            You will often stumble upon
            <span class="col bright red">incomplete or broken</span> pages / features.<br />

            <b class="col bright cyan">Thank you for your understanding!</b>
        </blockquote>
    </section>
</section>

<style lang="css">
    #iris-background {
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
        height: 1em;

        user-select: none;
        position: relative;
        line-height: 0;
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

    #intro header .logo::after {
        position: absolute;
        left: auto;
        content: '_';
        animation: cursorBlink 1s none infinite;
    }
</style>
