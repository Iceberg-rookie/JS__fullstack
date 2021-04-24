// 模块 -> 组件
const Mycomponent = props => {
  const compiler = Mycomponent.cache || (Mycomponent.cache = template('<h1><%= title %></h1>'))
  return compiler(props)
}
Mycomponent.cache = null