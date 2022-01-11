<template>
  <div class="aboutUs">
      <div class="aboutUs-banner">
        <img class="bann-img" src="../../assets/banner.jpg" alt="">
      </div>
      <div class="aboutUs-we">
          <h3>关于我们</h3>
          <p>菌钥大健康成立于2015年，是一家具有大健康行业领先水平的保健食品研发、生产型企业。</p>
          <p>产品涵盖中药发酵、女性健康、体重管理与运动营养、保健食品、中老年健康、男性健康、孕婴童呵护等多个领域，生产营养口服液，粉剂，凝胶糖果，压片糖果，滋养膏滋，硬胶囊，营养果冻等多种剂型。</p>
          <p>菌钥大健康能够提供先进的技术，最优的方案，最佳的服务，是您最贴心的合作伙伴。</p>
      </div>
      <div class="aboutUs-numbox">
        <h3>菌钥数字</h3>
        <ul>
          <li>
            <h4>14</h4>
            <p>14种生产剂型</p>
          </li>
          <li>
            <h4>4+</h4>
            <p>4种+各项管理认证</p>
          </li>
          <li>
            <h4>3000+</h4>
            <p>3000种+配方产品</p>
          </li>
          <li>
            <h4>30+</h4>
            <p>30项+已授权专利证书</p>
          </li>
          <li>
            <h4>500+</h4>
            <p>500项+注册商标</p>
          </li>
          <li>
            <h4>200+</h4>
            <p>200家+合作客户</p>
          </li>
        </ul>
      </div>
      <div class="aboutUs-chanpin">
          <h3>我们全程守护您的产品</h3>
          <h4>做最懂客户的服务商</h4>
          <ul >
            <li>
                <img src="../../assets/us-shichang.png" alt="">
                <p>市场分析</p>
            </li>
            <li>
              <img src="../../assets/us-chanpin.png" alt="">
                <p>产品研发</p>
            </li>
            <li>
              <img src="../../assets/us-shengchan.png" alt="">
                <p>生产服务</p>
            </li>
            <li>
              <img src="../../assets/us-zhiliang.png" alt="">
                <p>质量保证</p>
            </li>
            <li>
              <img src="../../assets/us-shenbao.png" alt="">
                <p>协助注册与批文申报</p>
            </li>
            <li>
              <img src="../../assets/us-shangshi.png" alt="">
                <p>上市支持</p>
            </li>
          </ul>
      </div>
      <div class="aboutUs-onebox">
          <div class="onebox-1">
            <h3>为您的成功助力</h3>
            <h4>很荣幸成为您的合作伙伴，我们将为您的产品提供最优质的服务：</h4>
            <ul>
              <li>经典加创新，根据您的需求特别定制；</li>
              <li>多种可用配方；</li>
              <li>多样化产品包装；</li>
              <li>多种剂型、多种规格满足您的需求。</li>
            </ul>
            <p>选择菌钥大健康!</p>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.aboutUs-banner{
  position: relative;
}
.bann-img{
  width: 100%;
}
.aboutUs-banner:after{
  content: "";
  position: absolute;
  height: 100%;
  width: 100%;
  top:0;
  left: 0;
  background:linear-gradient(to bottom,rgba(255, 255, 255, 0.1)80%, rgba(255, 255, 255, 1)95%);  
}

.aboutUs-we{
  width: 11.9rem;
  margin: auto;
  transform: translateY(-0.9rem);
}
.aboutUs-we h3{
  font-size:0.4rem;
  color:#009544;
  margin-bottom: 0.51rem;
}
.aboutUs-we p{
  margin-bottom: 0.4rem;
}
.aboutUs-numbox{
  width: 10.60rem;
  margin: auto;
}
.aboutUs-numbox h3{
  text-align: center;
  font-size:0.4rem;
  margin-top: 1rem;
}
.aboutUs-numbox ul{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 1.6rem;
}
.aboutUs-numbox ul li{
  width: 2.7rem;
  margin-bottom: 1rem;
}
.aboutUs-numbox ul li h4{
  text-align: center;
  font-size:0.6rem;
  color:#209344;
}
.aboutUs-numbox ul li p{
  text-align: center;
  font-size:0.18rem;
}
.aboutUs-chanpin{
  background: #F6F6F6;
  text-align: center;
  padding-top: 1.1rem;
  padding-bottom: 0.7rem;
}
.aboutUs-chanpin h3{
  font-size: 0.4rem;
}
.aboutUs-chanpin h4{
  font-size: 0.28rem;
  margin-top: 0.36rem;
  margin-bottom: 0.73rem;
}
.aboutUs-chanpin ul{
  margin: auto;
  display: flex;
  justify-content: space-between;
  width: 11.9rem;
  flex-wrap: wrap;
}
.aboutUs-chanpin ul li{
  width: 3.8rem;
  height: 2.2rem;
  background: #FFFFFF;
  margin-bottom: 0.4rem;
}
.aboutUs-chanpin ul li img{
  width: 0.8rem;
  height: 0.8rem;
  margin-top:0.44rem;
  margin-bottom:0.32rem;
}
.aboutUs-onebox{
  width: 100%;
  height: 12.23rem;
  background: url("../../assets/us-bombg.jpg") 100% 100%;
  background-repeat: no-repeat;
  box-sizing: border-box;
  padding-top:4rem;
  position: relative;
}
.aboutUs-onebox:after{
	content: '';
	position: absolute;
	width: 100%;
	height: 100%;
	background-color: rgba(0,0,0,0.1);
	top: 0;
	left: 0;
	z-index: 1;
}
.onebox-1{
  margin: auto;
  width: 6.66rem;
  height: 4.88rem;
  background: rgba(255, 255, 255, 0.9);
  font-size: 0.18rem;
  box-sizing: border-box;
  padding-top: 0.56rem;
  position: relative;
  z-index: 2;
}
.onebox-1 h3{
  text-align: center;
  font-size:0.4rem;
}
.onebox-1 h4{
  text-align: center;
  margin-top:0.4rem;
  margin-bottom:0.2rem;
}
.onebox-1 ul{
  list-style: disc;
  margin-left: 0.92rem;
}
.onebox-1 ul li{
  line-height: 0.4rem;
}
.onebox-1 p{
  color: #209344;
  font-size:0.28rem;
  margin-left: 0.7rem;
  margin-top:0.4rem
}

</style>