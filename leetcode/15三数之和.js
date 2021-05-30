// 三数之和
// 排序 循环 双指针
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
  let res = []
  let len = nums.length
  if (nums === [] || len < 3) return res
  nums.sort((a, b) => a - b ) // 排序
  for (let i = 0; i < len; i++) { // 循环遍历
    if (nums[i] > 0) break // 排序后nums[i] > 0, 意味着三数之和一定大于0
    if (nums[i] == nums[i-1]) continue // 去重
    let L = i + 1
    let R = len - 1
    while(L < R) {
      sum = nums[i] + nums[L] + nums[R]
      if (sum == 0) {
        res.push( [ nums[i], nums[L], nums[R] ] )
        while(L < R && nums[L] == nums[L+1] ) L++ // 去重
        while(L < R && nums[R] == nums[R-1] ) R-- // 去重
        L++
        R--
      }
      else if (sum < 0) L++
      else if (sum > 0) R--
    }
  }
  return res
};