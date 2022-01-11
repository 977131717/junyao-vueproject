<template>
  <div class="overview ">
        <div class="overview-banner gdtbh">
            <img src="../../../assets/ove-banner.jpg" alt="">
        </div>
        <div class="overview-textbox">
            <h3>一站式服务</h3>
            <p>菌钥大健康提供研发、策划、代工等一站式专业服务。</p>
        </div>
        <div class="overview-chanpin">
            <ul >
                <li>
                    <img src="../../../assets/ov-shichang.png" alt="">
                    <p>市场调研</p>
                </li>
                <li>
                    <img src="../../../assets/us-chanpin.png" alt="">
                    <p>产品研发</p>
                </li>
                <li>
                    <img src="../../../assets/us-shengchan.png" alt="">
                    <p>生产管理</p>
                </li>
                <li>
                    <img src="../../../assets/us-zhiliang.png" alt="">
                    <p>质量把控</p>
                </li>
                <li>
                    <img src="../../../assets/ov-gongying.png" alt="">
                    <p>供应链管理</p>
                </li>
                <li>
                    <img src="../../../assets/ov-zhichi.png" alt="">
                    <p>服务与支持</p>
                </li>
            </ul>
      </div>
      <div class="overview-btmbox">
            <p>我们精心服务于每一位客户</p>
            <p>用最专业的态度赋予产品最大的价值</p>
            <p style="color:#009544">选择我们：</p>
            <ul>
                <li>
                    <span>更省时间：</span>无需东奔西走，在这里解决产品的所有问题
                </li>
                <li>
                    <span>更省成本：</span>以客户利益优先，产品成本可控
                </li>
                <li>
                    <span>更放心：</span>完善的质量管理体系，为产品层层把关
                </li>
                <li>
                    <span>更高效：</span>一对一全程服务，快速回应客户需求
                </li>
            </ul>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.overview-banner img{
    width: 100%;
}
.overview-textbox{
  transform: translateY(-1.5rem);
  margin-left: 3.6rem;
}
.overview-textbox h3{
  color: #009544;
  font-size: 0.4rem;
  margin-bottom: 0.5rem;
}
.overview-textbox p{
  font-size: 0.18rem;
  line-height: 0.5rem;
}
.overview-chanpin{
  background: #F6F6F6;
  text-align: center;
  padding-top: 1.1rem;
  padding-bottom: 0.7rem;
}
.overview-chanpin ul{
  margin: auto;
  display: flex;
  justify-content: space-between;
  width: 11.9rem;
  flex-wrap: wrap;
}
.overview-chanpin ul li{
  width: 3.8rem;
  height: 2.2rem;
  background: #FFFFFF;
  margin-bottom: 0.4rem;
}
.overview-chanpin ul li img{
  width: 0.8rem;
  height: 0.8rem;
  margin-top:0.44rem;
  margin-bottom:0.32rem;
}
.overview-btmbox{
    width: 5.53rem;
    margin: auto;
    line-height: 0.5rem;
    font-size: 0.18rem;
    padding:1.06rem 0;
}
.overview-btmbox ul{
    margin-left: 0.2rem;
    list-style:disc;
}
.overview-btmbox ul li span{
    font-weight: 500;
}
</style>