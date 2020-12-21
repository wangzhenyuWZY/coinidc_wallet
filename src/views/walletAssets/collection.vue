<template>
  <div class="container">
    <div class="title_bg">
      <Title title="收款" hide></Title>
      <div class="title">扫描二维码向我付款</div>
      <div class="qrcode">
        <div class="padds">
          <vue-qr :correctLevel="3" :autoColor="false" :text="codeUrl" :size="121" :margin="0" :logoMargin="3"></vue-qr>
        </div>
      </div>
      <div class="ids m_top20">sljwef</div>
      <div class="ids2">TFF34F23423YHsdhakj…Zkjjxj003492342</div>
      <div class="btns">
        <van-button class="globel_button" type="info">复制收款账户</van-button>
        <div class="sive_qrcode m_top20">保存二维码</div>
      </div>
    </div>

  </div>
</template>

<script>
import Title from '@/components/Title'
import VueQr from 'vue-qr'
export default {
  data() {
    return {
      active: 0,
      navIndex: 1,
      codeUrl: 'www.baidu.com'
    }
  },
  components: {
    Title,
    VueQr
  },
  methods: {
    onChange(index) {
      this.active = index
      console.log(index)
    },
    nav(index) {
      this.navIndex = index
    }
  }
}
</script>

<style lang="less" scoped>
.btns {
  padding: 0 15px;
  margin-top: 30px;
  padding-bottom: 40px;
  .sive_qrcode {
    height: 50px;
    border-radius: 4px;
    border: 1px solid #8997b3;
    font-size: 16px;
    font-weight: 500;
    color: #8997b3;
    text-align: center;
    line-height: 50px;
  }
}

.title_bg {
  height: 100vh;
  background: url(../../assets/bg2.png) no-repeat;
  background-size: 100% 220px;
  position: relative;
  .title {
    font-size: 20px;
    font-weight: 600;
    color: #ffffff;
    text-align: center;
    margin-top: 38px;
  }
  .qrcode {
    text-align: center;
    margin-top: 30px;
    .padds {
      display: inline-block;

      box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.08);
      border-radius: 12px;
      padding: 10px;
      margin: 0 auto;
      background: #fff;
    }
  }
  .ids {
    font-size: 16px;
    font-weight: 600;
    color: #000000;
    text-align: center;
  }
  .ids2 {
    font-size: 14px;
    font-weight: 400;
    color: #8997b3;
    margin-top: 8px;
    text-align: center;
  }
}
</style>
