let deepCopy = function(obj) {
  if (typeof obj !== 'object') return
  let newObj = obj instanceof Array ? [] : {}

  for (let key in obj) {
    if (obj.hasOwnproperty(key)) {
      newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key]
    }
  }
  return newObj
}