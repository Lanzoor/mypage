<script lang="ts">
    import { onMount } from 'svelte';
    import defaultIcon from './assets/default.png';
    import antiJPA from './assets/anti-jpa-icon.png';
    import jeis from './assets/jeis.jpg';
    import nhgs from './assets/nhgs.jpg';
    import jpaGif from './assets/jpa.gif';
    import purplePenrose from './assets/purple_penrose.webp';
    import lanzoor from './assets/iris-modern.png';

    onMount(() => {
        console.log('content loaded idk 🐎');

        const urlButton = document.querySelector('#copy-url button');
        const url = 'https://www.lanzoor.dev/projects/anti-JPA';

        if (!urlButton) return;

        urlButton.addEventListener('click', async () => {
            urlButton.textContent = 'Copy';
            try {
                await navigator.clipboard.writeText(url);

                urlButton.textContent = 'Copied!';

                setTimeout(() => {
                    urlButton.textContent = 'Copy';
                }, 2000);
            } catch (err) {
                console.error('oh fawk', err);
            }
        });
    });
</script>

<svelte:head>
    <title>Anti-JPA Project | lanzoor.dev</title>

    <meta property="og:title" content="Anti-JPA Project" />
    <meta
        property="og:description"
        content="Pointing out the issues within the Japanese Academy server in detail"
    />
    <meta property="og:url" content="https://lanzoor.dev/anti-JPA/" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content={antiJPA} />
    <meta name="theme-color" content="#ff0000" />
</svelte:head>

<div class="section anti-jpa--intro">
    <div id="introduction">
        <h1>Hello there! 👋</h1>

        <p>
            If you are a member of the server called <b>Japanese Academy</b>, and
            <b>especially if you're <i>planning</i> to join this server</b>,
            <b>please consider reading through this document.</b>
            It won't take long, and you will be able to learn <i>way more</i> about this server than what
            most people tell you.
        </p>
    </div>

    <div id="context">
        <div id="jpa-info">
            <h1>Japanese Academy</h1>

            <hr />

            <p>
                <span class="dim">
                    The name of this server is subject to change. <b
                        >Henceforth mentioned as <i>the JPA server</i>.</b
                    >
                </span><br /><br />

                <b>This server is one of the most popular Japanese learning servers out there,</b>
                with <i>over 75 thousand members</i> as of now. If you search up the term "Japanese"
                on Discord, <b>this server will be the first server to show up.</b>
                This server presentes itself as <i>the best Japanese learning server</i>, and is
                <i>"a tight-knit community about learning Japanese."</i>
            </p>
        </div>

        <div id="jpa-gallery">
            <img src={jpaGif} />

            <hr />

            <p>The server icon of JPA (Japanese Academy).</p>
        </div>
    </div>

    <div id="ominous-header">
        <h1><i>However,</i> there's just one problem...</h1>
    </div>
</div>

<div class="section anti-jpa--truth">
    <div id="warning-separator">
        <div id="header">
            <h1>⚠ This server is <i>not</i> what it claims to be. ⚠</h1>
        </div>

        <hr />

        <p id="identity-crisis">
            <b
                >This server fails to be a helpful Japanese learning server, <i
                    >but there's more to the story.</i
                ></b
            ><br />
            I'm here to <b>let you know about these issues,</b> suggest any potential solutions to
            those issues, and document anything necessary.<br /><br />
            <span id="lets-go"><i>So, let's start! </i></span>
        </p>
    </div>
</div>

<div class="section anti-jpa--explanation intro">
    <h1>📚 Explanation 📖</h1>

    <p>
        <b>I hate yapping, and you hate reading.</b> That's a fact.<br />
        <b>Feel free to read whichever part you find interesting first.</b>
        <i>Please do not force yourself to read the whole thing.</i><br />
        <span class="dim">
            This document reflects my personal experience, shared opinions and observations. All
            information is presented to the best of my knowledge and is not intended as a personal
            attack.
        </span>
    </p>
</div>

