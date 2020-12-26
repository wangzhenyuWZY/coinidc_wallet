<template>
  <div class="container">
    <alert1 :show='show' label="玩法说明" @close="show = false">
      <div class="ct_cneter">
        这里有很多字这里有很多字这里有很多字这里有很多字这里有很多字这里有很多字这里有很这里有很多字这里有很多字这里有很多字多字这里有很多字这里有很多字这里有很多字这里有很多字这里有很多字这里有很多字这里有很
        这里有很多字这里有很多字这里有很多字多字这里有很多字这里有很多字这里有很多字这里有很多字这里有很多字这里有很多字这里有很这里有很多字这里有很多字这里有很多字多字
      </div>
    </alert1>
    <alert1 :show='show2' label="公告" @close="show2 = false">
      <div class="announcement" @click.stop.prevent>
        <ul class="an1">
          <li class="an1li" v-for="(item,index) in data" :key="'add'+index" @click="show6 = true;show2=false;">
            <p>{{item.time}}</p>
            <p>{{item.text}}</p>
          </li>
        </ul>
      </div>
    </alert1>
    <alert2 :show='show6' label="公告详情" @close="show6 = false" :mall="true" @closeback="show6 = false; show2= true;">
      <div class="ct_ditile">
        <div>标题标题标题</div>
        <p>
          这里有很多字这里有很多字这里有很多字这里有很多字这里有很多字这里有很多字这里有很这里有很多字这里有很多字这里有很多字多字这里有很多字这里有很多字这里有很多字这里有很多字这里有很多字这里有很多字这里有很
          这里有很多字这里有很多字这里有很多字多字这里有很多字这里有很多字这里有很多字这里有很
        </p>

      </div>
    </alert2>
    <!-- 我的收益 -->
    <alert1 :show='show3' label="公告" @close="show3 = false">
      <div class="announcement announcement2">
        <div class="accets">
          <p>2505 <span>USDT</span></p>
          <p>≈ 2505 USDT</p>
        </div>
        <div class="btns m_top20">提币</div>
        <ul class="an2 m_top20">
          <li class="an2li">
            <p>2020-12-12 12:00:00</p>
            <p>1.您的猫头鹰共创1.02 IDCT收益</p>
            <p>2.您的猫头鹰子民共纳税 3.03 IDCT收益</p>
          </li>
          <li class="an2li">
            <p>2020-12-12 12:00:00</p>
            <p>1.您的猫头鹰共创1.02 IDCT收益</p>
            <p>2.您的猫头鹰子民共纳税 3.03 IDCT收益</p>
          </li>
          <li class="an2li">
            <p>2020-12-12 12:00:00</p>
            <p>1.您的猫头鹰共创1.02 IDCT收益</p>
            <p>2.您的猫头鹰子民共纳税 3.03 IDCT收益</p>
          </li>
          <li class="an2li">
            <p>2020-12-12 12:00:00</p>
            <p>1.您的猫头鹰共创1.02 IDCT收益</p>
            <p>2.您的猫头鹰子民共纳税 3.03 IDCT收益</p>
          </li>
        </ul>
      </div>
    </alert1>
    <alert1 :show='show4' label="我的好友" @close="show4 = false">
      <div class="announcement friend">
        <ul class="friendul">
          <li class="friendli" v-for="(item,index) in data4" :key="index">
            <div> <img src="" alt=""></div>
            <div>
              <p>张大臣</p>
              <p>chen****@gmailcom</p>
            </div>
          </li>
        </ul>
      </div>
    </alert1>
    <mallmodel :show='show5' label="商城" @close="show5 = false" :mall="true" :hide="true">
      <div class="mall">
        <div class="scoll">
          <ul class="mallul">
            <li class="mallli" v-for="(item,index) in data5 " :key="index" @click="setIndex(index)">
              <div :class="toindex == index?'malllibg':''"> </div>
            </li>
          </ul>
        </div>
        <div class="mall_dtail">
          <div class="dt_lt">
            <p>卫兵<span>3000<span>USDT</span></span></p>
            <p>领养卫兵最高可获得600 USDT收益</p>
          </div>
          <div class="dt_rg">
            <div class="btns">
              <div @click="show55= true; show5= false">领养</div>
            </div>
          </div>
        </div>
      </div>
    </mallmodel>
    <alert2 :show='show55' label="商城" @close="show55 = false" @closeback="show55 = false; show5= true;">

      <div class="mall2">
        <div class="ditals_bg">
          <div class="dital2">
            <div class="imgs"> <img src="../../assets/logo.png" alt=""> </div>
            <p class="weib">卫兵</p>
            <p class="linwe">领养卫兵需支付300 USDT，可带来价值约600 USDT 的 IDCT。 </p>
            <p class="linwe">猫头鹰臣民每日需要喂养100金币的食物，否则将无法产出IDCT，金币可证首页看提供的视频广告获得！</p>
          </div>
        </div>

        <div class="btn_slet"><img src="../../assets/btn_unselect.svg" alt=""><span class="seta">300 USDT</span><span class="seta1">(余额：500
            USDT)</span> </div>
        <div class="btns" @click="show55=false;show56 =true">确定支付</div>
      </div>
    </alert2>
    <alert2 :show='show56' label="商城" @close="show56 = false" @closeback="show56 = false; show55= true;">
      <div class="mall2">
        <div class="ditals_bg">
          <div class="dital2">
            <div class="willt_pwd">钱包密码</div>
            <div class="inputs"><input type="password" placeholder="请输入钱包密码"></div>

          </div>
        </div>
        <div class="btns btnst" @click="show77 = true;show56= false ">确定支付</div>
      </div>
    </alert2>

    <alert2 :show='show77' label="商城" @close="show77= false" :mall="true" @closeback="show77 = false; show56= true;">
      <div class="mall3" @click.stop.prevent>
        <div class="mall_center">
          <div class="imgs">
            <img src="../../assets/mall6.svg" alt="">
            <img src="../../assets/mall6.svg" alt="">
          </div>
          <div class="mall3_body">
            <div class=relad>
              <div class="re_list">
                <div class="re_img"> <img src="../../assets/logo.png" alt=""> </div>
                <div class="re_img"> <img src="../../assets/logo.png" alt=""> </div>
                <div class="re_img"> <img src="../../assets/logo.png" alt=""> </div>
              </div>
              <div class="hends">
                <div class="hend_top"></div>
                <div class="hend_b"></div>
              </div>
            </div>
          </div>
          <div class="imgs">
            <img src="../../assets/mall6.svg" alt="">
            <img src="../../assets/mall6.svg" alt="">
          </div>
        </div>
        <div class="mall3btn">
          <div @click="show77=false">立即抽奖</div>
        </div>
      </div>
    </alert2>
    <alert2 :show='show7' label="系统提示" @close="show7= false" :mall="false" :hideback="true">
      <div class="styme_model" @click.stop.prevent>
        <div class="stemes">
          <div class="img">
            <img src="../../assets/acctove.svg" alt="">
          </div>
          <p>金币不足</p>
          <p>可以看广告获取更多金币哦！</p>
        </div>
        <div class="btns btnst" @click="show7 = false">确定</div>
      </div>
    </alert2>
    <scene>
      <div class="ps_list">
        <div class="play " @click="show = true"> <img src="../../assets/play.svg" alt=""> <span class="play_size">玩法</span> </div>
        <div class="play play1" @click="show2 = true"> <img src="../../assets/announcement.svg" alt=""> <span
                class="play_size p_announcement">公告</span> </div>
        <div class="play play1 " @click="show5 = true"> <img src="../../assets/mall.svg" alt=""> <span class="play_size p_mall">商城</span> </div>
        <div class="play play1 " @click="show3 = true"> <img src="../../assets/earnings.svg" alt=""> <span class="play_size p_earnings">收益</span>
        </div>
      </div>
      <div class="ps_nav">
        <div class="play " @click="show4 = true"> <img src="../../assets/haoyou.svg" alt=""> <span class="play_size">好友</span> </div>
        <div class="play1 " @click="show7 = true">
          <div class="ceter_img">2000</div> <span class="play_size">免费赚金币</span>
        </div>
        <div class="play "> <img src="../../assets/weiyang.svg" alt=""> <span class="play_size play_sizec">一键喂养</span> </div>
      </div>
    </scene>
  </div>
