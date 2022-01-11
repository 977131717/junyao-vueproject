<template>
	<div class="jy-Rotation">
		<div class="jy-Rotation-main">
			<div class="jy-Rotation-lbtn" @click="prev()"></div>
			<el-carousel ref="nop" trigger="click" indicator-position="outside" arrow="never">
				<el-carousel-item v-for="(item,index) in imglist" :key="index">
					<div class="factory-chbox">
						<img class="factory-chbox-img" :src="item" alt="图片" >
					</div>
				</el-carousel-item>
			</el-carousel>
			<div class="jy-Rotation-rbtn" @click="next()"></div>
		</div>
	</div>
</template>

<script>
	export default {
		name:'jy-Rotation',
		props: {
			imglist: {
				type: Array,
				default: () => {
					return ['static/images/fac-zou1.jpg','static/images/fac-zou1.jpg','static/images/fac-zou1.jpg']
				}
			}
		},
		mounted() {
		},
		methods:{
			prev(){
				this.$refs.nop.prev();
			},
			next(){
				this.$refs.nop.next();
			}
		}
	}
</script>

<style>
	.jy-Rotation-main{
		width: 8rem;
		height: 4.81rem;
		margin: auto;
		position: relative;
	}
	.jy-Rotation-main .factory-chbox{
		height: 4.81rem;
	}
	.jy-Rotation-main .factory-chbox-img {
		width: 100%;
		height: 100%;
	}
	.jy-Rotation-main .el-carousel--horizontal{
		overflow-y: hidden;
	}
	.jy-Rotation-main .el-carousel__container {
		height: 4.1rem;
	}
	.jy-Rotation-main .is-active .el-carousel__button {
		border:0.02rem solid  #0F8F42;
		transform:scale(1.1)
	}
	.jy-Rotation-main  .el-carousel__button {
		margin-top: 0.2rem;
		width: 0.12rem;
		height: 0.12rem;
		background-color: #F6F6F6;
		border:0.02rem solid  #AEAEAE;
		border-radius: 50%;
	}
	.jy-Rotation-lbtn,.jy-Rotation-rbtn{
		position: absolute;
		width: 0.5rem;
		height: 0.5rem;
		background-position: center;
		background-repeat: no-repeat;
		z-index: 4;
		background-size: 100% 100%;
		top: 42%;
		transform: translateY(-50%);
	}
	.jy-Rotation-lbtn{
		background-image: url("img/left.png");
		left: -1.2rem;
	}
	.jy-Rotation-rbtn{
		background-image: url("img/right.png");
		right: -1.2rem;
	}
</style>
