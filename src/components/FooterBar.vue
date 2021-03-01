<template>
	<!-- 首页、来芬兰旅行、芬兰万象、目的地、季节、主题、其他网站-->
	<div class="footer">
<<<<<<< HEAD
		<div class="container002">
=======
		<div class="container2">
>>>>>>> 695bc92f2e1afc1b07b5ca72ed9b0562a2ca5413
			<div class="servicelist">
				<div class="services">
	
	
					<div class="service">
<<<<<<< HEAD
						<router-link to="/">首页</router-link>
=======
						<a href="">首页</a>
>>>>>>> 695bc92f2e1afc1b07b5ca72ed9b0562a2ca5413
						<ul>
						</ul>
					</div>
	
					<div class="service">
<<<<<<< HEAD
						<router-link to="/info">旅游信息</router-link>
=======
						<a href="">来芬兰旅行</a>
>>>>>>> 695bc92f2e1afc1b07b5ca72ed9b0562a2ca5413
						<ul>
							<li>
								<a href="#">
									<span class="fa fa-long-arrow-right">驻足芬兰</span>
								</a>
							</li>
							
						</ul>
					</div>
	
					<div class="service">
<<<<<<< HEAD
						<router-link to="/dest">目的地</router-link>
						<!-- <a href="">目的地</a> -->
=======
						<a href="">芬兰万象</a>
						<ul>
							<li>
								<a href="#">
									<span class="fa fa-long-arrow-right">可持续的芬兰</span>
								</a>
							</li>
						</ul>
					</div>
	
					<div class="service">
						<a href="">目的地</a>
>>>>>>> 695bc92f2e1afc1b07b5ca72ed9b0562a2ca5413
						<ul>
							<li>
								<a href="#">
									<span class="fa fa-long-arrow-right">拉普兰</span>
								</a>
							</li>
							<li>
								<a href="#">
									<span class="fa fa-long-arrow-right">湖区</span>
								</a>
							</li>
							<li>
								<a href="#">
									<span class="fa fa-long-arrow-right">赫尔辛基</span>
								</a>
							</li>
							<li>
								<a href="#">
									<span class="fa fa-long-arrow-right">海岸与群岛</span>
								</a>
							</li>
						</ul>
					</div>
	
					<div class="service">
<<<<<<< HEAD
						<router-link to="/seasons">季节</router-link>
=======
						<a href="">季节</a>
>>>>>>> 695bc92f2e1afc1b07b5ca72ed9b0562a2ca5413
						<ul>
							<li>
								<a href="#">
									<span class="fa fa-long-arrow-right">夏季</span>
								</a>
							</li>
							<li>
								<a href="#">
									<span class="fa fa-long-arrow-right">秋季</span>
								</a>
							</li>
							<li>
								<a href="#">
									<span class="fa fa-long-arrow-right">冬季</span>
								</a>
							</li>
							<li>
								<a href="#">
									<span class="fa fa-long-arrow-right">春季</span>
								</a>
							</li>
						</ul>
					</div>
	
					<div class="service">
<<<<<<< HEAD
						<router-link to="/experiences">主题</router-link>
=======
						<a href="">主题</a>
>>>>>>> 695bc92f2e1afc1b07b5ca72ed9b0562a2ca5413
						<ul>
							<li>
								<a href="#">
									<span class="fa fa-long-arrow-right">文化</span>
								</a>
							</li>
							<li>
								<a href="#">
									<span class="fa fa-long-arrow-right">芬兰养生游</span>
								</a>
							</li>
							<li>
								<a href="#">
									<span class="fa fa-long-arrow-right">户外与运动</span>
								</a>
							</li>
							<li>
								<a href="#">
									<span class="fa fa-long-arrow-right">芬兰的美味</span>
								</a>
							</li>
							<li>
								<a href="#">
									<span class="fa fa-long-arrow-right">芬兰式奢华</span>
								</a>
							</li>
						</ul>
					</div>
	
					<div class="service">
						<a href="">其他网站</a>
						<ul>
							<li>
								<a href="#">
									<span class="fa fa-long-arrow-right">媒体</span>
								</a>
							</li>
							<li>
								<a href="#">
									<span class="fa fa-long-arrow-right">旅游贸易</span>
								</a>
							</li>
							<li>
								<a href="#">
									<span class="fa fa-long-arrow-right">芬兰会议局</span>
								</a>
							</li>
						</ul>
					</div>
	
				</div>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style>
<<<<<<< HEAD
	.footer {
		margin-left:05%;
	}
	.container002 {
		/* width: 1200px;
		height: 234px; */
		border-top: 1px dashed #000000;/*上边框*/
		/* border-bottom: 1px dashed #000000; *//*下边框*/
	  /*  margin: auto; */
=======
	.container2 {
		width: 1200px;
		height: 234px;
		border-top: 1px dashed #000000;/*上边框*/
		border-bottom: 1px dashed #000000;/*下边框*/
	    margin: auto;
>>>>>>> 695bc92f2e1afc1b07b5ca72ed9b0562a2ca5413
		
	}
	
	.servicelist {
		/*弹性父容器*/
		display: flex;
<<<<<<< HEAD
		
=======
>>>>>>> 695bc92f2e1afc1b07b5ca72ed9b0562a2ca5413
	}
	
	.servicelist .services {
		/*弹性子元素，同时也是一个弹性父容器*/
		/*服务列表*/
		flex: 1;
		display: flex;
		border-bottom: 1px;
<<<<<<< HEAD
		text-align:center;
		width: 1200px;
		height: 234px;
=======
>>>>>>> 695bc92f2e1afc1b07b5ca72ed9b0562a2ca5413
	}
	
	.servicelist .service {
		/*一个服务*/
		flex: 1;
		text-align: left;
		margin: 10px;
		padding-bottom: 10px;
		
	}
	
	.service a {
		color: #666;
		font-size: 19px;
		
	}
	
	.service ul {
		border-top: 1px dashed #666;
		/* margin: 10px;
		 */
	}
	
	.service ul a {
		font-size: 14px;
		
	}
	
	
	li {
		list-style: none;
		/*清除列表项前的提示符号*/
	
	}
</style>
