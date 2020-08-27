/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var canConstruct = function (s, k) {
  if (s.length < k) {
    return false;
  }

  occurences = {};
  for (let i = 0; i < s.length; i++) {
    occurences[s[i]] = occurences[s[i]] + 1 || 1;
  }

  let oddCount = 0;

  for (i in occurences) {
    if (occurences[i] % 2 != 0) {
      oddCount++;
    }
  }

  if (oddCount > k) {
    return false;
  }

  return true;
};
