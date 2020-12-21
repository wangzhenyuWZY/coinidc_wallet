<!-- home -->
<template>
  <div class="container">
    <Title :title="title"></Title>
    <div class="createContainer">
        <p class="createTitle">创建钱包<span>(Step1/2)</span></p>
    </div>
  </div>
</template>

<script>
import Title from '@/components/Title'
export default {
  data() {
    return {
      title:'创建钱包'
    }
  },
  components:{
      Title
  },
  computed: {
    
  },
  mounted() { 
    
    
  },
  methods: {}
}
</script>

<style lang="less" scoped>
@import './index.less';

</style>
