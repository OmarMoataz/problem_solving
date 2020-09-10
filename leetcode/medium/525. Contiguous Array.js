/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
  let occurences = new Map();

  let maxLength = 0;
  let rollingSum = 0;
  nums.forEach((num, index) => {
    if (num == 0) {
      rollingSum--;
    } else {
      rollingSum++;
    }

    let prevIndex = occurences.get(rollingSum);

    if (prevIndex !== undefined) {
      maxLength = Math.max(maxLength, index - prevIndex);
    } else {
      occurences.set(rollingSum, index);
    }
    if (rollingSum == 0) {
      maxLength = Math.max(maxLength, index + 1);
    }
  });

  return maxLength;
};
