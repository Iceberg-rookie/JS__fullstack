const fs = require('fs');

const AipImageClassifyClinet = 
  require('baidu-aip-sdk').imageClassify

const APP_ID = "23927521";
const API_KEY = "R4aIyG9MnnU9PLQxBaGN9b2R";
const SECRET_KEY = "UG1b8bZZpzXAlHNAs0CqKtSVLh5oG1nV";
// sync I/O Async 同步
const image = fs.readFileSync("car.jpg")
  .toString("base64")
// console.log(image)

const client = new AipImageClassifyClinet(APP_ID,
  API_KEY, SECRET_KEY);

client
  // http 协议
  // 云端 AI sdk
  .carDetect(image)
  .then((result) => {
    console.log(result);
  }).catch(err => {
    console.log(err);
  })
