/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  var num = []
  var tmp = []
  for(var i = 0; i < nums1.length; i++) {
    for(var j = 0; j < nums2.length; j++){
      if(nums1[i] == nums2[j]) {
        tmp.push(nums1[i])
      }
    }
  }
  for(var k in tmp) {
    if(num.indexOf(tmp[k]) == -1) {
      num.push(tmp[k])
    }
  }
  // console.log(num);
  return num
};

// intersection([1,2,2,1],[2,2])
// intersection([4,9,5],[9,4,9,8,4])

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersection = function(nums1, nums2) {
  let res= []
  for(let i= 0; i < nums1.length; i++) {
      for(let j= 0;j < nums2.length; j++) {
          if(nums1[i] === nums2[j]) res.push(nums1[i])
      }
  }
  let result = new Set(res)
  res = [...result]
  return res
};