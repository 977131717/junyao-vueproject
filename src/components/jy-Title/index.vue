<template>
	<div class="jy-title">
		<div class="jy-title-main">
			<div class="jy-title-h">
				<h1>{{Mtitle}}</h1>
				<p>{{Stitle}}</p>
			</div>
			<p>{{text}}</p>
		</div>
	</div>
</template>

<script>
	export default {
		props:{
			Mtitle:{
				type:String,
				default:'主标题'
			},
			Stitle:{
				type:String,
				default:'副标题'
			},
			text:{
				type:String,
				default:'正文'
			}
		}
	}
</script>

<style>
	.jy-title-main{
		width:10.9rem;
		height: 2.6rem;;
		box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.2);
		overflow: hidden;
		margin: auto;
		padding-left: 0.8rem;
		transform: translateY(-2rem);
		background-color: #FFFFFF;
	}
	.jy-title-h{
		display: flex;
		align-items: flex-end;
		margin-top: 0.6rem;
	}
	.jy-title-h>h1{
		font-size: 0.6rem;
		font-weight: 700;
		color: #009544;
	}
	.jy-title-h>p{
		font-size: 0.24rem;
		line-height: 0.55rem;
		margin-left: 0.3rem;
		font-weight: 500;
	}
	.jy-title-main>p{
		margin-top: 0.3rem;
	}
</style>
