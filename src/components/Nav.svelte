<script>
	export let path;
</script>

<nav>
	~ <a href="/">archive</a> {#if path !== undefined && path !== ""} /
	<a href="/project/{path}">{path}</a>
	{/if}
</nav>

<style>
	a {
		color: #636363;
	}
</style>
