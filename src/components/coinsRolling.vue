<template>
  <div class="coins-rolling" ref="coins" :class="rolling" @touchstart="touchstart">
    <div v-for="num in coinsNum" class="coin" :key="num" :class="'coin-' + num">
      <img src="../themes/images/common/coin.jpg" alt="">
    </div>
  </div>
</template>
<script>
  export default {
    name: 'coinsRolling',
    data() {
      return {
        rolling: ''
      }
    },
    props: {
      coinsNum: {
        type: Number,
        default: 8
      }
    },
    methods: {
      touchstart () {
        let self = this;
        self.rolling = 'collect';
        window.coinsRollingTimer = setTimeout(function() {
          self.rolling = '';
          clearTimeout(window.coinsRollingTimer);
        }, 1400)
      }
    },
    mounted() {}
  }
</script>
<style lang="less">
  @import "../themes/style/coinsRolling.less";
</style>