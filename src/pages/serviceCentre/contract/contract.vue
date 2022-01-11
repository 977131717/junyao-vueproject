<template>
	<div class="contract">
		<div class="contract-banner">
			<img src="../../../assets/con-banner.jpg" alt="">
		</div>
		<div class="contract-textbox">
			<h3>合同生产</h3>
			<p>菌钥大健康一切以客户需求为重点</p>
			<p><b>客户的满意是菌钥服务的宗旨，截止2021年八月，菌钥的客户数量超过300家，客户满意度享誉全国。</b></p>
		</div>
		<div class="contract-main">
			<JyRotation :imglist="imglist"></JyRotation>
			<div class="contract-main-introduction">
				<h2 class="contract-main-fah2">公司实力雄厚</h2>
				<ul class="contract-main-ul1">
					<li>
						<h3>10000㎡</h3>
						<p>标准化洁净厂房</p>
					</li>
					<li>
						<h3>8000㎡</h3>
						<p>智能化立体库</p>
					</li>
					<li>
						<h3>3000㎡</h3>
						<p>十万级GMP车间</p>
					</li>
				</ul>
				<ul class="contract-main-ul1">
					<li>
						<h3>3000㎡</h3>
						<p>产品研发及质</p>
						<p>量检验实验室</p>
					</li>
					<li>
						<h3>15余条</h3>
						<p>各类生产线</p>
					</li>
					<li>
						<h3>14种</h3>
						<p>十万级GMP车间</p>
					</li>
				</ul>
				<h2 class="contract-main-toh2">我们为您提供：</h2>
				<ul class="contract-main-ul2">
					<li>全程安全高效</li>
					<li>严格的质量管理体系</li>
					<li>沟通货期内及时交货</li>
				</ul>
				<div class="contract-main-fotdiv">
					<ul>
						<li>生产透明可视化</li>
						<li>为客户着想，优化生产成本，提高生产质量</li>
						<li>强大的监测系统，监测生产过程</li>
					</ul>
					<h3>我们随时准备好为您服务~</h3>
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
	.contract-banner img {
		width: 100%;
		height: 10rem;
	}
	
	.contract-textbox {
		transform: translateY(-1.5rem);
		margin-left: 3.4rem;
	}
	
	.contract-textbox h3 {
		color: #009544;
		font-size: 0.4rem;
		margin-bottom: 0.5rem;
	}
	
	.contract-textbox p {
		font-size: 0.3rem;
		line-height: 0.5rem;
		font-weight: 400;
	}
	.contract-textbox p b{
		font-size: 0.18rem;
	}
	
	.contract-main-introduction{
		background-color: #F6F6F6;
		padding: 0.7rem 0;
	}
	.contract-main-fah2{
		text-align: center;
		font-size: 0.3rem;
		font-weight: 500;
		margin-bottom: 0.5rem;
	}
	.contract-main-ul1{
		margin: auto;
		display: flex;
		justify-content: space-between;
		width: 7.6rem;
	}
	.contract-main-ul1 li{
		background-color: #fff;
		box-shadow: 0px 0.01rem 0.04rem rgba(0, 0, 0, 0.16);
		width: 2rem;
		height: 2rem;
		margin: 0.3rem 0;
		text-align: center;
	}
	.contract-main-ul1 li h3{
		font-size: 0.4rem;
		font-weight: 500;
		color: #009544;
		margin-top: 0.64rem;
	}
	.contract-main-ul1 li p{
		font-size: 0.18rem;
	}
	.contract-main-toh2{
		width: 7.6rem;
		margin: auto;
		margin-top: 0.9rem;
		margin-bottom: 0.4rem;
	}
	.contract-main-ul2{
		margin: auto;
		display: flex;
		justify-content: space-between;
		width: 7.4rem;
		padding-left: 0.3rem;
	}
	.contract-main-ul2 li{
		position: relative;
	}
	.contract-main-ul2 li::before{
		content: '';
		position: absolute;
		width: 0.18rem;
		height: 0.18rem;
		border-radius: 50%;
		background-color: #7e7e7e;
		left: -0.25rem;
		top: 50%;
		transform: translateY(-50%);
	}
	.contract-main-fotdiv{
		width: 8.63rem;
		height: 3.05rem;
		margin:1.5rem auto;
		background-color: #fff;
		box-shadow: 0px 0.02rem 0.04rem rgba(0, 0, 0, 0.16);
		padding-top: 0.45rem;
		box-sizing: border-box;
	}
	.contract-main-fotdiv ul li{
		line-height: 0.6rem;
		position: relative;
		margin-left: 1rem;
	}
	.contract-main-fotdiv ul li::before{
		content: '';
		position: absolute;
		width: 0.18rem;
		height:0.18rem;
		border-radius:50%;
		background-color: #209344;
		top: 50%;
		transform: translateY(-50%);
		left: -0.4rem;
	}
	.contract-main-fotdiv h3{
		font-weight: 500;
		text-align: center;
		margin-top: 0.2rem;
	}
</style>
