/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkIfCanBreak = function(s1, s2) {
  const frequency = {};
  
  for (let i = 0; i < s1.length; i++) {
    frequency[s1.charCodeAt(i)] = frequency[s1.charCodeAt(i)] + 1 || 1;
  }
  
  for (let i = 0; i < s1.length; i++) {
    for (let i = s1.charCodeAt(i); i <= 'z'.charCodeAt(0); i++) {
      
    }
  }
  
  
  return true;
};
