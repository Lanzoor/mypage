<script lang="ts" module>
    import BlogBreadcrumbs from "$lib/components/Navigation/BlogBreadcrumbs.svelte";

    export const metadata = {
        title: "My Opinion on Vibe Coding",
        description: "My detailed opinion on vibe coding and using AI to code.",
        tags: ["blog"],
        published: new Date("2026-08-03T00:00:00+09:00"),
    };
</script>

<svelte:head>
    <title>{metadata.title}</title>

    <meta name="tags" content={metadata.tags.join(", ")} />
</svelte:head>

<section>
    <BlogBreadcrumbs />

    <h1>My Opinion on Vibe Coding</h1>

    <p class="dim">3 min read | published on August 3rd</p>

    <p>
        Hi! I've wanted to talk about this topic for a long time.<br />
        <i>I've personally experienced the rise of vibe coding,</i> which is why
        I have quite a bit of experience and advice to share about it.
        <b>
            So, without further ado, here's my detailed opinion on vibe coding
            and using AI for programming.
        </b>
    </p>

    <h2>TLDR</h2>

    <p>
        <b>First of all, using AI to code is <i>not</i> a bad thing.</b>
        Think about it. AI is simply another tool that you can use to build amazing
        applications. And what else is a tool? Programming languages!
        <b>
            Therefore, I strongly believe that using AI to assist with coding is
            completely reasonable.
        </b>
    </p>

    <h2>Caveats</h2>

    <p>
        <b>
            That said, there <i>are</i> some important things you should keep in mind
            when using AI for programming.
        </b>
        AI is a powerful tool, yes, but it is not a perfect replacement for everything.
        It can generate code quickly, explain concepts, and help you explore new ideas,
        but
        <i>it does not truly understand your project in the same way you do.</i>

        <b>
            With that in mind, here are some things I recommend doing when using
            AI for coding!
        </b>
    </p>

    <h2 class="col bright green">Do:</h2>

    <ul>
        <li>
            <b>Review the source code yourself.</b>
            Just like humans, AI is not perfect. I've run many experiments myself,
            and I have often been able to spot security issues in AI-generated code.<br
            />

            So please,
            <b>
                thoroughly review the source code and check for mistakes,
                <i
                    >especially when developing services that depend heavily on
                    security.</i
                >
            </b>
            <span class="dim"
                >(such as authentication systems and database integrations)</span
            >
        </li>

        <li>
            <b>Get feedback.</b>
            Using AI can honestly be one of the best ways to receive feedback before
            releasing software. Why? Because it does not criticize <i>you</i>,
            it critiques your <i>code</i>. Heck, I'd even encourage new
            programmers to use AI as a learning tool. Seriously, you can learn a
            lot by discussing ideas, receiving feedback, and experimenting with
            new approaches.
        </li>
    </ul>

    <h2 class="col bright red">Do not:</h2>

    <ul>
        <li>
            <b>Trust everything it says.</b>
            Like I mentioned earlier, AI can make mistakes.
            <b>
                Whenever you receive advice or information from AI, make sure to
                verify it yourself.
            </b>
            <i>
                Seriously, this is an extremely valuable habit to develop in
                these days.
            </i>
        </li>

        <li>
            <b>Use it to code the entire thing for you.</b>
            Seriously, you should <i>at least</i> try to understand and design the
            logic yourself. Otherwise, what are you actually learning? If something
            is too difficult, you can still ask AI for help, review the generated
            code, and take notes on interesting ideas or techniques. That is also
            a great way to learn.
        </li>

        <li>
            <b
                >And most importantly... do not disrespect other people's
                efforts.</b
            >
            <b>PLEASE!!!!</b>
            This applies to both vibe coders and traditional developers. Everyone
            has different ways of building software, and there is no reason to dismiss
            someone else's work. Programming and AI-assisted development both require
            genuine effort. Please keep this in mind: When someone releases a project,
            <b>
                it means they were <i>determined</i> enough to keep improving and
                working on it.
            </b>
        </li>
    </ul>

    <p>
        To summarize, <b
            >yes, using AI to code can be a good thing, and there is nothing
            wrong with that.</b
        >
        Just make sure to keep the things I mentioned in mind.
        <b>
            So whether you're a traditional developer, a vibe coder, or
            somewhere in between, keep cooking!
        </b>
    </p>

    <blockquote>
        <i>
            "<b>
                The best programmer is not the person who writes the most
                code...<br />
                ...but the person who keeps learning.
            </b>"
        </i>
        <br />
        - lan lan man, August 2026
    </blockquote>
</section>
