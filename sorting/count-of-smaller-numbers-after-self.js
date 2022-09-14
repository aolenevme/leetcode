/**
315. Count of Smaller Numbers After Self

Given an integer array nums, return an integer array counts where counts[i] is the number of smaller elements to the right of nums[i].

Example 1:
Input: nums = [5,2,6,1]
Output: [2,1,1,0]
Explanation:
To the right of 5 there are 2 smaller elements (2 and 1).
To the right of 2 there is only 1 smaller element (1).
To the right of 6 there is 1 smaller element (1).
To the right of 1 there is 0 smaller element.

Example 2:
Input: nums = [-1]
Output: [0]

Example 3:
Input: nums = [-1,-1]
Output: [0,0]

Constraints:
1 <= nums.length <= 105
-104 <= nums[i] <= 104
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function(nums) {
    if (nums.length == 0 || !nums) {
        return nums;
    }

    const inversion = new Array(nums.length).fill(0);
    const array = nums.map((val, index) => {
        return {
            'val': val,
            'index': index
        }
    });

    const merge = (arr) => {
        if (arr.length == 1) {
            return arr
        }

        let mid = Math.floor(arr.length / 2);
        let left = merge(arr.slice(0, mid));
        let right = merge(arr.slice(mid));

        let li = 0,
            ri = 0,
            inversionCount = 0,
            sorted = [];

        while (li < left.length) {
            if (right[ri] && left[li].val > right[ri].val) {
                inversionCount++;
                
                sorted.push(right[ri++]);
            } else {
                inversion[left[li].index] += inversionCount;
                
                sorted.push(left[li++]);
            }
        }

        return [...sorted, ...right.slice(ri)];
    }

    merge(array);
    
    return inversion;
}
