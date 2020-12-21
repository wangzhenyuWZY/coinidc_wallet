<template>
  <div class="headNav">
    <i class="goback" @click="goback"></i>
    <h2>{{title}}</h2>
  </div>
</template>
<script>
export default {
  name: 'TabBar',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      
    }
  },
  methods: {
    goback() {
      this.$router.go(-1);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.headNav h2{
  line-height:40px;
  text-align:center;
  color:#131F30;
}
</style>
