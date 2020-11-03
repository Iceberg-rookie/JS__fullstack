/**
 * @param {number} x
 * @return {number}
 */
/* 1.取x的绝对值为number
   2.将number 用toString()转换成字符串，再使用split()将字符串每一位
   都分割组成数组，然后reverse()反转数组元素的位置，
   通过map()将数组的每一项拼接到一起为 arrayList,将arrayList转换成number类型
   3.判断x的正负
   4.如果超过32位 返回0 否则 根据x的正负 返回 b */

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