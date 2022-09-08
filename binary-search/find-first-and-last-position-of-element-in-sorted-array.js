/**
34. Find First and Last Position of Element in Sorted Array

Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]

Example 2:
Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]

Example 3:
Input: nums = [], target = 0
Output: [-1,-1]

Constraints:
0 <= nums.length <= 105
-109 <= nums[i] <= 109
nums is a non-decreasing array.
-109 <= target <= 109
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    const result = [-1, -1];
    
    recurse(left, right, nums, target, result);
    
    return result;
};

const recurse = (left, right, nums, target, result) => {
    if (left > right) {
        return;
    }
    
    const middle = Math.floor((left + right) / 2);
    const number = nums[middle];
    
    if (number === target) {
        add(middle, result);
    }
    
    recurse(left, middle - 1, nums, target, result);
    recurse(middle + 1, right, nums, target, result);
};

const add = (idx, result) => {
    const [min, max] = result;
    
    if (min === -1 && max === -1) {
        result[0] = idx;
        result[1] = idx;
        
        return;
    }
    
    if (idx < min) {
        result[0] = idx;
    } else if (idx > max) {
        result[1] = idx;
    }
};
