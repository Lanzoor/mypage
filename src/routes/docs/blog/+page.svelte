<script lang="ts">
    import Breadcrumbs from '$lib/components/Navigation/Breadcrumbs.svelte';
    import entries from './entries.json';

    const availableTags = [
        'important',
        'announcement',
        'blog',
        'personal',
        'core',
        'core-api',
        'monthly-recap',
    ];

    let searchQuery = $state('');
    let searchTags = $state<string[]>([]);

    type SortingOrder = 'ascending' | 'descending';

    let sortingOrder = $state<SortingOrder>('descending');

    const sortedEntries = $derived(
        [...entries].sort((a, b) => {
            const result = a.published.localeCompare(b.published);

            return sortingOrder === 'ascending' ? result : -result;
        })
    );

    const filteredEntries = $derived(
        sortedEntries.filter((entry) => {
            const query = searchQuery.trim().toLowerCase();

            const matchesQuery =
                query === '' ||
                entry.title.toLowerCase().includes(query) ||
                entry.description?.toLowerCase().includes(query) ||
                entry.tags.some((tag) => tag.toLowerCase().includes(query));

            const matchesTags = searchTags.every((tag) => entry.tags.includes(tag));

            return matchesQuery && matchesTags;
        })
    );

    const groups = $derived(
        Object.values(
            filteredEntries.reduce(
                (acc, entry) => {
                    const key = entry.published.slice(0, 7);

                    (acc[key] ??= []).push(entry);

                    return acc;
                },
                {} as Record<string, typeof filteredEntries>
            )
        )
    );
</script>

<section>
    <Breadcrumbs />

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

    <div class="search-options enable-spacing">
        <h2>Search Options</h2>

        <p>You can search for a blog entry.</p>

        <div class="search-bar">
            <input type="text" placeholder="Search for a blog entry..." bind:value={searchQuery} />
        </div>

        <p>You can also narrow down the searches by providing one or more tags:</p>

        <div class="tag-bar">
            {#each availableTags as tag}
                <button
                    class:active={searchTags.includes(tag)}
                    class="tag"
                    onclick={() => {
                        if (searchTags.includes(tag)) {
                            searchTags = searchTags.filter((x) => x !== tag);
                        } else {
                            searchTags = [...searchTags, tag];
                        }
                    }}
                >
                    {'#'}<span class="tagname {tag}">{tag}</span>
                </button>
            {/each}
        </div>

        <p>
            Currently sorting by: <button
                class="{sortingOrder} adaptive-text-shadow"
                onclick={() =>
                    (sortingOrder = sortingOrder === 'ascending' ? 'descending' : 'ascending')}
                >{sortingOrder} order</button
            >
        </p>
    </div>

    {#each groups as group}
        <h1>
            {new Date(group[0].published).toLocaleString('en-US', {
                timeZone: 'Asia/Seoul',
                month: 'long',
                year: 'numeric',
            })}
        </h1>

        {#each group as blog}
            <div>
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
                        <b
                            >{new Date(blog.published).toLocaleString('en-US', {
                                timeZone: 'Asia/Seoul',
                                dateStyle: 'long',
                            })}</b
                        >
                    </span>

                    •

                    {#if blog.tags.length}
                        {#each blog.tags as tag}
                            <span class="tag active">
                                {'#'}<span class={`tagname ${tag}`}>
                                    {tag}
                                </span>{' '}
                            </span>
                        {/each}
                    {:else}
                        <i>No tags provided.</i>
                    {/if}
                </p>
            </div>
        {/each}
    {/each}
</section>

<style lang="css">
    .tag {
        background: #111;
        color: #444;
    }

    .tag,
    .tag .tagname {
        transition: 0.2s ease;
    }

    .tag.active .tagname {
        font-weight: 500;

        text-shadow: 0 0 20px oklch(from currentColor calc(l * 0.7) calc(c * 2) calc(h + 10));
    }

    .tag.active .tagname.important {
        color: var(--red);
    }

    .tag.active .tagname.announcement {
        color: var(--cyan);
    }

    .tag.active .tagname.blog {
        color: rgb(136, 120, 255);
    }
    .tag.active .tagname.monthly-recap {
        color: var(--bright-yellow);
    }
    .tag.active .tagname.core {
        color: var(--bright-green);
    }
    .tag.active .tagname.core-api {
        color: var(--bright-orange);
    }
    .tag.active .tagname.personal {
        color: var(--orange);
    }

    .tag-bar {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1em;
    }

    .search-bar {
        display: flex;
        flex-direction: row;
        align-items: stretch;
        justify-content: center;
    }

    .search-bar input[type='text'] {
        width: 1000px;
    }

    .search-bar button {
        background: #7155ff;
        color: white;

        padding: 0 10px;

        transition: 0.5s ease;
    }

    .search-bar button:hover {
        background: #aa91ff;
    }

    button.ascending {
        color: var(--green);
    }

    button.descending {
        color: var(--orange);
    }
</style>
