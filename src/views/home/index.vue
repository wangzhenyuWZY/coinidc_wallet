<!-- home -->
<template>
  <div class="container">
    1111111111111111111111111111111111
  </div>
</template>

<script>
const bip39 = require('bip39')
export default {
  data() {
    return {
      
    }
  },

  computed: {},

  mounted() { 
    debugger
    const mnemonic = bip39.generateMnemonic()
    console.log(mnemonic)
    bip39.mnemonicToSeed(mnemonic).then((res)=>{
      console.log(res.toString('hex'))
    })
    
  },

  methods: {}
}
</script>
<style lang="less" scoped>

</style>
