// JS中，在栈里存储数据的赋值实现的是深拷贝的效果，在堆里存储数据的赋值实现的是浅拷贝的效果

let arr = ['old', 1, true, null, undefined]
let new_arr = arr.concat()
arr[0] = 'new'

console.log(arr);
console.log(new_arr);