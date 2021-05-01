let array = [1, 2, 3, 1, '1', '2']

function unique(arr) {
  let res = []
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < res.length; j++) {
      if (arr[i] === res[j]) {
        
      }
      // 如果arr[i]是唯一的，那么执行循环
      if ( j === res.length ) {
        res.push(arr[i])
      }
    }
  }
  return res
}

arr(array)