const fs = require('fs')

fs.readFile('./index.html', 'utf-8', (err, file) => {
  console.log(file);
  fs.readFile('./a.js', () => {

  })
})

// 包装一层 promise

let p3 = (url) => new Promise((resolve, reject) => {
  fs.readFile(url , 'utf-8', (err, file) => {
    if(err) {
      reject()
    } else {
      resolve()
    }
  })
})
// p3('./index.html')
// .then((file) => {
//   console.log('file', file);
// })
// p3('./a.js').then(f => console.log(f))

// p3('./index.html')
// .then((c1) => {
//   return p3('./a.js')
// })
// .then((c2) => {

// })