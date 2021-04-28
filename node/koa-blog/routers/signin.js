const router = require('koa-router')()
const controller = require('../controller/c-signin.js')

router.get('/signin', controller.postSignin)

module.exports = router