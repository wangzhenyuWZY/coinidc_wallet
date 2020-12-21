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
      <div class="validation_list">
        <div class="list">
          <div class="list_item" v-for="(d,index) in list" :key="index">
            <span class="size_number">{{d}}</span>
            <span class="type">type</span>
          </div>
        </div>
        <div class="list_btn">
          <div class="cp">
            <img src="../../assets/icon_cp.svg" alt="">
            <span>复制</span>
          </div>
          <div class="cp cp1">
            <img src="../../assets/showqroced.svg" alt="">
            显示二维码
          </div>
        </div>
      </div>
      <div class="btn_list m_top20">
        <div class="btn1">下一步</div>
        <div class="btn2 m_top20">上一步</div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from '@/components/Title'
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
      reading: false,
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    }
  },
  components: {
    Title

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
