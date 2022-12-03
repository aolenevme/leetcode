/**
163. Missing Ranges

You are given an inclusive range [lower, upper] and a sorted unique integer array nums, where all elements are in the inclusive range.

A number x is considered missing if x is in the range [lower, upper] and x is not in nums.

Return the smallest sorted list of ranges that cover every missing number exactly. That is, no element of nums is in any of the ranges, and each missing number is in one of the ranges.

Each range [a,b] in the list should be output as:

"a->b" if a != b
"a" if a == b
 

Example 1:

Input: nums = [0,1,3,50,75], lower = 0, upper = 99
Output: ["2","4->49","51->74","76->99"]
Explanation: The ranges are:
[2,2] --> "2"
[4,49] --> "4->49"
[51,74] --> "51->74"
[76,99] --> "76->99"
Example 2:

Input: nums = [-1], lower = -1, upper = -1
Output: []
Explanation: There are no missing ranges since there are no missing numbers.
 

Constraints:

-109 <= lower <= upper <= 109
0 <= nums.length <= 100
lower <= nums[i] <= upper
All the values of nums are unique.
*/

/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
var findMissingRanges = function (nums, lower, upper) {
  if (nums.length === 0) {
    return [merge([lower, upper])];
  }

  if (nums.length === 1) {
    const num = nums[0];

    if (lower === num && upper === num) {
      return [];
    }

    if (lower === num) {
      return [merge([lower + 1, upper])];
    }

    if (upper === num) {
      return [merge([lower, upper - 1])];
    }
  }

  const set = new Set([lower, ...nums, upper]);
  if (lower !== nums[0]) {
    set.delete(lower);

    set.add(lower - 1);
  }

  if (upper !== nums[nums.length - 1]) {
    set.delete(upper);

    set.add(upper + 1);
  }

  const points = Array.from(set).sort((a, b) => a - b);
  const results = [];

  for (let i = 0; i < points.length - 1; i++) {
    const from = points[i];
    const to = points[i + 1];
    const range = [from + 1, to - 1];
    const result = merge(range);

    if (result) {
      results.push(result);
    }
  }

  return results;
};

const merge = ([from, to]) => {
  if (from === to) {
    return `${from}`;
  }

  if (to < from) {
    return "";
  }

  return `${from}->${to}`;
};