</template>

<script>
import alert1 from './globelModel'
import alert2 from './globelModel2'
import scene from '@/components/scene'
import mallmodel from './mallModel'
export default {
  components: {
    alert1,
    scene,
    alert2,
    mallmodel
  },
  data() {
    return {
      show: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      show55: false,
      show6: false,
      show56: false,
      toindex: 0,
      show7: false,
      show77: false,
      data: [
        {
          time: '2020-12-12',
          text: '新闻标题新闻标题新闻标题题新闻标题新闻新闻标题新闻标题新闻标题题新闻标题新闻新闻标题新闻标题新闻标题题新闻标题新闻'
        },
        {
          time: '2020-12-12',
          text: '新闻标题新闻标题新闻标题题新闻标题新闻新闻标题新闻标题新闻标题题新闻标题新闻新闻标题新闻标题新闻标题题新闻标题新闻'
        },
        {
          time: '2020-12-12',
          text: '新闻标题新闻标题新闻标题题新闻标题新闻新闻标题新闻标题新闻标题题新闻标题新闻新闻标题新闻标题新闻标题题新闻标题新闻'
        },
        {
          time: '2020-12-12',
          text: '新闻标题新闻标题新闻标题题新闻标题新闻新闻标题新闻标题新闻标题题新闻标题新闻新闻标题新闻标题新闻标题题新闻标题新闻'
        },
        {
          time: '2020-12-12',
          text: '新闻标题新闻标题新闻标题题新闻标题新闻新闻标题新闻标题新闻标题题新闻标题新闻新闻标题新闻标题新闻标题题新闻标题新闻'
        }
      ],
      data4: [1, 2, 4, 5, 6, 7, 8, 9],
      data5: [1, 2, 4, 5, 6, 7, 8, 9, 2, 4, 5, 6, 7]
    }
  },
  methods: {
    setIndex(index) {
      this.toindex = index
    }
  }
}
</script>

