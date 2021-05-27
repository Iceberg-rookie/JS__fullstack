# this指向问题
1.所有的this关键字，在函数运行时，才能确定它的指向
2.this所在的函数由哪个对象调用，this就会指向谁
3.当函数执行时，没有明确的调用对象时，则this指向window

# apply，call，bind三者的区别
- 三者都可以改变函数的this对象指向
- 三者第一个参数都是this要指向的对象，如果如果没有这个参数或参数为undefined或null，则默认指向全局window
- 三者都可以传参，但是apply是数组，而call是参数列表，且apply和call是一次性传入参数，而bind可以分为多次传入
- bind 是返回绑定this之后的函数，便于稍后调用；apply 、call 则是立即执行