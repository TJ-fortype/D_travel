<template>
	<div class="twomain">
		<div class="container">
			<!--标题部分-->
			<Header4Index></Header4Index>
			
			<!--图片部分-->
			<div class="bgimg">
				<div class="imgfont">
					<div class="imgtop">
						在新冠病毒流行期间前往芬兰的旅行者的实用信息
					</div>
					<div class="imgfoot">
						<a href="#">
							<div class="bor">阅读更多</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Header4Index from './Header4Index.vue'
	// import ReadMore from './ReadMore.vue'
	export default {
		//注册当前组件中可以使用的子组件
		components: {Header4Index,}
	}
</script>

<style>
	.container{
			width: 100%;
			height: 722px;
			/* background: #000; */
		}
	
	.twomain .bgimg{
		position: absolute;
		width: 100%;
		height:550px;
		background-image: url(../assets/img/Two.jpg);
		background-position:center center;
		background-repeat: no-repeat-center;
		background-size: cover; 
	}
	.imgfont{
		position: relative;
		width: 770px;
		height: 233px;
		/* border: 1px solid #0066FF; */
		margin: auto;
		color: #fff;
		margin-top: 150PX;
	}
	.imgtop{
		font-size: 42PX;
		text-align:center;
		/* border:1px solid #0f0; */
	}
	.imgfoot{
		margin-top: 35px;
		/* border: 1px solid #20B2AA; */
	}
	.bor{
		width: 118px;
		height: 44px;
		line-height:42px;
		border-radius:10px;
		text-align:center;
		font-size: 14px;
		color: #000;
		border: 2px solid #fff;
		background: #fff;
		margin: auto;
	}
	.bor:hover {
		background: rgba(0,0,0,0);
		color: #999;
		transform: scale(1.05);
		transition: .1s;
	}
</style>
