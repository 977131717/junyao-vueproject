<template>
	<div class="product-type">
		<template v-if="curdata">
			<div class="product-type-banner">
				<img :src="curdata.bannerimg" alt="">
			</div>
			<Jytitle
				:Mtitle="curdata.title.title1"
				:Stitle="curdata.title.title2"
				:text="curdata.title.title3"
			></Jytitle>
			<JyRotation
				:imglist='curdata.imgs'
			></JyRotation>
			<div class="product-type-bgdiv">
				<JyTextbox
					:textlist='curdata.textlist'
				></JyTextbox>
			</div>
		</template>
	</div>
</template>

<script>
	import Jytitle from '../../../components/jy-Title/index.vue'
	import JyRotation from '../../../components/jy-Rotation/index.vue'
	import JyTextbox from '../../../components/jy-Textbox/index.vue'
	import pagedata from '../../../utils/pagedata.js'
	export default {
		components:{
			Jytitle,
			JyRotation,
			JyTextbox
			
		},
		data(){
			return{
				pageDataList:pagedata,
				curdata:{},
			}
		},
		created() {
				this.setcur()
		},
		watch: {
			$route: {
				handler: function(){
					this.setcur()
				},
				// 深度观察监听
				deep: true
			}
		},
		methods:{
			setcur(){
				let name=this.$route.params.name
				if(name){
					this.pageDataList.forEach(item=>{
						if(item.name==name){
							this.curdata=this.deepClone(item)
							return
						}
					})
				}
			},
			deepClone(target) {
				let obj = JSON.stringify(target)
				return JSON.parse(obj)
			},
		},
	}
</script>

<style>
	.product-type-banner>img{
		width: 100%;
		height: 10rem;
	}
	.product-type-bgdiv{
		background-color: #F6F6F6;
		padding: 1.5rem 0;
		margin-top: 0.5rem;
	}
</style>
