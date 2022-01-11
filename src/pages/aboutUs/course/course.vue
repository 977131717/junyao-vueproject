<template>
  <div class="course">
    <div class="course-banner gdtbh">
      <img src="../../../assets/cou-banner.jpg" alt="">
    </div>
    <div class="course-textbox">
      <h3>发展历程</h3>
      <p>我们积累了丰富的研发、生产和市场经验，为客户业务发展提供全面的产品支持。</p>
      <p>持续不断的创新和无与伦比的产品表现，使“菌钥大健康”在营养保健食品合同生产领域成为一个值得信赖的名字。</p>
    </div>
    <div class="course-timeline">
      <div class="course-lvbox">
        <div
          v-show="greenboxclass=='2015'"
          class="course-lvbox-1"
        >
          <p>15年9月江苏菌钥生命科技发展有限公司成立</p>
        </div>
         <div
          v-show="greenboxclass=='2016'"
          class="course-lvbox-2"
        >
          <p>16年上半年环评审批，菌钥大健康于北京成立大健康研究中心</p>
        </div>
         <div
          v-show="greenboxclass=='2017'"
          class="course-lvbox-3"
        >
          <p>17年下半年实现工业化4.0设计，年底获批食品生产许可证 工厂正式投产</p>
        </div>
         <div
          v-show="greenboxclass=='2018'"
          class="course-lvbox-4"
        >
          <p>菌钥大健康和北京中医药大学、北京大学成立联合研究中心</p>
        </div>
         <div
          v-show="greenboxclass=='2019'"
          class="course-lvbox-5"
        >
          <p>牵头成立与山西中医药、北京中医药一同发起成立中国中药协会发酵中药药物专业委员会</p>
        </div>
         <div
          v-show="greenboxclass=='2020'"
          class="course-lvbox-6"
        >
          <p>获得运动营养资质</p>
        </div>
         <div
          v-show="greenboxclass=='2021'"
          class="course-lvbox-7"
        >
          <p>获得4个认证：<br/>
            ISO9001:2015年质量管理体系要求<br/>
            ISO14001:2015年环境管理体系要求及使用指南<br/>
            ISO45001:2018年职业健康安全管理体系要求及使用指南<br/>
            ISO22000:2018年食品安全管理体系食品链中各类组织的要求
          </p>
        </div>
      </div>
      <ul
        @click="showgreenbox"
      >
        <li :class="greenboxclass=='2015'?'liafterg':'liafterh'">2015</li>
        <li :class="greenboxclass=='2016'?'liafterg':'liafterh'">2016</li>
        <li :class="greenboxclass=='2017'?'liafterg':'liafterh'">2017</li>
        <li :class="greenboxclass=='2018'?'liafterg':'liafterh'">2018</li>
        <li :class="greenboxclass=='2019'?'liafterg':'liafterh'">2019</li>
        <li :class="greenboxclass=='2020'?'liafterg':'liafterh'">2020</li>
        <li :class="greenboxclass=='2021'?'liafterg':'liafterh'">2021</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      greenboxclass:'2015'
    }
  },
  methods:{
    showgreenbox(e){
      if(e.target.tagName==='LI'){
        this.greenboxclass=e.target.innerHTML
      }
    }
  }
}
</script>

<style>
.course-banner img{
  width: 100%;
}
.course-textbox{
  transform: translateY(-1.5rem);
  margin-left: 3.4rem;
}
.course-textbox h3{
  color: #009544;
  font-size: 0.4rem;
  margin-bottom: 0.5rem;
}
.course-textbox p{
  font-size: 0.18rem;
  line-height: 0.5rem;
}
.course-timeline{
  position: relative;
  height: 2rem;
  margin-top: 3rem;
}
.course-lvbox div{
  position: absolute;
  width: 4.8rem;
  height: 1.2rem;
  background: url("../../../assets/cou-greenbg.png");
  padding:0.1rem 0.3rem;
  background-size: 100% 100%;
  box-sizing: border-box;
  top: -1.8rem;
  left: 4.5rem;
  line-height: 0.3rem;
}
.course-lvbox .course-lvbox-2{
  left: 6.1rem;
}
.course-lvbox .course-lvbox-3{
  left: 7.8rem;
}
.course-lvbox .course-lvbox-4{
  left: 9.5rem;
}
.course-lvbox .course-lvbox-5{
  background-image: url("../../../assets/cou-greenbg1.png");
  left: 6.4rem;
}
.course-lvbox .course-lvbox-6{
  background-image: url("../../../assets/cou-greenbg1.png");
  left: 8.1rem;
}
.course-lvbox .course-lvbox-7{
  width: 5.5rem;
  height: 2rem;
  background-image: url("../../../assets/cou-greenbg1.png");
  left: 9.1rem;
  top: -2.6rem;
}
.course-timeline div p{
  font-size: 0.16rem;
  color: #fff;
}
.course-timeline ul{
  display: flex;
  height: 0.70rem;
  width: 11.9rem;
  justify-content: space-around;
  margin: auto;
  position: relative;
}
.course-timeline ul::after{
  content: "";
  position: absolute;
  width: 11.9rem;
  height: 0.04rem;
  top: -0.2rem;
}
.course-timeline ul li{
  text-align: center;
  font-size: 0.28rem;
  position: relative;
}
.liafterh::after{
  content: "";
  position: absolute;
  z-index: 1;
  width: 0.56rem;
  height: 0.22rem;
  border-radius: 0.11rem;
  top: -0.3rem;
  left: 0;
  right: 0;
  margin: auto;
}
.liafterg::after{
  content: "";
  position: absolute;
  z-index: 1;
  width: 0.56rem;
  height: 0.22rem;
  border-radius: 0.11rem;
  top: -0.3rem;
  left: 0;
  right: 0;
  margin: auto;
  background: #209344;
}
</style>