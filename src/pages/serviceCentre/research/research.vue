<template>
  <div class="research">
        <div class="research-baner gdtbh">
            <img src="../../../assets/res-banner.jpg" alt="">
        </div>
        <div class="research-textbox">
            <h3>菌钥大健康研究院</h3>
            <p>菌钥大健康研究院是由江苏菌钥生命科技发展有限公司投资3500万元建设而成，研究院坐落于北京国家级经济开发区锋创科技园。</p>
            <p>主要从事中药发酵和其他保健性、功能性食品的前端开发、机制研究、功能性评价及产业化落地工作，秉承“创造力、执行力、凝聚力”的团队文化，把打造中国最具创新活力的大健康研发团队作为建设目标，为公司的长远发展提供源源不断的动力。</p>
        </div>
        <div class="research-yanfa">
            <div class="research-yanfa-textdiv">
                <h2>菌钥大健康研究中心</h2>
                <p>专注于功能食品解决方案的设计与制造，特设八大实验室</p>
                <p>解决客户对产品的高要求</p>
            </div>
            <ul>
                <li class="li1">
                    <div class="yanfa-ldiv res-zhongyao">
                        <p>中药微生态实验室</p>
                    </div>
                    <div class="yanfa-rdiv" ref="rdiv1">
                        <h3>中药微生态实验室</h3>
                        <p>以传统经典中医方剂以及药食同源文化，融合微生态学、营养学、生理病理学、中医药学等多学
                            科理论，应用仿生学多菌共生的现代发酵技术，通过生物嫁接的方式，在体外模拟人体的肠道环境以及
                            中药成分在体内的消化分解过程，对中药有效成分进行生物学转化。</p>
                    </div>
                </li>
                <li     class="li2"
                        @mouseenter="suoli1('rdiv1')"
                        @mouseleave="suoli2('rdiv1')"
                    >
                    <div class="yanfa-ldiv res-daixie">
                        <p>代谢营养实验室</p>
                    </div>
                    <div class="yanfa-rdiv">
                        <h3>代谢营养实验室</h3>
                        <p>利用现代分析检测手段以及计算机辅助技术，对中药及其复方中的海量成分信息进行高通量筛选（HTS）与表征（
                            包括化学表征与生物学表征），探寻药效物质基础是中药现代化研究的关键一步，使得对复杂的发酵中药样品实
                            现多组化合物同时在线分离、分析，获取定性/定量数据信息，阐明中药及复方的药效物质基础成为可能。</p>
                    </div>
                </li>
            </ul>
            <ul>
                <li>
                    <div class="yanfa-ldiv res-jingzhun">
                        <p>精准营养实验室</p>
                    </div>
                    <div class="yanfa-rdiv" ref="rdiv2">
                        <h3>精准营养实验室</h3>
                        <p>秉承传统医学理论，传承经典，结合现代科技，科学组方。
                            精准营养，即个性化营养方案，通过合理膳食和科学补充
                            营养补剂，从而达到预防疾病，获得健康的目的。</p>
                    </div>
                </li>
                <li
                    @mouseenter="suoli1('rdiv2')"
                    @mouseleave="suoli2('rdiv2')"
                >
                    <div class="yanfa-ldiv res-meirong">
                        <p>美容营养实验室</p>
                    </div>
                    <div class="yanfa-rdiv">
                        <h3>美容营养实验室</h3>
                        <p>依托抗糖化技术、抗氧化技术，提炼开发针对不同年龄阶段的女性
                            抗衰老营养解决方案，实现内服外养的皮肤营养护理。采用最先进的
                            皮肤肤质评价方案，开发胶原蛋白、弹性蛋白等多种营养素的功能评价
                            以及产品应用方案。</p>
                    </div>
                </li>
            </ul>
            <ul>
                <li>
                    <div class="yanfa-ldiv res-yundong">
                        <p>运动营养实验室</p>
                    </div>
                    <div class="yanfa-rdiv" ref="rdiv3">
                        <h3>运动营养实验室</h3>
                        <p>深入评估营养与运动、运动生理学基础、膳食中的碳水化合物
                            、运动中糖的补充、胃肠功能与运动等，改善运动专业人员体质
                            ,保持体能与活力之外,增强运动能力和运动效果。</p>
                    </div>
                </li>
                <li
                    @mouseenter="suoli1('rdiv3')"
                    @mouseleave="suoli2('rdiv3')"
                >
                    <div class="yanfa-ldiv res-muying">
                        <p>母婴营养实验室</p>
                    </div>
                    <div class="yanfa-rdiv">
                        <h3>母婴营养实验室</h3>
                        <p>评估母婴特殊群体生长过程中影响营养状况的关键数据，估算出个
                            体营养元素差值，具体分析个体营养环境与状况，制定针对有效的
                            营养产品组合和营养补充方案。</p>
                    </div>
                </li>
            </ul>
            <ul>
                <li>
                    <div class="yanfa-ldiv res-odm">
                        <p>ODM工艺实验室</p>
                    </div>
                    <div class="yanfa-rdiv" ref="rdiv4">
                        <h3>ODM工艺实验室</h3>
                        <p>拥有从粉剂、片剂、果冻、软胶囊、膏滋、口服液、摇摇瓶等全线
                            产品的研发设备，涵盖稳定性分析、理化指标检测、小试样品封装等工序。</p>
                    </div>
                </li>
                <li
                    @mouseenter="suoli1('rdiv4')"
                    @mouseleave="suoli2('rdiv4')"
                >
                    <div class="yanfa-ldiv res-zhiliang">
                        <p>质量评价实验室</p>
                    </div>
                    <div class="yanfa-rdiv">
                        <h3>质量评价实验室</h3>
                        <p>配备有GC-MS/MS及LC-MS/MS，用最高标准的严谨与机制，为您的
                            产品把关，确保每一次生产的产品都是高效能。从原料到成品，包含
                            三大防腐剂、七大微生物、九大重金属及农药残留等，于出货时随产品
                            附上，保证让客户与消费者都安心。</p>
                    </div>
                </li>
            </ul>
      </div>
      <div class="research-btmdiv">
          <p>成熟的产品研发技术</p>
          <p>专业的设备</p>
          <p>为客户定制个性化产品</p>
          <ul class="research-btmdiv-ul">
              <li>
                  <img src="../../../assets/res-btmlimg.png" alt="">
              </li>
              <li>
                  <img src="../../../assets/res-btmcimg.png" alt="">
              </li>
              <li>
                  <img src="../../../assets/res-btmrimg.png" alt="">
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
    methods:{
        suoli1(divname){
            this.$refs[divname].style.width="0"
            this.$refs[divname].parentNode.firstChild.lastChild.style.opacity="1"

        },
        suoli2(divname){
            this.$refs[divname].style.width=""
            this.$refs[divname].parentNode.firstChild.lastChild.style.opacity="0"
        }
    }
}
</script>

