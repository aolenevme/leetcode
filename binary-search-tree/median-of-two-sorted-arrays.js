/**
4. Median of Two Sorted Arrays

Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

Example 1:
Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.

Example 2:
Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

Constraints:
nums1.length == m
nums2.length == n
0 <= m <= 1000
0 <= n <= 1000
1 <= m + n <= 2000
-106 <= nums1[i], nums2[i] <= 106
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1, nums2) => {
  const length = nums1.length + nums2.length;
  const middle = Math.floor(length / 2 + 1);

  let firstIterator = 0;
  let secondIterator = 0;
  let last, beforeLast;

  for (let i = 0; i < middle; i++) {
    beforeLast = last;

    last =
      nums1[firstIterator] < (nums2[secondIterator] ?? Infinity)
        ? nums1[firstIterator++]
        : nums2[secondIterator++];
  }

  return length % 2 === 1 ? last : (last + beforeLast) / 2;
};
