/*
Given an array, rotate the array to the right by k steps, where k is non-negative.

Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation:
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]


Constraints:

1 <= nums.length <= 105
-231 <= nums[i] <= 231 - 1
0 <= k <= 105


Follow up:

Try to come up with as many solutions as you can. There are at least three different ways to solve this problem.
Could you do it in-place with O(1) extra space?
*/
package main

import (
	"fmt"
)

func main() {
	rotate([]int{1, 2, 3, 4, 5, 6, 7}, 2)
	rotate([]int{1, 2, 3, 4, 5, 6, 7}, 3)
	rotate([]int{1, 2}, 3)
	rotate([]int{1, 2}, 0)
	rotate([]int{-1, -100, 3, 99}, 1)
	rotate([]int{-1, -100, 3, 99}, 2)
	rotate([]int{-1, -100, 3, 99}, 3)
	rotate([]int{-1, -100, 3, 99}, 4)
}

func rotate(nums []int, k int) {
	rotations := k % len(nums)

	reverse(nums, 0, len(nums)-1)
	reverse(nums, 0, rotations-1)
	reverse(nums, rotations, len(nums)-1)

	fmt.Println(nums)
}

func reverse(nums []int, start, end int) {
	for start < end {
		tmp := nums[start]
		nums[start] = nums[end]
		nums[end] = tmp

		start++
		end--
	}
}
