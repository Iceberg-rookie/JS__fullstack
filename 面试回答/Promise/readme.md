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