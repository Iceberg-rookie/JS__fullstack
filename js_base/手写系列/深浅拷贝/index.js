// 深拷贝不受原数据的影响。如同克隆人
// 浅拷贝会受原数据的影响。如同影子

// JS中，在栈里存储数据的赋值实现的是深拷贝的效果，在堆里存储数据的赋值实现的是浅拷贝的效果

// let arr = [{old: 'old'}, 1, true, null, undefined]
// let new_arr = arr.concat()
// arr[0].old = 'new'

// console.log(arr);
// console.log(new_arr);

// let arr = [{old: 'old'} , 1, true, null, undefined]
// let new_arr = arr.slice()
// arr[0].old = 'new'
// console.log(new_arr);

// let arr = [{old: 'old'} , 1, true, null, undefined]
// let new_arr = JSON.parse(JSON.stringify(arr)) // 不能拷贝函数  undefined识别不了，会变成null
// arr[0].old = 'new'
// console.log(new_arr);

let arr = [function() {console.log('a')}, {o: function() {'b'},}]
let new_arr = JSON.parse(JSON.stringify(arr))
console.log(new_arr);