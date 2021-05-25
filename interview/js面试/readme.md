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
  每个对象都有 __proto__ 属性，指向的是创建这个对象的一个构造函数的原型，其实这个属性指向的是一个 [[prototype]] ，但是 [[prototype]] 是一个内部属性，只是我们访问不到的，所以我们用 __proto__ 来访问，
  那对象可以通过 __proto__ 来寻找到不属于该对象的一个属性，__proto__ 是将对象连接起来组成了原型链

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

# cookie,         localStorage, session, indexDB的区别
  4K              5M            5M       无限大
  携带在header中  
  影响请求的性能

cookie:
  value: token
  http-only: 不能通过js访问cookie
  secure: 只能在https协议中携带
  same-site: 浏览器不能在跨域请求中携带cookie

# 怎么判断页面是否加载完成
- Load 只要 onload() 执行，页面就一定加载了
  load 事件触发代表着页面的DOM、CSS、JS、图片都全部加载完毕，load才会执行
- DOMContentLoaded 事件的触发代表着html完全加载，就不需要等待CSS、JS、图片的加载完成了，它就会执行了

# 跨域
1. JSONP 原理就是利用 script 标签没有跨域限制的漏洞，通过 script 指向一个我们需要访问的地址，提供一个回调函数来接收我们的数据，把请求方式设置成 JSONP 的格式，有局限性(只能用于get请求)，通过 ajax 发起接口请求的话，浏览器就会判断请求的地址与你当前自己的服务是不是同源，那使用 script 标签去访问的话，它管你是不是同源，都能访问的到
2. cors 用中间件 cors ，后端只要开启 cors 就可以实现跨域
3. document.domain() 只能用于二级域名相同的情况下 a.test.com b.test.com
  document.domain() = 'test.com' 在页面上加一个这个属性 那么这个域名下的接口请求就可以被跨域了
4. postMessage 
5. 代理 Nginx 

# 浏览器缓存
  缓存机制是为了降低资源的重复加载，提高整体页面的加载速度
  - 强缓存：可以通过两种响应头来实现 Expires 和 Cache-Control ，表示在缓存期间不需要请求
  - 协商缓存：Last-Modified (本地文件最后的修改日期), If-Modified-Sincel(把Last-Modified的值法给服务端)

# Babel 原理
Token - AST - 遍历AST - 生成新的代码

# get 和 post 请求有什么区别
1. 参数拼接
2. get可以使用缓存，post不能使用缓存

# 继承

# js 事件流
- 捕获
- 触发
- 冒泡

# 如何让事件先冒泡、后捕获
  监听捕获和冒泡、分别对应相应的处理函数，先暂停执行捕获事件，直到冒泡事件执行完毕再执行捕获

# 事件委托

# new 干了什么
{
  _proto_: Fn.prototype

}

# 防抖、节流

# 垃圾回收机制

# 对象深克隆
- copy.js

# once 函数
- once.js

# instanceof
- instanceof.js

# 闭包
- 闭包定义
  在js中，根据词法作用域的规则，内部函数总是可以访问外部函数中声明的变量，
  当通过调用一个外部函数返回一个内部函数后，即使该外部函数已经执行结束，但是
  内部函数引用外部函数的变量依然保存在内存中，我们称这些变量为闭包的产物，这些变量的集合就称之为闭包

- 闭包是怎么回收的
  1.如果引用闭包的函数是一个全局变量，那么这个闭包就会一直存在直到页面关闭
  2.如果引用闭包的函数是一个局部变量，等函数销毁后，在下一次JavaScript引擎执行垃圾回收时
  判断闭包不再使用了才被垃圾回收

- bibao.js
  解决闭包3种方法：
  1. let
  2. 自执行函数
  3. setTimeout() {} 的第三个参数

# 深浅拷贝

# 模块化
- module.js