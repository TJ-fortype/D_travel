<template>
		<div class="container">
			<div class="carousel">
				<img :src="note[currentIndex]">
			</div>
			<div class="fn"  v-for="f  in  fivenote">
				<h1>{{f.addr}}</h1>
				<hr>
			</div>
			<div class="ditu">
				<img src="../assets/img/fiveimg/map04.png">
			</div>
				<div class="locate">
				<img src="../assets/img/fiveimg/map05.png">
			</div>
			<a class="more" href="#"><div class="yuedu">阅读更多</div></a>
			
			<div class="control  left" @click="prev">
				<span class="fa fa-chevron-left fa-4x"></span>
			</div>
			<div class="control  right" @click="next">
				<span class="fa fa-chevron-right fa-4x"></span>
			</div>
				
			<ul class="indicators">
				<li class="active"></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
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

<style>
	.container {
		display: block;
		height: 750px;
		width: 1349px;
		overflow-x: hidden;
		background-size: cover;
		bottom: 0;
	}
	.container .carousel{
		display: inline-block;		/*图片同行显示所有图片将全在一行，下张图片插入使给x轴平移1600px*/
		position: absolute;
		background-size: cover;
	}
	.carousel img {
		position: absolute;
		overflow-y: hidden;
		z-index: -2;
		width: 1349px;
		height: 700px;
		background-size: cover;
	}
	
	.control {
		width: 38px;
		height: 48px;
		opacity: 0.7;
		color: #fff;
		position: relative;
	}
	.control:hover {
		opacity: 1;
	}
	
	.control.left {
		position: absolute;
		margin-top: 340px;
		padding-left: 10%;
		
	}
	.control.right {
		float: right;
		position: absolute;
		margin-top: 340px;
		padding-right: 10%;
	}
	 .indicators  li{
		width: 18px;
		height: 18px;
		background: rgba(0,0,0,0);
		border-radius: 50%;
		float: right;
		margin: 0  5px;
		cursor: pointer;
		border: 1px solid #fff;
	}
	
	.indicators  li.active {
		background: #f90;
	}
	.container .fn {
		position: absolute;
		padding-top: 8%;
		left: 50%;
		transform: translateX(-50%);
		font-size: 50px;
		color: #fff;
	}
	.fn h1 {
		font-size: 45px;
		font-weight: lighter;
		margin: 0;
		color: #fff;
	}
	.fn hr {
		height: 4px;
		width: 40px;
		background: #fff;
		border: none;
	}
	.ditu {
		position: absolute;
		padding-top: 26%;
		left: 42%;
		transform: scale(.5);
		width: 90px;
		height: 218px;
	}
	.locate {
		position: absolute;
		width: 10px;
		height: 15px;
		padding-top: 25%;
		left: 49%;
	}

	.more {
		display: block;
		position: absolute;
		left: 45%;
		color: #0e0e0e;
		padding-top: 520px;
	}
	.more:hover {
		color: #fff;
	}
	.yuedu {
		border: 1px solid #fff;
		background: #fff;
		line-height: 44px;
		width: 118px;
		height: 44px;
		border-radius: 10px;
		text-align: center;
	}
	.yuedu:hover {
		background: rgba(0,0,0,0);
		color: #fff;
	}
</style>
