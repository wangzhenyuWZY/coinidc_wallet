<!-- home -->
<template>
  <div class="container">
    1111111111
  </div>
</template>

<script>
var lightwallet = require('eth-lightwallet')
export default {
  data() {
    return {
      
    }
  },

  computed: {},

  mounted() { 
    var secretSeed = lightwallet.keystore.generateRandomSeed();//注记词
    var password = prompt('Enter password for encryption', 'password');//密码
var global_keystore = null
    lightwallet.keystore.createVault({
        password: password,
        seedPhrase: secretSeed,
        //random salt
        hdPathString: "m/44'/195'/0'/0/0"
      }, function (err, ks) {
        global_keystore = ks
        global_keystore.keyFromPassword(password, function(err, pwDerivedKey) {
          global_keystore.generateNewAddress(pwDerivedKey, 3);
          var addresses = global_keystore.getAddresses();
          console.log(addresses)
          var keys = global_keystore._generatePrivKeys(pwDerivedKey,1) 
          console.log(keys)
        })
      })
      
  },

  methods: {}
}
</script>
<style lang="less" scoped>

</style>
