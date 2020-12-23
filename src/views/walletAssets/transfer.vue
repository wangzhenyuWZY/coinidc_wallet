<template>
  <div class="container">
    <div class="title_bg">
      <Title title="转账" hide></Title>

      <div class="padding">
        <div class="from_input">
          <div class="account_title">
            <div class="title">转出账户</div>
            <div class="borders">
              <div class="bordrs_lt">

                <div class="inputs">
                  <input type="text" placeholder="请输入密码">
                  <img src="../../assets/closeit.svg" alt="">
                </div>
              </div>
            </div>

          </div>
          <div class="account_title">
            <div class="title">接受账户</div>
            <div class="borders">
              <div class="bordrs_lt">
                <div class="inputs">
                  <input type="text" placeholder="请输入账户">
                  <img class="saoyisao" src="../../assets/saoyisao.png" alt="">
                </div>
              </div>
            </div>
          </div>
          <div class="account_title" @click="showPicker = true">
            <div class="title ">选择通行证</div>
            <div class="borders">
              <div class="bordrs_lt">

                <div class="inputs">
                  <div class="input_lt">USDT</div>
                  <img src="../../assets/back.svg" alt="">
                </div>
              </div>
            </div>
          </div>
          <div class="account_title">
            <div class="title ">
              <div class="title2"> <span>转账数量</span><span>可转账数量 8399.02</span></div>
            </div>
            <div class="borders">
              <div class="bordrs_lt">
                <div class="inputs">
                  <input type="text" placeholder="请输入数量">
                  <span class="input_rg">全部</span>
                </div>
                <div class="poundage">
                  <span>手续费</span>
                  <span>0.00</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div class="btns">
        <van-button class="globel_button" :loading="false" :disabled='true' type="info" loading-text="确定">发送</van-button>
      </div>
    </div>
    <van-popup v-model="showPicker" round position="bottom">
      <van-picker show-toolbar title="" :columns="columns" @cancel="showPicker = false" item-height="40" @confirm="onConfirm"
                  confirm-button-text="确定" />
    </van-popup>
  </div>
</template>

<script>
import Title from '@/components/Title'
export default {
  data() {
    return {
      active: 0,
      navIndex: 1,
      value: '',
      showPicker: false,
      columns: ['杭州', '宁波', '温州', '绍兴', '湖州', '嘉兴', '金华', '衢州', '宁波', '温州', '绍兴', '湖州', '嘉兴', '金华', '衢州']

    }
  },
  components: {
    Title
  },
  methods: {
    onChange(index) {
      this.active = index
      console.log(index)
    },
    nav(index) {
      this.navIndex = index
    },
    onConfirm(value) {
      this.value = value
      this.showPicker = false
    }
  }
}
</script>

<style lang="less" scoped>
.btns {
  padding: 0 15px;
  margin-top: 20px;
  padding-bottom: 40px;
}

.title_bg {
  height: 100vh;
  background: url(../../assets/bg2.png) no-repeat;
  background-size: 100% 220px;
  position: relative;

  .padding {
    padding: 0 15px;
    padding-top: 22px;
  }
  .from_input {
    background: #ffffff;
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.08);
    border-radius: 12px;
    padding-top: 20px;
    padding-right: 15px;
    padding-left: 11px;
    height: 560px;
    .account_title {
      .title {
        font-size: 16px;
        font-weight: 400;
        color: #000000;
        padding-left: 12px;
        position: relative;
        .title2 {
          color: #000000;
          position: relative;
          overflow: hidden;
          span:nth-child(1) {
            float: left;
          }
          span:nth-child(2) {
            float: right;
            font-size: 12px;
            font-weight: 400;
            color: #8997b3;
            margin-top: 4px;
          }
        }
        &::before {
          content: '';
          position: absolute;
          left: 0;
          top: 9px;
          width: 3px;
          height: 3px;
          border-radius: 50%;
          border: 1px solid #aeb8c2;
        }
      }
      .borders {
        padding-left: 2px;
        .bordrs_lt {
          padding-top: 10px;
          padding-bottom: 20px;
          border-left: 1px solid #f4f6fa;
          padding-left: 9px;
        }
        .poundage {
          display: flex;
          justify-content: space-between;
          margin-top: 20px;
          padding-bottom: 14px;
          span {
            font-size: 12px;
            font-weight: 400;
          }
          span:nth-child(1) {
            color: #8997b3;
          }
          span:nth-child(2) {
            color: #000;
          }
        }
      }
      .inputs {
        display: flex;
        align-items: center;
        height: 50px;
        background: #ffffff;
        box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.08);
        border-radius: 6px;
        padding-left: 11px;
        padding-right: 14px;
        border: 1px solid #cad5de;
        .saoyisao {
          width: 18px;
        }
        .input_lt {
          flex: 1;
          color: #000000;
        }
        input {
          flex: 1;
          font-size: 14px;
          font-weight: 400;
          color: #000000;
          &::placeholder {
            color: #b6c6d3;
          }
        }
        img {
          width: 18px;
        }
        .input_rg {
          font-size: 14px;
          font-weight: 500;
          color: #6362f1;
        }
      }
    }
  }
}
/deep/ .van-picker-column__item--selected {
  background: #f4f6fa;
  height: 60px;
  font-size: 16px;
  font-weight: 600;
  font-size: 16px;
}
</style>
