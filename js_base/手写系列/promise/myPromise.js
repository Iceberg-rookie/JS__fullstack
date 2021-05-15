const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

function MyPromise(fn) {
  const that = this
  that.state = PENDING
  that.value = null
  that.resolvedCallbacks = []
  that.rejectedCallbacks = []

  function resolve(value) {
    if (that.state === PENDING) {
      that.state = RESOLVED
      that.value = value
      that.resolvedCallbacks.map(cb => {
        cb(that.value)
      })
    }
  }
  
  function reject(value) {
    if (that.state === PENDING) {
      that.state = REJECTED
      that.value = value
      that.rejectedCallbacks.map(cb => {
        cb(that.value)
      })
    }
  }

  try {
    fn(resolve, reject)
  } catch (error) {
    reject(error)
  }
}

MyPromise.prototype.then = function (onResolved, onRejected) {
  const that = this
  onResolved = typeof onResolved === 'function' ? onResolved : v => v
  onRejected = typeof onRejected === 'function' ? onRejected : r => { throw r }

  if (that.state === PENDING) {
    that.resolvedCallbacks.push(onResolved)
    that.rejectedCallbacks.push(onRejected)
  }
  if (that.state === RESOLVED) {
    onResolved(that.value)
  }
  if (that.state === onRejected) {
    onRejected(that.value)
  }
}