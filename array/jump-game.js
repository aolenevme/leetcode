/**
55. Jump Game

You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise.

Example 1:
Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

Example 2:
Input: nums = [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.

Constraints:
1 <= nums.length <= 104
0 <= nums[i] <= 105
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  const cache = {};

  if (nums.length === 1) {
    return true;
  }

  for (let idx = nums.length - 1; idx >= 0; idx--) {
    cache[idx] = recurse(nums, idx, cache);
  }

  return cache[0];
};

function recurse(nums, idx, cache) {
  if (cache[idx] !== undefined) {
    return cache[idx];
  }

  if (idx === nums.length - 1) {
    return true;
  }

  const maxSteps = nums[idx];
  if (maxSteps === 0 || idx >= nums.length) {
    return false;
  }

  let isReachable = false;
  for (let i = 1; i <= maxSteps; i++) {
    isReachable = isReachable || recurse(nums, idx + i, cache);
  }

  cache[idx] = isReachable;

  return isReachable;
}
