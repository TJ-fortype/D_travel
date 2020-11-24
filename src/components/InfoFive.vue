<template>
	<div class="infocontainer4">
		<!--左切换按钮-->
		<div class="controlleft">
			<span class="fa fa-chevron-left fa-4x"></span>
		</div>
		
		<div class="infocarouselleft">
			<!--旅游信息-->
			<div class="infocarousellefttop">
			<p class=""> 旅 游 信 息</p>
			<p class="">选择交通工具</p>
			 
			</div>
			<!--交通工具-->
			<div class="infocarouselleftright">
				
			</div>
		</div>
		<!--右切换按钮-->
		<div class="controlright">
			<span class="fa fa-chevron-right fa-4x"></span>
		</div>
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
		color: #fff;
		margin-left:60px;
	}
	.infocarousellefttop{
		font-size: 40px;
	}
	.infocarouselright{
		float: right;
		padding-right: 50px;
	}
	
	.controlright{
		line-height: 550px;
		float: right;
	}
	.controlleft{
		line-height: 550px;
		float: left;
	}
	
</style>
