let Vue = null;
class HistoryRoute {
  constructor () {
    this.current = null
  }
}
class VueRouter {
  constructor (options) {
    this.mode = options.mode || 'hash'
    this.routes = options.routes || []
    this.routesMap = this.createMap(this.routes)

    this.history = new HistoryRoute() // 装当前路由的状态
    this.init()
  }
  // 初始化
  init() {
    if (this.mode === 'hash') {
      location.hash ? '' : location.hash = '/';
      window.addEventListener('load', () => {
        this.history.current = location.hash.slice(1)
      })
      window.addEventListener('hashchange', () => {
        this.history.current = location.hash.slice(1)
      })
    } else {
      location.pathname ? '' : location.pathname = '/';
      window.addEventListener('load', () => {
        this.history.current = location.pathname
      })
      window.addEventListener('popstate', () => {
        this.history.current = location.pathname
      })
    }
  }
  createMap(routes) {
    return routes.reduce((pre, current) => {
      pre[current.path] = current.component  // { '/home': Home }
      return pre
    }, {})
  }
}
VueRouter.install = function(v) {
  Vue = v;
  Vue.mixin({
    beforeCreate() {
      if (this.$options && this.$options.router) { // 如果是根组件
        this._root = this
        this._router = this.$options.router

        Vue.util.defineReactive(this, 'xxx', this._router.history)
      } else { // 如果是子组件
        this._root = this.$parent && this.$parent._root
      }
      Object.defineProperty(this, '$router', {
        get () {
          return this._root._router
        }
      })
      Object.defineProperty(this, '$route', {
        get () {
          return this._root._router.history.current
        }
      })
    }
  })
  Vue.component('router-link', {
    props: {
      to: String
    },
    render(h) {
      let mode = this._self._root._router.mode
      let to = mode === 'hash' ? '#' + this.to : this.to
      return h('a', {attrs: {href: to}}, this.$slots.default)
    }
  })
  Vue.component('router-view', {
    render(h) {
      let current = this._self._root._router.history.current
      let routeMap = this._self._root._router.routesMap
      return h(routeMap[current])
    }
  })
}

export default VueRouter


// 为什么Vue里面的插件不会被重新加载？
// 官方已经做了一个操作，在Vue这个类当中存放了一个数组专门用来装目前已装好的插件，
// 所以说在被use过一次之后，这个插件就会被标记，在这个数组里面出现，所以这个插件就再也不会被重新加载
// class Vue {
//   constructor() {
//     _installedPlugins: ''
//   }
// }
// Vue.use = function(plugin) {
//   const installedPlugins = (this._installedPlugins || (this._installedPlugins = []))
//   if (this._installedPlugins.indexOf(plugin) > -1) {
//     return this
//   }
//   const args = toArray(arguments, 1)
//   args.unshift(this)
//   if (typeof plugin.install === 'function') {
//     plugin.install.apply(plugin, args)
//   } else if (typeof plugin === 'function') {
//     plugin.apply(null, plugin, args)
//   }
//   installedPlugins.push(plugin)
//   return this
// }