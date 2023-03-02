/**
912. Sort an Array

Given an array of integers nums, sort the array in ascending order and return it.

You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.

Example 1:
Input: nums = [5,2,3,1]
Output: [1,2,3,5]
Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).

Example 2:
Input: nums = [5,1,1,2,0,0]
Output: [0,0,1,1,2,5]
Explanation: Note that the values of nums are not necessairly unique.

Constraints:
1 <= nums.length <= 5 * 104
-5 * 104 <= nums[i] <= 5 * 104
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  if (nums.length <= 1) {
    return nums;
  }

  const middle = Math.round(nums.length / 2);
  const left = nums.slice(0, middle);
  const right = nums.slice(middle);

  return merge(left, right);
};

const merge = (left, right) => {
  const middleLeft = Math.round(left.length / 2);
  const middleRight = Math.round(right.length / 2);
  const sortedfLeft =
    left.length === 1
      ? left
      : merge(left.slice(0, middleLeft), left.slice(middleLeft));
  const sortedRight =
    right.length === 1
      ? right
      : merge(right.slice(0, middleRight), right.slice(middleRight));

  const merged = [];

  let li = 0;
  let ri = 0;

  while (li < sortedfLeft.length || ri < sortedRight.length) {
    const lvalue = sortedfLeft[li];
    const rvalue = sortedRight[ri];

    if (li === sortedfLeft.length) {
      merged.push(...sortedRight.slice(ri));

      break;
    }

    if (ri === sortedRight.length) {
      merged.push(...sortedfLeft.slice(li));

      break;
    }

    if (lvalue < rvalue) {
      merged.push(lvalue);

      li++;
    } else {
      merged.push(rvalue);

      ri++;
    }
  }

  return merged;
};
