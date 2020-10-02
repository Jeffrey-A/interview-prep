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
};
