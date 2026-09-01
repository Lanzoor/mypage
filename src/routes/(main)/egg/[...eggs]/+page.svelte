<script lang="ts">
    import { page } from "$app/state";

    const depth = $derived(
        page.params.eggs
            ? page.params.eggs.split("/").filter(Boolean).length + 1
            : 1,
    );

    const messages = [
        "You found the Easter egg.",
        "You found the Easter egg inside the Easter egg.",
        "You found the Easter egg inside the Easter egg inside the Easter egg. Aren't you getting tired?",
        "You found the Easter egg inside the Easter egg inside the Easter egg inside the Easter egg. Why are you still doing this?",
        "You found the Easter egg inside the Easter egg inside the Easter egg inside the Easter egg inside the Easter egg.<br> There are other things on this website, you know...",
        "You found the Easter egg inside the Easter egg inside the Easter egg inside the Easter egg inside the Easter egg inside the Easter egg. I don't think there's anything else here.",
        "You found the Easter egg inside the Easter egg inside the Easter egg inside the Easter egg inside the Easter egg inside the Easter egg inside the Easter egg. There is nothing else.",
        "You found the Easter egg inside the Easter egg inside the Easter egg inside the Easter egg inside the Easter egg inside the Easter egg inside the Easter egg inside the Easter egg. I'm serious.",
        "You found the Easter egg inside the Easter egg inside the Easter egg inside the Easter egg inside the Easter egg inside the Easter egg inside the Easter egg inside the Easter egg inside the Easter egg. <b>STOP.</b>",
        "You found the Easter egg inside the Easter egg inside the Easter egg inside the Easter egg inside the Easter egg inside the Easter egg inside the Easter egg inside the Easter egg inside the Easter egg inside the Easter egg.<br>Congratulations. You have successfully reached the tenth layer of egg. Now please go look at anything other than this.",
    ];

    const message = $derived(messages[Math.min(depth, messages.length) - 1]);

    const exhausted = $derived(depth > messages.length);
</script>

<section>
    {#if exhausted}
        <p>No more eggs.</p>
        <p>We're not doing this again.</p>
    {:else}
        <p>{@html message}</p>
    {/if}
</section>
