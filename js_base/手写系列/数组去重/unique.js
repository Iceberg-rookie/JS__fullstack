// _.uniq(array, [isSorted], [iteratee])去重

let array1 = [1, 2, '1', 2, 1]
let array2 = [1, 1, '1', 2, 2]

function unique(array, isSorted) {
  let res = []
  let seen

  for (let i = 0, len = array.length; i < len; i++) {
    let value  = array[i]
    if (isSorted) {
      if (!i || seen !== value) {
        res.push(value)
      }
      seen = value
    } else if (res.indexOf(value) === -1) {
      res.push(value)
    }
  }
  return res
}

console.log(unique(array1));
console.log(unique(array2));