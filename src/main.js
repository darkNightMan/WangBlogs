// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import './assets/css/common.css'
// import { Tree } from 'view-design'
import 'element-ui/lib/theme-chalk/index.css'
import Req from './request/http'
import { mapMutations } from 'vuex'
Vue.config.productionTip = false
// console.log(Tree)
// Vue.component('Tree', Tree)
Vue.use(ElementUI) // 引入饿了么主题
Vue.prototype.Req = new Req()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    this.setWinHeight()
  },
  methods: {
    ...mapMutations('app', ['setWinHeight'])
  }
})
