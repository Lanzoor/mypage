<script lang="ts">
    import entries from './(logs)/entries.json';

    const map = new Map<string, typeof entries>();

    for (const entry of entries) {
        const [major, minor] = entry.version.slice(1).split('-');

        if (!major || !minor) continue;

        const id = `v${major}.${minor}`;

        if (!map.has(id)) {
            map.set(id, []);
        }

        map.get(id)!.push(entry);
    }

    const groups = [...map].map(([id, entries]) => ({
        id,
        entries,
    }));

    let query = $state('');
    let status = $state('You can also warp into an entry by searching for the version name!');

    function handleSearch() {
        const normalized = query.trim().toLowerCase().replace(/\./g, '-');

        if (!normalized) return;

        const entry = entries.find((entry) => entry.version.toLowerCase() === normalized);

        if (!entry) {
            status = `Couldn't find version ${query}. Please try again!`;
            return;
        }

        window.location.href = `/projects/core/changelog/${entry.version}`;
    }
</script>

<svelte:head>
    <title>Changelog | core</title>
</svelte:head>

<section>
    <div class="breadcrumbs">
        <a href="/">Home</a>

        <div class="separator">›</div>

        <a href="/projects">Projects</a>

        <div class="separator">›</div>

        <a href="/projects/core">core</a>

        <div class="separator">›</div>

        <a href="/projects/core/changelog">Changelog</a>
    </div>

    <h1>Changelog</h1>

    <p>
        This page contains a list of all changes and updates made to the website.
        <b>You can use the search bar below to search for a version!</b>
    </p>

    <p>
        For the changelog conventions, please refer to <a
            href="/projects/core/changelog/conventions">./conventions/</a
        >.
    </p>

    <blockquote class="warning">
        <b class="col bright yellow">Not all changes require a new changelog!</b><br />
        If a change was very small, urgent, or not assigned a version tag, it won't show up here.
    </blockquote>
</section>

<section id="entries">
    <p>
        <b>Found {entries.length} changelog entries.</b>
    </p>

    <div class="search enable-spacing">
        <p>
            {status}
        </p>

        <div class="options">
            <input
                type="text"
                id="search-bar"
                bind:value={query}
                placeholder="Enter a version (e.g. v26.1.0)"
                onkeydown={(e) => e.key === 'Enter' && handleSearch()}
            />

            <button id="search-button" onclick={handleSearch}> Search </button>
        </div>
    </div>

    {#each groups as group}
        <h1>Version group {group.id}</h1>

        <ul>
            {#each group.entries as entry}
                <li>
                    <h2>
                        <a href="/projects/core/changelog/{entry.version}">
                            {entry.version}
                        </a>{#if entry.title}: {entry.title}{/if}<br />
                    </h2>

                    <p class="dim">
                        published on
                        <b
                            >{new Date(entry.published).toLocaleString('en-US', {
                                timeZone: 'Asia/Seoul',
                                dateStyle: 'long',
                            })}</b
                        >
                    </p>
                </li>
            {/each}
        </ul>
    {/each}
</section>

<style lang="css">
    .search {
        margin: 2em auto;
    }

    .search .options {
        display: flex;
        justify-content: center;
        align-items: stretch;
        gap: 0;
    }

    .search .options input {
        width: 750px;
    }

    .search .options button {
        font-family: 'JetBrains Mono';

        background: #7155ff;
        border: none;
        color: white;

        padding: 0 10px;

        transition: 0.5s ease;
    }
    .search .options button:hover {
        background: #aa91ff;
    }
</style>
