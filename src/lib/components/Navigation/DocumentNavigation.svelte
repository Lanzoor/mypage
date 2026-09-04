<script lang="ts">
    import { Ba } from "../Links";

    type DocumentNavLink = {
        href: string;
        text?: string;
        title?: string;
    };

    let { previous, next } = $props<{
        previous?: DocumentNavLink;
        next?: DocumentNavLink;
    }>();
</script>

<div class="-document-navigation">
    {#if previous}
        <Ba href={previous.href} class="link previous">
            <div class="nav">
                {"<-"}
                {previous.text ?? "Previous"}
            </div>

            {#if previous.title}
                <div class="title">
                    {previous.title}
                </div>
            {/if}
        </Ba>
    {:else}
        <div class="link previous disabled">
            <div class="nav">
                {"<-"} Previous
            </div>
        </div>
    {/if}

    {#if next}
        <Ba href={next.href} class="link next">
            <div class="nav">
                {next.text ?? "Next"}
                {"->"}
            </div>

            {#if next.title}
                <div class="title">
                    {next.title}
                </div>
            {/if}
        </Ba>
    {:else}
        <div class="link next disabled">
            <div class="nav">
                Next {"->"}
            </div>
        </div>
    {/if}
</div>

<style>
    .-document-navigation {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
        gap: 1em;
    }

    .-document-navigation :global(.link) {
        display: flex;
        flex-direction: column;
    }

    .-document-navigation :global(.link.previous) {
        align-items: flex-start;
        text-align: left;
    }

    .-document-navigation :global(.link.next) {
        align-items: flex-end;
        text-align: right;
    }

    .-document-navigation .disabled {
        cursor: not-allowed;
    }

    .-document-navigation .nav {
        opacity: 0.75;
    }

    .-document-navigation .disabled .nav {
        opacity: 0.5;
    }

    .-document-navigation .title {
        font-size: 1.1em;
    }
</style>
