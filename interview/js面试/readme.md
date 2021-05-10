# 谈谈变量提升
- 当js代码执行的时候，会产生执行环境，执行环境又分为全局执行环境和函数体执行环境，
  比如说，我定义一个全局变量a和一个函数b，在函数b里可以拿得到全局变量a，
  但如果我在全局变量a前面打印a，那么它就拿不到，但是它不会报错，
  会打印出来undefined,这就是因为我们声明的变量a它提升了，变量提升是声明提升，它的赋值不会提升，
  这就导致了它打印是undefined而不是Error报错，
  那如果我在我的函数体声明前面调用这个函数，函数体里面的console.log()能正常打印出来，
  这就是因为在js里面函数声明会整体提升，变量提升只有声明提升

# bind、call、apply区别
- 首先bind、call、apply都是未来解决this的指向问题的，
  作用都是相同的，只是传参方式不同，
  除了第一个参数以外(第一个参数都是传this)
  call可以接受一个参数列表，可以放很多个参数(任意个参数)
  apply只接受一个参数数组
  bind接受跟call一样(接受任意个参数)，但bind返回的是一个函数

# bind实现
- 就是用来改变this指向的，让新的对象可以执行该函数
- a.bind() 相当于把a的this绑定在window上
- a.bind(b) 相当于让a的this能够访问到b里面的内容
  其本质效果是把a这个函数放到b那个对象里面去，然后执行完之后，用b去调用a，然后把b里面的a给移除掉
- bind.js

# call、apply实现

# 简单聊一下原型链
- 每个函数都有 prototype 属性，该属性指向原型，原型就是创建该函数的工厂，
  每个对象都有 _proto_ 属性，指向的是创建这个对象的一个构造函数的原型，其实这个属性指向的是一个 [[prototype]] ，但是 [[prototype]] 是一个内部属性，只是我们访问不到的，所以我们用 _proto_ 来访问，
  那对象可以通过 _proto_来寻找到不属于该对象的一个属性，_proto_ 是将对象连接起来组成了原型链

# 如何判断对象类型
- instanceof，因为instanceof内部机制是通过判断对象的原型链上是不是能够找到类型的 prototype
- object.prototype.toString.call()  它返回一个  [object, Type]

# 箭头函数的特点
- 箭头函数本身没有this，箭头函数里面的this取决于它外面的第一个不是箭头函数的函数的this
- 有的时候为了防止作用域被更改，我就会用箭头函数

# async await 的优缺点
- async await 是为了处理异步用的，它是 promise 的一个语法塘, async await 的出现是因为 promise.then() 的嵌套太 深了，写法不够优雅、不够简洁，于是乎在ES7官方又定义了 async await，通过声明一个 async 函数，之后这个 async 函数里面可以多次 await 去执行多个异步任务，让这些异步任务归成同步的执行顺序来，await 会让 await 后面的代码去到下一次的循环机制当中，而且是在微任务队列里面
- 优点：promise.then() 的写法不够清晰、不够简洁，用 async await 能更语义化、更好理解
- 缺点：因为 await 会阻塞代码的执行，滥用 await 会导致性能问题

# 事件循环机制
- 微任务：process.nextTick, promise.then, MutataionOvserver
- 宏任务：script, setTimeout, setInterval, setImmediate, I/O, UI-rendering

- 执行顺序：
  1. 首先执行同步代码，这属于宏任务
  2. 当执行完所有的同步代码后，执行栈为空，查看是否有异步代码需要执行
  3. 执行所有的微任务
  4. 当所有的微任务执行完后，有必要的话就会渲染页面
  5. 然后开始下一轮的Event-Loop，执行宏任务中的异步代码

# generator 原理
- generator 是 ES6 当中新增的语法，和 promise 一样都是做异步编程用的

# 异步的发展史
- 最早 回调 带来了回调地狱的问题
- 后来 迎来了 promise.then()
- 再后来 是 generator
- 再ES7 实现了 async await

# promise
- promise 是 ES6 的语法，它解决了回调地狱的问题，
  我们可以把 promise 看成是一个状态机，它里面有默认的三种状态，
  只要执行了 resolve ，状态就会变成 resolved ，
  只要执行了 reject ，状态就会变成 rejected ，状态一旦改变了就无法再次变化了，
  .then() 函数会返回一个 Promise 的实例出来(返回的是一个新的 Promise 实例，不是原来自己那个 Promise )，
  promise.then() 会去到下一次的微任务队列，所以 promise.then() 会帮我们把异步捋成同步

# == 和 === 区别，什么情况下用 ==
- [] == ![] true 隐式类型转换
  => [] == false 
  => '' == false 
  => 0 == 0 
  => true

# 浏览器的Eventloop 和 Node中的区别
