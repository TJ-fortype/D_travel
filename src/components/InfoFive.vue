<template>
	<div class="infocontainer4">
		<!--左切换按钮-->
		
		<div class="infocarouselleft" >
			<!--旅游信息-->
			<p class="infocarousellefttop1"> 旅 游 信 息</p>
			<p class="infocarousellefttop2">选择交通工具</p>
			<p class="infocarousellefttop3">
				坐飞机 ---
			<span class="fa fa-plane fa-2x plane"></span>	
			</p>
			<p class="infocarousellefttop4">芬兰共有27个机场，其中5个机场均有定期国际航班服务。芬兰的主要门户是赫尔辛基万塔国际机场。最北端的机场位于拉普兰的依瓦洛（Ivalo），距离北极圈约250公里。</p>
			<!--交通工具-->
			<div class="infocarouselleftright">
				
			</div>
		</div>
		<!--右切换按钮-->
		<!--旅游出行工具地图-->
		<div class="infocarouselright">
			<img src="../assets/img/info/map021.png" alt="">
		</div>
	</div>
</template>

<script>

	
</script>

<style>
	.infocontainer4{
		padding: 20px 40px;
		width: 100%;
		height: 550px;
		background: url(../assets/img/info/021.jpg)no-repeat  center;
		background-size: cover; 
		
	}
	.infocarouselleft{
		float: left;
		width: 600px;
		/* text-align:left; */
		/* color: #fff; */
		margin-top: 20px;
		margin-left:60px;
	}
	.infocarousellefttop1{
		text-align:left;
		font-weight: bold;
		color: #fff;
		font-size: 40px;
		margin-bottom: 20px;
	}
	.infocarousellefttop2{
		text-align:left;
		font-weight: bold;
		color: #fff;
		font-size:14px;
	}
	.infocarousellefttop3{
		text-align:left;
		font-weight: bold;
		color: #fff;
		font-size:20px;
	}
	.infocarousellefttop4{
		text-align:left;
		color: #fff;
		font-size:14px;
	}
	.infocarouselright{
		float: right;
		padding-right: 50px;
	}
	.plane{
		color: #FC5113;
	}
</style>
