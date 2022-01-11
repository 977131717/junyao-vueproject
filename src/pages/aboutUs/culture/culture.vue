<template>
  <div class="culture">
      <div class="culture-banner gdtbh">
          <img src="../../../assets/cul-banner.jpg" alt="">
      </div>
      <div class="culture-qiyebox">
          <h3>企业价值观</h3>
          <div class="cqiyebox-sanbox">
              <div>
                  <h4>企业使命</h4>
                  <p>打造中药发酵大健康航母</p>
              </div>
              <div>
                  <h4>企业愿景</h4>
                  <p>中国中药发酵领导者</p>
              </div>
              <div class="sanbox-lastbox">
                  <h4>企业价值观</h4>
                  <p>诚信、专业、严谨、合作</p>
              </div>
          </div>
      </div>
      <div class="culture-sibox">
          <ul>
            <li class="sibox-chengxin">
                <h3>诚信</h3>
                <p>生产全透明、可视化，以最高的诚意欢迎每一位客户。</p>
                <img src="../../../assets/cul-chengxin.jpg" alt="">
            </li>
            <li class="sibox-zhuanye">
                <h3>专业</h3>
                <p>专业的研发团队，研发人员来自北京大学、北京中医药大学、北京理工大学、天津科技大学、美国印第安纳大学、中国食品发酵工业研究院等国内外知名高校和科研院所。</p>
                <img src="../../../assets/cul-zhuanye.jpg" alt="">
            </li>
            <li class="sibox-yanjin">
                <h3>严谨</h3>
                <p>对产品层层把关，每一次呈现达到最优。</p>
                <img src="../../../assets/cul-yanjin.jpg" alt="">
            </li>
            <li class="sibox-hezuo">
                <h3>合作</h3>
                <p>用开放的态度，整合内外部资源，积极合作。</p>
                <img src="../../../assets/cul-hezuo.jpg" alt="">
            </li>
          </ul>
      </div>
      <div class="culture-chixu">
        <h4>可持续发展绩效</h4>
        <div class="culture-textbox">
            <h3>人权保障</h3>
            <p>员工是保障公司前行的动力，菌钥大健康始终致力于营造良好的工作氛围，我们以尊重、包容、平等、开放的态度对待每一位员工，创造更完善的员工体系，让每一位人才都能在这里发光发热。</p>
        </div>
        <div class="culture-textbox">
            <h3>关注环境健康</h3>
            <p>菌钥大健康选址考究，我们将环境因素作为第一考虑要素，所有用地均为工业用地。</p>
        </div>
        <div class="culture-textbox">
            <h3>可持续采购</h3>
            <p>菌钥大健康成立以来，始终坚持在研发、技术、生产等方面进行可持续的服务商体系，并通过了ISO9001:2015&nbsp;质量管理体系要求、ISO14001:2015&nbsp;环境管理体系要求及使用指南、ISO45001:2018&nbsp;职业健康安全管理体系&nbsp;要求及使用指南、ISO22000:2018&nbsp;食品安全管理体系&nbsp;食品链中各类组织的要求</p>
        </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.culture-banner img{
    width: 100%;
}
.culture-qiyebox{
    transform: translateY(-1rem);
}
.culture-qiyebox h3{
    font-size:0.38rem;
    color: #009544;
    margin-left: 3.9rem;
}
.cqiyebox-sanbox{
    display: flex;
    justify-content: center;
    margin-top:0.7rem
}
.cqiyebox-sanbox div{
    width: 3.5rem;
    border-right: 0.01rem solid #d2d2d2;
    padding-left: 0.5rem;
}
.cqiyebox-sanbox h4{
    font-size:0.26rem;
    font-weight: 500;
}
.cqiyebox-sanbox p{
    font-size:0.16rem;
    margin-top:0.24rem;
}
.cqiyebox-sanbox .sanbox-lastbox{
    border-right: 0;
}
.culture-sibox ul li{
    width:11.9rem;
    height:3.6rem;
    margin: auto;
    margin-top: 0.24rem;
    padding-left:1.21rem;
    padding-top:1rem;
    box-sizing: border-box;
    color:#fff;
    position: relative;
    background-color: rgba(0, 0, 0, 0.4);
}
.culture-sibox ul li img{
    position: absolute;
    z-index: -1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
}
.culture-sibox ul li h3{
    font-size: 0.38rem;
    margin-bottom:0.33rem;
    font-weight: 600;
}
.culture-sibox ul li p{
    line-height: 0.4rem;
    width:8rem;
    font-size:0.16rem;
}
.culture-textbox{
    width: 10.52rem;
    margin: auto;
    margin-top:0.7rem;
}
.culture-textbox h3{
  color: #009544;
  font-size: 0.32rem;
  margin-bottom: 0.3rem;
  font-weight: 500;
}
.culture-textbox p{
  font-size: 0.18rem;
  line-height: 0.4rem;
  font-weight: 400;
}
.culture-chixu{
    margin:1.3rem 0;
}
.culture-chixu h4{
    font-size: 0.4rem;
    text-align: center;
	font-weight: 700;
}
</style>