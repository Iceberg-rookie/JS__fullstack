// 输入一个整型数组，数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。
// 输入: nums = [-2,1,-3,4,-1,2,1,-5,4]
// 输出: 6
// 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。

// A = [1, 3, -2, 4, -5]      6
// B = [1, -2, 3, 5, -1, 2]   9
// C = [-9, -8, -5, -2, -3]   -2

// 1. 子数组是连续的
// 2. 只要求求和，不需要返回元素的位置
// 3. 元素都是整数，可能为正数，也可能为负数
// 4. 子序列的最小长度为1

// 暴力破解
var nums = [-2,1,-3,4,-1,2,1,-5,4]

var maxSubArray = function(nums) {
  const len = nums.length
  let max = -Number.MAX_VALUE
  let sum = 0
  for (let i = 0; i < len; i++) {
    sum = 0
    for (let j = i; j < len; j++) {
      sum += nums[j]
      if (sum > max) {
        max = sum
      }
    }
  }
  return max
};

// console.log(maxSubArray(nums));


// 分治法
var list = [-2,1,-3,4,-1,2,1,-5,4]

var helper = function(list, m, n) {
  if (m === n) return list[m] // 递归的出口
  let sum = 0
  let lmax = -Infinity
  let rmax = -Infinity
  const mid = ((n - m) >> 1) + n
  const l = helper(list, m, mid)
  const r = helper(list, mid + 1, n)

  // 如果最大值出现在左数组
  for (let i = mid; i >= m; i--) {
    sum += list[i]
    if (sum > lmax) {
      lmax = sum
    }
  }

  sum = 0

  // 如果最大值出现在右数组
  for (let i = mid + 1; i <= n; i++) {
    sum += list[i]
    if (sum > rmax) {
      lmax = sum
    }
  }

  return Math.max(l, r, lmax + rmax)
};

var maxSubArray2 = function(nums) {
  return helper(nums, 0, nums.length - 1)
}