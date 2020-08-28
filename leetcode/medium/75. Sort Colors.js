/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  let occurences = {};

  for (let i = 0; i < nums.length; i++) {
    occurences[nums[i]] = occurences[nums[i]] + 1 || 1;
  }

  let index = 0;
  for (i in occurences) {
    while(occurences[i] != 0) {
      nums[index] = i;
      occurences[i]--;
      index++;
    }
  }
};