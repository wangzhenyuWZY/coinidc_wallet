<!-- home -->
<template>
  <div class="container">
    <Title :title="title"></Title>
    <div class="createContainer">
      <p class="createTitle">创建钱包<span>(Step1/<span class="title_colr">2</span>)</span></p>
      <div class="set_input">
        <Input label="昵称" placeholder="请输入昵称" v-model="name" />
      </div>
      <div class="set_input">
        <Input label="设置密码" placeholder="请输入密码" v-model="password" />
      </div>
      <div class="set_input">
        <Input label="确认密码" placeholder="请再次输入密码" v-model="passwordAgain" />
      </div>
      <div class="set_input">
        <Input label="邀请码" placeholder="请输入邀请码" v-model="inviteCode" />
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
import { objIsNull, removeStore, getStore, createWallet } from "@/config/utils";
export default {
  data() {
    return {
      title: '创建钱包',
      showEye: false,
      password:'',
      passwordAgain:'',
      name:'',
      inviteCode:''
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
    removeStore("mnemonic");
    removeStore("walletItem");
  },
  methods: {
    handelClick() {
      if (objIsNull(this.name) || objIsNull(this.name)) {
        this.text = "钱包名称不能为空";
        this.toast = true;
        return;
      }
      if (objIsNull(this.password) || objIsNull(this.passwordAgain)) {
        this.text = "钱包密码不能为空";
        this.toast = true;
        return;
      }
      if (this.password.length > 15 || this.passwordAgain.length > 15) {
        this.text = "钱包密码长度超出限制";
        this.toast = true;
        return;
      }
      if (this.password !== this.passwordAgain) {
        this.text = "输入密码不相同,请检查密码";
        this.toast = true;
        return;
      }
      let wallet = JSON.parse(getStore("walletItem"));
        if (objIsNull(wallet)) {
            createWallet();
            this.$router.push({
                path: "/wallet/step2",
                query: {
                    walletName:this.name,
                    walletPassword: this.password
                }
            });
        }
      this.$router.push('/wallet/step2')
    }
  }
}
</script>

<style lang="less" scoped>
@import './index.less';
</style>
