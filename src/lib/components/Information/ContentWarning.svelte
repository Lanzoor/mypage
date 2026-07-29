<script lang="ts">
    let { description }: { description: string } = $props();
</script>

<blockquote class="error">
    <b class="col bright red">Content Warning!</b><br />

    This section contains content that may require additional context or caution.<br />
    {description}<br />
    Viewer description is advised. Please proceed with caution.
</blockquote>
