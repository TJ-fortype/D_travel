<template>
	<TopBar></TopBar>
	<TwoBar></TwoBar>
	<fiveBar></fiveBar>
	<newFiveBar></newFiveBar>
</template>

<script>
	import TopBar from '../components/TopBar.vue'
	import TwoBar from '../components/TwoBar.vue'
	import fiveBar from '../components/fiveBar.vue'
	import newFiveBar from '../components/newFiveBar.vue'
	
	
	export default {
		components:{
			TopBar,TwoBar,fiveBar,newFiveBar,
		},
	}
</script>

<style>
	
</style>
