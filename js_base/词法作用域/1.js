var a = 'a'
var c = 'c'
function foo() {
  // 欺骗词法作用域
  eval('var a =  123')
  console.log(a);
}
function bar() {
  var a = 'a1'
  function baz() {
    console.log(c);
  }
  baz()
  foo()
}
bar()
// 编译原理: 词法分析