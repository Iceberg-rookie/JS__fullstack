var a = 0
var b = async () => {
  a = a + await 10
  console.log(a, '2'); // 10 2 await 内部实现了 generators，generators 会保存堆栈中的数据
  a = (await 10) + a
  console.log(a, '3'); // 20 3
}
b()
a++
console.log(a, '1'); // 1 1