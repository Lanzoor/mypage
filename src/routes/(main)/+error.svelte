<script>
    import { page } from "$app/state";

    let status = $state(page.status);
    let attemptedPath = $state(page.url?.pathname || "/");
</script>

<svelte:head>
    <title>{status} Error | lanzoor.dev</title>
</svelte:head>

{#if status === 404}
    <section id="error-404" class="stretched">
        <a href="/" onclick={() => history.back()}>
            {"<-"} Back
        </a>

        <header>
            <h1>404</h1>

            <div class="separator"></div>

            <h2>Page not found</h2>
        </header>

        <p>
            <b>
                We couldn't find a resource located at
                <span class="col bright green">'{attemptedPath}'</span>.
            </b><br />
            The filename may have changed, or the file may have been moved or removed.
        </p>
    </section>
    <!-- {:else}
    <section class="stretched">
        <h1>{status} - Internal Server Error</h1>
        <p>An unexpected error occurred. Please try again later.</p>
    </section> -->
{/if}

<style lang="css">
    #error-404 {
        background: radial-gradient(
            circle at 50% 50%,
            rgba(100, 0, 255, 0.25),
            transparent
        );
    }

    #error-404 header {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 1.5em;
    }

    #error-404 header .separator {
        width: 2px;
        height: 2em;

        background: rgba(255, 255, 255, 0.25);
    }

    #error-404 p {
        text-align: center;
    }

    #error-404 #buttons {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 2em;
        width: 100%;
    }

    #error-404 #buttons button {
        padding: 1em 2em;
        font-size: 1em;
        background: #111;
        border: 2px solid #ccc;
        color: #ccc;
        border-radius: 0.5em;
        transition: 0.25s ease;
    }

    #error-404 #buttons button:hover {
        border-color: white;
        color: #111;
        background: white;
        cursor: pointer;
    }
</style>
