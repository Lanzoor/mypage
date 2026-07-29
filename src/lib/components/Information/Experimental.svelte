<script lang="ts">
    let { description = '' }: { description?: string } = $props();
</script>

<blockquote class="warning">
    <b class="col bright yellow">This section of the website uses experimental features!</b><br />

    {description}
    If anything seems off or unusual, please feel free to <a href="#connections">get in touch</a>.
    <b>We'd love to hear your feedback!</b>
</blockquote>
