<!-- home -->
<template>
  <div class="container">
    <Title :title="title"></Title>
    <div class="createContainer">
      <p class="createTitle m_top20">备份钱包</p>
      <div class="create_size">
        <p>﹒备份私钥或者备份助记词均可用与连接钱包账户。</p>
        <p>﹒为确保账户安全，建议两种方式都备份。</p>
      </div>
      <div class="validation_list">
        <div class="list">
          <div class="list_item" v-for="(d,index) in wordsList" :key="index">
            <span class="size_number">{{index}}</span>
            <span class="type">{{d}}</span>
          </div>
        </div>
      </div>
      <div class="btn_list m_top20">
        <router-link to="/home"><div class="btn1">备份完成</div></router-link>
        <!-- <div class="btn2 m_top20">上一步</div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { getStore, objIsNull } from "@/config/utils";
import Title from '@/components/Title'
export default {
  data() {
    return {
      title: '备份钱包',
      showEye: false,
      from: {
        pwd1: '',
        pwd2: ''
      },
      codeUrl: 'https://www.baidu.com/',
      show: false,
      show1: false,
      reading: false,
      wordsList:[]
    }
  },
  components: {
    Title
  },
  computed: {
    
  },
  mounted() {
    let mnemonic = getStore("mnemonic");
    if (!objIsNull(mnemonic)) {
      this.wordsList = mnemonic.split(" ");
    }
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
