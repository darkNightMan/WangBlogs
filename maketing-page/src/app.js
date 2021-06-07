import Vue from 'vue'
import vuedraggable from 'vuedraggable'
import ElementUI from 'element-ui'
import App from './App.vue'
import { createRouter } from './router'
import { createStore }from './store'
import { sync } from 'vuex-router-sync'
import { installComponents } from '@/package'
Vue.config.productionTip = false
Vue.use(ElementUI) // 引入饿了么主题
Vue.component('vuedraggable', vuedraggable)
Vue.config.productionTip = false
// 安装组件
installComponents(Vue)
export function createApp () {
  // 创建 router 实例
  const router = createRouter()
  // 穿件 store 实列
  const store = createStore()
  // 同步路由状态(route state)到 store
  sync(store, router)

  const app = new Vue({
    // 注入 router 到根 Vue 实例
    router,
    store,
    render: h => h(App)
  })
  // 返回 app 和 router
  return { app, router ,store}
}