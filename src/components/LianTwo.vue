<template>
	<div class="two">
		<div class="destimgfonts2">
			<div class="destimgtop2">
				北欧混搭风设计，给人以心灵的纯粹
			</div>
			<hr color="#fff" width="3%" size=6px>
		</div>	
	</div>
	<div class="desthlxj2">
		<p class="desthlxjtitle2">混搭的设计，让各种色彩相互碰撞。</p>
		<p style="color: #666666;">
			北欧混搭设计，简单的搭配中，让人神往，给人以纯粹的美感。
		</p>
		<p style="color: #666666;">
			各种色彩相互搭配，交相辉映，衬托着彼此的美。
		</p>
		<p style="color: #666666;">
			不同的人有不同的喜好，但混搭风绝对会让人眼前一亮。
		</p>
		<p style="color: #666666;">
			这么美的搭配，这么好的地方，真会让人流连忘返。
		</p>
	</div>
	<div class="three">
		<div class="destimgfonts3">
			<div class="destimgtop3">仰望星空</div>
			<hr color="#fff" width="3%" size=6px>
			<div class="destimgfoot3">
				<router-link to="/info">
					<div class="destbor">阅读更多</div>
				</router-link>
			</div>
		</div>	
	</div>
</template>

<script>
</script>

<style>
	.two{
		margin-top: 30px;
		width: 100%;
		height: 550px;
		background: url(../assets/img/love/b.jpg) no-repeat ;
		background-position:bottom center;
		background-size:cover;
	}
	.destimgfonts2{
		text-align:center;
		padding-top: 210px;
		color: #fff;
		
	
	}
	.destimgtop2{
		
		font-size:30px;
		margin-bottom: 20px;
	}
	.desthlxj2{
		padding: 30px 0 ;
	
		padding-left: 500px;
	}
	.desthlxjtitle2{
		font-size: 20px;
	}
	
	.three{
		margin-top: 20px;
		width: 100%;
		height: 550px;
		background: url(../assets/img/love/c.jpg) no-repeat ;
		background-position:bottom center;
		background-size:cover;
		margin-bottom: 100px;
	}
	.destimgfonts3{
		text-align:center;
		padding-top: 210px;
		color: #fff;
	
	}
	.destimgtop3{
		
		font-size:40px;
		margin-bottom: 20px;
	}
	.destimgfoot3{
		margin-top: 35px;
	}
	.destbor{
		width: 118px;
		height: 44px;
		line-height:42px;
		border-radius:10px;
		text-align:center;
		font-size: 14px;
		color: #000;
		background: #fff;
		margin: auto;
	}
	.destbor:hover {
		background: rgba(0,0,0,0);
		color: #fff;
		transform: scale(1.05);
		transition: .1s;
	}
</style>
