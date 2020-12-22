<template>
  <div class="container">
    <alert1 :show='show' label="玩法说明" @close="show = false">
      <div class="ct_cneter">
        这里有很多字这里有很多字这里有很多字这里有很多字这里有很多字这里有很多字这里有很这里有很多字这里有很多字这里有很多字多字这里有很多字这里有很多字这里有很多字这里有很多字这里有很多字这里有很多字这里有很
        这里有很多字这里有很多字这里有很多字多字这里有很多字这里有很多字这里有很多字这里有很多字这里有很多字这里有很多字这里有很这里有很多字这里有很多字这里有很多字多字
      </div>
    </alert1>
    <alert1 :show='show2' label="公告1" @close="show2 = false">
      <div class="announcement" @click.stop.prevent>
        <ul class="an1">
          <li class="an1li" v-for="(item,index) in data" :key="'add'+index">
            <p>{{item.time}}</p>
            <p>{{item.text}}</p>
          </li>
        </ul>
      </div>
    </alert1>
    <alert1 :show='show3' label="公告2" @close="show3 = false">
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
    <alert1 :show='show5' label="商城" @close="show5 = false" :mall="true">
      <div class="mall">
        <ul class="mallul">
          <li class="mallli" v-for="(item,index) in data5 " :key="index">
            <div> <img src="" alt=""> </div>
            <div>
              <p> <span class="weib">卫兵</span> <span class="btns"> <span class="bg_size">{{item.text == '0'?'领养':'抽取(0/3)'}}</span></span> </p>
              <p><span>3000</span> USDT</p>
              <p>领养卫兵最高可获得600 USDT 收益</p>
            </div>
          </li>
        </ul>
      </div>
    </alert1>
    <div @click="show = true">显示玩法说明</div>
    <div @click="show2 = true">显示公告1</div>
    <div @click="show3 = true">显示公告2</div>
    <div @click="show4 = true">显示我的好友</div>
    <div @click="show5 = true">显示商城</div>
    <div @click="show6 = true">弹出层</div>

    </van-popup>
  </div>
</template>

<script>
import alert1 from './globelModel'
export default {
  components: {
    alert1
  },
  data() {
    return {
      show: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      show6: false,
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
      data5: [
        {
          time: '2020-12-12',
          text: '1'
        },
        {
          time: '2020-12-12',
          text: '0'
        },
        {
          time: '2020-12-12',
          text: '1'
        },
        {
          time: '2020-12-12',
          text: '1'
        },
        {
          time: '2020-12-12',
          text: '0'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
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
  height: 400px;
  background: #dadeec;
  box-shadow: 2px 2px 1px 0px rgba(38, 47, 131, 0.61);
  border-radius: 5px;
  padding: 10px;
  overflow: auto;
  .mallul {
    .mallli {
      padding: 10px;
      display: flex;
      margin-bottom: 10px;
      background: #f9fbff;
      box-shadow: 2px 2px 2px 0px #bfc2d8;
      border-radius: 5px;
      div:nth-child(1) {
        width: 100px;
        background: chartreuse;
        margin-right: 10px;
        border-radius: 6px;
      }
      div:nth-child(2) {
        p:nth-child(1) {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .weib {
            font-size: 16px;
            font-weight: 600;
            color: #303030;
          }
          .btns {
            width: 74px;
            height: 26px;
            text-align: center;
            background: linear-gradient(360deg, #545fa8 0%, #8894e4 100%);
            border-radius: 13px;
            border: 1px solid #4b56a0;
            padding: 4px;
            display: flex;
            .bg_size {
              flex: 1;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 12px;
              font-weight: 600;
              color: #ffffff;
              background: linear-gradient(180deg, #a3afff 0%, #6f7cd2 100%);
              border-radius: 13px;
            }
          }
        }
        p:nth-child(2) {
          font-size: 10px;
          color: #e34b4b;
          margin-top: 5px;

          span {
            font-size: 14px;
            font-weight: 600;
          }
        }
        p:nth-child(3) {
          font-size: 12px;
          font-weight: 400;
          color: #494c61;
          margin-top: 5px;
        }
      }
    }
  }
}
.ct_cneter {
  background: #fff;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);
  padding: 35px 10px 20px;

  border-radius: 6px;
  font-size: 14px;
  font-weight: 400;
  color: #303030;
}
</style>
