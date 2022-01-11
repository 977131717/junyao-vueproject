<template>
	<div class="news">
		<div class="news-banner">
			<img src="../../../assets/news-banner.jpg" alt="">
		</div>
		<div class="news-textbox">
			<h3>新闻中心</h3>
			<p>菌钥大健康的最新咨询</p>
		</div>
		<div class="news-main">
			<div class="news-main-zhanhui news-main-xian">
				<div class="news-zhanhui-l">
					<el-carousel trigger="click" indicator-position="outside" arrow="always" :initial-index='0'>
						<el-carousel-item v-for="item in zhanhuilist" :key="item._id">
							<img class="news-zhanhui-img" :src="item.image">
						</el-carousel-item>
					</el-carousel>
				</div>
				<div class="news-zhanhui-r">
					<ul class="news-zhanhui-ul">
						<li v-for="(item,index) in zhanhuilist.slice((currentindex1-1)*pageSize1,currentindex1*pageSize1)"
							:key="index">
							<h4>{{item.title}}</h4>
							<p><a :href="item.url">—— 菌钥大健康高光时刻回顾</a></p>
						</li>
					</ul>
					<div class="news-pagebox">
						<el-pagination 
						layout="prev, pager, next" 
						:page-count="Math.ceil(zhanhuilist.length/pageSize1)"
						prev-text='上一页' 
						next-text='下一页'
						@current-change='getcurrent1' 
						pager-count=5>
						</el-pagination>
					</div>
				</div>
			</div>
			<div class="news-main-zhanhui">
				<div class="news-zhanhui-l">
					<el-carousel trigger="click" indicator-position="outside" arrow="always" :initial-index='0'>
						<el-carousel-item v-for="item in youxuelist" :key="item._id">
							<img class="news-zhanhui-img" :src="item.image">
						</el-carousel-item>
					</el-carousel>
				</div>
				<div class="news-zhanhui-r">
					<ul class="news-zhanhui-ul">
						<li v-for="(item,index) in youxuelist.slice((currentindex2-1)*pageSize2,currentindex2*pageSize2)"
							:key="index">
							<h4>{{item.title}}</h4>
							<p><a :href="item.url">—— 了解详情</a></p>
						</li>
					</ul>
					<div class="news-pagebox">
						<el-pagination 
						layout="prev, pager, next" 
						:page-count="Math.ceil(youxuelist.length/pageSize2)"
						prev-text='上一页' 
						next-text='下一页'
						@current-change='getcurrent2' 
						pager-count=5
						>
						</el-pagination>
					</div>
				</div>
			</div>
		</div>
		<!-- <button type="button" @click="btn1()">测试按钮</button> -->
	</div>
</template>

<script>
	export default {
		data() {
			return {
				zhanhuilist: [],
				youxuelist:[],
				demolist: [
					'这是第1条这第1条这是第1条这是第1条这是第1是第1条这是第1条',
					'这是第2条',
					'这是第3条',
					'这是第4条',
					'这是第5条',
					'这是第6条',
					'这是第7条',
					'这是第8条',
					'这是第9条',
					'这是第10条',

				],
				currentindex1: 1,
				currentindex2: 1,
				pageSize1: 3,
				pageSize2: 5,
			}
		},
		created() {
			this.$request.get(
					'http://39.97.160.131:8080/article/get?category=%E5%B1%95%E4%BC%9A&query_all=false&_=1641453236847')
				.then(res => {
					this.zhanhuilist = res.data.data
				})
			this.$request.get(
					'http://39.97.160.131:8080/article/get?category=%E6%B8%B8%E5%AD%A6&query_all=false&_=1641527111639')
				.then(res => {
					this.youxuelist = res.data.data
				})
		},
		methods: {
			getcurrent1(index) {
				this.currentindex1 = index
			},
			getcurrent2(index) {
				this.currentindex2 = index
			},
			btn1() {
				console.log('按钮')
				this.$request.get(
					'http://39.97.160.131:8080/article/get?category=%E6%B8%B8%E5%AD%A6&query_all=false&_=1641527111639'
					).then(res => {
					console.log(res)
				})
			},
		},
	}
