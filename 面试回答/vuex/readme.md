# vuex 是什么
- vuex 是 vue 中专门管理页面的数据状态，提供统一数据操作的生态系统
- Vuex采用MVC模式中的Model层，规定所有的数据必须通过action--->mutaion--->state这个流程进行来改变状态的。再结合Vue的数据视图双向绑定实现页面的更新。统一页面状态管理，可以让复杂的组件交互变的简单清晰，同时在调试时也可以通过DEVtools去查看状态。在当前前端的spa模块化项目中不可避免的是某些变量需要在全局范围内引用，此时父子组件的传值，子父组件间的传值，兄弟组件间的传值成了我们需要解决的问题。虽然vue中提供了props（父传子）commit（子传父）兄弟间也可以用localstorage和sessionstorage。但是这种方式在项目开发中带来的问题比他解决的问题（难管理，难维护，代码复杂，安全性低）更多。vuex的诞生也是为了解决这些问题，从而大大提高我们vue项目的开发效率。

# vuex属性有哪些
- 一共有五种，state、getter、mutation、action、module

# vuex的state特性
- state 对应于一般 vue 中的 data，state里面存放的数据是响应式的，vue组件从store中读取数据，如果store中的数据改变，依赖这个数据的组件也会更新

# vuex的getter特性
- getter 可以对 state 进行计算操作，它就是store的计算属性，getter可以在多组件之间复用

# vuex的mutation特性
- action类似于mutation，不同的地方在于action提交的是mutation，而不是直接变更状态，action可以包含任意异步操作

# Vue.js中ajax请求代码应该写在组件的methods中还是vuex的actions中？
- 如果请求来的数据是不是要被其他组件公用，仅仅在请求的组件内使用，就不需要放入vuex 的state里
- 如果被其他地方复用，这个很大几率上是需要的，如果需要，请将请求放入action里，方便复用，并包装成promise返回，在调用处用async await处理返回的数据。如果不要复用这个请求，那么直接写在vue文件里很方便

# 不用Vuex会带来什么问题？
- 可维护性会下降，你要想修改数据，你得维护三个地方

- 可读性会下降，因为一个组件里的数据，你根本就看不出来是从哪来的

- 增加耦合，大量的上传派发，会让耦合性大大的增加，本来Vue用Component就是为了减少耦合，现在这么用，和组件化的初衷相背

- 兄弟组件有大量通信的，建议一定要用，不管大项目和小项目，因为这样会省很多事

# store注入组件install方法
- store注入 vue的实例组件的方式，是通过vue的 mixin 机制，借助vue组件的生命周期 钩子 beforeCreate 完成的
  每个vue组件实例化过程中，会在 beforeCreate 钩子前调用 vuexInit 方法