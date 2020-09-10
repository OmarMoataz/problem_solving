/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let result = "";
  for(let item of s.split(" ")) {
    result += `${item.split("").reverse().join("")} `;
  }

  return result.substring(0, result.length - 1);
};