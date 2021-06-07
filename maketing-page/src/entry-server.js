import { createApp } from './app'
export default context => {
  // 因为有可能会是异步路由钩子函数或组件，所以我们将返回一个 Promise， 以便服务器能够等待所有的内容在渲染前，
  return new Promise((resolve, reject) => {
    const { app, router, store } = createApp()
    // 路由跳转
    console.log(context)
    router.push(context.url)
    // 路由下异步组件和钩子函数解析完
    router.onReady(() => {
      // 返回目标位置或是当前路由匹配的组件数组
      const matchedComponents = router.getMatchedComponents()
      console.log(router)
      if (!matchedComponents.length) {
        return reject({ code: 404 })
      }
      //  // 遍历路由下所以的组件，如果有需要服务端渲染的请求，则进行请求
      Promise.all(matchedComponents.map(Component => {
        if (Component.asyncData) {
            return Component.asyncData({store, app, route: router.currentRoute })
        }
      })).then(() => {
        // 在所有预取钩子(preFetch hook) resolve 后，
        // 我们的 store 现在已经填充入渲染应用程序所需的状态。
        // 当我们将状态附加到上下文，
        // 并且 `template` 选项用于 renderer 时，
        // 状态将自动序列化为 `window.__INITIAL_STATE__`，并注入 HTML。
        context.title = 'wangxiping'
        context.state = store.state
        resolve(app)
      }).catch(reject)
    }, reject)
  })
}