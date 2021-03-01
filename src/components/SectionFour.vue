<template>
	<div class="picList">
		<div class="container">
	
			<div class="pics">
				<div class="picitem" v-for="(p, i) in picList">
					
					<div class="picbox"  @mouseenter="enter(i)" @mouseleave="leave(i)">
						<img :src="require('../assets/'+p.pic)" :class="p.classPic">
						<!-- 属性绑定 -->
						<div :class="p.classTit"><h2>{{p.title}}</h2></div>
						<div :class="p.classText"><p>{{p.picMsg}}</p></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		//1
		components: {},
		//2
		data() {
			return {
				picList: [
					{
						pic: 'theme/Julia_Kivela_Savonlinna_couple_lake_castle-400x300.jpg',
						title: '让你怦然心动的21种芬兰秒物',
						picMsg: '说到芬兰和芬兰人，不知不觉地爱上这方水土和这方人的原因有很多（根据最新的排行榜，芬兰人是世界上最幸福的国民），不胜枚举。这里先列上几条，你不妨自己来评评看！',
						classPic: {pic2: true,big: false},
						classTit: {title: true,big: false},
						classText: {picMsg: true,clear: false},
				    }, 
					{
						pic: 'theme/Lahti_winter_Husky_Koirakikka_by_Julia_Kivela_High_Finland-400x300.jpg',
						title: '来芬兰不容错过的十件事',
						picMsg: '朝思暮想着来芬兰度假，却吃不准究竟哪些是最不容错过的？不用到处找了，官方攻略在这里。',
						classPic: {pic2: true,big: false},
						classTit: {title: true,big: false},
						classText: {picMsg: true,clear: false},
					}, 
					{
						pic: 'theme/Berries-on-a-hand-Kumpula-Helsinki-Finland-400x300.jpg',
						title: '在芬兰可持续旅游的10个提示',
						picMsg: '正在筹划到芬兰旅行，却有点担心旅程对环境可能造成的影响？',
						classPic: {pic2: true,big: false},
						classTit: {title: true,big: false},
						classText: {picMsg: true,clear: false},
					}, 
					{
						pic: 'theme/Finland_Tampere_Hiedanranta_graffiti_photoby_LauraVanzo_VisitTampere-400x300.jpg',
						title: '欣赏芬兰的8种方式',
						picMsg: '可持续性的理念，对于芬兰人来说是自然而然的。这是深深埋入我们DNA的一种生活方式，是我们与大自然亲密关系的产物。',
						classPic: {pic2: true,big: false},
						classTit: {title: true,big: false},
						classText: {picMsg: true,clear: false},
					}, 
					{
						pic: 'theme/HKI_8M0A6534-400x300.jpg',
						title: '赫尔辛基设计区',
						picMsg: '位于赫尔辛基市心脏地带的设计区，是一个充满活力的创意中心。来到芬兰首都，无论是慕名而来还是惊喜邂逅，只要是在这里流连，你每走一步都能踏出设计的音符。',
						classPic: {pic2: true,big: false},
						classTit: {title: true,big: false},
						classText: {picMsg: true,clear: false},
					}, 
					{
						pic: 'theme/L1004018-kopio_7936-400x300.jpg',
						title: '静思的空间——芬兰艺术与文化之旅',
						picMsg: '在芬兰欣赏艺术与文化，就如同走入往昔的传说故事之中，又像是在预览这个国家可持续未来的图景。',
						classPic: {pic2: true,big: false},
						classTit: {title: true,big: false},
						classText: {picMsg: true,clear: false},
					}, 
				],
			}
		},
		//3
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
		background-color: white;
		margin-left: 0%;
		margin-top: 330px;
	    margin-bottom: 30px;
	
	}
	.title {
		position: absolute;
		top: 120px;
		left: 50%;
		transform: translateX(-50%);
		z-index: 10;
		/* background: #00000090; */
		width: 100%;
	}
	.picMsg {
		position: absolute;
		background: #00000090;
		padding: 1em 1em;
		/* 图片字体透明度 */
		opacity: 0;
		bottom: 0;
		/* 延时效果 */
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

	.pics {				
		display: flex;
		width: 1200px;
		flex-wrap: wrap;
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
