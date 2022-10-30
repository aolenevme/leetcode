/**
5. Longest Palindromic Substring

Given a string s, return the longest palindromic substring in s.
A string is called a palindrome string if the reverse of that string is the same as the original string.

Example 1:
Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.

Example 2:
Input: s = "cbbd"
Output: "bb"

Constraints:
1 <= s.length <= 1000
s consist of only digits and English letters.
*/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length <= 1) {
    return s;
  }

  let start = 0;
  let end = 0;

  for (let i = 0; i < s.length; i++) {
    const length1 = expandAroundCenter(s, i, i);
    const length2 = expandAroundCenter(s, i, i + 1);
    const maxLength = Math.max(length1, length2);

    if (maxLength > end - start) {
      start = i - maxLength / 2 + 1;
      end = i + maxLength / 2;
    }
  }

  return s.slice(start, end + 1);
};

const expandAroundCenter = (s, left, right) => {
  let L = left;
  let R = right;

  while (L >= 0 && R < s.length && s[L] === s[R]) {
    L--;
    R++;
  }

  return R - L - 1;
};
