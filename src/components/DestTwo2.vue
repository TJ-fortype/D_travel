<template>
	<div class="desttopimg2">
		<div class="destimgfonts2">
			<div class="destimgtop2">
				赫尔辛基是自然与都市交汇的地方。建筑艺术邂逅<br>
				北欧设计。桑拿房向市民和游客敞开大门。
			</div>
			<hr color="#fff" width="3%" size=6px>
		</div>	
	</div>
	<div class="desthlxj2">
		<p style="color:#666666;font-size: 20px;">这就是芬兰的赫尔辛基地区 。</p>
		<p style="color: #666666;">
			赫尔辛基最好的部分是那些海滩、森林、葱翠的街道和小池塘。不难看出，芬兰人真的与大自然融为一体。
		</p>
		<p style="color: #666666;">新鲜的本地美食。集市与商场。街头美味。节庆与文化活动。闲适又活跃的都市生活。可持续性。
		</p>
		<p style="color: #666666;">尔辛基地区充满历史传承。匠人传统。可爱的木屋小镇与曾经的铸铁村落。群岛与海上生活方式。
		</p>
		<p style="color: #666666;">
			这里的四季、四季不同的色彩以及清新的空气让我一见钟情。
		</p>
	</div>
	<div class="desttopimg3">
		<div class="destimgfonts3">
			<div class="destimgtop3">如何抵达赫尔辛基</div>
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
	.desttopimg2{
		margin-top: 30px;
		width: 100%;
		height: 550px;
		background: url(../assets/img/dest/hlxj6.jpg) no-repeat ;
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
		padding: 40px 0 ;
		text-align:center;
	/* 	border: 1px solid #20B2AA; */
	}
	.desthlxjtitle2{
		font-size: 20px;
		color: #666666;
	}
	
	.desttopimg3{
		margin-top: 20px;
		width: 100%;
		height: 550px;
		background: url(../assets/img/dest/hlxj3.jpg) no-repeat ;
		background-position:bottom center;
		background-size:cover;
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
		border: 2px solid #fff;
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
