// 1 == '1'
// 1. 两者类型是否相同，相同的话就比大小
// 2. 类型不同，那么就进行类型转换
// 3. 会先判断是否在对比 null 和 undefined, 是的话就会返回true
// 4. 判断两者是否是 string 和 Number, 是的话就将string 转为 number 
// 5. 判断其中一方是否为boolean，是的话就把boolean转为number
// 6. 判断其中一方是否为object，且另一方为string,nuber,Symbol，是的话就把object转为原始类型再判断


// '1' == true  // true 
// '1' == 1
// 1 == 1

// '1' == { name: 'ok'}
// '1' == "[object Object]"

// [] == []  // false 引用类型是判断指针是否都相同

// [] == ![]  // true
// [] == ![]
// [] == !true
// [] == false
// [] == 0
// '' == 0
// 0 == 0




// 闭包
// function A() {
//   let a = 1
//   window.B = function() {
//     console.log(a);
//   }
// }
// A()
// B()






// for(var i = 1; i <= 5; i++) {
//   (function(j) {
//     setTimeout(function() {
//       console.log(j);
//     }, j * 1000)
//   })(i)
// }



for(var i = 1; i <= 5; i++) {
  setTimeout(
    function timer(j) {
      console.log(j);
    }, 
    i * 1000,
    i
  )
}

