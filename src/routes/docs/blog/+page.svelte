<script lang="ts">
    import entries from './entries.json';

    function formatDate(published: string) {
        const [year, month] = published.split('-').map(Number);

        return new Intl.DateTimeFormat('en-US', {
            month: 'short',
            year: 'numeric',
        }).format(new Date(year, month - 1));
    }

    const sortedEntries = [...entries].sort((a, b) => b.published.localeCompare(a.published));

    const groups = Object.values(
        sortedEntries.reduce(
            (acc, entry) => {
                const key = entry.published.slice(0, 7);

                (acc[key] ??= []).push(entry);

                return acc;
            },
            {} as Record<string, typeof sortedEntries>
        )
    );
</script>

<svelte:head>
    <title>Blog | lanzoor.dev</title>
</svelte:head>

<section>
    <div class="breadcrumbs">
        <a href="/">Home</a>

        <div class="separator">›</div>

        <a href="/docs">Documents</a>

        <div class="separator">›</div>

        <a href="/docs/blog">Blog</a>
    </div>

    <header>
        <h1>Blog Portal</h1>

        <p>
            Hello there! This is a page where you can find all of my blogs.<br />
            <i>Click one of the headers below to warp into that page.</i>
        </p>
    </header>

    <div id="blogs">Loading blog entries...</div>

    <p>
        <b>Found {sortedEntries.length} blog entries.</b>
    </p>

    {#each groups as group}
        <h1>{formatDate(group[0].published)}</h1>

        {#each group as blog}
            <div class="blog spacing">
                <h2>
                    <a href={`/docs/blog/${blog.slug}`}>
                        {blog.title}
                    </a>
                </h2>

                <hr />

                <p>
                    {blog.description || 'No description provided.'}
                </p>

                <span class="dim">
                    published @ <b>{formatDate(blog.published)}</b><br />
                    tags:

                    {#if blog.tags.length}
                        <span class="tags">
                            {#each blog.tags as tag}
                                <span class={`tag ${tag}`}>
                                    {tag}
                                </span>
                            {/each}
                        </span>
                    {:else}
                        <p>No tags provided.</p>
                    {/if}
                </span>
            </div>
        {/each}
    {/each}
</section>

<style lang="css">
    .blog {
        margin: 2% 0;
    }

    .tags {
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        gap: 30px;
    }

    .tags .tag {
        cursor: pointer;
        user-select: none;

        font-weight: 500;

        color: #777;
        border: 1px solid rgba(255, 255, 255, 0.25);
        border-radius: 2px;

        background: #111;

        padding: 5px 12px;

        backdrop-filter: blur(10px);
        transition: 0.5s ease;
    }

    .tags .tag.important {
        color: rgb(255, 120, 120);
        border: 1px solid rgba(255, 0, 0, 0.75);
        text-shadow: 0 0 10px rgba(255, 0, 0);
        box-shadow:
            0 0 10px rgba(255, 0, 0, 0.5),
            inset 0 0 10px rgba(255, 0, 0, 0.5);
    }

    .tags .tag.announcement {
        color: rgb(120, 179, 255);
        border: 1px solid rgba(0, 157, 255, 0.5);
        text-shadow: 0 0 10px rgba(0, 157, 255, 0.5);
        box-shadow: 0 0 10px rgba(0, 157, 255, 0.5);
    }

    .tags .tag.blog {
        color: rgb(136, 120, 255);
        border: 1px solid rgba(101, 66, 255, 0.5);
        text-shadow: 0 0 10px rgba(101, 66, 255, 0.5);
        box-shadow: 0 0 10px rgba(101, 66, 255, 0.5);
    }

    .tags .tag.monthly-recap {
        color: rgb(255, 190, 120);
        border: 1px solid rgba(255, 179, 66, 0.5);
        text-shadow: 0 0 10px rgba(255, 179, 66, 0.5);
        box-shadow: 0 0 10px rgba(255, 179, 66, 0.5);
    }

    .tags .tag.core {
        color: rgb(120, 255, 163);
        border: 1px solid rgba(66, 255, 123, 0.5);
        text-shadow: 0 0 10px rgba(66, 255, 123, 0.5);
        box-shadow: 0 0 10px rgba(66, 255, 123, 0.5);
    }

    .tags .tag.core-api {
        color: rgb(255, 120, 120);
        border: 1px solid rgba(255, 66, 66, 0.5);
        text-shadow: 0 0 10px rgba(255, 66, 66, 0.5);
        box-shadow: 0 0 10px rgba(255, 66, 66, 0.5);
    }
</style>
