// function foo() {
//   console.log(this.a); // 2
// }
// var bar = {
//   a: 2
// }
// foo.call(bar)

var a = {
  user: '蜗牛',
  fn: function(q, w) {
    console.log(this); // window
    // console.log( q + w ); // 5
  }
}
var b = a.fn
b.call(null)

// var a = {
//   user: '蜗牛',
//   fn: function(q, w) {
//     console.log(this.user); // 蜗牛
//     console.log( q + w ); // 46
//   }
// }

// var b = a.fn
// b.apply(a, [12, 34])

// var a = {
//   user: '蜗牛',
//   fn: function(q, w) {
//     console.log(this.user); // 蜗牛
//     console.log( q + w ); // 10
//   }
// }
// var b = a.fn
// var c = b.bind(a, 2, 8)
// c(21, 24)