// function* test() {
//   let a = 1 + 2
//   yield 2 // 暂停代码的执行
//   yield 3
//   // next // 恢复代码的执行
// }

// let b = test()
// console.log(b.next());
// console.log(b.next());
// console.log(b.next());

function generators(cb) {
  return (function () {
    var object = {
      next: 0,
      stop: function() {}
    }
    return {
      next: function() {
        var ret = cb(object)
        if (ret === undefined) return {value: undefined, done: true}
        return {
          value: ret,
          done: false
        }
      }
    }
  })()
}

generator(test)