<div class="section anti-jpa--explanation learning">
    <h1>📕 This server is <i>NOT</i> a Japanese learning focused server. ❌</h1>

    <hr />

    <p>
        <span class="dim"> This section applies to newcomers and Japanese learners. </span><br />

        <b>Pretty ironic, right?</b>
        Although this server is supposed to be <i>the</i> most famous Japanese learning server,
        <i>it definitely lacks support</i> for those who are either newcomers or trying to learn
        Japanese.
        <b>There are several factors that determine this result.</b>
    </p>

    <div class="learning-sections">
        <div class="learning-section">
            <h2>🌸 This server is not learning-focused. 🌸</h2>

            <b>
                Yes, this server is definitely not learning-focused. The server is misleading to
                members who join for learning.
            </b><br /><br />

            A vast majority of people in this server are rather active in
            <code>#general-social</code>
            instead, and are mostly here to casually talk with others rather than study or exchange knowledge
            about the language itself.
            <b>Most people use study channels as alternative general channels,</b>
            and I wish that unspoken rules like these were clearly stated.
            <i
                >This often leads to confusion or rather awkward situations when you try ask for
                help in the study channels.</i
            ><br /><br />

            <b
                >While this kind of environment can certainly be enjoyable for socializing and
                meeting new people,</b
            >
            it unfortunately means that
            <b>learning opportunities are quite limited.</b>
            Since only a few people actually have experience with Japanese,
            <b>you have a small chance of getting actual help.</b><br /><br />

            Not to mention that
            <b>most of the helpful features are located WAYY below most channels.</b>
            <span class="dim">(refer to the argument stated below)</span>
            Although this server is supposed to be <i>THE</i> Japanese learning server,
            <b
                >there are only a few channels where you can actually express yourself in Japanese
                or study.</b
            >
            <i
                >Not only that, but
                <b>there is no clear language exchange system.</b></i
            >
            This means that when you ask for language exchange partners in the server,
            <b>it can come across as if you're running a scam.</b> Most smaller Japanese learning servers
            manage to implement this system way nicer.
        </div>

        <div class="learning-section">
            <h2>🌸 The helpful features are made to be somewhat confusing. 🌸</h2>

            <b
                >We, <span class="dim">(and most people,)</span> believe that any "lock" systems should
                be used as an optional verification.</b
            >
            If a lock is used to prevent people from entering important channels or using features,
            <i>it just adds more confusion.</i>
            However, for some reason, a vast majority of helpful features of this server are
            <b>locked behind some inconvenient lock systems</b>
            that <i>aren't clearly or properly stated.</i><br /><br />

            <b
                >The server expects everyone to explore every channel in the server to unlock
                features.</b
            >
            This means that it would be really difficult for most members to figure out these features,
            since not everyone is willing to visit <b>every channel</b> in a server to find small
            details. For example, the message permissions within the
            <b>advanced Japanese proficiency channel</b>,
            <i>as well as the embed permissions,</i>
            is locked behind a test inside the <code>#exam-room</code> channel. Not only is this confusing,
            but also drives away newcomers from uncovering the full potential of this server.
        </div>

        <div class="learning-section">
            <h2>🌸 Then, how can we fix this issue? 🌸</h2>

            <h3>Clearly define boundaries between study and social areas</h3>

            <i
                >Organizing channels to clearly separate social interaction and studying may help
                reduce confusion.</i
            >

            <h3>
                Improve visibility of learning-related features, and reconsider channel placement
            </h3>

            Making important features and study channels more accessible could improve the overall
            experience. If certain systems (such as tests or unlockable permissions) are required,
            clearly guiding users through them would reduce confusion.

            <h3>Implement a clear language exchange system</h3>

            Pretty self-explanatory if you ask me! Feel free to look at other smaller servers, and
            how they implement this system.
        </div>
    </div>
</div>

<div class="section anti-jpa--explanation welcoming">
    <h1>🚪 Newcomers aren't properly welcomed here. 🫷</h1>

    <hr />

    <p>
        <span class="dim">This section applies to newcomers.</span><br />
        There are <b>several</b> issues that newcomers tend to encounter when trying to engage with the
        community.
    </p>

    <div class="learning-sections">
        <div class="learning-section">
            <h2>Have you ever heard of the Matthew Effect?</h2>

            <p>
                The <a href="https://en.wikipedia.org/wiki/Matthew_effect" target="_blank"
                    >Matthew Effect</a
                >
                states that
                <b
                    >those who are already well-known continue to receive more attention 📈, while
                    newcomers often struggle to be noticed. 📉</b
                >
                Over time, this creates an environment where the same familiar individuals dominate conversations,
                while
                <b
                    >new members find it increasingly difficult to enter ongoing discussions or gain
                    visibility.</b
                >
            </p>
        </div>

        <div class="learning-section">
            <h2>How it affects JPA</h2>

            <b
                >I believe this server is an <i>exceptionally strong example</i> of the Matthew Effect
                in action.</b
            >
            Once someone becomes a recognizable or active member of the community, their messages are
            far more likely to receive responses and engagement. Sure,
            <b>some people will indeed try to welcome you.</b>
            However, this is not guaranteed, and they are doing this in order to try and "fix" the Matthew
            effect by themselves.
            <i>However, it is simply too late for this issue to be fixed.</i>
            Many newcomers may find themselves being ignored often.
            <b
                >This usually applies to most channels in the server, even including Japanese
                conversation channels.</b
            >
        </div>

        <div class="learning-section">
            <h2>Shaping oneself</h2>

            <b>The community clearly expects people to shape and use a recognizable personality</b>
            in order to become noticed in the server. For newcomers,
            <b>this expectation can be confusing.</b>
            Many people join with the intention of having casual conversations, asking questions, or simply
            interacting naturally with others. However, when attention and engagement concentrates around
            already recognizable personalities,
            <b>newcomers may struggle to find their place in the discussion.</b>
            As a result, newcomers may feel overlooked or uncertain about how they're expected to behave
            in order to participate meaningfully in the community.
        </div>

        <div class="learning-section">
            <h2>Then, how can we fix this issue?</h2>

            <h3>Create more accessible and engaging server events</h3>

            There are already several well-designed server events in place.
            <b>So, why not build off of that idea?</b>
            Expanding on these and making them more accessible to newcomers could help create a more welcoming
            and interactive environment.

            <h3>Encourage clearer and more consistent onboarding for newcomers</h3>

            Encouraging members to properly welcome and guide newcomers could significantly improve
            the first impression of the server. Simple actions, such as greeting new members or
            directing them to relevant channels, may help reduce confusion and make the environment
            feel more supportive.
        </div>
    </div>

    <hr />

    <p>
        <b>Here is a visual example of the Matthew Effect in place.</b><br />
        <i class="dim">
            ⚠ The example below is completely made-up. Any similarity to real messages or
            conversations is
            <b>purely coincidental.</b><br />
            ⚠ This example is NOT intended to blame newcomers or well-known server members in any way.
            Instead, it aims to demonstrate situations that newcomers may encounter when joining a server
            where the Matthew Effect strongly influences conversations and attention.
        </i>
    </p>

    <p>
        The <i>left</i> example shows a <b>newcomer</b> trying to engage in an ongoing conversation,<br
        />
        and the <i>right</i> example shows a <b>well-known server member</b> 〃.
    </p>

    <div class="vertical-grid">
        <div class="matthew-example">
            <b>User A</b>:<br />
            wait you also program?<br />
            <b>User B</b>:<br />
            yuh! i use HTML, CSS, javascript and some other niche languages, wbu?<br />
            <b>User C</b>:<br />
            I always wanted to program. I don't have time nowadays, though. ;-;<br /><br />

            <b>Newcomer 🍀</b>:<br />
            Hello everyone! 👋<br /><br />

            <span class="dim">(no response)</span><br /><br />

            <b>User A</b>: <i>↪ Replying to User B</i><br />
            i use typescript, javascript is kinda old tbhh<br />
            <b>User B</b>: <i>↪ Replying to User C</i><br />
            yeaa you totally should! it gets rlly fun once you get the hang of it, trust me bro<br
            /><br />

            <b>Newcomer 🍀</b>:<br />
            How is everyone doing today?<br /><br />

            <span class="dim">(no response)</span><br /><br />

            <b>User C</b>:<br />
            Anyways, what's everyone's favorite programming language?<br />
            <b>User B</b>: <i>↪ Replying to User C</i><br />
            i frickin love javascript bro<br />
        </div>

        <div class="matthew-example">
            <b>User A</b>:<br />
            wait you also program?<br />
            <b>User B</b>:<br />
            yuh! i use HTML, CSS, javascript and some other niche languages, wbu?<br />
            <b>User C</b>:<br />
            I always wanted to program. I don't have time nowadays, though. ;-;<br /><br />

            <b>User D</b>:<br />
            hi yall!<br /><br />
            <b>User B</b>: <i>↪ Replying to User D</i><br />
            YOOOOOOO hru doingg<br /><br />
            <b>User A</b>: <i>↪ Replying to User B</i><br />
            i use typescript, javascript is kinda old tbhh<br />
            <b>User D</b>: <i>↪ Replying to User B</i><br />
            yaa im doing great, wbuu<br /><br />

            <b>User C</b>:<br />
            By the way, what's everyone's favorite programming language?<br />
            <b>User B</b>: <i>↪ Replying to User D</i><br />
            im doing great!! i have a headache thoo<br />
            <b>User B</b>: <i>↪ Replying to User C</i><br />
            brooo i love javascript<br />
            <b>User A</b>: <i>↪ Replying to User B</i><br />
            u ok???<br />
            <b>User D</b>: <i>↪ Replying to User B</i><br />
            i'm sorry to hear that.. try to take rests mann!!<br />
        </div>
    </div>
