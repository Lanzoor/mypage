<script lang="ts">
    import { onMount } from "svelte";

    onMount(() => {
        const key = "doNot.answerPromptShown";

        const answer = prompt("Enter your answer:");

        if (answer?.trim() === "2763") {
            alert(
                "Do not go back to /diary/2026/what/diary, scroll down, and click the blue link. ",
            );

            sessionStorage.setItem(key, "true");
        }
    });
</script>
