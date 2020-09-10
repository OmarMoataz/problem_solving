/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let start = 1;
  let end = nums.length - 1;
  for (let i = start; i <= end; i++) {
    let mid = (end / start);
    if (mid == target) {
      return mid;
    } else if (mid > target) {
      end = mid;
    } else if (mid < target) {
      start = mid;
    }
  }
  return -1;
};