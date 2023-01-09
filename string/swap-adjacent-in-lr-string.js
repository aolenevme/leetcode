/**
777. Swap Adjacent in LR String

In a string composed of 'L', 'R', and 'X' characters, like "RXXLRXRXL", a move consists of either replacing one occurrence of "XL" with "LX", or replacing one occurrence of "RX" with "XR". Given the starting string start and the ending string end, return True if and only if there exists a sequence of moves to transform one string to the other.

Example 1:
Input: start = "RXXLRXRXL", end = "XRLXXRRLX"
Output: true
Explanation: We can transform start to end following these steps:
RXXLRXRXL ->
XRXLRXRXL ->
XRLXRXRXL ->
XRLXXRRXL ->
XRLXXRRLX

Example 2:
Input: start = "X", end = "L"
Output: false

Constraints:
1 <= start.length <= 104
start.length == end.length
Both start and end will only consist of characters in 'L', 'R', and 'X'.
*/

/**
 * @param {string} start
 * @param {string} end
 * @return {boolean}
 */
var canTransform = function (start, end) {
  const first = [];
  const second = [];

  for (let i = 0; i < start.length; i++) {
    if (start[i] !== "X") {
      first.push([i, start[i]]);
    }
  }

  for (let j = 0; j < end.length; j++) {
    if (end[j] !== "X") {
      second.push([j, end[j]]);
    }
  }

  if (first.length !== second.length) {
    return false;
  }

  for (let i = 0; i < first.length; i++) {
    if (first[i][1] !== second[i][1]) {
      return false;
    }

    if (first[i][1] == "L" && first[i][0] < second[i][0]) {
      return false;
    }

    if (first[i][1] == "R" && first[i][0] > second[i][0]) {
      return false;
    }
  }

  return true;
};
