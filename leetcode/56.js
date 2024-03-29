// 合并区间
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function (intervals) {
  // 如果传递进来的数组长度为0 返回一个空数组
  if (intervals.length === 0) {
    return []
  }
  // 创建合并数组
  var res = []
  // 将数组进行升序排序
  intervals.sort(function (a, b) {
    return a[0] - b[0]
  })
  // 结果数组放进第一个数组
  res.push(intervals[0])
  // 从原数组的第一个元素进行遍历
  for (var i = 1; i < intervals.length; i++) {
    // 如果当前区间的左端点 大于 merge数组最后一个元素的右端点
    if (intervals[i][0] > res[res.length - 1][1]) {
      // 说明这个数组可以直接放进merge数组中
      res.push(intervals[i])
    } else { // 说明有区间有交集 当前区间的左端点小于等于最后一个元素的右端点
      // 如果当前区间的右端点 大于 merge 最后一个右端点
      if (intervals[i][1] > res[res.length - 1][1]) {
        // 更新右端点为最大值
        res[res.length - 1][1] = intervals[i][1]
      }
    }
  }
  return res
};