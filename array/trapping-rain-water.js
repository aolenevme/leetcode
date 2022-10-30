/**
42. Trapping Rain Water

Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

Example 1:
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

Example 2:
Input: height = [4,2,0,3,2,5]
Output: 9

Constraints:
n == height.length
1 <= n <= 2 * 104
0 <= height[i] <= 105
*/

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let maxIdx = 0;
  max = height[maxIdx];

  for (let i = 0; i < height.length; i++) {
    const current = height[i];

    if (current > max) {
      maxIdx = i;
      max = current;
    }
  }

  let sum = 0;
  let left = 0;
  max = 0;

  while (left < maxIdx) {
    const current = height[left];
    const addition = max - current;

    if (addition > 0) {
      sum += addition;
    } else {
      max = current;
    }

    left++;
  }

  let right = height.length - 1;
  max = 0;
  while (maxIdx < right) {
    const current = height[right];
    const addition = max - current;

    if (addition > 0) {
      sum += addition;
    } else {
      max = current;
    }

    right--;
  }

  return sum;
};
