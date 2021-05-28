import { createApp } from './main.js'
import Vue from 'vue'
const {app, router, store} = createApp()
// const  prefetchFns = []
// const components = App.components
// for (let key in components) {
//   if (!components.hasOwnProperty(key)) continue;
//   let component = components[key];
//   if(component.asyncData) {
//       prefetchFns.push(component.asyncData({
//           store
//       }))
//   }
// }
// console.log( App.components )
// console.log(router.getMatchedComponents())
Vue.mixin({
  beforeMount () {
    const { asyncData } = this.$options
    if (asyncData) {
      // 将获取数据操作分配给 promise
      // 以便在组件中，我们可以在数据准备就绪后
      // 通过运行 `this.dataPromise.then(...)` 来执行其他任务
      this.dataPromise = asyncData({
        store: this.$store,
        route: this.$route,
        app: app
      })
    }
  },
  // 客户端数据预取 (Client Data Fetching)
  beforeRouteEnter (to, from, next) {
    next((vm) => {
      const { asyncData } = vm.$options
      if (asyncData) {
        // eslint-disable-next-line standard/object-curly-even-spacing
        asyncData({ store: vm.$store, route: vm.$route}).then(next).catch(next)
      } else {
        next()
      }
    })
  }
})

if (window.__INITIAL_STATE__) { // 把store中的state 替换成 window.__INITIAL_STATE__ 中的数据
  store.replaceState(window.__INITIAL_STATE__)
}
router.onReady(() => {
  app.$mount('#app', true)
})
