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
    <section class="enable-initial-padding fixed-bg centered" id="welcome--intro">
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
    :root {
        --logo-font-size: 100px;
    }

    #welcome--intro .logo {
        min-height: calc(var(--logo-font-size) * 1.5);
    }

    #iris-background {
        background-image: url('/assets/backgrounds/iris.jpg');
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;
    }

    #welcome--intro {
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

    #welcome--intro header .logo {
        font-size: var(--logo-font-size);
        user-select: none;
        position: relative;
    }

    #welcome--intro header .logo::after {
        position: absolute;
        left: auto;
        bottom: 4px;
        content: '_';
        animation: cursorBlink 1s none infinite;
    }

    #welcome--profile {
        background: black;
    }

    #welcome--profile #name {
        background:
            radial-gradient(circle at 20% 30%, rgba(104, 4, 192, 0.25), transparent 40%),
            radial-gradient(circle at 80% 70%, rgba(0, 100, 255, 0.2), transparent 50%),
            radial-gradient(circle at 50% 50%, #02010a, #000 80%);
    }

    #welcome--profile #name-display {
        user-select: none;

        height: 750px;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        transition: all 0.5s ease;
        position: relative;
        overflow: hidden;
    }

    #welcome--profile #name-display #lanzoor-letters span {
        font-family: 'Geist';
        font-style: italic;
        font-weight: 200;
        font-size: 4%;
        color: white;

        text-shadow: 0 0 20px rgb(121, 137, 255);

        line-height: 1;
        white-space: nowrap;
        display: inline-block;
        transform-origin: center;
    }

    #welcome--profile #name-display #optimization-indicator {
        position: absolute;

        left: 2%;
        bottom: 2%;
        opacity: 0;

        transition: opacity 0.5s ease;
    }

    #welcome--profile #name-display #optimization-indicator.active {
        opacity: 0.6;
    }

    #welcome--profile #name-display button {
        position: absolute;

        padding: 20px 40px;
        border-radius: 999px;

        right: 2%;
        bottom: 2%;

        font-family: 'JetBrains Mono';
        font-size: 20px;

        color: white;
        border: none;
        cursor: pointer;

        background: linear-gradient(135deg, #7b00ffaa, #008cffaa);
        background-size: 200% 200%;
        backdrop-filter: blur(4px);

        box-shadow: 0 0 20px rgba(87, 41, 255, 0.5);
        animation: floatAnimation ease-in-out 2s infinite;

        transition: all 0.2s ease;

        z-index: 101;
    }

    #welcome--profile #name-display button:hover {
        background-position: right center;
        box-shadow: 0 0 20px rgba(0, 212, 255, 0.5);
    }

    #welcome--profile #name-display button:active {
        transform: scale(0.8);
        box-shadow:
            0 0 10px rgba(123, 0, 255, 0.6),
            inset 0 0 10px rgba(0, 0, 0, 0.6);
    }

    #welcome--profile #name-display canvas {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 0;
    }

    #welcome--profile #profile-wrapper {
        max-width: 30%;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        text-align: center;
    }

    #welcome--profile #profile-picture {
        max-width: 50%;
        max-height: auto;
    }

    #welcome--profile #hobbies #programming {
        background:
            radial-gradient(circle at top left, rgba(0, 195, 255, 0.1) 0%, transparent 30%), black;
    }

    #welcome--profile #hobbies #programming .stack-group {
        background: #111;
        border: 3px solid #333;
        border-radius: 30px;
        padding: 3%;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    }

    #welcome--profile #hobbies #programming .stack-group .stack {
        background: #222;
        border: 3px solid #666;
        border-radius: 30px;

        margin: 1%;
        padding: 3%;
    }

    .stack-group .stack .header {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        gap: 20px;
    }

    @media (max-width: 768px) {
        #welcome--intro {
            backdrop-filter: none;
        }

        #welcome--intro #buttons {
            flex-direction: column;
            margin: 100px 0;
        }

        #welcome--profile #name-description {
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            gap: var(--div-padding);
        }

        #welcome--profile #profile-wrapper {
            max-width: none;
        }

        #connections #social-icons {
            gap: 5px;
        }

        .social-icon {
            width: 40px;
            height: 40px;
        }
    }

    @media (max-width: 1080px) {
        :root {
            --logo-font-size: 50px;
        }

        #welcome--profile #name-display {
            height: 500px;
        }

        #welcome--profile #nationality #localtime-clock {
            padding: 4%;
            margin: 4% 0;
        }
    }
</style>
