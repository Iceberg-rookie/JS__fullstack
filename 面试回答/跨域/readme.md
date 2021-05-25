# 跨域
1. JSONP 原理就是利用 script 标签没有跨域限制的漏洞，通过 script 指向一个我们需要访问的地址，提供一个回调函数来接收我们的数据，把请求方式设置成 JSONP 的格式，有局限性(只能用于get请求)，通过 ajax 发起接口请求的话，浏览器就会判断请求的地址与你当前自己的服务是不是同源，那使用 script 标签去访问的话，它管你是不是同源，都能访问的到
2. cors 用中间件 cors ，后端只要开启 cors 就可以实现跨域
3. document.domain() 只能用于二级域名相同的情况下 a.test.com b.test.com
  document.domain() = 'test.com' 在页面上加一个这个属性 那么这个域名下的接口请求就可以被跨域了
4. postMessage 
5. 代理 Nginx 