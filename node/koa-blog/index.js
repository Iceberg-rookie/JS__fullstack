const Koa = require('koa')
const config = require('./config/default.js')
const app = new Koa()

app.use((ctx) => {
  ctx.body = 'hello world'
})

app.listen(config.port, () => {
  console.log('3000端口已启动');
})