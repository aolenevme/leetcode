/**
33. Search in Rotated Sorted Array

There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4

Example 2:
Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1

Example 3:
Input: nums = [1], target = 0
Output: -1

Constraints:
1 <= nums.length <= 5000
-104 <= nums[i] <= 104
All values of nums are unique.
nums is an ascending array that is possibly rotated.
-104 <= target <= 104
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    const pivot = lognPivot(nums, target, 0, nums.length - 1);

    if (nums[pivot] === target) {
        return pivot;
    }

    const slicedAfter = nums.slice(pivot);
    const slicedAfterIdx = lognFind(slicedAfter, target, 0, slicedAfter.length - 1);

    if (slicedAfterIdx > -1) {
        return slicedAfterIdx + pivot;
    }

    const slicedBefore = nums.slice(0, pivot);
    const slicedBeforeIdx = lognFind(slicedBefore, target, 0, slicedBefore.length - 1);

    if (slicedBeforeIdx > -1) {
        return slicedBeforeIdx;
    }

    return -1;
};

const lognPivot = (nums, target, left, right) => {
    const middle = Math.floor((left + right) / 2);
    const after = middle + 1;
    const before = middle - 1;
    const value = nums[middle];

    if (value === target) {
        return middle;
    }

    if (before >= 0 && nums[before] > value) {
        return middle;
    }

    if (left > right || right < left) {
        return -1;
    }

    const beforeIdx = lognPivot(nums, target, left, before);
    const afterIdx = lognPivot(nums, target, after, right);

    if (beforeIdx !== -1 || afterIdx !== -1) {
        return Math.max(beforeIdx, afterIdx);
    }

    return 0;
}

const lognFind = (nums, target, left, right) => {
    const middle = Math.floor((left + right) / 2);
    const value = nums[middle];

    if (target === value) {
        return middle;
    }

    if (left > right || right < left) {
        return -1;
    }

    if (value > target) {
        return lognFind(nums, target, left, middle - 1);
    }

    return lognFind(nums, target, middle + 1, right);
}
