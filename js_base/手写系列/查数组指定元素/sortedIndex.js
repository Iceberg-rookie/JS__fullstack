function cb(func, context) {
  if (context === void 0) return func
  return function () {
    return func.apply(context, arguments)
  }
}

function sortedIndex(array, obj, iteratee, context) {
  iteratee = cb(iteratee, context)

  let left = 0, right = array.length

  while (left < right) {
    mid = Math.floor((left + right) / 2)
    if (iteratee(array[mid]) < iteratee(obj)) left = mid + 1
    else right = mid
  }
  return right
}

// console.log(sortedIndex([10, 20, 30], 25));
// sortedIndex([10, 20, 30], 25) // 2

var stooges = [{name: 'moe', age: 40}, {name: 'curly', age: 60}]
let result = sortedIndex(stooges, {name: 'larry', age: 50}, function(sttoge) {
  return stooges.age
})
console.log(result); // 1