<style>
.research-baner img{
    /* position:relative; */
    width: 100%;
}
.research-textbox{
    transform: translateY(-1rem);
    margin-left: 3.6rem;
}
.research-textbox h3{
    color: #009544;
    font-size: 0.4rem;
    margin-bottom: 0.5rem;
}
.research-textbox p{
    width: 11.9rem;
    font-size: 0.18rem;
    line-height: 0.3rem;
    margin-top:0.4rem;
}
.research-yanfa{
  background: #F6F6F6;
  padding-top: 1.1rem;
  padding-bottom: 0.7rem;
}
.research-yanfa-textdiv{
    text-align:center;
    margin-bottom: 0.7rem;
}
.research-yanfa-textdiv h2{
    font-weight: 700;
    font-size: 0.36rem;
}
.research-yanfa-textdiv p{
    font-size: 0.2rem;
    margin-top:0.2rem
}
.research-yanfa ul{
  margin: auto;
  display: flex;
  width: 11.9rem;
  overflow: hidden;
}
.research-yanfa ul li{
  background: #FFFFFF;
  display: flex;
  margin-top: 0.24rem;
  flex: 1;
  margin-left: 0.1rem;
}
.research-yanfa ul li:nth-child(1):hover .yanfa-ldiv{
    box-shadow: 6px 0px 4px 0px rgba(0,0,0,0.11);
}
.research-yanfa ul li:nth-child(1):hover .yanfa-rdiv{
    background:#797979;
    color: #FFFFFF;
    width: 7.6rem;
}
.research-yanfa ul li:nth-child(1):hover +li .yanfa-ldiv>p{
    opacity: 1;
}
.research-yanfa ul li:nth-child(2):hover .yanfa-ldiv{
    box-shadow: 6px 0px 4px 0px rgba(0,0,0,0.11);
}
.research-yanfa ul li:nth-child(2):hover .yanfa-rdiv{
    background:#797979;
    color: #FFFFFF;
    width: 7.8rem;
}
.yanfa-ldiv{
    width: 2rem;
    height: 2rem;
    box-shadow: 6px 0px 4px 0px rgba(0,0,0,0.11);
    position:relative;
    background-size: 70% 70%;
    background-position: center;
    background-repeat: no-repeat;
}
.research-yanfa ul li:nth-child(1):hover .yanfa-ldiv{
    background-color:#209044;
}
.research-yanfa ul li:nth-child(2):hover .yanfa-ldiv{
    background-color:#209044;

}
.res-zhongyao{
    background-image: url("../../../assets/01-中药微生态.jpg");
}
.research-yanfa ul li:nth-child(1):hover .res-zhongyao{
    background-image: url("../../../assets/01-中药微生态绿.jpg");
}
.res-daixie{
    background-image: url("../../../assets/02-代谢营养.jpg");
}
.research-yanfa ul li:nth-child(2):hover .res-daixie{
    background-image: url("../../../assets/02-代谢营养绿.jpg");
}
.res-jingzhun{
    background-image: url("../../../assets/03-精准营养.jpg");
}
.research-yanfa ul li:nth-child(1):hover .res-jingzhun{
    background-image: url("../../../assets/03-精准营养绿.jpg");
}
.res-meirong{
    background-image: url("../../../assets/04-美容营养.jpg");
}
.research-yanfa ul li:nth-child(2):hover .res-meirong{
    background-image: url("../../../assets/04-美容营养绿.jpg");
}
.res-yundong{
    background-image: url("../../../assets/05-运动营养.jpg");
}
.research-yanfa ul li:nth-child(1):hover .res-yundong{
    background-image: url("../../../assets/05-运动营养绿.jpg");
}
.res-muying{
    background-image: url("../../../assets/06-母婴营养.jpg");
}
.research-yanfa ul li:nth-child(2):hover .res-muying{
    background-image: url("../../../assets/06-母婴营养绿.jpg");
}
.res-odm{
    background-image: url("../../../assets/07-ODM工艺.jpg");
}
.research-yanfa ul li:nth-child(1):hover .res-odm{
    background-image: url("../../../assets/07-ODM工艺绿.jpg");
}
.res-zhiliang{
    background-image: url("../../../assets/08-质量评价.jpg");
}
.research-yanfa ul li:nth-child(2):hover .res-zhiliang{
    background-image: url("../../../assets/08-质量评价绿.jpg");
}
.yanfa-ldiv img{
    width:100%;
    height:100%
}
.yanfa-ldiv p{
    background: #209344;
    line-height: 0.48rem;
    color: #fff;
    text-align: center;
    position: absolute;
    width: 100%;
    bottom: 0;
    opacity: 0;
    transition: all .5s;
}
.yanfa-rdiv{
    width: 3.8rem;
    height: 2rem;
    padding-top: 0.3rem;
    box-sizing: border-box;
    transition: all .5s;
    overflow: hidden;
}
.yanfa-rdiv h3{
    font-size: 0.3rem;
    margin-bottom: 0.2rem;
    width: 3.25rem;
    margin-left: 0.42rem;
	font-weight: 600;
}
.yanfa-rdiv p{
    min-width: 3.3rem;
    margin-left: 0.42rem;
    margin-right: 0.42rem;
    display: -webkit-box;    
    -webkit-box-orient: vertical;    
    -webkit-line-clamp: 3;    
    overflow: hidden;
    font-size: 0.14rem;
}
.research-btmdiv{
    text-align: center;
    padding-top: 1.18rem;
    font-size:0.18rem;
    font-weight: 500;
    line-height: 0.4rem;
}
.research-btmdiv-ul{
    display: flex;
    width: 11.9rem;
    margin: auto;
    justify-content: space-between;
    margin-bottom:1.45rem;
    margin-top:1.18rem;
}
.research-btmdiv-ul li{
    transition: all .5s;
    width: 3.8rem;
}
.research-btmdiv-ul li:hover{
    transform: scale(1.1);
}
.research-btmdiv-ul li img{
    width: 100%;
}
</style>