<template>
	<TopBar></TopBar>
	<DestOne></DestOne>
	<DestOne2></DestOne2>
	<DestOne3></DestOne3>
	<DestTwo></DestTwo>
	<DestTwo2></DestTwo2>
	<DestTwo3></DestTwo3>
	<FooterBar></FooterBar>
</template>

<script>
	 import TopBar from '../components/TopBar.vue'
	 import DestOne from '../components/DestOne.vue'
	 import DestOne2 from '../components/DestOne2.vue'
	 import DestOne3 from '../components/DestOne3.vue'
	 import DestTwo from '../components/DestTwo.vue'
	  import DestTwo2 from '../components/DestTwo2.vue'
	   import DestTwo3 from '../components/DestTwo3.vue'
	    import FooterBar from '../components/FooterBar.vue'
	 export default{
		 components:{
			 TopBar,DestOne,DestOne2,DestOne3,DestTwo,DestTwo2,DestTwo3,FooterBar
		 },
	 }
</script>

<style>
</style>
