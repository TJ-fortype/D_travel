<template>
<TopBar></TopBar>
<SectionOne></SectionOne>
<SectionTwo></SectionTwo>
<SectionThree></SectionThree>
<SectionFour></SectionFour>
<FooterBar></FooterBar>

</template>

<script>

	   import TopBar from '../components/TopBar.vue'
	   import SectionOne from '../components/SectionOne.vue' 
	   import SectionTwo from '../components/SectionTwo.vue'
	   import SectionThree from '../components/SectionThree.vue'
	   import SectionFour from '../components/SectionFour.vue'
	   import FooterBar from '../components/FooterBar.vue'
	export default {
		components:{
			TopBar,SectionOne,SectionTwo,SectionThree,SectionFour,FooterBar
       
		},
	}
</script>

<style>
</style>
