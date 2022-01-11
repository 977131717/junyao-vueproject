<template>
	<div class="jy-textbox">
		<div class="jy-textbox-main">
			<h2>产品优势</h2>
			<div class="jy-textbox-flexbox">
				<div v-for="(item,index) in textlist" :key="index">
					<p class="jy-textbox-p1">{{item.h2text}}</p>
					<p class="jy-textbox-p2" v-if="item.ptext">{{item.ptext}}</p>
				</div>
			</div>
			<p>欲了解更多口服液信息，欢迎申领样品，体会菌钥营养新科技。</p>
			<div class="jy-textbox-button">
				样品申领
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props:{
			textlist:{
				type:Array,
				default:()=>{}
			}
		},
		created() {
			console.log('textlist',this.textlist)
		}
	}
</script>

<style>
	.jy-textbox-main{
		position: relative;
		margin: auto;
		width: 7rem;
		height: 7.27rem;
		border: 1px solid #707070;
		box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.16);
		background-color: #fff;
		border-radius: 0.28rem;
		padding: 0.2rem 0rem 0.2rem 0.65rem;
		box-sizing: border-box;
	}
	.jy-textbox-main>h2{
		font-size: 0.4rem;
		font-weight: 700;
		text-align: center;
		border-bottom: 0.02rem dashed #A8A7A7;
		line-height: 1rem;
		margin-bottom: 0.4rem;
		margin-right: 0.65rem;
	}
	.jy-textbox-flexbox{
		display: flex;
		height: 3.7rem;
		flex-direction:column;
		justify-content: space-between;
	}
	.jy-textbox-p1{
		color: #009544;
		font-size: 0.28rem;
		font-weight: 500;
		margin-bottom: 0.2rem;
		position: relative;
		margin-left: 0.23rem;
	}
	.jy-textbox-p1::before{
		content: '';
		display: block;
		position: absolute;
		width: 0.17rem;
		height: 0.17rem;
		background-color: #009544;
		border-radius: 50%;
		top: 50%;
		transform: translateY(-50%);
		left: -0.23rem;
	}
	.jy-textbox-p2{
		font-size: 0.24rem;
	}
	.jy-textbox-main>p{
		margin-top: 0.34rem;
		margin-bottom: 0.35rem;
	}
	.jy-textbox-button{
		width: 1.6rem;
		line-height: 0.5rem;
		text-align: center;
		background-color: #D85859;
		border-radius: 0.11rem;
		color: #fff;
		font-size: 0.24rem;
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		cursor: pointer;
	}
</style>
