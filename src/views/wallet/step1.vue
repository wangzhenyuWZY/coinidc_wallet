<!-- home -->
<template>
  <div class="container">
    <Title :title="title"></Title>
    <div class="createContainer">
      <p class="createTitle">创建钱包<span>(Step1/<span class="title_colr">2</span>)</span></p>
      <div class="set_input">
        <Input label="设置密码" placeholder="请输入密码" v-model="from.pwd1" />
      </div>
      <div class="set_input">
        <Input label="确认密码" placeholder="请再次输入密码" v-model="from.pwd2" />
      </div>
      <div class="btn">
        <!-- <van-button class="globel_button" :loading="false" :disabled='disableds' type="info" loading-text="下载Keystore文件">下载Keystore文件</van-button> -->
        <van-button class="globel_button" :loading="false" :disabled='disableds' type="info" loading-text="下载Keystore文件" @click="handelClick">确认
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
        pwd2: ''
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
      this.$router.push('/wallet/step2')
    }
  }
}
</script>

<style lang="less" scoped>
@import './index.less';
</style>
