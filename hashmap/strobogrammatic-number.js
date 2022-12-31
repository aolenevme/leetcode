/**
246. Strobogrammatic Number

Given a string num which represents an integer, return true if num is a strobogrammatic number.

A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at upside down).

Example 1:
Input: num = "69"
Output: true

Example 2:
Input: num = "88"
Output: true

Example 3:
Input: num = "962"
Output: false

Constraints:
1 <= num.length <= 50
num consists of only digits.
num does not contain any leading zeros except for zero itself.
*/

/**
 * @param {string} num
 * @return {boolean}
 */
var isStrobogrammatic = function (num) {
  const wrong = {
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    7: "7",
  };

  const correct = {
    0: "0",
    1: "1",
    6: "9",
    8: "8",
    9: "6",
  };

  for (let left = 0, right = num.length - 1; left <= right; left++, right--) {
    const leftChar = num[left];
    const rightChar = num[right];

    const hasWrongChars = wrong[leftChar] || wrong[rightChar];
    if (hasWrongChars) {
      return false;
    }

    const isPair =
      correct[leftChar] === rightChar && correct[rightChar] === leftChar;
    if (!isPair) {
      return false;
    }
  }

  return true;
};
