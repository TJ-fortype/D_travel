<template>
	<div class="carousel4">
		<transition v-for="(item, i) in itemList">
			<div class="picBox" v-show="i==currentItem">
				<img :src="itemList[currentItem]" alt="">
			<!-- 	<p>{{tit}}</p> -->
				<!-- <p>{{}}</p> -->
			</div>
		</transition>
		<div class="controlleft4" @click="prev">
			<span class="fa fa-chevron-left fa-4x"></span>
		</div>
		<div class="controlright4" @click="next">
			<span class="fa fa-chevron-right fa-4x"></span>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				itemList:[
				require('../assets/img/info/021.jpg'),
				require('../assets/img/info/022.jpg'),
				require('../assets/img/info/023.jpg'),
				require('../assets/img/info/024.jpg'),
				require('../assets/img/info/025.jpg'),
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
	.carousel4 {
		position: relative;
		text-align: center;
		height: 550px;
	}
	.picBox{
		padding: 20px 40px;
		width:100%;
		height: 550px;
		
		text-align: center;
		/* margin: 20PX auto; */
		position: absolute;
	}
	.picBox img{
		width:1100px;
		height:400px;
		margin-bottom: 50px;
	}
	/* .controlrigh4{
		line-height: 400px;
		margin-left: 1000px;
		
		cursor: pointer;
		position: absolute;
	} */
	.controlleft4{
		display: inline-block;
		margin-right: 400px;
		padding-top: 190px;
		cursor: pointer;
		position: relative;
	}
	.controlright4{
		display: inline-block;
		margin-left: 400px;
		padding-top: 190px;
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
