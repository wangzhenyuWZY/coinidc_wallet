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
        <div class="list2v ">
          <div class="list ">
            <div class="list_item" v-for="(d,index) in list1" :key="index">
              <span class="type">type</span>
            </div>
          </div>
        </div>
      </div>
      <div class="validation_listvt2 validation_list">

        <div class="list list2">
          <div class="list_item" v-for="(d,index) in list" :key="index" @click="hdelClick(d,index)" :class="d.show?'blues':''">
            <span class="type">type</span>
          </div>
        </div>
      </div>
      <div class="btn_list m_top20">
        <van-button class="globel_button" :loading="false" :disabled='true' type="info" loading-text="确定">确定</van-button>
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
      list: [
        {
          id: 1,
          show: false
        },
        {
          id: 2,
          show: false
        },
        {
          id: 3,
          show: false
        },
        {
          id: 4,
          show: false
        },
        {
          id: 5,
          show: false
        },
        {
          id: 6,
          show: false
        },
        {
          id: 7,
          show: false
        },
        {
          id: 8,
          show: false
        },
        {
          id: 9,
          show: false
        },
        {
          id: 10,
          show: false
        },
        {
          id: 11,
          show: false
        },
        {
          id: 12,
          show: false
        }
      ],
      list1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
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
    },
    hdelClick(d, index) {
      d.show = !d.show
      this.$set(this.list, index, d)
      console.log(this.list)
    }
  }
}
</script>

<style lang="less" scoped>
@import './index.less';
</style>
