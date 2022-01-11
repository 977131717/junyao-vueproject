<template>
	<div class="ensure">
		<div class="ensure-banner">
			<img src="../../../assets/ens-banner.jpg" alt="">
		</div>
		<div class="ensure-textbox">
			<h3>质量保证</h3>
			<p>菌钥大健康始终把质量要求放在首位，严格的质量管理确保每个产品的安全和风味。</p>
		</div>
		<div class="ensure-main">
			<JyRotation :imglist="imglist"></JyRotation>
			<div class="ensure-main-control">
				<h3>质量把控</h3>
				<p>通过严谨、技术、专业实现产品安全</p>
				<div class="ensure-main-bgdiv">
					<div class="ensure-bgdiv-chdiv">
						<h3>生产车间及管理体系符合GMP标准</h3>
						<ul>
							<li>
								我公司质量检验与分析测试中心
								，是一家集检测、校准、检验及技
								术服务为 一体的综合性第三方机构，
								是完全按照 中国合格评定认可委员会（CNAS ） 标准建立的实验室。
							</li>
							<li>
								我们的专业测试能力根植于多年的技术积累，我们拥有丰富的产品测试经
								验， 不仅能够完成自身产品质量控制，还能够提供独立、迅速，有针对性的测
								试 服务，帮助客户选择原材料、缩短产品研发周期、降低风险，提升产品的市 
								场价值。
							</li>
						</ul>
					</div>
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
	.ensure-banner img {
		width: 100%;
		height: 10rem;
	}
	
	.ensure-textbox {
		transform: translateY(-1.5rem);
		margin-left: 3.4rem;
	}
	
	.ensure-textbox h3 {
		color: #009544;
		font-size: 0.4rem;
		margin-bottom: 0.5rem;
	}
	
	.ensure-textbox p {
		line-height: 0.5rem;
	}
	.ensure-main-control{
		background-color: #F6F6F6;
		margin-top: 1rem;
		padding-top: 1rem;
	}
	.ensure-main-control>h3{
		text-align: center;
		font-size: 0.34rem;
		font-weight: 500;
	}
	.ensure-main-control>p{
		text-align: center;
		font-size: 0.2rem;
		margin: 0.4rem 0;
	}
	.ensure-main-bgdiv{
		margin-top: 0.8rem;
		background-image: url(../../../assets/ens-fotbg.jpg);
		background-repeat: no-repeat;
		background-size: 100% 100%;
		height: 10.80rem;
		padding: 1.14rem 0;
		box-sizing: border-box;
	}
	.ensure-bgdiv-chdiv{
		margin: auto;
		width: 8.66rem;
		height: 8.53rem;
		background: #FFFFFF;
		box-shadow: 0px 0.02rem 0.04rem rgba(0, 0, 0, 0.16);
		opacity: 0.9;
		padding-top: 1.1rem;
		box-sizing: border-box;
	}
	.ensure-bgdiv-chdiv h3{
		font-size: 0.34rem;
		font-weight: 600;
		text-align: center;
	}
	.ensure-bgdiv-chdiv ul{
		width: 5.14rem;
		margin: 0.4rem auto;
		border-top: 0.02rem #A8A7A7 dashed;
	}
	.ensure-bgdiv-chdiv ul li{
		margin-top: 1.1rem;
		line-height: 0.4rem;
	}
</style>
