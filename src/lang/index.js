import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

import zh from './config/zh'
import en from './config/en'
import ja from './config/ja'
import kr from './config/kr'

const i18n = new VueI18n({
  locale: localStorage.getItem('lang') || 'zh_CN',
  messages: {
    'zh_CN':zh,
    'en_US':en,
    'ja_JP':ja,
    'ko_KR':kr
  }
})
export default i18n

