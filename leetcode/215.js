// 在未排序的数组中找到第 k 个最大的元素。
// 请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

// 示例 1:
// 输入: [3,2,1,5,6,4] 和 k = 2
// 输出: 5

// 示例 2:
// 输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
// 输出: 4

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function partition(arr, left, right) {
  let i = left, j = right
  let privt = arr[i]
  while(i < j) {
    while(i < j && arr[j] >= privt) {
      j--
    }
    arr[i] = arr[j]
    while(i < j && arr[i] <= privt) {
      i++
    }
    arr[j] = arr[i]
  }
  arr[i] = privt
  return i
}

var findKthLargest = function(nums, k) {
  let left = 0, right = nums.length - 1
  let target = nums.length - k
  let i = partition(nums, left, right)
  while(i !== target) {
    if(i < target) {
      left = i + 1
    } else {
      right = i - 1
    }
    i = partition(nums, left, right)
  }
  return nums[i]
};

