/* 
Ransom Note

Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

Each letter in the magazine string can only be used once in your ransom note.

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true

*/

function canConstruct(ransomNote, magazine) {
  if (ransomNote.length > magazine.length) {
    return false;
  }

  const letterAndFreq = {};

  for (let i = 0; i < magazine.length; i++) {
    const letter = magazine[i];

    if (letterAndFreq[letter]) {
      letterAndFreq[letter] = letterAndFreq[letter] + 1;
    } else {
      letterAndFreq[letter] = 1;
    }
  }

  for (let i = 0; i < ransomNote.length; i++) {
    const letter = ransomNote[i];

    if (!letterAndFreq[letter] && letterAndFreq[letter] != 0) {
      return false;
    }

    letterAndFreq[letter] = letterAndFreq[letter] - 1;

    if (letterAndFreq[letter] < 0) {
      return false;
    }
  }

  return true;
}

/* 
Reverse Words in a String

Given an input string s, reverse the order of the words.

A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

Return a string of the words in reverse order concatenated by a single space.

Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

Examples:

Input: s = "the sky is blue"
Output: "blue is sky the"

Input: s = "  hello world  "
Output: "world hello"
Explanation: Your reversed string should not contain leading or trailing spaces.
*/

// Using built in methods

function reverseWords(s) {
  if (!s || s.length == 1) return s;

  const words = s.trim().split(" ");
  const filtered = words.filter((word) => word != "");

  return filtered.reverse().join(" ");
}

// Without using built in methods
function reverseWords(s) {
  if (!s || s.length == 1) return s;

  const stack = [];
  let word = "";
  let ans = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] != " ") {
      word += s[i];
    }

    if ((word && s[i] == " ") || (word && i == s.length - 1)) {
      stack.push(word);
      word = "";
    }
  }

  while (stack.length) {
    const word = stack.pop();
    ans += word;

    stack.length > 0 ? (ans += " ") : null;
  }

  return ans;
}
