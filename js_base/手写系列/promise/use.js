function a() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('aaa');
      resolve()
      // reject('err')
    }, 1000)
  })
}

function b() {
  setTimeout(() => {
    console.log('bbb');
  })
}

a().then(() => {
  b()
})
// a().catch(b)