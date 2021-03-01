<<<<<<< HEAD

<template>
	<div class="fivecontainer">
		<transition v-for="(item, i) in itemList">
			<div class="fivepicBox" v-show="i==currentItem">
				<p class="fivep">拉普兰期待你的到来</p>
				<img :src="itemList[currentItem]">
			</div>
		</transition>
		<div class="fivecontrolleft" @click="prev">
			<span class="fa fa-chevron-left fa-4x"></span>
		</div>
		<div class="fivecontrolright" @click="next">
			<span class="fa fa-chevron-right fa-4x"></span>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				itemList:[
				require('../assets/img/fiveimg/06.jpg'),
				require('../assets/img/fiveimg/07.jpg'),
				require('../assets/img/fiveimg/08.jpg'),
				require('../assets/img/fiveimg/04.jpg'),
			],
			currentItem:0,
				
			}
		},
		methods:{
			prev(){
				this.currentItem--
				if(this.currentItem<0){
					this.currentItem=this.itemList.length-1
				}
			},
			next(){
				this.currentItem++
				if(this.currentItem >= this.itemList.length){
					this.currentItem = 0
				}
			},
		},
	}
	
</script>

<style>
	.fivecontainer {
		position: relative;
		text-align: center;
		margin-top: 120px;
		
		height: 700px;
	}
	.fivepicBox {
		padding: 20px 40px;
		width:100%;
		height: 700px;
		/* text-align: center; */
		/* margin: 20PX auto; */
		position: absolute;
	}
	.fivepicBox img{
		width:1249px;
		height:700px;
		/* position: absolute; */
		margin-left: 0%;
		/* margin-bottom: 50px; */
		overflow-x: hidden;
	}
	.fivepicBox .fivep {
		position: absolute;
		color: #FFF;
		left: 0;
		padding-top: 300px;
		font-size: 30px;
	}
	.fivecontrolleft {
		color: #fff;
		display: inline-block;
		margin-right: 400px;
		padding-top: 370px;
		cursor: pointer;
		position: relative;
	}
	.fivecontrolright {
		color: #fff;
		display: inline-block;
		margin-left: 400px;
		padding-top: 370px;
		cursor: pointer;
		position: relative;
	}
	.v-enter-from {			/*显示动画开始时，完全透明*/
		/*opacity: 0;*/		
		transform: translateX(100%);
	}
	.v-enter-active {
		transition: all  .5s;
	}
	.v-enter-to {			/*显示动态结束时，完全透明*/
		/* opacity:  1;	 */
		transform: translateX(0%);
	}
	.v-leave-from {			/*隐藏开始时，完全不透明*/
		/* opacity:  1;		 */
		transform: translateX(0%);
	}
	.v-leave-active {
		transition:  all  .5s;
	}
	.v-leave-to {			/*隐藏结束时，完全透明*/
		/* opacity: 0;		   */
		transform: translateX(-100%);
	}
</style>
=======
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
>>>>>>> 695bc92f2e1afc1b07b5ca72ed9b0562a2ca5413
