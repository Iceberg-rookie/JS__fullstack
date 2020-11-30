let b = {
  name: '宜豪',
}
function a(e, r) {
  console.log(e + r);
  console.log(this.name);
}

Function.prototype.mybind = function(thisArg) {
  if(typeof this !== 'function') {
    throw new TypeError('Error')
  }
  const args = [...arguments].slice(1) // [4, 5]
  const self = this
  const nop = function() {}
  // 绑定函数
  const bound = function() {
    return self.apply(thisArg , args)
  }
  return bound
}

let res = a.mybind(b, 4, 5)
res()