let b = {
  name: '宜豪',
}
function a(e, r) {
  console.log(e + r);
  console.log(this.name);
}

Function.prototype.myapply = function(obj, arg) {
  if(typeof this !== 'function') {
    throw new TypeError('Error')
  }
  const fn = Symbol('fn')
  obj[fn] = this
  const res = obj[fn](...arg)
  delete obj[fn]
  return res
}


a.myapply(b, [3, 2])  
