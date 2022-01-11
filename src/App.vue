<template>
	<div class="app">
		<Header />
		<router-view></router-view>
		<Footer />
	</div>
</template>

<script>
	import Header from './components/Header/Header.vue'
	import Footer from './components/Footer/Footer.vue'
	import "../public/css/reset.css" //清除默认css样式
	export default {
		name: 'App',
		components: {
			Header,
			Footer
		},
		methods: {},
		created() {
			let ele = document.getElementsByTagName('html')[0]
			let size = document.body.clientWidth / 192 * 10
			ele.style.fontSize = size + 'px'
		},
		mounted() {
			let bodywidth
			bodywidth = window.innerWidth
			window.onresize = function() {
				console.log(bodywidth, window.innerWidth)
				if (bodywidth != window.innerWidth) {
					console.log('宽度变化了')
					location.reload()
				}
				// location.reload()
			}
		}
	}
</script>
<style>
	/* html{
  font-size: 100px;
} */
	html,
	body {
		font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue",
			"PingFang-SC", "PingFang SC", "Source Han Sans SC",
			"Noto Sans CJK SC", "WenQuanYi Micro Hei", sans-serif;
			color: #262626;
	}

	.app {
		font-size: 0.18rem;
	}

	.gdtbh {
		position: relative;
	}

	.gdtbh::after {
		content: "";
		position: absolute;
		height: 100%;
		width: 100%;
		top: 0;
		left: 0;
		background: linear-gradient(to bottom, rgba(255, 255, 255, 0.1)70%, rgba(255, 255, 255, 1)93%);
	}
	h3 {
		font-weight: 700;
	}
</style>
