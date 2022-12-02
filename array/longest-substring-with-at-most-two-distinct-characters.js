/**
159. Longest Substring with At Most Two Distinct Characters

Given a string s, return the length of the longest substring that contains at most two distinct characters.

Example 1:
Input: s = "eceba"
Output: 3
Explanation: The substring is "ece" which its length is 3.

Example 2:
Input: s = "ccaabbb"
Output: 5
Explanation: The substring is "aabbb" which its length is 5.

Constraints:
1 <= s.length <= 105
s consists of English letters.
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringTwoDistinct = function (s) {
  const set = new Set(s.split(""));

  if (set.size <= 2) {
    return s.length;
  }

  set.clear();

  let lastIdx = -1;
  let maxLength = 0;
  let from = -1;
  let to = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    set.add(char);

    const size = set.size;

    if (size === 1) {
      if (from === -1) {
        from = i;
      }
    }

    if (size === 2) {
      if (lastIdx === -1) {
        lastIdx = i;
      }

      to = i;
    }

    if (set.size === 3) {
      set.clear();

      const currentLength = to - from + 1;

      if (currentLength > maxLength) {
        maxLength = currentLength;
      }

      i = lastIdx - 1;
      to = -1;
      from = -1;
      lastIdx = -1;
    }

    if (i === s.length - 1) {
      const currentLength = to - from + 1;

      if (currentLength > maxLength) {
        maxLength = currentLength;
      }
    }
  }

  return maxLength;
};
