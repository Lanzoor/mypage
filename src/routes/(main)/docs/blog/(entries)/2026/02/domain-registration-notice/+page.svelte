<script lang="ts" module>
    export const metadata = {
        title: "Domain Registration Notice",
        tags: ["important", "announcement", "core"],
        published: new Date("2026-02-07T00:00:00+09:00"),
    };
</script>

<svelte:head>
    <title>{metadata.title}</title>

    <meta name="tags" content={metadata.tags.join(", ")} />
</svelte:head>

<section>
    <a href="/docs/blog">../ Go back to blogs page</a>

    <h1>Domain Registration Notice</h1>

    <h2>February 07th</h2>

    <p>
        After about an hour of struggling, <b
            >I have successfully registered a domain at <a
                href="https://lanzoor.dev">lanzoor.dev</a
            >!</b
        ><br />
        <b
            >The SSL certificates finished building in like 5 minutes after I
            started it.</b
        >
        That was hella fast.<br />

        I will merge every previous website of mine into one large GitHub
        repository, and connect it to a Vercel project and propagate the DNS
        changes tomorrow.<br />
        I will be posting furthermore updates below.
    </p>

    <h2>February 08th</h2>

    <p>
        <b>I have successfully managed to propagate the DNS record!</b><br />
        I only published a dummy page for now, but I am going to merge all repositories
        of mine into one ultimate repository and link it to the Vercel project.
    </p>

    <p>
        I merged every previous webpage of mine into an ultimate library, (<code
            >core</code
        >) polished the file structure and successfully updated the Vercel
        project! I will frequently make changes to the website, so have fun
        exploring! :D
    </p>
</section>
