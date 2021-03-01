<template>
	<div class="caca">
		<div class="container">
			<div class="carousel">
				<img :src="note[currentIndex]">
				
				<div class="fn"  v-for="f  in  fivenote">
					<h4>{{f.title}}</h4>
					<h1>{{f.addr}}</h1>
					<hr>
				</div>
				<div class="ditu">
					<img src="../assets/img/lunbo/03.jpg">
				    <div class="locate">
						<img src="../assets/img/lunbo/04.jpg">
					</div>
					<a class="more" href="#"><div class="yuedu">圣诞老人：“你说吧”</div></a>
				</div>
				
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
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				note: [
					require('../assets/img/lunbo/01.jpg'),
					require('../assets/img/lunbo/02.jpg'),
					require('../assets/img/lunbo/03.jpg'),
					require('../assets/img/lunbo/04.jpg'),
				],
				currentIndex: 0,
				fivenote: [
					{title: '内容精选',addr: '今年圣诞，让圣诞老人替你说出心里话'},
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
	.caca {
		position: relative;
		display: block;
		height: 800px;
		width: 1549px;
		overflow-x: hidden;
		background-size: cover;
		bottom: 0;
		margin-top: 50px;
		right: 100px;
		
	}
	.carousel img {
		position: absolute;
		overflow-y: hidden;
		z-index: -2;
		width: 1400px;
		height: 700px;
		background-size: cover;
	}
	
	.carousel  .control {
		width: 50px;
		height: 60px;
		opacity: 0.2;
		text-align: center;
	}
	.carousel  .control:hover {
		opacity: 0.6;
	}
	.carousel  .control  .fa {
		line-height: 10px;
		color: #fff;
		position: relative;
		z-index: -2;
	}
	
	.carousel  .control.left {
		float: left;
		margin-left: 130px;
		margin-top: 340px;
		position: relative;
	}
	.carousel  .control.right {
		float: right;
		margin-right: 5px;
		margin-top: 340px;
		margin-left: 2px;
	}
	
	.carousel  .indicators {
	}
	.carousel  .indicators  li{
		width: 18px;
		height: 18px;
		background: rgba(0,0,0,0);
		border-radius: 50%;
		float: right;
		margin-top: 620px;
		margin-left:10px ;
		cursor: pointer;
		border: 1px solid #fff;
	}
	
	.carousel  .indicators  li.active {
		background: #f90;
	}
	.fn {
		position: absolute;
		top: 30%;
		left: 29%;
		text-align: center;
	
	}
	h4 {
		color: #FFFFFF;
		font-size: 17px;
		font-weight: 400;
		margin: 0;
	}
	h1 {
		color: #FFFFFF;
		font-size: 45px;
		font-weight: lighter;
		margin: 0;
	}
	hr {
		height: 4px;
		width: 40px;
		background: #fff;
		border: none;
	}
	.ditu {
		display: block;
	/* 	position: relative; */
		text-align: center;
	}
	 .ditu img {
		position: absolute;
		top: 0%;
		width: 0px;
		height: 0px;
		transform: scale(.6);
	} 
	.ditu .yuedu {
		position: absolute;
		left: 50%;
		top: 60%;
		border: 1px solid #fff;
		background: #fff;
	    border-radius: 10px;
		width: 140px;
	}
	.yuedu:hover {
		background: rgba(0,0,0,0);
		color: #fff;
	}
	
	.more {
		display: block;
		color: #0e0e0e;
		line-height: 35px;
		width: 110px;
		height: 37px;
		margin: auto;
		padding-top: 20px;
		
	}
	.more:hover {
		color: #fff;
	}
</style>
