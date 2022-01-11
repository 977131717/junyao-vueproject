<template>
  <div class="footer">
      <div class="footer-dilogo">
          <img src="../../assets/logobai.png" alt="">
      </div>
      <div class="footer-blr">
          <div class="footer-bl">
              <h3>快速导航</h3>
              <div class="footer-bl-l">
                <p>关于我们</p>
                <p>一站式服务</p>
                <p>产品中心</p>
              </div>
             <div class="footer-bl-r">
                <p>工业旅游</p>
                <p>联系我们</p>
             </div>
          </div>
      </div>
      <div class="footer-lianxi">
          <h3>联系方式</h3>
          <p><span>地址</span>：江苏省盐城市大丰区南翔西路51号</p>
          <p><span>联系电话</span>：0515-87033333</p>
          <p><span>邮箱</span>：jsjunyaokeji&#64;163.com</p>
      </div>
      <div class="footer-erweima-box">
          <div class="footer-erweima">
            <img src="../../assets/footer-er2.jpeg" alt="">
            <p>精准营养</p>
        </div>
        <div class="footer-erweima">
          <img src="../../assets/footer-er1.jpeg" alt="">
            <p>菌钥大健康</p>
        </div>
      </div>
  </div>
</template>

<script>
export default {
	
}
</script>

<style>
.footer{
    height: 3.28rem;
    background: #209344;
    display: flex;
    justify-content: center;
    padding-top: 0.87rem;
    box-sizing: border-box;
    color: #fff;
    font-size: 0.16rem;
}
.footer-dilogo img{
    width: 2.6rem;
    height: 0.6rem;
}
.footer div h3{
    margin-bottom: 0.2rem;
    margin-top: 0.16rem;
    font-size:0.20rem;
}
.footer div p{
    line-height: 0.4rem;
}
.footer-erweima-box{
    display:flex;
    margin-left: 0.3rem;
}
.footer-erweima{
    text-align: center;
    margin-left: 0.3rem;
    width:1.2rem;
    height: 1.2rem;
}
.footer-erweima img{
    width:100%;
    height: 100%;
}
.footer-blr{
    display: flex;
    margin-left: 0.4rem;
}
.footer-bl p{
    text-align-last: justify;
    text-align: justify;
}
.footer-bl-l{
    float: left;
}
.footer-bl-r{
    float:right;
    margin-left:0.3rem;
}
.footer-lianxi {
    margin-left: 0.5rem;
}
.footer-lianxi span{
    display: inline-block;
    width: 0.7rem;
    text-align-last: justify;
    text-align: justify;
}
.footer-erweima-box p{
    font-size:0.14rem;
}
</style>