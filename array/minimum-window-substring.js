/**
76. Minimum Window Substring

Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.

A substring is a contiguous sequence of characters within the string.

Example 1:
Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

Example 2:
Input: s = "a", t = "a"
Output: "a"
Explanation: The entire string s is the minimum window.

Example 3:
Input: s = "a", t = "aa"
Output: ""
Explanation: Both 'a's from t must be included in the window.
Since the largest window of s only has one 'a', return empty string.

Constraints:
m == s.length
n == t.length
1 <= m, n <= 105
s and t consist of uppercase and lowercase English letters.
*/

var minWindow = function (s, t) {
  let min = "",
    left = 0,
    right = -1;
  let map = {};

  t.split("").forEach((element) => {
    if (map[element] === undefined) {
      map[element] = 1;

      return;
    }

    map[element] = map[element] + 1;
  });

  let count = Object.keys(map).length;

  while (right <= s.length) {
    if (count == 0) {
      let current = s[left];

      map[current]++;

      if (map[current] > 0) {
        count++;
      }

      let temp = s.substring(left, right + 1);

      if (min === "") {
        min = temp;
      } else {
        min = min.length < temp.length ? min : temp;
      }

      left++;

      continue;
    }

    right++;

    let current = s[right];

    map[current]--;

    if (map[current] === 0) {
      count--;
    }
  }

  return min;
};
