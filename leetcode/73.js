/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var setZeroes = function(matrix) {
  let m = matrix.length
  let n = matrix[0].length
  let row = new Array(m).fill(false)
  let col = new Array(n).fill(false)
  for(i = 0; i < m; i ++) {
      for(j = 0; j < n; j++){
          if(matrix[i][j] === 0) {
              row[i] = col[j] = true
          }
      }
  }
  for(i = 0; i < m; i++) {
      for(j = 0; j < n; j++) {
          if(row[i] || col[j]){
              matrix[i][j] = 0
          }
      }
  }
};