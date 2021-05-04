let shallowCopy = function(obj) {
  // 只拷贝对象
  if (typeof obj !== 'object') return
  // 根据obj的类型判断是新建一个数组还是对象
  let newObj = obj instanceof Array ? [] : {}
  for (let key in obj) {
    newObj[key] = obj[key]
  }
}

Object.prototype.abc = 123