</div>

<div class="section anti-jpa--explanation moderation">
    <div class="moderation-container">
        <span id="moderation-symbol">🛠</span>
    </div>

    <div class="header">
        <h1>🔨 The moderation team is disrespectful. 🔧</h1>
    </div>

    <p>
        <span class="dim">This section applies to <i>all members.</i></span><br />
        <b>What do you think is the most important factor that makes a server engaging?</b> Is it
        the members, the channel structure, or the rules? While all of these are certainly
        important, I believe that
        <b
            >the moderation team is one of the most important factors in shaping how engaging a
            server truly feels.</b
        ><br /><br />

        Plus,
        <b
            >members shouldn't feel constantly pressured or anxious about accidentally breaking
            rules.</b
        >
        When rules are enforced in an strict way, people may feel the need to
        <i>constantly</i> monitor everything they say. Instead of encouraging discussion, this can
        make conversations feel tense and unnatural. A welcoming community is one where moderation
        maintains order while still allowing members to relax, express themselves, and interact
        freely.<br /><br />
    </p>

    <div class="learning-sections">
        <div class="learning-section">
            <h2>Acting weak to the "strong" ones, and vice versa</h2>

            <b
                >The moderation team often tends to act in a cautious way toward the "strong"
                members while being blunt or strict toward the "weak" members.</b
            ><br /><br />

            <b>Moderators hesitate to punish or confront the "strong" members of the community.</b>
            For example, <i>active members</i> or <i>well-known server members</i> may fall into
            this category. The reason is simple:
            <b>they do not want to disrupt the atmosphere of the server.</b>
            <b
                >I have seen some examples of "strong" server members get no response from the
                moderation, even when they had broken several rules directly.</b
            ><br />
            For example,
            <i
                >I've even seen a "strong" server member send death threats toward one of my
                friends,</i
            >
            in the general channel, and
            <b>still managed to walk away from the situation without any trouble.</b><br /><br />

            <i>Meanwhile,</i> the moderation team tends to show <i>minimal hesitation</i> when
            punishing or confronting the "weak" members of the community. This often includes
            <i>newcomers</i>, <i>less recognizable members</i>, or even
            <i
                ><u>anyone who simply appears easier to challenge</u>, regardless of their status as
                a role in the server.</i
            >
            <b>In these situations, <u>moderation becomes immediate and direct.</u></b>
            Not to mention that
            <b>these decisions are mostly <i> biased toward certain individuals.</i></b><br />
            For example,
            <i
                >I have seen a "weak" member of the server get <b>permanently</b> banned after repeatedly
                moving between voice channels quickly,</i
            > <span class="dim">(they weren't even active ones)</span>
            which felt inappropriate compared to the behavior.
        </div>

        <div class="learning-section">
            <h2>Remaining vague</h2>

            <b
                >In some situations, the moderation team does not provide clear explanations for
                their decisions.</b
            >
            When I was trying to appeal a punishment while directly confronting the moderators, responses
            tended to be brief, unclear, or lack specific references to the rules that were broken.
            <i
                >This can make it difficult for members to understand what they did wrong or how to
                avoid similar issues in the future.</i
            >
            <b
                >Clear and respectful communication is especially important during moderation
                actions.</b
            >
            Without it, members may feel confused or discouraged, even if the original decision was justified.
            <b><i>This issue is most likely directly related to the issue stated above.</i></b>
        </div>

        <div class="learning-section">
            <h2>Then, how can we fix this issue?</h2>

            <h3>Improve consistency and <span class="dim">transparency</span> in moderation</h3>

            Ensuring that moderation actions are applied consistently and clearly communicated could
            help create a more predictable and fair environment. Providing explanations for major
            actions, when appropriate, may also help members better understand decisions and
            expectations.

            <h3>Maintain a respectful and professional tone during moderation</h3>

            When addressing rule violations, maintaining a calm and respectful tone may help
            de-escalate situations and encourage more constructive interactions.<i
                >Remember that they are still humans, and they deserve to be treated how you want to
                be treated.</i
            >
            <b
                >Approaches like this can make moderation feel more approachable while still
                enforcing rules effectively.</b
            >
        </div>
    </div>
</div>

<div class="section anti-jpa--actions">
    <div id="tragedy">
        <h2>So, what can I do?</h2>

        <p>
            Since this server is already quite large,
            <i>there are limits to what can be done or fixed.</i><br />

            <b>However...</b> there are still few small ways to contribute.<br />
            That's right. <i>If you're interested,</i> you can follow the steps below to spread awareness.
        </p>
    </div>

    <div id="actions">
        <div class="action">
            <b>1. Share this website with others</b><br />

            <hr />

            Spreading awareness of the situation by itself makes a<i>HUGE</i> difference.<br />
            It can be anyone. Japanese learners, JPA members, or even the moderators.<br />
            <b
                >It helps guide new members and learners in the right direction, while also
                preventing future issues.</b
            ><br />
            <i><u>Even sharing it with just one person can have impact.</u></i> Two or three?
            <b>Even better.</b><br /><br />

            <div id="copy-url">
                <div>
                    <span class="dim">https://www.</span>lanzoor.dev/projects/anti-JPA
                </div>
                <button> Copy </button>
            </div>
        </div>
        <div class="action">
            <b>2. Leave honest reviews on DISBOARD</b><br />

            <hr />

            If you've had a negative experience, or simply want to spread awareness,<br />
            <b>you should definitely leave a review that reflects it!</b><br />
            <i
                >This feedback informs others about the situation, and helps others make better
                decisions.</i
            ><br /><br />

            You can do so by
            <a href="https://disboard.org/" target="_blank">logging in within DISBOARD</a>, and
            <a href="https://disboard.org/server/reviews/696438030189330482" target="_blank"
                >visit the server on DISBOARD</a
            >.<br />
            Click the <code>Review Japanese Academy</code> button, and leave your review.
        </div>

        <div class="action" id="leave-the-server">
            <b>3. Stop interacting with the server</b><br />

            <hr />

            If you don't want to be involved with this server or have had a negative experience,<b
                >consider reducing your interactions within the server,</b
            >
            and if necessary, <i>leaving the server altogether.</i><br /><br />

            <b>If you are a learner,</b> there are still many servers that are
            <i>actually focused on learning</i>
            and
            <i>welcome newcomers properly.</i> Here are some great alternatives:<br />

            <ol>
                <li>
                    <b>Japanese English International School/日英国際学校</b> (JEIS)

                    <hr />

                    I think this server does a really good job.<b
                        >There are lots of channels where newcomers can engage in, and the Matthew
                        effect is rather minimal.</b
                    >
                    Not only that, but there is a clear language exchange system in place,
                    <i>and there is no inconvenient "lock" systems in place.</i><br />

                    <div class="server-display">
                        <div class="profile">
                            <img src={jeis} />

                            <a href="https://discord.gg/jeis" target="_blank">
                                <button id="join-jeis"> Join JEIS -> </button>
                            </a>
                        </div>

                        <a href="https://disboard.org/server/280352295978270721" target="_blank">
                            View JEIS on DISBOARD ->
                        </a>
                    </div>
                </li>sss
                <li>
                    <b>日本語の全て | A Japanese Study Server</b>

                    <hr />

                    Although not large compared to other servers,<b
                        >the conversations here are chill and actually learning-focused.</b
                    >
                    It's a comfortable space where people can ask questions, share ideas, and improve
                    without feeling pressured.<br />

                    <div class="server-display">
                        <div class="profile">
                            <img src={nhgs} />

                            <a
                                href="https://discord.gg/ri-ben-yu-noquan-te-a-japanese-study-server-1129128196697231402"
                                target="_blank"
                            >
                                <button id="join-nhgs"> Join 日本語の全て -> </button>
                            </a>
                        </div>

                        <a href="https://disboard.org/server/1129128196697231402" target="_blank">
                            View 日本語の全て on DISBOARD ->
                        </a>
                    </div>
                </li>
            </ol>
        </div>

        <div class="action">
            <b>4. Suggest, give feedback, and point out issues directly to the moderation team</b
            ><br />

            <hr />

            If you are a member of the server,<b
                >you may consider sharing your concerns or suggestions with the moderation team in a
                respectful and constructive manner.</b
            >
            Clear and thoughtful feedback can help highlight areas for improvement.
        </div>
    </div>
</div>

<div class="section anti-jpa--ending">
    <h2>Now, I would like to spill some shared opinions™</h2>

    <p>Here are some unedited quotes from some of my friends that you may find interesting 🐎</p>

    <div id="quotes">
        <div class="quote">
            <img src={defaultIcon} />

            <div class="content">
                <i>“some mods are kinda rude to me though ngl”</i><br />
                - Anonymous User
            </div>
        </div>

        <div class="quote">
            <div class="content">
                <i>“They do everything except studies”</i><br />
                - Discord user <code>s*********</code>
            </div>

            <img src={defaultIcon} />
        </div>

        <div class="quote">
            <img src={defaultIcon} />

            <div class="content">
                <i
                    >“subtle favourism in moderation<br />
                    it's not really a good place to learn”</i
                ><br />
                - Anonymous User
            </div>
        </div>

        <div class="quote">
            <div class="content">
                <i
                    >“the server may be enjoyable for socializing so thats fine<br />
                    but like this server is literally anything but a study server 😭”</i
                ><br />
                - lanzoor
            </div>

            <img src={lanzoor} />
        </div>
    </div>

    <div id="cest-fini">
        <h1>Thank you for reading. <i>C'est fini.</i></h1>

        <p>
            If you've read all the way through, <span class="dim"
                >(even if you skipped to the bottom)</span
            >...
            <b>thank you.</b><br />
            Not everyone takes the time to look into things like this, and the fact that you did already
            sets you apart.<br />
            <b>Stay aware, stay thoughtful, and keep doing your part.</b> Have a wonderful day! 👋
        </p>
    </div>

    <footer>
        Feel free to <a href="/index.html#connections">get in touch</a> for any questions | concerns
        | issues!<br />
        Made by <code>lanzoor</code> with pure <b>HTML, CSS, JavaScript, and love</b> | ~March 1st ~
        March 27th

        <hr />

        <i>I did not use AI for this project at all.</i> If you choose not to believe that, that's
        honestly just your issue.<br />
        I literally spent about 4 weeks of my life constantly polishing this, and if you accuse me of
        using AI, that's just depressing, yk...
    </footer>
</div>

<style lang="css">
    body {
        font-size: 25px;
        margin-top: 0;
    }

    p {
        font-family: 'Geist';
        line-height: 1.6;

        margin: 0;
        padding: 0;
        background: none;
    }

    p:hover {
        background: none;
    }

    .anti-jpa--intro {
        background: linear-gradient(to bottom, #630266 0%, #0a000c 30%, #0a000c 75%, #4e011d 100%);
        padding: 200px 100px;
    }

    .anti-jpa--intro #introduction {
        text-align: left;
    }

    .anti-jpa--intro #introduction h1 {
        color: #ffd6ff;
        text-shadow: 0 0 12px #ff4fd8;
    }

    .anti-jpa--intro #ominous-header h1 {
        text-align: center;
        font-family: 'JetBrains Mono';
        font-size: 30px;
        margin: 60px 0;
        animation: headerGlow 6s ease infinite;
    }

    .anti-jpa--intro #ominous-header h1 i {
        display: inline-block;
        animation: evilGlow 6s ease infinite;
    }

    .anti-jpa--intro #context {
        background: radial-gradient(circle at bottom right, #4c0f66 0%, #120018 70%);
        border: 2px solid #b85cff;
        box-shadow: inset 0 0 25px black;
        border-radius: 30px;

        margin: 50px 0;
        padding: 40px 30px;

        display: flex;
        flex-direction: row;
        gap: 5%;
        justify-content: flex-end;
        align-self: flex-end;

        transition:
            transform 0.2s ease,
            box-shadow 0.2s ease;
    }

    .anti-jpa--intro #context:hover {
        box-shadow: inset 0 0 50px rgb(211, 86, 236);
    }

    .anti-jpa--intro #jpa-gallery {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 15px;

        margin: 0;
    }

    .anti-jpa--intro #jpa-gallery img {
        border: 5px solid rgb(255, 170, 170);
        box-shadow: 0 0 10px rgb(255, 170, 170);
        border-radius: 10px;

        width: 150px;
        height: 150px;

        animation: ominousGlow 6s ease infinite;
    }

    .anti-jpa--intro #jpa-info {
        margin: 0;
        text-align: right;
    }

    .anti-jpa--intro #jpa-info h1 {
        margin: 20px 0;
    }

    .anti-jpa--intro #jpa-info p {
        max-width: none;
    }

    .anti-jpa--truth {
        background: linear-gradient(
            to bottom,
            black 0%,
            black 50%,
            rgb(54, 1, 1) 75%,
            rgb(55, 1, 1) 100%
        );
        padding: 200px 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .anti-jpa--truth #header h1 {
        font-family: 'Space Grotesk';
        margin: 0;
        color: rgb(255, 98, 98);
        text-shadow: 0 0 10px rgb(168, 4, 4);
        animation: evilTextShadowVar2 4s ease infinite;
    }

    .anti-jpa--truth #header h1 i {
        font-family: 'Geist';
        display: inline-block;
        font-size: 80px;
        animation: evilGlow 4s ease infinite;
    }

    .anti-jpa--truth #header h2 {
        font-size: 30px;
        font-family: 'Geist';
        color: rgb(255, 183, 183);
        text-shadow: none;
    }

    .anti-jpa--truth #header h2 b,
    .anti-jpa--truth #header h2 i {
        display: inline-block;
        transition:
            transform 0.2s ease,
            color 0.2s ease;
    }

    .anti-jpa--truth #header h2 i {
        color: rgb(255, 0, 0);
        text-shadow: 0 0 10px rgb(255, 0, 0);
    }

    .anti-jpa--truth #header h2 b {
        color: rgb(255, 197, 197);
        text-shadow: 0 0 10px rgb(255, 0, 0);
    }

    .anti-jpa--truth #header h2 i:hover {
        color: red;
        transform: rotate(20deg) scale(1.1) scaleX(1.1);
    }

    .anti-jpa--truth #lets-go {
        font-family: 'JetBrains Mono';
    }

    .anti-jpa--truth #warning-separator {
        display: flex;
        flex-direction: column;

        width: 90vw;
        padding: 5%;

        border-radius: 30px;
        background: linear-gradient(to bottom, rgba(255, 40, 40, 0.05), rgba(255, 40, 40, 0.12));
        border: 2px solid rgb(156, 7, 7);
        box-shadow:
            0 0 40px rgba(255, 0, 0, 0.15),
            inset 0 0 30px rgba(255, 0, 0, 0.08);
    }

    #warning-separator #header {
        align-self: center;
    }

    #warning-separator #identity-crisis {
        align-self: flex-end;
        text-align: right;
        margin-top: 10px;
    }

    .anti-jpa--truth #lets-go::after {
        content: 'C’est parti.';
        display: inline-block;
        white-space: nowrap;
        max-width: 0;
        opacity: 0;
        font-style: italic;
        transition:
            max-width 0.3s ease,
            opacity 0.2s ease;
    }

    .anti-jpa--truth #lets-go:hover::after {
        max-width: 200px;
        opacity: 0.6;
    }

    .anti-jpa--explanation.intro {
        background:
            linear-gradient(
                120deg,
                rgb(47, 7, 115) 0%,
                transparent 40%,
                transparent 70%,
                rgb(2, 82, 81) 100%
            ),
            radial-gradient(circle at center, rgb(3, 31, 100) 0%, black 50%, black 100%);

        padding: 200px 50px;
    }

    .anti-jpa--explanation.learning {
        background: linear-gradient(to bottom, black 0%, rgb(98, 3, 49) 75%, rgb(164, 2, 67) 100%);
        padding: 100px;
    }

    .anti-jpa--explanation.learning h1 {
        color: rgb(255, 157, 214);
        text-shadow: none;
    }

    .anti-jpa--explanation.learning h2 {
        color: rgb(255, 147, 210);
    }

    .anti-jpa--explanation .learning-sections {
        margin: 60px 0;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 60px;
    }

    .anti-jpa--explanation .learning-sections .learning-section {
        padding: 30px;
        border-radius: 30px;
        background: rgba(0, 0, 0, 0.25);
        border: 5px solid rgba(255, 255, 255, 0.25);
        max-width: 75%;
    }

    .anti-jpa--explanation .learning-sections .learning-section:nth-child(even) {
        align-self: flex-end;
    }

    .anti-jpa--explanation .learning-sections .learning-section h3 {
        margin: 20px 0 30px 0;
    }

    .anti-jpa--explanation.welcoming {
        background: linear-gradient(to bottom, black 0%, rgb(35, 3, 98) 75%, rgb(76, 6, 174) 100%);
        padding: 100px;
    }

    .anti-jpa--explanation.welcoming h1 {
        color: rgb(139, 89, 255);
        text-shadow: none;
    }

    .matthew-example {
        background: linear-gradient(145deg, #130338, #27023d);
        border: 1px solid rgba(170, 120, 255, 0.35);
        border-radius: 10px;
        padding: 16px 18px;
        margin: 16px 0;

        color: #e3dcff;
        font-family: 'JetBrains Mono';
        font-size: 15px;
        line-height: 1.5;

        overflow-x: auto;

        box-shadow:
            0 0 14px rgba(170, 120, 255, 0.25),
            inset 0 0 10px rgba(170, 120, 255, 0.12);
    }

    .matthew-example img {
        margin: 20px 40px;
        max-width: 150px;
        border: 2px solid white;
        border-radius: 20px;
    }

    .vertical-grid {
        display: flex;
        flex-direction: row;
        gap: 20px;
        justify-content: center;

        margin: 40px 0;
    }

    .vertical-grid div {
        max-width: 40%;
    }

    .anti-jpa--explanation.moderation {
        background: linear-gradient(
            to bottom,
            rgb(76, 6, 174) 0%,
            rgb(25, 4, 60) 40%,
            rgb(3, 3, 98) 75%,
            rgb(2, 64, 164) 100%
        );

        padding: 100px;
    }

    .anti-jpa--explanation.moderation .header h2 {
        font-family: 'Geist';
        font-size: 50px;
    }

    .anti-jpa--explanation.moderation .header {
        font-size: 30px;
        margin-bottom: 40px;
    }

    .anti-jpa--explanation.moderation .moderation-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    #moderation-symbol {
        display: inline-block;

        margin: 50px;
        padding: 50px;

        background: rgba(0, 0, 0, 0.25);
        border: 4px solid rgba(255, 255, 255, 0.25);

        border-radius: 30px;
        user-select: none;
        line-height: 1;
        color: white;
        font-size: 100px;
        text-align: center;

        animation: evilTextShadowVar1 4s ease infinite;
    }

    .anti-jpa--actions {
        background: linear-gradient(to bottom, black 0%, rgb(44, 3, 98) 75%, rgb(72, 2, 164) 100%);
        padding: 100px;
    }

    .anti-jpa--actions #tragedy {
        text-align: left;
    }

    .anti-jpa--actions #actions {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;

        width: 100%;

        margin: 0;

        box-sizing: border-box;
        position: relative;
        overflow: hidden;
    }

    .anti-jpa--actions #actions::before {
        content: '';
        position: absolute;

        left: 50%;
        top: 0;

        width: 6px;
        height: 100%;

        background: linear-gradient(to bottom, black, #a574ff);
        transform: translateX(-50%);
    }

    .anti-jpa--actions .action {
        box-shadow:
            0 0 30px rgba(255, 255, 255, 0.12),
            inset 0 0 20px rgba(255, 255, 255, 0.06);

        border-radius: 30px;
        background: linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.06));
        border: 2px solid rgba(255, 255, 255, 0.2);

        backdrop-filter: blur(6px);

        margin: 50px 0;
        padding: 30px;

        transition: all 0.5s ease;
    }

    .anti-jpa--actions .action:hover {
        box-shadow:
            0 10px 30px rgba(255, 255, 255, 0.18),
            inset 0 0 25px rgba(255, 255, 255, 0.12);

        border: 2px solid rgba(255, 255, 255, 0.5);

        background: radial-gradient(circle at top, rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.6));
    }

    .anti-jpa--actions .action:nth-child(odd) {
        text-align: left;
        align-self: flex-start;
    }

    .anti-jpa--actions .action:nth-child(even) {
        text-align: right;
        align-self: flex-end;
    }

    .anti-jpa--actions .action ol {
        background: radial-gradient(circle at top, #222, black);

        border: 2px solid white;
        border-radius: 30px;

        padding: 30px 50px;
    }

    .anti-jpa--actions .action ol li {
        margin: 30px 0;
    }

    #copy-url {
        width: 100%;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        height: 100%;

        background: radial-gradient(circle at 20% 30%, #000333, #000814 70%);

        box-shadow: inset 0 0 15px rgba(0, 200, 255, 0.2);
    }

    #copy-url div {
        padding: 20px;
        font-family: 'Fira Code';
        color: #bde0ff;
        width: 100%;

        background: linear-gradient(90deg, rgba(255, 255, 255, 0.05), transparent);

        text-shadow: 0 0 6px rgba(0, 200, 255, 0.6);
    }

    #copy-url button {
        padding: 20px 40px;
        border: none;
        cursor: pointer;

        font-family: 'Fira Code';
        color: white;
        font-weight: bold;

        background: linear-gradient(135deg, #7b00ff, #008cff);
        background-size: 200% 200%;

        box-shadow:
            0 0 10px rgba(123, 0, 255, 0.6),
            0 0 20px rgba(0, 212, 255, 0.5);

        transition: all 0.5s ease;
    }

    #copy-url button:hover {
        background-position: right center;
    }

    #copy-url button:active {
        box-shadow:
            0 0 10px rgba(123, 0, 255, 0.6),
            inset 0 0 10px rgba(0, 0, 0, 0.6);
    }

    .server-display {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        gap: 40px;

        user-select: none;

        margin: 10px 0;
        padding: 30px;

        border: 1px solid white;
        border-radius: 20px;
        box-shadow: inset 0 0 10px rgba(255, 255, 255, 0.5);
    }

    .server-display .profile {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        gap: 40px;
    }

    .server-display .profile img {
        border-radius: 30px;
        width: 120px;
        height: 120px;
    }

    .server-display a {
        all: unset;
    }

    .server-display a:not(:has(button)) {
        margin-left: auto;

        font-family: 'Fira Code';
        font-size: 20px;

        color: #aaa;
        text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);

        transition: all 0.2s ease;
    }

    .server-display a:hover {
        cursor: pointer;
        color: white;
        text-shadow: 0 0 10px white;
    }

    .server-display .profile a button {
        font-family: 'JetBrains Mono';
        padding: 20px 30px;
        border-radius: 100px;
        border: none;

        position: relative;
        overflow: hidden;

        font-size: 30px;
        transition: all 0.5s ease;
    }

    .server-display .profile a button:hover {
        transform: translateY(-2px) scale(1.03);
        cursor: pointer;
    }

    #join-jeis {
        background: linear-gradient(145deg, #ffd36a, #c78b1a);
        color: #2b2b2b;
        border: 1px solid rgba(0, 0, 0, 0.25);
        box-shadow:
            0 6px 12px rgba(0, 0, 0, 0.35),
            inset 0 1px 2px rgba(255, 255, 255, 0.6),
            0 0 12px rgba(255, 215, 120, 0.6);
    }

    #join-jeis:hover {
        background: linear-gradient(145deg, #ffe08a, #d49a1f);
        border-color: black;
        box-shadow:
            0 12px 20px black,
            inset 0 0 20px black;
    }

    #join-nhgs {
        border: 3px solid pink;
        background: rgba(0, 0, 0, 0.75);
        box-shadow:
            0 0 10px pink,
            inset 0 0 10px pink;
        color: pink;
        text-shadow: 0 0 10px pink;
    }

    #join-nhgs:hover {
        box-shadow:
            0 10px 10px magenta,
            inset 0 0 10px magenta;
        border-color: magenta;
        color: magenta;
        text-shadow: 0 0 10px magenta;
    }

    .anti-jpa--ending {
        background: linear-gradient(to bottom, black 0%, rgb(98, 3, 93) 80%, rgb(164, 2, 164) 100%);
        padding: 100px;
    }

    .anti-jpa--ending #quotes {
        user-select: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        margin: 100px;
    }

    #quotes .quote {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        padding: 30px;
        margin: 30px 0;
        border-radius: 30px;

        background: rgba(0, 0, 0, 0.75);
    }

    #quotes .quote .content,
    #quotes .quote .content i {
        color: white;
        opacity: 0.6;
    }

    #quotes .quote:nth-child(odd) {
        align-self: flex-start;
    }

    #quotes .quote:nth-child(odd) img {
        margin-right: 40px;
    }

    #quotes .quote:nth-child(even) {
        align-self: flex-end;
    }

    #quotes .quote:nth-child(even) img {
        margin-left: 40px;
    }

    #quotes .quote img {
        width: 75px;
        height: 75px;
        border-radius: 999px;
    }

    #cest-fini {
        border-radius: 30px;
        margin: 40px;
        padding: 40px;

        background: #0b0b0b;
        box-shadow: 20px 20px 20px black;

        border: 3px solid #2a2a2a;
    }

    footer {
        background: rgba(0, 0, 0, 0.25);
        border: 5px solid rgba(255, 255, 255, 0.25);
        border-radius: 30px;

        padding: 30px;
        margin: 60px 0;

        opacity: 0.8;
        text-align: right;
    }

    @keyframes headerGlow {
        0% {
            transform: scale(1) rotate(-2.5deg);
        }

        50% {
            color: rgb(255, 121, 121);
            text-shadow: 0 0 10px red;
            transform: scale(1.5) rotate(4deg);
        }

        100% {
            transform: scale(1) rotate(-2.5deg);
        }
    }

    @keyframes evilTextShadowVar1 {
        0% {
            text-shadow:
                40px 40px 1px rgba(147, 46, 46, 0.5),
                40px 40px 20px rgba(147, 46, 46, 0.75),
                -40px -40px 1px rgba(255, 59, 59, 0.5),
                -40px -40px 20px rgba(255, 59, 59, 0.75),
                0 0 10px red;
            color: rgb(255, 175, 175);
        }

        50% {
            text-shadow:
                -40px -40px 1px rgba(147, 46, 46, 0.5),
                -40px -40px 20px rgba(147, 46, 46, 0.75),
                40px 40px 1px rgba(255, 59, 59, 0.5),
                40px 40px 20px rgba(255, 59, 59, 0.75),
                -1px -1px 0 red,
                1px -1px 0 red,
                -1px 1px 0 red,
                1px 1px 0 red,
                5px 0px 10px red;

            color: black;
            transform: scale(1.5) rotate(90deg);
        }

        100% {
            text-shadow:
                40px 40px 1px rgba(147, 46, 46, 0.5),
                40px 40px 20px rgba(147, 46, 46, 0.75),
                -40px -40px 1px rgba(255, 59, 59, 0.5),
                -40px -40px 20px rgba(255, 59, 59, 0.75),
                0 0 10px red;
            color: rgb(255, 175, 175);
        }
    }

    @keyframes evilTextShadowVar2 {
        0% {
            text-shadow:
                40px 40px 1px rgba(147, 46, 46, 0.5),
                40px 40px 20px rgba(147, 46, 46, 0.75),
                -40px -40px 1px rgba(255, 59, 59, 0.5),
                -40px -40px 20px rgba(255, 59, 59, 0.75),
                0 0 10px red;
        }

        50% {
            text-shadow:
                -40px -40px 1px rgba(147, 46, 46, 0.5),
                -40px -40px 20px rgba(147, 46, 46, 0.75),
                40px 40px 1px rgba(255, 59, 59, 0.5),
                40px 40px 20px rgba(255, 59, 59, 0.75),
                0 0 10px red;

            transform: scale(1.1) translateY(-40px) rotate(5deg);
        }

        100% {
            text-shadow:
                40px 40px 1px rgba(147, 46, 46, 0.5),
                40px 40px 20px rgba(147, 46, 46, 0.75),
                -40px -40px 1px rgba(255, 59, 59, 0.5),
                -40px -40px 20px rgba(255, 59, 59, 0.75),
                0 0 10px red;
        }
    }

    @keyframes evilGlow {
        0% {
            color: black;
            text-shadow:
                -1px -1px 0 gray,
                1px -1px 0 gray,
                -1px 1px 0 gray,
                1px 1px 0 gray,
                0 0 10px rgb(154, 154, 154);
        }

        50% {
            color: rgb(100, 0, 0);
            text-shadow:
                -1px -1px 0 red,
                1px -1px 0 red,
                -1px 1px 0 red,
                1px 1px 0 red,
                0 5px 30px red;
            transform: scale(1.1) rotate(10deg);
        }

        100% {
            color: black;
            text-shadow:
                -1px -1px 0 gray,
                1px -1px 0 gray,
                -1px 1px 0 gray,
                1px 1px 0 gray,
                0 0 10px rgb(154, 154, 154);
        }
    }

    @keyframes ominousGlow {
        0% {
            border-color: rgb(255, 170, 244);
            box-shadow: 0 0 20px rgb(255, 0, 221);
            border-radius: 10px;
        }

        50% {
            border-color: rgb(255, 56, 56);
            box-shadow: 0 0 30px rgb(255, 56, 56);
            border-radius: 20px;
        }

        100% {
            border-color: rgb(255, 170, 244);
            box-shadow: 0 0 20px rgb(255, 0, 221);
            border-radius: 10px;
        }
    }

    @keyframes nodeGlow {
        0% {
            box-shadow: 0 0 10px white;
        }

        50% {
            box-shadow: 0 0 20px white;
        }

        100% {
            box-shadow: 0 0 10px white;
        }
    }

    @keyframes rotatetationDevice {
        0% {
            transform: 0;
        }

        50% {
            transform: rotate(180deg) scaleX(-2);
        }

        100% {
            transform: rotate(360deg);
        }
    }

    @media (max-width: 1080px) {
        body {
            font-size: 20px;
        }

        .anti-jpa--explanation {
            padding: 50px;
        }

        .anti-jpa--intro #ominous-header h1 {
            font-size: 15px;
        }

        .anti-jpa--truth #header h1 {
            font-size: 30px;
        }

        .actions-left,
        .actions-right {
            max-width: 80vw;
            font-size: 15px;
        }

        .server-display .profile a button {
            font-size: 15px;
        }

        .server-display a {
            font-size: 15px;
        }

        #timeline .segment {
            flex-direction: column;
        }

        #timeline .segment::before {
            display: none;
        }

        #timeline .segment .content {
            width: 95%;
        }

        #timeline .segment img {
            width: 80%;
        }

        #timeline .segment .content {
            margin: 60px 0;
        }

        #timeline .segment:nth-child(even) {
            flex-direction: column-reverse;
        }

        #quotes .quote {
            padding: 15px;
            margin: 15px 0;
        }

        .anti-jpa--ending #quotes {
            margin: 50px 0;
        }
    }

    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: linear-gradient(180deg, #666, #333);
        border-radius: 999px;
        box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
    }

    ::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(180deg, #aaa, #555);
    }
</style>
