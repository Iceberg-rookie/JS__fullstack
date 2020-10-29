/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  var result = ''
  var arr1 = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
  var arr2 = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  for(var i = 0; i < arr2.length;) {
    if(num >= arr2[i]) {
      result += arr1[i]
      num -= arr2[i]
    } else {
      i++
    }
  }
  // console.log(result);
  return result
};

intToRoman(20)