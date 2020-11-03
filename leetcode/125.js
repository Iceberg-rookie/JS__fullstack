/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let i = 0, j = s.length - 1;
  while(i < j) {
    // 是不是 数字？ 字母？
    // 忽视
    if(!/[0-9a-zA-Z]/.test(s[i])) {
      i ++;
      continue; //跳过下面
    }
    if(!/[0-9a-zA-Z]/.test(s[j])) {
      j --;
      continue; //跳过下面
    }
    let left = s[i], right = s[j];
    if(left.toLowerCase() !== right.toLowerCase()) return false;
    i++; 
    j--;
  }
  return true;
};