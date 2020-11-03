/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function(A) {
  var i = 0
  const N = A.length

  while(i < N - 1 && A[i] < A[i+1]) {
    i++
  }
  if(i === 0 || i === N) {
    return false
  }
  while(i < N - 1 && A[i] > A[i+1]){
    i++
  }
  return i === N - 1 
};

// validMountainArray([1,3,2])
// validMountainArray([1,3,4,2])
// validMountainArray([1,4,4,2])