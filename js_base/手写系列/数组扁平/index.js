let arr = [1, [2, [3, 4]]]

function falltten(arr) {
  let result = []
  for (let i = 0, len = arr.length; i < len; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(falltten(arr[i]))
    } else {
      result.push(arr[i])
    }
  }
  return result
}


console.log(falltten(arr)); // [1, 2, 3, 4]