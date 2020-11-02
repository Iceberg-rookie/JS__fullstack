/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  var nums = nums.reduce((accumulator, current) => {
    return accumulator.includes(current) ? accumulator : accumulator.concat(current);
  }, []);
  console.log(nums.length); 
  console.log(nums);
  return nums
};

removeDuplicates([1,1,2])
removeDuplicates([0,0,1,1,1,2,2,3,3,4])