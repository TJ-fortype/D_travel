<template>
	<transition>
		<div v-show="isShow">
		<img :src="note[currentIndex]">
		<h3>普拉兰</h3>
		<hr color="#fff" width="3%" size=6px>
		</div>
	</transition>
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

<style>
	.v-rnter-from {
		transform: translateX(100%);
	}
	.v-rnter-active {
		transform: all .3s;
	}
	.v-rnter-to {
		transform: translateX(0%);
	}
	.v-rnter-from {
		transform: translateX(0%);
	}
	.v-leave-active {
		transform: all .3s;
	}
	.v-leave-to {
		transform: translateX(-100%);
	}

</style>
