// We define the usage of capitals in a word to be right when one of the following cases holds:

// All letters in this word are capitals, like "USA".
// All letters in this word are not capitals, like "leetcode".
// Only the first letter in this word is capital, like "Google".
// Given a string word, return true if the usage of capitals in it is right.

// Example 1:

// Input: word = "USA"
// Output: true
// Example 2:

// Input: word = "FlaG"
// Output: false

// Constraints:

// 1 <= word.length <= 100
// word consists of lowercase and uppercase English letters.

//https://leetcode.com/problems/detect-capital/submissions/1538425270/

var detectCapitalUse = function (word) {
  if (word.length < 1 || word.length > 100) return false;

  if (word === word.toUpperCase()) {
    return true;
  } else if (word === word.toLowerCase()) {
    return true;
  } else if (
    word[0] === word[0].toUpperCase() &&
    word.slice(1) === word.slice(1).toLowerCase()
  ) {
    return true;
  } else {
    return false;
  }
};

console.log(detectCapitalUse("Leetcode"));
console.log(detectCapitalUse("USA"));
console.log(detectCapitalUse("leetcode"));
console.log(detectCapitalUse("Google"));
console.log(detectCapitalUse("FlaG"));
console.log(detectCapitalUse("HELlo"));
