/**
238. Product of Array Except Self

Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

Example 1:
Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Example 2:
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]

Constraints:
2 <= nums.length <= 105
-30 <= nums[i] <= 30
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let product = 1;
  let nonZeroedProduct = 0;
  let zeroCounter = 0;

  for (const num of nums) {
    if (num !== 0) {
      if (nonZeroedProduct === 0) {
        nonZeroedProduct = 1;
      }

      nonZeroedProduct *= num;
    }

    if (num === 0) {
      zeroCounter++;
    }

    product *= num;
  }

  const result = [];

  for (const num of nums) {
    const division = product / num;

    if (Number.isNaN(division)) {
      if (zeroCounter > 1) {
        result.push(0);
      } else {
        result.push(nonZeroedProduct);
      }
    } else {
      result.push(division);
    }
  }

  return result;
};
