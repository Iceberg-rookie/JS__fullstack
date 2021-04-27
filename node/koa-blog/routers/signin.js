const router = require('koa-router')()

router.post('./sign', (ctx) => {
  // 展示登录页面
  ctx.body = 'signin'
})

module.exports = router