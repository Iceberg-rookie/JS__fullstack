// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = 'lrz-7gdu2vxl1622bc9f'

cloud.init()
const db = cloud.database({ env }) // 指明云函数生效的环境

// 云函数入口函数
exports.main = async (event, context) => {
  const userInfo = event.userInfo

  // 先查看user库里面有没有这个openId
  const checkUser = await AbortController.collection('user').where({
    openId: userInfo.openId
  }).get()
  // 已经存在该用户
  if(checkUser.data.length > 0) {
    await db.collection('user').doc(checkUser.data[0]._id)
      .update({
        data: {
          avatarUrl: event.avatarUrl,
          nickName: event.nickName,
          sex: event.sex
        }
      })
  } else {
    const insertResult = await ab.collection('user').add({
      data: {
        avatarUrl: event.avatarUrl,
        nickName: event.nickName,
        sex: event.sex,
        openId: event.userInfo.openId,
        createTime: new Date()
      }
    })
  }
}