</script>

<style>
	.news-banner img {
		width: 100%;
		height: 10rem;
	}

	.news-textbox {
		transform: translateY(-1.5rem);
		margin-left: 3.4rem;
	}

	.news-textbox h3 {
		color: #009544;
		font-size: 0.4rem;
		margin-bottom: 0.5rem;
	}

	.news-textbox p {
		font-size: 0.18rem;
		line-height: 0.5rem;
	}

	.news-main {
		background-color: #F6F6F6;
	}

	.news-main-zhanhui {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0.9rem 0;
		position: relative;
	}
	.news-main-xian::after{
		content: '';
		display: block;
		position: absolute;
		width: 10.66rem;
		border: 0.01rem solid #B8B8B8;
		bottom: 0;
	}
	.news-zhanhui-l {
		height: 4.1rem;
		width: 5.6rem;
	}
	.news-zhanhui-l .news-zhanhui-img {
		width: 100%;
		height: 100%;
	}
	.news-zhanhui-l .el-carousel--horizontal{
		overflow-y:hidden ;
		height: 4.6rem;
	}
	.news-zhanhui-l .el-carousel__container {
		height: 4.1rem;
	}
	.news-zhanhui-l .el-carousel__container div{
		z-index: 2;
	}
	.news-zhanhui-l .el-carousel__container>button {
		top: auto;
		bottom: -0.55rem;
		background-color: rgba(1,1,1,0);
		z-index: 3;
		width: 0.36rem;
		height: 0.36rem;
		background-size:  0.17rem 0.21rem;
		background-position: center;
		background-repeat: no-repeat;
	}
	.news-zhanhui-l .el-carousel__container>button .el-icon{
		display: none;
	}
	.news-zhanhui-l .el-carousel__arrow--left{
		background-image: url('../../../assets/多边形1.png');
		left: -0.1rem;
	}
	.news-zhanhui-l .el-carousel__arrow--right{
		background-image: url('../../../assets/多边形2.png');
		right: -0.1rem;
	}
	.news-zhanhui-l .is-active .el-carousel__button {
		border:0.02rem solid  #0F8F42;
		transform:scale(1.1)
	}
	.news-zhanhui-l  .el-carousel__button {
		width: 0.12rem;
		height: 0.12rem;
		background-color: #F6F6F6;
		border:0.02rem solid  #AEAEAE;
		border-radius: 50%;
	}
	.news-zhanhui-r {
		width: 4.74rem;
		height: 3.87rem;
		background-color: #fff;
		margin-left: 0.3rem;
	}

	.news-pagebox {
		display: flex;
		justify-content: center;
	}

	.news-zhanhui-ul {
		overflow-y: auto;
		padding: 0 0.4rem;
		height: 3.4rem;
		border: 0.01rem solid #fff;
		box-sizing: border-box;

	}

	.news-pagebox .el-pagination button span {
		border: 1px solid #b5b5b5;
		border-radius: 0.05rem;
		padding: 0.05rem;
	}
	.news-pagebox .el-pagination button:hover {
		color: #009544;
	}
	
	.news-pagebox .el-pager .active {
		color: #009544;
	}

	.news-pagebox .el-pager .number:hover {
		color: #009544;
	}

	.news-zhanhui-ul li {
		margin-top: 0.2rem
	}

	.news-zhanhui-ul h4 {
		position: relative;
		line-height: 0.3rem;
		font-size: 0.16rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.news-zhanhui-ul h4::after {
		content: '';
		position: absolute;
		display: block;
		width: 0.16rem;
		height: 0.16rem;
		background-color: #209344;
		left: -0.25rem;
		top: 0.07rem;
	}

	.news-zhanhui-ul p {
		font-size: 0.14rem;
		text-align: right;
		margin-top: 0.08rem;
		font-weight: 500;
	}

	.news-zhanhui-ul p a {
		color: #009544;
	}
</style>
