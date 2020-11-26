<template>
<div class="fivecontainer">
	<div class="fivecarousel">
		<img :src="note[currentIndex]">
		<div class="control  left" @cclick="prev">
			<span class="fa fa-chevron-left fa-4x"></span>
		</div>
		<div class="control  right" @click="next">
			<span class="fa fa-chevron-right fa-4x"></span>
		</div>
	</div>
	<div class="ditu">
		<img class="fivepic" src="../assets/img/fiveimg/map04.png">
		<img class="fivelocate" src="../assets/img/fiveimg/map05.png">
	</div>
</div>
</template>

<script>
	export default {
			data(){
				return {
					note: [
						require('../assets/img/fiveimg/04.jpg'),
						require('../assets/img/fiveimg/06.jpg'),
						require('../assets/img/fiveimg/07.jpg'),
						require('../assets/img/fiveimg/08.jpg'),
					],
					currentIndex: 0,
					fivenote: [
						{addr: '拉普兰'},
					],
					
				}
			},
			methods: {
				prev(){	
					this.currentIndex--
					if(this.currentIndex<0){
						this.currentIndex = this.note.length-1
					}
				},
				next(){
					this.currentIndex++
					if(this.currentIndex>=this.note.length){
						this.currentIndex =0
					}
				},
			}
		}
	</script>
</script>

<style>
	
</style>