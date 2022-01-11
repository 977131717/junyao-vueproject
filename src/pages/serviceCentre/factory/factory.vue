<template>
	<div class="factory">
		<div class="factory-banner">
			<img src="../../../assets/fac-banner.jpg" alt="">
		</div>
		<div class="factory-textbox">
			<h3>智造工厂</h3>
			<p>江苏菌钥生命科技发展有限公司（以下简称：菌钥大健康），是一家立足于大健康产业的大型现代化中药发酵生产和质量管理的的高新技术企业。</p>
			<p> 工厂成立于2015年9月，占地面积270亩，总投资7.5亿元，建造完成<b>中国第一套全自动中药发酵GMP工厂。</b></p>
		</div>
		<div class="factory-main">
			<JyRotation :imglist="imglist"></JyRotation>
			<div class="factory-fottext">
				<div>
					<p>
						<span>菌钥大健康</span>是集中草药培植、中药发酵菌种选育、中药现代化、中药发酵产业化、医学健康
						研究、国学养生、会展体验为一体的综合性生命科技产业园，结合中医自然医
						学理论和科技成果转 化，采用微生态学、仿生学的方法，通过酶解加发酵的
						多维作用，以现代化、自动化大型工业微生 态技术为基础，以地产新鲜果蔬
						和道地中草药为原料，为客户提供功能性系列食品及新型中药发酵制品。
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import JyRotation from '../../../components/jy-Rotation/index.vue'
	export default {
		components:{
			JyRotation
		},
		data(){
			return{
				imglist:[
					'static/images/fac-zou1.jpg',
					'static/images/fac-zou1.jpg',
					'static/images/fac-zou1.jpg'
				]
			}
		},
	}
</script>

<style>
	.factory-banner img {
		width: 100%;
		height: 10rem;
	}
	
	.factory-textbox {
		transform: translateY(-1.5rem);
		margin-left: 3.4rem;
	}
	
	.factory-textbox h3 {
		color: #009544;
		font-size: 0.4rem;
		margin-bottom: 0.5rem;
	}
	
	.factory-textbox p {
		font-size: 0.18rem;
		line-height: 0.5rem;
	}
	.factory-textbox p b{
		font-weight: 500;
	}
	.factory-fottext{
		background-color: #F6F6F6;
		padding: 1.65rem 0;
	}
	.factory-fottext div{
		width: 9.60rem;
		height: 4.79rem;
		margin: auto;
		padding: 1.46rem 0.93rem;
		box-sizing: border-box;
		background-color: #fff;
		position: relative;
	}
	.factory-fottext div::after{
		content: "";
		position: absolute;
		width: 1rem;
		height: 1rem;
		background-image: url(../../../assets/fac-mao2.png);
		background-repeat: no-repeat;
		background-size: 100% 100%;
		right: 0.4rem;
	}
	.factory-fottext div::before{
		content: "";
		position: absolute;
		width: 1rem;
		height: 1rem;
		background-image: url(../../../assets/fac-mao1.png);
		background-repeat: no-repeat;
		background-size: 100% 100%;
		left: 0.6rem;
		top: 0.6rem;
	}
	.factory-fottext div p{
		line-height: 0.4rem;
	}
	.factory-fottext div p span{
		font-size: 0.28rem;
		color: #009544;
		font-weight: 500;
	}
</style>
