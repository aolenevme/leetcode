/**
28. Find the Index of the First Occurrence in a String

Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:
Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.

Example 2:
Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.

Constraints:
1 <= haystack.length, needle.length <= 104
haystack and needle consist of only lowercase English characters.
*/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle.length > haystack.length) {
    return -1;
  }

  let j = 0;
  let firstOccurence = -1;

  for (let i = 0; i < haystack.length; i++) {
    const char = haystack[i];
    const needleChar = needle[j];

    if (char === needleChar) {
      if (firstOccurence === -1) {
        firstOccurence = i;
      }

      j++;
    } else {
      if (firstOccurence !== -1) {
        i = firstOccurence;
      }

      firstOccurence = -1;
      j = 0;
    }

    if (i === haystack.length - 1 && j !== needle.length) {
      firstOccurence = -1;
    }

    if (j === needle.length) {
      return firstOccurence;
    }
  }

  return firstOccurence;
};
