<template>
	<div class="attest">
		<div class="attest-banner">
			<img src="../../../assets/att-banner.jpg" alt="">
		</div>
		<div class="attest-textbox">
			<h3>资质认证</h3>
			<p>菌钥已通过：<span>ISO9001</span>:2015 质量管理体系要求、<span>ISO14001</span>:2015 环境管理体系 要求及使用指南、<span>ISO45001</span>:2018 职业健康安全管理体系 要求及使用指南、</p>
			<p><span>ISO22000</span>:2018 食品安全管理体系 食品链中各类组织的要求、产品安全合规，可满足客户对产品的严格要求。</p>
		</div>
		<div class="attest-main">
			<ul>
				<li class="clearfix">
					<div class="attest-main-div1">
						<p>国际标准化组织ISO9001认证</p>
					</div>
					<p>ISO9001认证用于证实组织具有提供满足顾客要求和适用法规要求的产品的能力，目的在于增进顾客满意度。</p>
				</li>
				<li class="clearfix">
					<div class="attest-main-div2">
						<p>国际标准化组织(ISO)制定的 环境管理体系国际标准</p>
					</div>
					<p>ISO14001是国际标准化组织(ISO)制定的环境管理体系国际标准。</p>
				</li>
				<li class="clearfix">
					<div class="attest-main-div3">
						<p>职业健康安全管理体系</p>
					</div>
					<p>ISO45001是职业健康安全管理体系，是由OHSAS18001职业健康和安全管理体系演变而来。这一新标准用于帮助全世界的组织确保其工作者 健康和安全。</p>
				</li>
				<li class="clearfix">
					<div class="attest-main-div4">
						<p>食品安全管理体系</p>
					</div>
					<p>ISO22000是指2005 Food Safety Management SystemISO22000:2005食品安全管理体系。是组织认证和注册的依据。是这个国际标准，申请 需要内审、第二方审核、第三方审核。</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
</script>

<style>
	.attest-banner img {
		width: 100%;
		height: 10rem;
	}
	.attest-textbox {
		transform: translateY(-1.5rem);
		margin-left: 3.4rem;
	}
	
	.attest-textbox h3 {
		color: #009544;
		font-size: 0.4rem;
		margin-bottom: 0.5rem;
	}
	
	.attest-textbox p {
		line-height: 0.5rem;
	}
	.attest-textbox p span{
		font-weight: 600;
		color: #000;
	}
	.attest-main ul{
		width: 12.4rem;
		margin: auto;
		margin-bottom: 1.5rem;
	}
	.attest-main ul li{
		display: flex;
		justify-content: flex-start;
		align-items: center;
		margin: 0.5rem 0;
	}
	.attest-main ul div{
		background-repeat: no-repeat;
		background-size: 100% 100%;
		width:2.11rem;
		height:2.11rem;
		font-size: 0.14rem;
		position: relative;
		box-shadow: 0px 0.03rem 0.08rem rgba(0, 0, 0, 0.2);
	}
	.attest-main ul div>p{
		width: 100%;
		background-color: #209344;
		color: #fff;
		position: absolute;
		text-align: center;
		bottom: -0.15rem;
		display: none;
		padding: 0.1rem 0;
	}
	.attest-main ul li:hover div>p{
		display: block;
	}
	.attest-main ul li>p{
		margin-left: 0.5rem;
		width: 9rem;
	}
	.attest-main ul li:hover>p{
		color: #009544;
	}
	.attest-main-div1{
		background-image: url(../../../assets/att-zu1.jpg);
	}
	.attest-main-div2{
		background-image: url(../../../assets/att-zu2.jpg);
	}
	.attest-main-div3{
		background-image: url(../../../assets/att-zu3.jpg);
	}
	.attest-main-div4{
		background-image: url(../../../assets/att-zu4.jpg);
	}

</style>
