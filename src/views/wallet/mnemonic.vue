<!-- home -->
<template>
  <div class="container">
    <Title title="导入助记词"></Title>
    <div class="createContainer">
      <p class="createTitle">助记词</p>
      <div class="mnem">
        <textarea class="input_text" placeholder="输入助记词单词，并使用空格分隔" />
      </div>
      <div class="set_input">
        <Input label="密码" placeholder="钱包密码" v-model="from.pwd1" />
      </div>
      <div class="set_input">
        <Input placeholder="确认密码" v-model="from.pwd2" />
      </div>
      <div class="set_input">
        <Input label="密码提示" placeholder="选填" v-model="from.pwd3" :icon="false" />
      </div>
      <div class="btn">
        <van-button class="globel_button" :loading="false" :disabled='disableds' type="info" loading-text="下载Keystore文件" @click="handelClick">确定
        </van-button>
      </div>
    </div>
  </div>
</template>

<script>
import Title from '@/components/Title'
import Input from '@/components/Input'
export default {
  data() {
    return {
      title: '创建钱包',
      showEye: false,
      from: {
        pwd1: '',
        pwd2: '',
        pwd3: ''
      }
    }
  },
  components: {
    Title,
    Input
  },
  computed: {
    disableds() {
      return false
      //   if (this.from.pwd1 == '' || this.from.pwd2 == '') {
      //     return true
      //   }
      //   return false
    }
  },
  mounted() {

  },
  methods: {
    handelClick() {
      console.log(2222)
      // this.$router.push('/wallet/step2')
    }
  }
}
</script>

<style lang="less" scoped>
@import './index.less';
.createContainer {
  padding-top: 32px;
}
.mnem {
  width: 100%;
  overflow: hidden;
  display: flex;
  margin-top: 10px;
  .input_text {
    flex: 1;
    background: #ffffff;
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.08);
    border-radius: 3px;
    border: 1px solid #cad5de;
    resize: none;
    height: 120px;
    padding: 11px 12px;
    font-size: 14px;
    color: #000;
    &::placeholder {
      font-size: 14px;
      color: #b6c6d3;
    }
  }
}
</style>
