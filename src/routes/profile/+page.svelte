<script lang="ts">
    const profileDesc = 'very cool profile image of my original character Iris';
    const timeFormatter = new Intl.DateTimeFormat('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
        timeZone: 'Asia/Seoul',
    });

    const dateFormatter = new Intl.DateTimeFormat('en-US', {
        month: 'short',
        day: 'numeric',
    });

    const formatTime = () => timeFormatter.format(new Date()).toUpperCase();
    const formatDate = () => dateFormatter.format(new Date());

    let time = $state(formatTime());
    let date = $state(formatDate());

    const interval = setInterval(() => {
        time = formatTime();
        date = formatDate();
    }, 1000);

    $effect(() => {
        return () => clearInterval(interval);
    });
</script>

<svelte:head>
    <title>Welcome! | lanzoor.xyz</title>
</svelte:head>

<section id="intro-bg" class="disable-padding disable-initial-padding">
    <section id="intro" class="enable-initial-padding">
        <div class="header">
            <img
                class="profile"
                src="/assets/contributors/iris-modern.png"
                alt={profileDesc}
                title={profileDesc}
            />

            <div class="name-group">
                <div class="name">Lanzoor</div>

                <div class="handle">@lanzoor</div>
            </div>
        </div>

        <div class="tags">
            <span class="tag">he/him</span> ⬩ <span class="tag">korean</span> ⬩
            <span class="tag">programmer</span>
            ⬩ <span class="tag">languages</span>
            ⬩ <span class="tag">science</span>
        </div>

        <div class="description">
            <b>hii, my name is Lanzoor!!</b><br />
            i'm just a random student from Korea who enjoys creating things, solving interesting problems,
            and learning something new every day.<br />
            i'm obsessed with programming, learning languages, science and anime :)<br />
        </div>
    </section>
</section>

<section id="bio">
    <h1><span class="col bright yellow">[ 01 ]</span> names</h1>

    <p>
        <b>
            I go by the name of Lanzoor, which is pronounced
            <span class="ipa">/lɑn.ˈzoʊɹ/</span>.
        </b>
        <br />
        I just randomly thought of it when I was young or something.
    </p>

    <p>
        If you're close to me, feel free to call me Lanzy (<span class="ipa">/ˈlæn.ziː/</span>) or
        lan lan man.<br />
        I also have a lot of aliases, such as Lapis Lazuli
        <span class="ipa"> /ˈlæpɪs læˈzʊliː/ </span> and Praseodymium Crystal.
    </p>

    <h1><span class="col bright yellow">[ 02 ]</span> nationality & location</h1>

    <p>
        <b>I am from South Korea 🇰🇷!</b>
        I currently live at 📍 Yongin-si, Gyeonggi-do.
    </p>

    <p>
        <b
            >We use the glorious GMT+9 <span class="dim">(KST, Korean Standard Time)</span> timezone.</b
        ><br />
        It is currently <b>{time}</b>, <b>{date}</b> in my location! Feel free to send me messages whether
        I'm online or not.
    </p>

    <h1><span class="col bright yellow">[ 03 ]</span> personality & meta</h1>

    <p>
        <b>My MBTI type is INTP.</b><br />
        I am introverted unless I'm online. I like understanding how things work and creating my own tools.<br
        />
        I have social anxiety and chronic depression. I show symptoms associated with ADHD, OCD, and potentially
        autism.
    </p>

    <p>
        <b>My general rule is simple: if you respect me, I will respect you.</b><br />
        I enjoy talking with people who are open-minded and willing to have genuine conversations. Please
        do not talk to me if all you do is ragebaiting and making fun of me.
    </p>
</section>

