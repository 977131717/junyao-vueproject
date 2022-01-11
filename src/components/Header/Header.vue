<template>
  <div class="header">
    <div class="header-logo">
      <img src="../../assets/logo.png" alt="">
    </div>
    <ul class="header-ul">
      <li>
        <router-link 
        to="/"
        :class="greenBl=='首页'?'active-color':''"
        @click="btnNav('首页')"
        >首页</router-link>
      </li>
      <li
        @mouseenter="moseAboutUs('关于')"
        @mouseleave="moseAboutUs(false)"
      >
        <span
          :class="greenBl=='关于'?'active-color':''"
        >关于我们</span>
        <div v-show="hidebl=='关于'" class="Header-hidebox">
            <div>
              <h3>公司简介</h3>
                <router-link 
                to="/aboutUs/aboutUs"
                active-class="active-color2"
                @click="btnNav('关于')"
                >关于我们</router-link>
              <router-link 
                to="/aboutUs/course"
                active-class="active-color2"
                @click="btnNav('关于')"
                >发展历程</router-link>
              <router-link 
                to="/aboutUs/culture"
                active-class="active-color2"
                @click="btnNav('关于')"
              >文化与责任</router-link>
              <router-link 
                to="/aboutUs/recruit"
                active-class="active-color2"
                @click="btnNav('关于')"
              >人才招聘</router-link>
            </div>
            <div class="hidebox-lastdiv">
              <h3>新闻中心</h3>
              <router-link
                to="/aboutUs/news"
                active-class="active-color2"
                @click="btnNav('关于')"
              >新闻</router-link>
			<router-link
				to="/aboutUs/report"
				active-class="active-color2"
				@click="btnNav('关于')"
			>媒体报道</router-link>
            </div>
          </div>
      </li>
      <li
        @mouseenter="moseAboutUs('服务')"
        @mouseleave="moseAboutUs(false)"
      >
       <span
          :class="greenBl=='服务'?'active-color':''"
        >一站式服务</span>
          <div v-show="hidebl=='服务'" class="Header-hidebox">
              <div>
                <h3>一站式服务</h3>
                  <router-link 
                    to="/serviceCentre/overview"
                    active-class="active-color2"
                    @click="btnNav('服务')"
                  >综述</router-link>
              </div>
              <div>
                <h3>研究与发展</h3>
                  <router-link 
                    to="/serviceCentre/research"
                    active-class="active-color2"
                    @click="btnNav('服务')"
                  >研究中心</router-link>
                  <router-link 
                    to="/serviceCentre/knowledge"
                    active-class="active-color2"
                    @click="btnNav('服务')"
                  >知识产权</router-link>
              </div>
              <div>
                <h3>生产服务</h3>
				<router-link
					to="/serviceCentre/factory"
					active-class="active-color2"
					@click="btnNav('服务')"
				>智造工厂</router-link>
                <router-link
					to="/serviceCentre/contract"
					active-class="active-color2"
					@click="btnNav('服务')"
                >合同生产</router-link>
              </div>
              <div>
                <h3>质量管理</h3>
                <router-link
					to="/serviceCentre/ensure"
					active-class="active-color2"
					@click="btnNav('服务')"
                >质量保证</router-link>
                <router-link
					to="/serviceCentre/attest"
					active-class="active-color2"
					@click="btnNav('服务')"
                >资质认证</router-link>
              </div>
              <div class="hidebox-lastdiv">
                <h3>仓储物流</h3>
				<router-link
					to="/serviceCentre/warehouse"
					active-class="active-color2"
					@click="btnNav('服务')"
				>仓储物流</router-link>
              </div>
          </div>
      </li>
      <li
		@mouseenter="moseAboutUs('产品')"
		@mouseleave="moseAboutUs(false)"
		>
		<span
			:class="greenBl=='产品'?'active-color':''"
		>产品中心</span>
		<div v-show="hidebl=='产品'" class="Header-hidebox">
			<div>
				<h3>产品剂型</h3>
					<router-link 
						to="/product/productType/口服液"
						active-class="active-color2"
						@click="btnNav('产品')"
					>口服液</router-link>
					<router-link
						to="/product/productType/粉剂"
						active-class="active-color2"
						@click="btnNav('产品')"
					>粉剂</router-link>
					<router-link
						to="/product/productType/凝胶糖果"
						active-class="active-color2"
						@click="btnNav('产品')"
					>凝胶糖果</router-link>
					<router-link
						to="/product/productType/压片糖果"
						active-class="active-color2"
						@click="btnNav('产品')"
					>压片糖果</router-link>
					<router-link
						to="/product/productType/滋养膏滋"
						active-class="active-color2"
						@click="btnNav('产品')"
					>滋养膏滋</router-link>
					<router-link
						to="/product/productType/硬胶囊"
						active-class="active-color2"
						@click="btnNav('产品')"
					>硬胶囊</router-link>
					<router-link
						to="/product/productType/营养果冻"
						active-class="active-color2"
						@click="btnNav('产品')"
					>营养果冻</router-link>
			</div>
		</div>
      </li>
      <li>
        <router-link 
        to="/travel"
        :class="greenBl=='工业'?'active-color':''"
        @click="btnNav('工业')"
        >工业旅游</router-link>
      </li>
      <li>
        <router-link 
        to="/contactUs"
        :class="greenBl=='联系'?'active-color':''"
        @click="btnNav('联系')"
        >联系我们</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return{
      hidebl:"",
      greenBl:"",
      
    }
  },
  created(){
    if(this.$router.options.history.state.current.indexOf("aboutUs")==1){
      this.greenBl="关于"
    }else if(this.$router.options.history.state.current.indexOf("serviceCentre")==1){
      this.greenBl="服务"
    }else if(this.$router.options.history.state.current.indexOf("product")==1){
      this.greenBl="产品"
    }else{
      this.greenBl="首页"
    }
    
  },
  methods:{
    moseAboutUs(bl){
      this.hidebl=bl
    },
    btnNav(name){
      this.greenBl=name
    },
  },
}
</script>

<style>
.header{
  z-index: 99;
  line-height: 1rem;
  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.26);
  background: rgba(255, 255, 255, 0.9);
  position: absolute;
  width: 100%;
}
.header-logo{
  float: left;
  width:2.23rem;
  height: 0.48rem;
  margin-left:3.65rem;
  margin-right:0.4rem;
}
.header-logo img{
  width: 100%;
  height: 100%;
}
.header-ul{
  display: flex;
}
.header-ul li{
  font-weight: 400;
  padding:0 0.4rem;
}
.header-ul li span{
  
  cursor: pointer;
}
.active-color{
  color:#009544;
  font-weight: 500;
}
.Header-hidebox a{
  font-size:0.18rem;
  background:#2D2B2A ;
  margin-right:0.12rem;
  padding:0.08rem 0.12rem;
  color:#fff
}
.Header-hidebox .active-color2{
  background: #FFFFFF;
  color:#209344;
}
.Header-hidebox{
  position: absolute;
  left:0;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  color: #fff;
  line-height:0.24rem;
  padding:0.38rem 2.86rem;
}
.Header-hidebox div{
  padding:0.26rem 0;
  border-bottom: 1px solid rgba(222, 222, 222, 0.5)
}
.Header-hidebox h3{
  line-height:0.24rem;
  font-size:0.2rem;
  margin: 0.18rem 0;
}
.Header-hidebox span{
  font-size:0.18rem;
  background:#2D2B2A ;
  margin-right:0.12rem;
  padding:0.08rem 0.12rem;
}
.Header-hidebox .hidebox-lastdiv{
  border-bottom:0;
}
</style>