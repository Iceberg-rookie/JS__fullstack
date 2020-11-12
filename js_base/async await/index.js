function a() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('aaaa');
      resolve('OK')
    }, 1000)
  })
}

function b() {
  console.log('bbbb');
}

a().then(b)





function timeout(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms)
  })
}

function 