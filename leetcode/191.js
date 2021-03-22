/**
 * @param {number} n - a positive integer
 * @return {number}
 */
 var hammingWeight = function(n) {
  let num = 0
  for(i = 0; i < 32; i++) {
    if((n & ( 1 << i)) != 0) {
      num++
    }
  }
  return num
};
