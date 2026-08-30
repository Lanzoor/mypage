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

        <header class="disable-layout">
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
{:else}
    <section id="internal-error" class="stretched">
        <a href="/" onclick={() => history.back()}>
            {"<-"} Back
        </a>

        <header class="disable-layout">
            <h1>{status}</h1>

            <div class="separator"></div>

            <h2>Internal Error</h2>
        </header>

        <p>
            Something went wrong while processing your request. The server
            encountered an unexpected error and could not complete the request.
        </p>

        <p>
            This error is on our end. Please feel free to <a href="#connections"
                >get in touch</a
            >.
        </p>
    </section>
{/if}

<style lang="css">
    #error-404 {
        background: radial-gradient(
            circle at 50% 50%,
            rgba(100, 0, 255, 0.25),
            transparent
        );
    }

    #internal-error {
        background: radial-gradient(
            circle at 50% 50%,
            rgba(0, 4, 255, 0.25),
            transparent
        );
    }

    section header {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 1.5em;
    }

    section header .separator {
        width: 2px;
        height: 2em;

        background: rgba(255, 255, 255, 0.25);
    }

    section p {
        text-align: center;
    }
</style>
