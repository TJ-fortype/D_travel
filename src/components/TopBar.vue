
<template>
<div class="topbar">
	<div class="container">
		<div class="logo">
			<a href="#"><i class="fa fa-ravelry" aria-hidden="true"></i>Dream-Travel</a>
		</div>
		<ul class="menu">
			<li>
				<router-link to="/">首页</router-link>
			</li>
			<li>
				<router-link to="/info">旅游信息</router-link>
			</li>
			<li>
				<router-link to="/dest">目的地</router-link>
			</li>
			<li>
				<router-link to="/seasons">季节</router-link>
			</li>
			<li>
				<router-link to="/experiences">主题</router-link>
			</li>
		</ul>
		<div class="col" >
			<router-link to="/mf" @mouseenter="openDropdown" @mouseleave="hideDropdown">
				<i class="fa fa-heart-o">
					<div>我喜爱的</div>
				</i>
			</router-link>
			<div :class="dropdownMsg">
				<li v-for="m in myFavorites">
					{{m}}
				</li>
			</div>
		</div>
	</div>
</div>
</template>

<script>
	export default {
		components:{},
		data(){
			return{
				myFavorites:[
					'文化','旅游','美食',
				],
				dropdownMsg:{
					dropdown:true,
					open:false,
				},
			}
		},
		methods:{
			openDropdown(){
				this.dropdownMsg.open = true
				console.log("啊啊啊进来了")
			},
			hideDropdown(){
				this.dropdownMsg.open = false
			},
			
		}
		
	}
</script>

<style>
	.topbar .container{
		display: flex;
		text-align: center;
		
	}
	.container .menu li{
		color: #999999;
	}
	.container .logo {
		flex: 1;
		display: inline-block;
		opacity:0.7;  
		font:30px/25px 'Microsoft yahei'; 
		/* -webkit-box-reflect: below 1px -webkit-gradient(linear, center top, center bottom, from(transparent),color-stop(0.2, transparent), to(white)); */
	}
	/* 页面列表 */
	.container .menu {
		flex: 2;
		display: flex;
		color: #999999;
		vertical-align: middle;
	}
	/* 页面列表中的选择 */
	.container .menu li {
		flex: 1;
		font-size: 16px;
		position: relative;
		border-left: 1px solid #fff;
	}
	.container .menu li a{
		transform: translateX(-50%);
		position: absolute;
		top: 5px;
	}
	.container .col {
		flex: .5;
		position: relative;
		font-size: 16px;
		border-left: 1px solid #fff;
	}
	.col .dropdown {
		display: none;
		position: absolute;
		border: 1px solid #fff;
		padding: 2em 3em;
		background: #999;
	}
	.container .col .open{
		display: block;
	}
</style>
