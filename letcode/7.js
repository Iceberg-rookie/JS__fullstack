/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  var number = Math.abs(x)
  var arrayList = ''
  var temp = 0

  number.toString().split('').reverse().map(item =>{
      arrayList += item
      temp = parseInt(arrayList)
  })

  if( x > 0) {
      return temp > 2**31-1 || -temp > 2**31 ? 0 : temp
  } else {
      return temp > 2**31 || -temp > 2**31-1 ? 0 : -temp
  }
};