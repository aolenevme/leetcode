/**
340. Longest Substring with At Most K Distinct Characters

Given a string s and an integer k, return the length of the longest 
substring of s that contains at most k distinct characters.

Example 1:
Input: s = "eceba", k = 2
Output: 3
Explanation: The substring is "ece" with length 3.

Example 2:
Input: s = "aa", k = 1
Output: 2
Explanation: The substring is "aa" with length 2.

Constraints:
1 <= s.length <= 5 * 104
0 <= k <= 50
*/

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function (s, k) {
  const length = s.length;
  const counter = new Map();
  let max = 0;
  let left = 0;

  for (let right = 0; right < length; right++) {
    const rightKey = s[right];

    if (counter.has(rightKey)) {
      const prevCounter = counter.get(rightKey);

      counter.set(rightKey, prevCounter + 1);
    } else {
      counter.set(rightKey, 1);
    }

    while (counter.size > k) {
      const leftKey = s[left];

      if (counter.has(leftKey)) {
        const prevCounter = counter.get(leftKey);

        counter.set(leftKey, prevCounter - 1);

        if (counter.get(leftKey) === 0) {
          counter.delete(leftKey);
        }

        left++;
      }
    }

    max = Math.max(max, right - left + 1);
  }

  return max;
};
