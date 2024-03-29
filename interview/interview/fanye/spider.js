const superagent = require('superagent')
const api = 'http://movie.douban.com/j/search_subjects'
// common.js CMD es6模块化
module.exports = (pageStart) => {
  // XMLHttpRequest axios上天入地
  // JS兼容性 浏览器嗅探
  // 前端用的时候， XMLHttpRequest window?
  // node require('http')
  return new Promise((resolve, reject) => {
    superagent
      .get(api)
      .query({
        pageStart,
        'type': 'tv',
        'tag': '日本动画',
        'sort': 'recommend',
        'page_limit': 20
      })
      .type('from')
      .accept('application/json')
      .end((err, res) => {
        if(err) reject(err)
        let resObj = JSON.parse(res.text)
        console.log(resObj);
      })    
  })
}