/**
516. Longest Palindromic Subsequence

Given a string s, find the longest palindromic subsequence's length in s.

A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.

Example 1:
Input: s = "bbbab"
Output: 4
Explanation: One possible longest palindromic subsequence is "bbbb".

Example 2:
Input: s = "cbbd"
Output: 2
Explanation: One possible longest palindromic subsequence is "bb".

Constraints:
1 <= s.length <= 1000
s consists only of lowercase English letters.
*/

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
  const length = s.length;
  const memo = {};

  const lps = (left, right) => {
    const key = `${left},${right}`;

    if (memo[key]) {
      return memo[key];
    }

    if (left > right) {
      return 0;
    }

    if (left === right) {
      return 1;
    }

    if (s[left] === s[right]) {
      memo[key] = lps(left + 1, right - 1) + 2;
    } else {
      memo[key] = Math.max(lps(left, right - 1), lps(left + 1, right));
    }

    return memo[key];
  };

  return lps(0, length - 1);
};
