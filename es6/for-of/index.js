Array.prototype.f = 'f'
let arr = ['a', 'b', 'c', 'd', 'e']
let obj = {
  name: 'jiushen',
  age: 18,
  sex: 'boy'
}
obj.height = 180
// console.log(Object.keys(obj));
// for(let i = 0; i < Object.keys(obj).length; i++) {
//   console.log(obj[Object.keys(obj)[i]]);
// }

// for(let i of obj) { // for-of 不能遍历对象，for-of只认迭代器，而对象没有迭代器
//   console.log(i);
// }

// for(let key in arr) { // for-in 可以遍历数组，但是不建议使用
//    console.log(arr[key]);
// }

function Foo() {
  this[100] = 'test-100'
  this[1] = 'test-1'
  this['b'] = 'bar-B'
  this[50] = 'test-50'
  this[9] = 'test-9'
  this[8] = 'test-8'
  this[3] = 'test-3'
  this[5] = 'test-5'
  this['A'] = 'bar-A'
  this['C'] = 'bar-C'
}
let bar = new Foo()
console.log(bar);
for (let key in bar) {
  console.log(`index:${key} value: ${bar[key]}`);
}


// ECMAScript 规范规定，数字属性应该按照索引值的大小升序排列，字符串属性根据创建时的顺序排列