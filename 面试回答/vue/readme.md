# 路由跳转方式
- router-link标签会渲染为标签，咋填template中的跳转都是这种；
- 另一种是编辑是导航，也就是通过js跳转比如router.push('/home')

# 为什么组件的data必须是一个函数
- 一个组件可能在很多地方使用，也就是会创建很多个实例，
  如果data是一个对象的话，对象是引用类型，一个实例修改了data会影响到其他实例，
  所以data必须使用函数，为每一个实例创建一个属于自己的data，使其同一个组件的不同实例互不影响。

# 组件间的通信
- 父子组件通信

  父组件 -> 子组件：子组件在props中创建一个属性用来接收父组件传过来的数据，在父组件中引用子组件，通过v-on把数据传递到子组件内部，接着在子组件标签当中添加子组件props属性，最后把需要传给子组件的值赋值给该属性

  子组件 -> 父组件：通过在父组件中自定义事件，在子组件用this.$emit('父组件自定义事件','要传到父组件的数据')实现。

- 兄弟组件通信：组件a当中通过$emit()发送，组件b当中通过$on()接受

# vue中 keep-alive 组件的作用
- keep-alive 是 Vue 内置的一个组件，可以使被包含的组件保留状态，或避免重新渲染。

# vue 的生命周期函数
- beforecreated：实例创建前被调用；
- created: 实例创建后被调用，完成了 data 数据的初始化，el没有
- beforeMount：在挂载前被调用，相关的render函数首次被调用，完成了 el 和 data 初始化，但还没挂载到html页面上
- mounted：在挂载后被调用，完成html页面渲染，挂载元素，获取到DOM节点
- beforeUpdate：数据更新时调用;
- updated：数据更新后调用;
- beforeDestory：实例销毁之前调用,此时实例仍然完全可用；
- destoryed：实例销毁之后调用,此时实例的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。

# 什么是MVVM？
- MVVM 是 Model-View-ViewModel 的缩写。
- Model 代表数据模型，也可以在 Model 中定义操作数据变化的业务逻辑；
- View 代表UI视图，它负责将数据模型转化成 UI 展现出来；
- ViewModel 监听 Model 中数据的改变和控制 View 层的展现；
- View 和 Model 之间并没有直接的联系，而是通过 ViewModel 进行交互，Model 和 View 之间的交互是双向的，因此 View 数据的变化会同步到 Model 中，而 Model 数据的变化也会立即反应到 View 上；
- ViewModel 通过双向数据绑定把 View 层和 Model 层连接了起来，而View 和 Model 之间的同步工作完全是自动的，无需人为干涉，因此开发者只需关注业务逻辑，不需要手动操作 DOM 。