let Vue = null
class VueRouter {
   
}
VueRouter.install = function(v) {
  Vue = v
  Vue.mixin({
    beforeCreate() {
      if (this.$options && this.$options.roter) { // 如果是根组件
        this._root = this
        this._roter = this.$options.roter
      } else { // 如果是子组件
        this._root = this.$parent && this.$parent._root
      }
      Object.defineProperty(this, '$router', {
        get () {
          return this._root._roter
        }
      })
    }
  })
  Vue.component('router-link', {
    render(h) {
      return h('a', {}, '首页')
    }
  })
  Vue.component('router-view', {
    render(h) {
      return h('h1', {}, '首页视图')
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