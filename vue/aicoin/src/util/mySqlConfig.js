const mysql = require('mysql')
const db = require('./db')

// 连接线程池
let pool = mysql.createPool({
  host: db.dataBase.HOST,
  user: db.dataBase.USERNAME,
  password: db.dataBase.PASSWORD,
  database: db.dataBase.DATABASE,
  port: db.dataBase.PORT,
})

let allServices = {
  query: function(sql, valus) {
    return new Promise((resolve, reject) => {
      pool.getConnection(function(err, connection) {
        if (err) {
          reject(err)
        } else {
          connection.query(sql, valus, (err, rows) => {
            if(err) {
              reject(err)
            } else {
              resolve(rows)
            }
            connection.release()
          })
        }
      })
    })
  }
}

// 比特币查询
let showBtc = function() {
  let _sql = `select * from btc`
  return allServices.query(_sql)
}

module.exports = {
  showBtc
}