<script>
	
	export let changeView;
	export let view;


</script>

<div class="view-buttons">
	<div class="list" class:active={view === "list"} on:click="{() => changeView("list")}" title="List view">
		<span></span>
		<span></span>
		<span></span>
	</div>
	<div class="grid" class:active={view === "grid"} on:click="{() => changeView("grid")}" title="Grid view">
		<span></span>
		<span></span>
		<span></span>
		<span></span>
	</div>
</div>



<style>

	.active span {
		background-color: black !important;
	}

	.view-buttons {
		width: 55px;
		display: flex;
		justify-content: space-between;
		margin-top: 50px;
	}

	.list{
		cursor: pointer;
		width: 20px;
		display: inline-block;
	}

	.list span  {
		display: block;
		height: 3px;
		width: 20px;
		margin-bottom: 5px;
		background-color: grey;
	}

	.grid {
		cursor: pointer;
		width: 20px;
		height: 20px;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-content: space-between;
	}

	.grid span {
		display: block;
		height: 8px;
		width: 8px;
		background-color: grey;
	}


</style>





