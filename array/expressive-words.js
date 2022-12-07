/**
809. Expressive Words

Sometimes people repeat letters to represent extra feeling. For example:

"hello" -> "heeellooo"
"hi" -> "hiiii"
In these strings like "heeellooo", we have groups of adjacent letters that are all the same: "h", "eee", "ll", "ooo".

You are given a string s and an array of query strings words. A query word is stretchy if it can be made to be equal to s by any number of applications of the following extension operation: choose a group consisting of characters c, and add some number of characters c to the group so that the size of the group is three or more.

For example, starting with "hello", we could do an extension on the group "o" to get "hellooo", but we cannot get "helloo" since the group "oo" has a size less than three. Also, we could do another extension like "ll" -> "lllll" to get "helllllooo". If s = "helllllooo", then the query word "hello" would be stretchy because of these two extension operations: query = "hello" -> "hellooo" -> "helllllooo" = s.
Return the number of query strings that are stretchy.

Example 1:
Input: s = "heeellooo", words = ["hello", "hi", "helo"]
Output: 1
Explanation: 
We can extend "e" and "o" in the word "hello" to get "heeellooo".
We can't extend "helo" to get "heeellooo" because the group "ll" is not size 3 or more.

Example 2:
Input: s = "zzzzzyyyyy", words = ["zzyy","zy","zyy"]
Output: 3

Constraints:
1 <= s.length, words.length <= 100
1 <= words[i].length <= 100
s and words[i] consist of lowercase letters.
*/

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var expressiveWords = function (s, words) {
  const sArray = createIdxArray(s);
  const sArrayLength = sArray.length;

  let counter = 0;

  outer: for (const word of words) {
    const wordArray = createIdxArray(word);
    const wordArrayLength = wordArray.length;

    if (sArrayLength !== wordArrayLength) {
      continue;
    }

    for (let i = 0; i < sArrayLength; i++) {
      const sChar = sArray[i].keys().next().value;
      const wordChar = wordArray[i].keys().next().value;
      const sCharCounter = sArray[i].values().next().value;
      const wordCharCounter = wordArray[i].values().next().value;
      const diff = sCharCounter - wordCharCounter;

      if (diff < 0 || sChar !== wordChar || (sCharCounter === 2 && diff > 0)) {
        continue outer;
      }

      if (diff === 0) {
        continue;
      }
    }

    counter++;
  }

  return counter;
};

const createIdxArray = (s) => {
  const array = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (i === 0) {
      const map = new Map();
      map.set(char, 1);

      array.push(map);
    } else {
      const length = array.length;
      const prevMap = array[length - 1];
      const prevChar = prevMap.keys().next().value;

      if (prevChar === char) {
        const prevValue = prevMap.get(prevChar);

        prevMap.set(prevChar, prevValue + 1);
      } else {
        const map = new Map();
        map.set(char, 1);

        array.push(map);
      }
    }
  }

  return array;
};
