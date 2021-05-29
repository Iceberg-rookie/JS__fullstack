Function.prototype.myBind = function(context) {
  if (typeof this !== 'function') {
    throw new TypeError('Error')
  }

  let context = context || window
  let _this = this
  let args = [...arguments].slice(1)

  return function F() {
    // this = F.prototype
    if (this instanceof F) {
      return new _this(...args, arguments)
    }
    return  _this().apply(context, args)
  }
}

let fn = a.myBind(b)
let obj = new fn()


Function.prototype.mybind = function(context) {
  if(typeof this !== 'function') return new TypeError('err')

  let context = context || window
  let _this = this
  let args = [...arguments].slice(1)

  return function fn() {
    if(this instanceof fn) return _this(...args, arguments)
    return _this.apply(context, args)
  }
}