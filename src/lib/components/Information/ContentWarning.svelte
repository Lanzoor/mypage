<script lang="ts">
    let { children }: { children: import('svelte').Snippet } = $props();
</script>

<blockquote class="error">
    <h2 class="col bright red">Content Warning!</h2>

    <p>
        {@render children()}
    </p>

    <p class="dim">Viewer discretion is advised. Please proceed with caution.</p>
</blockquote>
