<!-- home -->
<template>
  <div class="container">
    <Title :title="title"></Title>
    <div class="createContainer">
      <p class="createTitle">创建钱包<span>(Step2/<span class="title_colr">2</span>)</span></p>
      <p class="createTitle m_top20">备份钱包</p>
      <div class="create_size">
        <p>﹒备份私钥或者备份助记词均可用与连接钱包账户。</p>
        <p>﹒为确保账户安全，建议两种方式都备份。</p>
      </div>
      <div class="key m_top20" @click="show =true">
        <span>备份私钥</span>
        <img src="../../assets/back.svg" alt="">
      </div>
      <div class="key m_top20" @click="show1 = true">
        <span>备份助记词</span>
        <img src="../../assets/back.svg" alt="">
      </div>
      <div class="reading m_top20">
        <span>
          <img src="../../assets/reading_show.svg" alt="" v-show="!reading" @click="reading =!reading">
          <img src="../../assets/reading.svg" alt="" v-show="reading" @click="reading =!reading">
        </span>
        <span>我已备份助记词并保存好私钥信息，并知晓私钥一旦丢失任 何人都将无法找回。</span>
      </div>
      <div class="m_top20">
        <van-button class="globel_button" :loading="false" :disabled='!reading' type="info" loading-text="下载Keystore文件">下载Keystore文件</van-button>
      </div>
    </div>
    <modelKey :show="show" :codeUrl="codeUrl" @close="show=false" />
    <backup :show="show1" @close="show1= false" @chage="chage" />
  </div>
</template>

<script>
import Title from '@/components/Title'
import modelKey from './key'
import backup from './backup'
export default {
  data() {
    return {
      title: '创建钱包',
      showEye: false,
      from: {
        pwd1: '',
        pwd2: ''
      },
      codeUrl: 'https://www.baidu.com/',
      show: false,
      show1: false,
      reading: false
    }
  },
  components: {
    Title,
    modelKey,
    backup
  },
  computed: {

  },
  mounted() {

  },
  methods: {
    chage() {
      alert('点击确定')
    }
  }
}
</script>

<style lang="less" scoped>
@import './index.less';
</style>
