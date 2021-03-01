<template>
	<Header4Index></Header4Index>
<div class="picList">
		<div class="container">
			<div class="pics">
				<!-- <div class="text">
					<h2>什么是热</h2>
					<hr class="line">
					<p>这些故事最近真的很受欢迎</p>
				</div> -->
				<div class="picitem" v-for="(p, i) in picList">
					<div class="picbox"  @mouseenter="enter(i)" @mouseleave="leave(i)">
						<img :src="require('../assets/'+p.pic)" :class="p.classPic">
						<div :class="p.classTit"><h2>{{p.title}}</h2></div>
						<div :class="p.classText"><p>{{p.picMsg}}</p></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Header4Index from './Header4Index.vue'
	export default {
			components: {},
			data(){
				return {
					picList:[
						{
							pic:'img/sixpic/01.jpg', 
							title:'体验芬兰式奢华的八处精华地点',
							picMsg:'很少有芬兰人觉得“奢华”就是指那些亮闪闪的东西和所谓的“大牌”。我们看重的是高品质和难忘的体验。这里就是体验芬兰式奢华的8处精华地点。',
							classPic:{pic2:true,big:false},
							classTit:{title:true,gotop:false},
							classText:{picMsg:true,clear:false},
						},
						{
							pic:'img/sixpic/02.jpg', 
							title:'在芬兰可持续旅游的十个贴士',
							picMsg:'即将来芬兰旅行，正在寻找环保的旅行贴士？这里就是芬兰可持续旅游的10个贴士。',
							classPic:{pic2:true,big:false},
							classTit:{title:true,gotop:false},
							classText:{picMsg:true,clear:false},
						},
						{
							pic:'img/sixpic/03.jpg',
							title:'欣赏芬兰的八种方式',
							picMsg:'可持续的生活方式在芬兰已经深入人心，是必不可少的要素——从食品到能源消费到设计到当地社区的福祉，无不如此。',
							classPic:{pic2:true,big:false},
							classTit:{title:true,gotop:false},
							classText:{picMsg:true,clear:false},
						 },
						{
							pic:'img/sixpic/04.jpg', 
							title:'芬兰：跳岛游的天堂',
							picMsg:'芬兰群岛由4万座大小岛屿构成，沿海岸线密密匝匝地排开，夏季的芬兰因此成为跳岛游的天堂。',
							classPic:{pic2:true,big:false},
							classTit:{title:true,gotop:false},
							classText:{picMsg:true,clear:false},
						},
						{
							pic:'img/sixpic/05.jpg',
							title:'芬兰国家公园巡礼',
							picMsg:'芬兰国家公园是具有独特自然特征的保护区。鼓励人们访问这些网站，它们提供了许多娱乐的可能性。',
							classPic:{pic2:true,big:false},
							classTit:{title:true,gotop:false},
							classText:{picMsg:true,clear:false},
						 },
						{
							pic:'img/sixpic/06.jpg',
							title:'两个人的浪漫拉普兰',
							picMsg:'在遥远的北方，有一个神奇的地方：只要你去到那里，就一定会爱上它。一碧如洗的天空，白雪皑皑的森林，惬意的小屋，可爱的毛茸茸的动物朋友们：芬兰拉普兰地区向你张开双臂，欢迎你前来探索这片人迹罕至的偏远静土。',
							classPic:{pic2:true,big:false},
							classTit:{title:true,gotop:false},
							classText:{picMsg:true,clear:false},
						 },
					],
				}
			},
			methods:{
				enter(index){
					this.picList[index].classPic.big = true
					this.picList[index].classTit.gotop = true
					this.picList[index].classText.clear = true
				},
				leave(index){
					this.picList[index].classPic.big = false
					this.picList[index].classTit.gotop = false
					this.picList[index].classText.clear = false
				},
			},
		}
</script>

<style>
	.picList {
		margin-left: 0%;
	}
	.title {
			position: absolute;
			top: 120px;
			left: 50%;
			transform: translateX(-50%);
			z-index: 10;
			background: #00000090;
			width: 100%;
		}
		.picMsg {
			position: absolute;
			background: #00000090;
			padding: 1em 1em;
			opacity: 0;
			bottom: 0;
			transition: all .5s;
		}
		p {
			margin: 0 auto;
			padding: 0;
			font-size: 14px;
			font-style: initial;
			color: #f1f1f1;
			width: 100%;
		}
		h2 {
			color: #fff;
		}
		.picList {
			background: #888;
		}
		.pics {				
			display: flex;
			width: 1200px;
			flex-wrap: wrap;
			margin-top: 500px;
		}
		.pics .picitem{		
			padding:17px 20px;
			width: 400px;
		}
		.pics .picitem .picbox {	
			overflow: hidden;
			position: relative;
			cursor: pointer;
		}
		.pics .picbox .pic2 {
			width: 100%;
			transition: all .5s;
		}
		.pics .picitem .picbox .title {
			position: absolute;
			text-align: center;
			color: #000;
			transition: all .5s;
		}
		.gotop {
			top: 10px;
		}
		.big {
			transform: scale(1.2);
		}
		.clear {
			opacity: 1;
		}
</style>
