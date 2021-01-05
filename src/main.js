import 'core-js/stable'
import 'regenerator-runtime/runtime'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { objIsNull,getStore} from "@/config/utils";
import bip39 from 'bip39';
import ethers from 'ethers';
Vue.prototype.bip39 = bip39;
Vue.prototype.ethers = ethers;
// 设置 js中可以访问 $cdn
import { $cdn } from '@/config'
Vue.prototype.$cdn = $cdn

// 全局引入按需引入UI库 vant
import '@/plugins/vant'
// 引入全局样式
import '@/assets/css/index.scss'
// 移动端适配
import 'lib-flexible/flexible.js'
import './styles/index.less'
// filters
import './filters'
Vue.config.productionTip = false

router.beforeEach((to, from ,next) => {
  if(to.path === '/wallet/step1'){
    let walletItem = getStore("walletItem");
    if (!objIsNull(walletItem)) {
      next({path:'/walletAssets/wallet'})
    }else{
      next()
    }
  }else{
    next()
  }
  
  return
})
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
