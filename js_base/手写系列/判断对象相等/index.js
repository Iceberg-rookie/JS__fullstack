// function eq(a, b) {
//   if (a === b) return a !== 0 || 1 / a === 1 / b
//   return false
// }

// let a = [1]
// let b = [1]
// console.log(eq(0, 0)); // true
// console.log(eq(+0, -0)); // false

// // +0 === -0
// (+0).toString() // '0'
// // (-0).toString() // '0'


function eq(a, b) {
  // +0,-0
  if (a === b) return a !== 0 || 1 / a === 1 / b
  // NaN
  if (a !== a) return b !== b
  // null
  if (a == null || b == null) return false 

  let type = typeof(a)
  if (type !== 'function' && type !== 'object' && typeof(b) !== 'object') return false

  // 更复杂的对象
  return deepEq(a, b)
}

console.log(eq(NaN, NaN)); // true


let toString = Object.prototype.toString
toString.call('wn')
toString.call(new String ('wn'))

console.log('wn' + '' === new String('wn') + '');