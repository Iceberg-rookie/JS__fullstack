// 17. 电话号码的字母组合

/**
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function(digits) {
  if (digits === "") return []
  const result = []
  const map = {'2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl', '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz'}
  const dfs = (curStr, i) => { // curStr是当前字符串
      if (i > digits.length - 1) { // 指针i越界, 递归的出口
          result.push(curStr) // 将解push进result
          return  // 结束当前递归分支
      }
      const letters = map[digits[i]] // 当前数字对应的字母
      for (let letter of letters) { // 一个字母是一个选择，对应一个分支
          dfs(curStr + letter, i + 1) // 选择翻译成letter，生成新字符串，i指针右移继续翻译（递归）
      }
  }
  dfs('', 0) //递归的入口
  return result
};