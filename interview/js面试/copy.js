function deepClone(obj) {
  var newObj = obj instanceof Array ? [] : {}
  for (var item in obj) {
    var value = typeof obj[item] == 'object' ? deepClone(obj[item]) : obj[item]
    newObj[item] = value
  }
  return newObj
}