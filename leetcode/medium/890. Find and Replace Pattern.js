/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */


var findAndReplacePattern = function(words, pattern) {
  let result = [];
  
  words.forEach(word => {
    if (!isExistDoubleMatch(word, pattern)) {
      result.push(word);
    }
  })

  return result;
};


var isExistDoubleMatch = function(word, pattern) {
  let mapPatternToWord = {};
  let mapWordToPattern = {};

  let doubleMatchFound = false;

  for (let i = 0; i < word.length; i++) {
    if (mapWordToPattern[word[i]] && mapWordToPattern[word[i]] != pattern[i]) {
      doubleMatchFound = true;
      break;
    } else {
      mapWordToPattern[word[i]] = pattern[i];
    }

    if (mapPatternToWord[pattern[i]] && mapPatternToWord[pattern[i]] != word[i]) {
      doubleMatchFound = true;
      break;
    } else {
      mapPatternToWord[pattern[i]] = word[i];
    }
  }

  if (doubleMatchFound) {
    return true;
  }
  return false;
}