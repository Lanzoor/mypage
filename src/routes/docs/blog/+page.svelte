<script lang="ts">
    import entries from './entries.json';

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

    <p>
        <b>Found {sortedEntries.length} blog entries.</b>
    </p>

    {#each groups as group}
        <h1>
            {new Date(group[0].published).toLocaleString('en-US', {
                timeZone: 'Asia/Seoul',
                month: 'long',
                year: 'numeric',
            })}
        </h1>

        <ul>
            {#each group as blog}
                <li>
                    <h2>
                        <a href={`/docs/blog/${blog.slug}`}>
                            {blog.title}
                        </a>
                    </h2>

                    <p>
                        {#if blog.description}
                            {blog.description}
                        {:else}
                            <i>No description provided.</i>
                        {/if}<br />
                        <span class="dim">
                            published on <b
                                >{new Date(blog.published).toLocaleString('en-US', {
                                    timeZone: 'Asia/Seoul',
                                    dateStyle: 'long',
                                })}</b
                            ><br />
                        </span>

                        {#if blog.tags.length}
                            <span class="tags">
                                {#each blog.tags as tag}
                                    <span class="tag">
                                        {'<tag:'}<span class={`tagname ${tag}`}>
                                            {tag}
                                        </span>{' />'}
                                    </span>
                                {/each}
                            </span>
                        {:else}
                            <i>No tags provided.</i>
                        {/if}
                    </p>
                </li>
            {/each}
        </ul>
    {/each}
</section>

<style lang="css">
    .tags {
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        gap: 1em;
    }

    .tags .tag {
        background: #111;
        color: #444;
    }

    .tags .tag .tagname {
        font-weight: 500;

        text-shadow: 0 0 20px oklch(from currentColor calc(l * 0.7) calc(c * 2) calc(h + 10));
    }

    .tags .tag .important {
        color: var(--red);
    }

    .tags .tag .announcement {
        color: var(--cyan);
    }

    .tags .tag .blog {
        color: rgb(136, 120, 255);
    }
    .tags .tag .monthly-recap {
        color: var(--bright-yellow);
    }
    .tags .tag .core {
        color: var(--bright-green);
    }
    .tags .tag .core-api {
        color: var(--bright-orange);
    }
    .tags .tag .personal {
        color: var(--orange);
    }
</style>
