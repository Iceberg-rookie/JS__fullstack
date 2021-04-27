const User_col = require('../models/user')

const login = async (ctx) => {
  console.log(ctx.request.body);
  let req = ctx.request.body
  // 连接数据库， 去数据库里查找是否存在该条数据
  // 查找语句
  // 获取用户的userId

  const user = await  User_col.findOne({
    account: req.username
  })
  if (!user) {
    ctx.status = 200
    ctx.body = {
      code: 0,
      msg: '账号不存在'
    }
    return 
  }

  // 能找到这个账号
  
}

module.exports = {
  login
}