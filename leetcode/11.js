/**
 * @param {number[]} height
 * @return {number}
 */
// i, j 向中间移动
// height[i]更小, i++
// height[j]更小, j++
var maxArea = function(height) {
  var i = 0, j = height.length - 1, max = 0
    while (i < j) {
        max = Math.max(max, (j - i) * (height[i] > height[j] ? height[j--]: height[i++]))
    }
    return max  
};