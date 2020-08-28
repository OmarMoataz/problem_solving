// https://leetcode.com/problems/repeated-string-match/

/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var repeatedStringMatch = function(A, B) {
  const n = Math.ceil(B.length / A.length);
  if (A.repeat(n).includes(B)) return n;
  if (A.repeat(n + 1).includes(B)) return n + 1;
  return -1;
};
