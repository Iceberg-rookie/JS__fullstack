// new Promise((resolve, reject) => {
  // console.log('hello');
  // resolve('ok')
// }).then((res) => {
  // console.log(res);
// })

const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

function myPromise(fn) {
  const that = this
  that.state = PENDING
  that.value =null
  that.resolveCallbacks = []

  function resolve(value) {
    if (that.state === PENDING) {
      that.state = RESOLVED
      that.value = value
      that.resolveCallbacks.map(cb => { // 异步执行，保证执行顺序
        cb(value)
      })
    }
  }

  function reject(value) {
    if (that.state === PENDING) {
      that.state = REJECTED
      that.value = value
    }
  }

  try {
    fn(resolve, reject)
  } catch (e) {
    reject(e)
  }
}

myPromise.prototype.then = function(onFulfilled, onRejected) {
  const that = this
  onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (v) => {}
  onRejected = typeof onRejected === 'function' ? onRejected : (r) => {throw r}

  if (that.state === RESOLVED) {
    that.resolveCallbacks.push(onFulfilled)
  }
  if(that.state === REJECTED) {
    onFulfilled(that.value)
  }
}