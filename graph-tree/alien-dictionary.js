/**
269. Alien Dictionary

There is a new alien language that uses the English alphabet. However, the order among the letters is unknown to you.

You are given a list of strings words from the alien language's dictionary, where the strings in words are 
sorted lexicographically
 by the rules of this new language.

Return a string of the unique letters in the new alien language sorted in lexicographically increasing order by the new language's rules. If there is no solution, return "". If there are multiple solutions, return any of them.

Example 1:
Input: words = ["wrt","wrf","er","ett","rftt"]
Output: "wertf"

Example 2:
Input: words = ["z","x"]
Output: "zx"

Example 3:
Input: words = ["z","x","z"]
Output: ""
Explanation: The order is invalid, so return "".

Constraints:
1 <= words.length <= 100
1 <= words[i].length <= 100
words[i] consists of only lowercase English letters.
*/

/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function (words) {
  const adjacent = new Map();
  const counts = new Map();

  for (const word of words) {
    for (const c of word) {
      adjacent.set(c, []);
      counts.set(c, 0);
    }
  }

  for (let i = 0; i < words.length - 1; i++) {
    const word1 = words[i];
    const word2 = words[i + 1];

    if (word1.length > word2.length && word1.startsWith(word2)) {
      return "";
    }

    for (let j = 0; j < Math.min(word1.length, word2.length); j++) {
      if (word1[j] !== word2[j]) {
        adjacent.get(word1[j]).push(word2[j]);
        counts.set(word2[j], counts.get(word2[j]) + 1);

        break;
      }
    }
  }

  const result = [];
  const queue = [];

  for (const c of counts.keys()) {
    if (counts.get(c) === 0) {
      queue.push(c);
    }
  }

  while (queue.length !== 0) {
    const c = queue.shift();
    result.push(c);

    for (const next of adjacent.get(c)) {
      counts.set(next, counts.get(next) - 1);

      if (counts.get(next) === 0) {
        queue.push(next);
      }
    }
  }

  if (result.length < counts.size) {
    return "";
  }

  return result.join("");
};