<style lang="less" scoped>
ul {
  li {
    width: auto;
    height: auto;
  }
}
.announcement {
  background: #dadeec;
  box-shadow: 2px 2px 1px 0px rgba(38, 47, 131, 0.61);
  border-radius: 5px;
  padding: 0 10px;
  padding-top: 34px;
  max-height: 316px;
  overflow: auto;

  .an1 {
    .an1li {
      width: auto;
      background: #f9fbff;
      box-shadow: 2px 2px 2px 0px #bfc2d8;
      border-radius: 5px;
      margin-bottom: 10px;
      padding: 13px 19px 13px 10px;
      p:nth-child(1) {
        font-size: 12px;
        font-weight: 400;
        color: #8d91ab;
      }
      p:nth-child(2) {
        font-size: 14px;
        font-weight: 400;
        color: #303030;
        margin-top: 7px;
      }
    }
  }
  &::-webkit-scrollbar {
    width: 0px;
    // background: red;
  }
}
.announcement2 {
  max-height: 530px;
  .accets {
    background: linear-gradient(180deg, #ebedf6 0%, #ffffff 100%);
    border-radius: 5px;
    padding: 25px 0;
    p {
      text-align: center;
    }
    p:nth-child(1) {
      font-size: 30px;
      font-weight: 600;
      color: #303030;
      span {
        font-size: 14px;
        color: #494c61;
      }
    }
    p:nth-child(2) {
      font-size: 12px;
      font-weight: 600;
      color: #8d91ab;
    }
  }
  .an2 {
    height: 310px;
    overflow: auto;
    &::-webkit-scrollbar {
      width: 0;
    }
    .an2li {
      background: #f9fbff;
      box-shadow: 2px 2px 2px 0px #bfc2d8;
      border-radius: 5px;
      padding: 13px 0 13px 10px;
      margin-bottom: 10px;
      p {
        font-size: 14px;
        font-weight: 400;
        color: #303030;
      }
      p:nth-child(1) {
        font-size: 12px;
        color: #8d91ab;
      }
      p:nth-child(2) {
        margin-top: 8px;
      }
    }
  }
  .btns {
    height: 50px;
    line-height: 50px;
    background: linear-gradient(360deg, #545fa8 0%, #8894e4 100%);
    border-radius: 6px;
    font-size: 16px;
    font-weight: 500;
    color: #ffffff;
    text-align: center;
  }
}
.friend {
  .friendul {
    height: 280px;
    overflow: auto;
    &::-webkit-scrollbar {
      width: 0;
    }
    .friendli {
      background: #f9fbff;
      box-shadow: 2px 2px 2px 0px #bfc2d8;
      border-radius: 5px;
      display: flex;
      padding: 10px;
      margin-bottom: 10px;
      div:nth-child(1) {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 10px;
        background: cornflowerblue;
        img {
          width: 40px;
        }
      }
      div:nth-child(2) {
        p {
          font-weight: 400;
        }
        p:nth-child(1) {
          font-size: 14px;
          color: #303030;
        }
        p:nth-child(2) {
          font-size: 12px;
          color: #8d91ab;
          margin-top: 3px;
        }
      }
    }
  }
}
.mall {
  // background: #dadeec;
  // box-shadow: 2px 2px 1px 0px rgba(38, 47, 131, 0.61);
  // border-radius: 5px;
  .scoll {
    padding: 10px;
    height: 160px;
    overflow: auto;
  }
  .mallul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(75px, 1fr));
    gap: 10px 15px;

    .mallli {
      width: 75px;
      height: 75px;
      background: red;
      .malllibg {
        background: #ffb679;
        width: 100%;
        height: 100%;
      }
    }
  }
  .mall_dtail {
    padding: 0 10px;
    display: flex;
    padding-top: 20px;
    padding-bottom: 30px;
    background: #fff;
    .dt_lt {
      flex: 1;
      p {
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #494c61;
      }
      p:nth-child(1) {
        font-size: 16px;
        font-weight: 600;
        color: #303030;
        span {
          font-size: 18px;
          color: #e34b4b;
          margin-left: 10px;
          span {
            margin-left: 4px;
            font-size: 10px;
          }
        }
      }
      p:nth-child(2) {
        margin-top: 5px;
      }
    }
    .dt_rg {
      .btns {
        width: 110px;
        height: 40px;
        background: linear-gradient(360deg, #545fa8 0%, #8894e4 100%);
        border-radius: 21px;
        border: 1px solid #4b56a0;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        div {
          width: 104px;
          height: 34px;
          background: linear-gradient(180deg, #a3afff 0%, #6f7cd2 100%);
          border-radius: 17px;
          font-size: 14px;
          font-weight: 600;
          color: #ffffff;
          line-height: 34px;
        }
      }
    }
  }
}
.mall2 {
  background: #dadeec;
  box-shadow: 2px 2px 1px 0px rgba(38, 47, 131, 0.61);
  border-radius: 5px;
  padding: 25px 10px 10px;
  .ditals_bg {
  }
  .dital2 {
    background: #f9fbff;
    box-shadow: 2px 2px 2px 0px #bfc2d8;
    border-radius: 5px;
    padding: 38px 12px 33px 10px;
    .willt_pwd {
      font-size: 16px;
      font-weight: 400;
      color: #000000;
    }
    .inputs {
      display: flex;
      margin-top: 10px;
      input {
        flex: 1;
        height: 50px;
        background: #ffffff;
        box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.08);
        border-radius: 6px;
        border: 1px solid #cad5de;
        font-size: 14px;
        font-weight: 400;
        color: #000;
        padding-left: 10px;
        width: auto;
        &::placeholder {
          color: #b6c6d3;
        }
      }
    }
    .imgs {
      text-align: center;
      img {
        width: 100px;
        height: 100px;
      }
    }
    .weib {
      font-size: 16px;
      font-weight: 600;
      color: #303030;
      text-align: center;
      margin-top: 12px;
      margin-bottom: 5px;
    }
    .linwe {
      font-size: 12px;
      font-weight: 400;
      color: #4f5f7f;
      text-indent: 30px;
    }
  }
  .btn_slet {
    display: flex;
    align-items: center;
    margin: 12px 0;
    img {
      width: 14px;
      height: 14px;
    }
    .seta {
      font-size: 14px;
      font-weight: 600;
      color: #303030;
      margin: 0 10px;
    }
    .seta1 {
      font-size: 12px;
      font-weight: 400;
      color: #8997b3;
    }
  }
  .btns {
    height: 50px;
    line-height: 50px;
    text-align: center;
    background: linear-gradient(360deg, #545fa8 0%, #8894e4 100%);
    box-shadow: 2px 2px 0px 0px rgba(224, 225, 255, 0.5);
    border-radius: 6px;
    color: #ffffff;
    border: 1px solid #4b56a0;
    font-size: 16px;
    font-weight: 500;
    &.btnst {
      margin-top: 10px;
    }
  }
}
.mall3 {
  padding-top: 6px;
  .mall_center {
    background: #ffcb02;
    border-radius: 5px;
    .imgs {
      display: flex;
      justify-content: space-between;
      padding: 5px 8px;
      img {
        width: 16px;
        height: 16px;
      }
    }
  }
  .mall3_body {
    padding: 0 10px;

    .relad {
      padding: 13px;
      background: #ffaa01;
      border-radius: 5px;
      .hends {
        position: absolute;
        top: 90px;
        right: -13px;
        text-align: right;
        .hend_top {
          width: 13px;
          height: 46px;
          background: linear-gradient(90deg, #eda214 0%, #fffe6d 100%);
          border-radius: 4px;
          position: absolute;
          top: -46px;
          left: 14px;
        }
        .hend_b {
          width: 18px;
          height: 37px;
          border-radius: 0 0 6px 0;
          border-bottom: 5px solid #e57223;
          border-right: 5px solid #e57223;
        }
      }

      .re_list {
        background: #de3507;
        border-radius: 5px;
        padding: 8px;
        display: flex;
        justify-content: space-between;
        .re_img {
          img {
            width: 80px;
          }
        }
      }
    }
  }
  .mall3btn {
    margin-top: 18px;
    padding-bottom: 8px;
    div {
      background: url(../../assets/mall3btn.svg) no-repeat;
      background-size: 100% 100%;
      width: 170px;
      height: 42px;
      line-height: 42px;
      font-size: 16px;
      font-weight: 500;
      color: #ffffff;
      text-align: center;
      margin: 0 auto;
    }
  }
}
.ct_cneter {
  padding: 35px 10px 20px;
  background: #dadeec;
  box-shadow: 2px 2px 1px 0px rgba(38, 47, 131, 0.61);
  border-radius: 6px;
  font-size: 14px;
  font-weight: 400;
  color: #303030;
}
.ps_list {
  position: absolute;
  right: 20px;
  top: 105px;
  z-index: 666;
  .play {
    position: relative;
    height: 40px;
    &.play1 {
      margin-top: 17px;
    }
    img {
      width: 36px;
      height: 36px;
    }
    .play_size {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 36px;
      height: 16px;
      background: #524ddf;
      border-radius: 8px;
      height: 16px;
      font-size: 12px;
      font-weight: 600;
      color: #ffffff;
      line-height: 16px;
      text-align: center;
      &.p_announcement {
        background: #1499ea;
      }
      &.p_mall {
        background: #d33131;
      }
      &.p_earnings {
        background: #eb9130;
      }
    }
  }
}
.ps_nav {
  position: absolute;
  bottom: 20px;
  left: 0;
  width: 100%;
  z-index: 666;
  display: flex;
  justify-content: space-around;
  .play {
    position: relative;
    width: 50px;
    height: 57px;
    img {
      width: 50px;
      height: 50px;
    }
    .play_size {
      position: absolute;
      left: 4px;
      bottom: 0;
      width: 42px;
      height: 16px;
      background: #03346c;
      border-radius: 8px;
      height: 16px;
      font-size: 12px;
      font-weight: 600;
      color: #ffffff;
      line-height: 16px;
      text-align: center;
    }
    .play_sizec {
      left: -4px;
      width: 58px;
      background: #a52222;
    }
  }
  .play1 {
    position: relative;
    height: 57px;

    .ceter_img {
      width: 140px;
      height: 50px;
      line-height: 50px;
      font-size: 18px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #ffffff;
      text-align: center;
      background: url('../../assets/jibi.svg') no-repeat;
      background-size: 100% 100%;
    }
    .play_size {
      position: absolute;
      bottom: 0;
      left: 36px;
      font-size: 12px;
      font-weight: 600;
      color: #ffffff;
      width: 70px;
      height: 16px;
      background: #e34b4b;
      border-radius: 8px;
      text-align: center;
    }
  }
}
.styme_model {
  background: #dadeec;
  box-shadow: 2px 2px 1px 0px rgba(38, 47, 131, 0.61);
  border-radius: 5px;
  padding: 25px 10px 10px;
  .stemes {
    background: #f9fbff;
    box-shadow: 2px 2px 2px 0px #bfc2d8;
    border-radius: 5px;
    padding-bottom: 24px;
    .img {
      text-align: center;
      padding-top: 48px;
      margin-bottom: 10px;
      img {
        width: 50px;
        height: 50px;
      }
    }
    p {
      font-size: 16px;
      font-weight: 400;
      color: #000000;
      text-align: center;
    }
  }
  .btns {
    margin-top: 10px;
    height: 50px;
    line-height: 50px;
    background: linear-gradient(360deg, #545fa8 0%, #8894e4 100%);
    border-radius: 6px;
    font-size: 16px;
    font-weight: 500;
    color: #ffffff;
    text-align: center;
  }
}
.ct_ditile {
  height: 240px;
  background: #dadeec;
  box-shadow: 2px 2px 1px 0px rgba(38, 47, 131, 0.61);
  border-radius: 6px;
  overflow: auto;
  padding: 0 10px;
  div {
    padding-top: 20px;
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: 400;
    color: #303030;
    text-align: center;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    color: #303030;
  }
}
</style>
