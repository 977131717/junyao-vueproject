<template>
	<div class="report">
		<div class="report-banner">
			<img src="../../../assets/rep-banner.jpg" alt="">
		</div>
		<div class="report-textbox">
			<h3>媒体报道</h3>
			<p>菌钥大健康的最新咨询</p>
		</div>
		<div class="report-main">
			<ul >
				<li v-for='(item) in baodaolist.slice((currentindex-1)*pageSize,currentindex*pageSize)' :key="item._id">
					<h3>{{item.title}}</h3>
					<p>据精准营养报道,1月14日全球知名的营养健康品合同生产商、大健康上市第一股仙乐健康科技股份有限公司(下文简称“仙乐”)首 席运营官兼执行副总裁陈琼女士、产品研发总监甘聃博士等一行四人到江苏菌钥生命科技发展有限公司(下文简称“菌钥”)的工厂 进行参观访问。</p>
					<button type="button"><a :href="item.url">阅读全文</a></button>
				</li>
			</ul>
			<div class="reprot-pagebox">
				<p>
					目前位于第{{currentindex}}页, 共{{Math.ceil(baodaolist.length/pageSize)}}页
				</p>
				<p class="reprot-pagebox-b" @click="btn1">首页</p>
				<el-pagination
				layout="prev, pager, next" 
				:page-count="Math.ceil(baodaolist.length/pageSize)"
				prev-text='上一页' 
				next-text='下一页'
				pager-count=5
				:current-page="currentindex"
				@current-change='getcurrent' 
				>
				</el-pagination>
				<p class="reprot-pagebox-a" @click="btn2">尾页</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				pageSize:5,
				currentindex:1,
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
				baodaolist:[],
			}
		},
		methods: {
			getcurrent(index) {
				this.currentindex = index
			},
			btn1(){
				this.currentindex = 1
			},
			btn2(){
				this.currentindex = Math.ceil(this.baodaolist.length/this.pageSize)
			}
		},
		created(){
			console.log(this.demolist)
			this.$request.get('http://39.97.160.131:8080/article/get?category=%E5%AA%92%E4%BD%93%E6%8A%A5%E9%81%93&query_all=false&_=1641552742535')
			.then(res => {
					this.baodaolist = res.data.data
				})
		},
	}
</script>

<style>
	.report-banner img {
		width: 100%;
		height: 10rem;
	}
	
	.report-textbox {
		transform: translateY(-1.5rem);
		margin-left: 3.4rem;
	}
	
	.report-textbox h3 {
		color: #009544;
		font-size: 0.4rem;
		margin-bottom: 0.5rem;
	}
	
	.report-textbox p {
		font-size: 0.18rem;
		line-height: 0.5rem;
	}
	.report-main>ul{
		height: 15rem;
	}
	.report-main>ul li {
		width: 11.64rem;
		height:2.53rem;
		box-sizing: border-box;
		padding:0.5rem 0.6rem;
		box-shadow: 0px 0.03rem 0.08rem rgba(0, 0, 0, 0.2);
		margin: 0.35rem auto;
		transition: .3s all;
	}
	.report-main>ul li:hover{
		transform:scale(1.1)
	}
	.report-main>ul li:hover button{
		background-color: #065820;
	}
	.report-main>ul li button a{
		color: #fff;
		font-size: 0.14rem;
	}
	.report-main>ul li h3{
		font-size: 0.28rem;
		font-weight: 600;
		margin-bottom: 0.2rem;
	}
	.report-main>ul li p{
		line-height: 0.3rem;
	}
	.report-main>ul li button{
		display: block;
		margin: auto;
		margin-top: 0.1rem;
		width: 0.85rem;
		line-height: 0.23rem;
		box-sizing: border-box;
		background-color: #259347;
		color:#FFFFFF;
		border: 0;
		border-radius: 0.04rem;
		cursor: pointer;
		transition: .3s all;
	}
	.reprot-pagebox{
		display: flex;
		justify-content: center;
		margin-bottom: 0.6rem;
	}
	.reprot-pagebox>p{
		line-height:34px;
		font-size: 12px;
	}
	.reprot-pagebox>.reprot-pagebox-b:hover,.reprot-pagebox>.reprot-pagebox-a:hover{
		color: #009544;
	}
	.reprot-pagebox .reprot-pagebox-b{
		margin-left: 10px;
		padding: 5px;
		height: 17px;
		line-height: 17px;
		margin-top: 3px;
		border: 1px solid #b5b5b5;
		border-radius: 0.05rem;
		cursor: pointer;
	}
	.reprot-pagebox .reprot-pagebox-a{
		padding: 5px;
		height: 17px;
		line-height: 17px;
		margin-top: 3px;
		border: 1px solid #b5b5b5;
		border-radius: 0.05rem;
		cursor: pointer;
	}
	.reprot-pagebox .el-pagination button span {
		border: 1px solid #b5b5b5;
		border-radius: 0.05rem;
		padding: 0.05rem;
	}
	.reprot-pagebox .el-pagination button:hover{
		color: #009544;
	}
	.reprot-pagebox .el-pager .active {
		color: #009544;
	}
	
	.reprot-pagebox .el-pager .number:hover {
		color: #009544;
	}
</style>
