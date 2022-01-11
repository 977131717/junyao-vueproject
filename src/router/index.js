import { createRouter,createWebHashHistory } from 'vue-router'
import home from "../pages/home/home.vue"

import contactUs from "../pages/contactUs/contactUs.vue"
import travel from "../pages/travel/travel.vue"

import aboutUs from "../pages/aboutUs/aboutUs.vue"
import course from "../pages/aboutUs/course/course.vue"
import culture from "../pages/aboutUs/culture/culture.vue"
import recruit from "../pages/aboutUs/recruit/recruit.vue"
import news from "../pages/aboutUs/news/news.vue"
import report from "../pages/aboutUs/report/report.vue"

import overview from "../pages/serviceCentre/overview/overview.vue"
import research from "../pages/serviceCentre/research/research.vue"
import knowledge from "../pages/serviceCentre/knowledge/knowledge.vue"
import factory from "../pages/serviceCentre/factory/factory.vue"
import contract from "../pages/serviceCentre/contract/contract.vue"
import ensure from "../pages/serviceCentre/ensure/ensure.vue"
import attest from "../pages/serviceCentre/attest/attest.vue"
import warehouse from "../pages/serviceCentre/warehouse/warehouse.vue"

import product from "../pages/product/product.vue"
import productType from '../pages/product/productType/index.vue'


const routes = [
    { path: '/', component: home },
	//关于我们
    { path: '/aboutUs/', component: aboutUs,},
    { path: '/aboutUs/aboutUs',component:aboutUs},
    { path: '/aboutUs/course',component:course},
    { path: '/aboutUs/culture',component:culture},
    { path: '/aboutUs/recruit',component:recruit},
	{ path: '/aboutUs/news', component: news },
	{ path: '/aboutUs/report', component: report },
	//一站式服务
    { path: '/serviceCentre/overview', component: overview },
    { path: '/serviceCentre/research', component: research },
    { path: '/serviceCentre/knowledge', component: knowledge },
	{ path: '/serviceCentre/factory', component: factory },
	{ path: '/serviceCentre/contract', component: contract },
	{ path: '/serviceCentre/ensure', component: ensure },
	{ path: '/serviceCentre/attest', component: attest },
	{ path: '/serviceCentre/warehouse', component: warehouse },
	//产品中心
    { 
		path: '/product/', 
		component: product ,
		children:[
			{
				path:'/product/productType/:name',
				component: productType ,
			}
		],
	},
	//工业旅游
    { path: '/contactUs', component: contactUs },
	//联系我们
    { path: '/travel', component: travel },
  ]

const router = createRouter({
    history:createWebHashHistory(),
    routes, 
  })
  
export default router