<section id="tech-bg" class="disable-padding">
    <section id="tech">
        <h1>Tech</h1>

        <p>I'd been fascinated by computers since I was around nine years old.</p>

        <h1>🖥️ Programming</h1>

        <p>
            <b
                >Programming always has been my favorite hobby, and also the hobby that I'm the most
                passionate about.</b
            ><br />
        </p>

        <p>
            Although I loved programming ever since I was around ten years old,
            <b>
                it wasn't until <span class="col bright green">late 2024</span>
                that I actually started taking programming seriously.
            </b><br />
            <b>Since then, it's become one of the things I spend the most time doing.</b>
        </p>

        <h2>🌐 Web Development</h2>

        <p>
            <b>Most of my projects are web-based because I love how accessible the web is.</b> If
            someone has a browser, <i>they can use what I build instantly.</i> That makes it the perfect
            platform for experimenting with ideas.
        </p>

        <h3>Frameworks</h3>

        <div class="stacks">
            <div class="stack svelte">SvelteKit</div>
            <div class="stack next">Next.js</div>
        </div>

        <h3>Languages</h3>

        <div class="stacks">
            <div class="stack svelte">Svelte</div>
            <div class="stack react">React</div>
            <div class="stack js">JavaScript</div>
            <div class="stack ts">TypeScript</div>
            <div class="stack css">CSS</div>
            <div class="stack html">HTML</div>
            <div class="stack php">PHP</div>
        </div>

        <p>
            I have experience with <span class="col bright green">frontend</span> development. I
            primarily use
            <b class="col bright red">SvelteKit</b>
            for new web projects, although I also have experience with
            <b>Next.js</b>.<br />
        </p>

        <p>
            I also have experience with <span class="col bright orange">backend</span> development as
            well.
        </p>

        <h2>🖥️ General Programming</h2>

        <div class="stacks">
            <div class="stack python">Python</div>
            <div class="stack c">C</div>
            <div class="stack rust">Rust</div>
        </div>

        <p>
            <b
                >I usually write scripts in <span class="col bright blue">Python</span>, since it
                suits me well.</b
            >
            I have made a few CLI, TUI and GUI programs using Python before, and I have experience with
            most general libraries.<br />
            Nowadays, though, I use Python to automate repetitive tasks. (e.g. making backups, running
            long commands repeatedly)
        </p>

        <h3>Scripting</h3>

        <div class="stacks">
            <div class="stack bash">Bash</div>
            <div class="stack zsh">Zsh</div>
        </div>

        <h3>Others</h3>

        <p>
            <b
                >I use <span class="col bright purple">EndeavourOS</span> + a custom modification of
                <span class="col blue">VSCodium</span>
                for programming.</b
            >
        </p>

        <h1>🔐 Cybersecurity</h1>

        <p>
            Over time, my curiosity about how computers work naturally expanded into networking and
            cybersecurity. Rather than focusing solely on writing software, I also enjoy
            understanding how systems communicate, where they can fail, and how they can be secured.
        </p>

        <h2>Interests</h2>

        <div class="stacks">
            <div class="stack">Networking</div>
            <div class="stack">OSINT</div>
            <div class="stack">OPSEC</div>
        </div>

        <p>
            I enjoy learning about the principles that make the Internet work, which is why
            networking fascinates me so much. I'm also really interested in OSINT and operational
            security.
        </p>
    </section>
</section>

<style lang="css">
    #intro-bg {
        background-image: url('/assets/backgrounds/strawberry-jam.jpg');
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;
    }
    #intro {
        background: rgba(0, 0, 0, 0.75);
    }

    #intro .header {
        text-align: center;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 2em;
    }

    #intro .header .profile {
        max-width: 7.5em;
        max-height: 7.5em;
        border-radius: 2147483647em;
    }

    #intro .header .name-group {
        text-align: left;
    }

    #intro .header .name-group .name {
        position: relative;
        color: white;
        text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
        font-size: 2.5em;
        cursor: pointer;
    }

    #intro .header .name-group .name::after {
        content: '';
        position: absolute;

        left: 0;
        bottom: 2px;
        height: 0.06em;
        background: white;

        width: 0%;
        opacity: 0;
        transition: 0.5s ease;
    }

    #intro .header .name-group .name:hover::after {
        width: 100%;
        opacity: 1;
    }

    #intro .header .name-group .handle {
        color: rgba(255, 255, 255, 0.75);
        text-shadow: 0 0.5em 10px black;
    }

    #intro .description {
        padding: 0 5%;
    }

    #intro .tags {
        text-align: center;
        font-size: 1.2em;
    }

    #intro .tags .tag {
        opacity: 0.5;
        text-shadow: 0 0 10px rgba(255, 255, 255, 0.75);
        transition: 2s ease;
    }

    #intro .tags .tag:hover {
        opacity: 1;
        letter-spacing: 0.1em;
        cursor: pointer;
        transform: scale(1.1);
        transition: 0.5s ease;
    }

    #bio > h1 {
        font-size: 1.5em;
    }

    #bio > h1 .col {
        font-size: 1.25em;
    }

    #tech-bg {
        background-image: url('/assets/backgrounds/vscodium.png');
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;
    }

    #tech {
        background: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(2px);
    }

    .stacks {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        flex-wrap: wrap;
        gap: 1.5em;

        padding: 0 2em;
        text-shadow: 0 0 20px oklch(from currentColor calc(l * 0.7) calc(c * 2) calc(h + 10));
    }

    .stacks .stack {
        font-family: 'JetBrains Mono';

        background: transparent;
        color: white;

        padding: 0.25em 1em;
        font-size: 1.25em;
        letter-spacing: 0.15em;
        font-weight: 400;

        transition: 500ms ease;
    }

    .stacks .stack::before {
        content: '[ ';
    }

    .stacks .stack::after {
        content: ' ]';
    }

    .stacks .stack:hover {
        background: rgba(255, 255, 255, 0.1);
        box-shadow: 0 10px 20px rgba(255, 255, 255, 0.1);
        letter-spacing: 0.2em;
        cursor: pointer;
    }

    .stacks .stack.svelte {
        color: #ff3e00;
    }
    .stacks .stack.react {
        color: #61dafb;
    }
    .stacks .stack.js {
        color: #f7df1e;
    }
    .stacks .stack.ts {
        color: #017acb;
    }
    .stacks .stack.css {
        color: #264de4;
    }
    .stacks .stack.html {
        color: #e44d26;
    }
    .stacks .stack.php {
        color: #6e81b6;
    }
    .stacks .stack.python {
        color: #387eb8;
    }
    .stacks .stack.c {
        color: #5c6bc0;
    }
    .stacks .stack.rust {
        color: #a04f12;
    }
</style>
