/**
186. Reverse Words in a String II

Given a character array s, reverse the order of the words.

A word is defined as a sequence of non-space characters. The words in s will be separated by a single space.

Your code must solve the problem in-place, i.e. without allocating extra space.

Example 1:
Input: s = ["t","h","e"," ","s","k","y"," ","i","s"," ","b","l","u","e"]
Output: ["b","l","u","e"," ","i","s"," ","s","k","y"," ","t","h","e"]

Example 2:
Input: s = ["a"]
Output: ["a"]

Constraints:
1 <= s.length <= 105
s[i] is an English letter (uppercase or lowercase), digit, or space ' '.
There is at least one word in s.
s does not contain leading or trailing spaces.
All the words in s are guaranteed to be separated by a single space.
*/

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseWords = function (s) {
  for (let begin = 0, end = s.length - 1; begin < end; begin++, end--) {
    const temp = s[begin];
    s[begin] = s[end];
    s[end] = temp;
  }

  let begin = 0;
  let end = 0;
  while (end !== s.length) {
    const char = s[end];

    if (char === " " || end === s.length - 1) {
      let to = end === s.length - 1 ? end : end - 1;

      for (let from = begin; from < to; from++, to--) {
        const temp = s[from];
        s[from] = s[to];
        s[to] = temp;
      }

      begin = end + 1;
    }

    end++;
  }

  return s;
};
