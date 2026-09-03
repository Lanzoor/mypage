<script lang="ts">
    import { onMount } from "svelte";

    const chars =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
        "abcdefghijklmnopqrstuvwxyz" +
        "0123456789" +
        "!@#$%^&*+=-_/\\|~`" +
        "αβγδεζηθικλμνξοπρστυφχψω";

    let el: HTMLSpanElement;
    let name = "abcde"; // you're not supposed to actually see this

    onMount(() => {
        const interval = setInterval(() => {
            el.textContent = name
                .split("")
                .map((char) =>
                    char === " "
                        ? " "
                        : chars[Math.floor(Math.random() * chars.length)],
                )
                .join("");
        }, 10);

        return () => clearInterval(interval);
    });
</script>

<section>
    <p>
        Thank you <span class="cryptic" bind:this={el}>{name}</span>. Thank you
        for everything. Please take care.
    </p>
</section>
