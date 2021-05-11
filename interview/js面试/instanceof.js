function myinstanceof(left, right) {
  let prototype = right.prototype
  left = left.__proto__
  while (1) {
    if (left === null) return false
    if (left === prototype) {
      return true
    }
    left = left.__proto__
  }
}

let a = myinstanceof({name: 'Tom'}, Object)
console.log(a);