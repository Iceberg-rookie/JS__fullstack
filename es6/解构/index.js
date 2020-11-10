// let a = 1
// let b = 2
// let c = 3

// let [b, [a, c]] = [1, [2, 3]]
// console.log(a);
// ...arguments

// let [a, b, ...c] = [1]

// let [a] = false


// console.log(a);


// set
// let arr = [1, 2, 2, 4, 6, 3, 5, 4]
// let newArr = new Set(arr)
// console.log(newArr);

// let [x, y, z] = {a: 'a', b: 'b', c: 'c'}
// console.log(x);

// let [x, y, z] = new Set(['a', 'b', 'c'])
// console.log(x);

// let [foo = true] = [false]
// console.log(foo);

// let [x, y = 'b'] = ['a', null]
// console.log(y);

// let {y, x, z} = {x: 'aaa', y: 'bbb'}
// console.log(z);

// let { log, sin, cos, abs } = Math
// console.log(abs(-2));

// const {log} = console
// log(123);

// let {foo: baz } = { foo: 'aaa', bar: 'bbb'}
// console.log(baz);

// let obj = {
  // p: ['hello', { y: 'world '}]
// }
// let {p: [x, { y }]} = obj
// console.log(x + y);

const [a, b, c, d, e] = 'hello'
console.log(c);