<script>
    import { page } from '$app/state';

    let status = $state(page.status);
    let attemptedPath = $state(page.url?.pathname || '/');
</script>

<svelte:head>
    <title>{status} Error | lanzoor.dev</title>
</svelte:head>

{#if status === 404}
    <section class="stretched">
        <header class="align--center align-self--center text-align--center">
            <h1>404 - Page not found!</h1>
            <p>
                <b
                    >We couldn't find a resource located at
                    <span class="col bright green">'{attemptedPath}'</span>.</b
                ><br />
                The filename may have changed, or the file may have been moved or removed.
            </p>
        </header>

        <div>
            <p>
                <b>If you are a visitor:</b><br />
                You can try searching for pages with similar names.<br />
                Please use the navigation panels or the buttons below.
            </p>
        </div>

        <div id="buttons">
            <a class="plain" href="/" onclick={() => history.back()}>
                <button>← Back</button>
            </a>
            <a class="plain" href="/">
                <button>Home</button>
            </a>
            <a href={attemptedPath}>↩ Try again</a>
        </div>
    </section>
{:else}
    <!-- 500 / Other errors -->
    <section class="stretched">
        <h1>{status} - Internal Server Error</h1>
        <p>An unexpected error occurred. Please try again later.</p>
    </section>
{/if}

<style lang="css">
    #buttons {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 2em;
        width: 100%;
    }

    #buttons button {
        padding: 1em 2em;
        font-family: 'JetBrains Mono';
        font-size: 1em;
        background: #111;
        border: 2px solid #ccc;
        color: #ccc;
        border-radius: 0.5em;
        transition: 0.25s ease;
    }

    #buttons button:hover {
        border-color: white;
        color: #111;
        background: white;
        cursor: pointer;
    }
</style>
