let arr = []
// arr instanceof Array

function instance_of(L, R) { // []
  L = L.__proto__ // Array.prototype
  let o = R.prototype

  while(true) {
    if(L === null) return false
    if(o === L) return true
    L = L.__proto__ // Array.prototype.__proto__ == Object.prototype
  }
}

console.log(instance_of(arr, Object));