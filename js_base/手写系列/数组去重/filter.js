let array = [1, 2, 1, 1, '1']

function unique(arr) {
  let res = arr.filter(function(item, index, arr) {
    return arr.indexOf(item) === index
  })
  return res
}

console.log(unique(array));