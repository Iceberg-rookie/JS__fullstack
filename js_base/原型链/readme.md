# 原型链
1. 什么是原型链：
  在原型上再加一个原型，再加一个原型。。。把原型连成链。
  访问顺序也是按照这个链的顺序，跟作用域一样

2. 原型链的 增 删 改 查
  查： 跟原型一样，由近及远的找
  删： 通过原型自己删除
  改： 通过原型自己修改（但是，引用类型可以）
  增： 本人（但是，引用类型可以）

3. Object.create(test) // 新建一个对象，会继承test