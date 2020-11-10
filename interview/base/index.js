 let key1 = Symbol(1)
 let key2 = Symbol(1)

//  console.log(key1 === key2); // false

// console.log(typeof(null)); // object

// console.log('hello'.length); // 5 包装类

// console.log(0.1 + 0.2 == 0.3); // false 计算精度丢失

// let obj = {
//   name: 'wn'
// }

// const a = [] // #001 
// const b = a
// b.push(1) // b = [1]
// console.log(a); // [1]

function test(person) {
  person.age = 26
  person = { // #002
    name: 'yyy',
    age: 30
  }

  return person
}
const p1 = { // #001
  name: 'xxx',
  age: 25
}
const p2 = test(p1)
// console.log(p1); // {name: 'xxx', age: 26}
// console.log(p2); // {name: 'yyy', age: 30}

// 1.函数传参是传递对象指针的副本
// 2.p1和person具有相同的指针，person被修改，p1也会被修改
// 3.person拥有了一个新的内存地址

// console.log('hello' instanceof String); // false

// 让 instanceof 也能判断原始类型

class PrimitiveString {
  static [Symbol.hasInstance] (x) { // Symbol.hasInstance让我们自定义instanceof的行为
    return typeof x === 'string'
  }
}

console.log('hello' instanceof PrimitiveString);