/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
  let maxSalary = 0;
  let minSalary = Math.pow(2, 53);
  let sum = 0;
  salary.forEach(item => {
    maxSalary = Math.max(maxSalary, item);
    minSalary = Math.min(minSalary, item);
    sum += item;
  })
  return (sum - minSalary - maxSalary) / (salary.length - 2);
};