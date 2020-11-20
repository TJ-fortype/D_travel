<template>
<div class="topbar">
	<div class="container">
		<div class="logo"></div>
		<ul>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
		</ul>
		<div class="col"></div>
	</div>
</div>
</template>

<script>
	export default {
		
	}
</script>

<style>
	.container {
		width: 1200px;
		height: 50px;
		margin: 0 auto;
		display: flex;
		background: #eee;
	}
	.container .logo {
		flex: 1;
		background: #f60;
	}
	.container ul {
		flex: 1;
		display: flex;
		background: #6f0;
	}
	.container ul li {
		flex: 1;
	}
	.container .col {
		flex: 1;
		background: #06f;
	}
</style>
