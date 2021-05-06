function sortedIndex(array, obj) {
  let left = 0, right = array.length

  while (left < right) {
    mid = Math.floor((left + right) / 2)
    if (array[mid] < obj) left = mid + 1
    else right = mid
  }
  return right
}


console.log(sortedIndex([10, 20, 30], 25));
// sortedIndex([10, 20, 30], 25) // 2