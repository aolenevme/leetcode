/*
Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.



Example 1:

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].

Example 2:
Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]


Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums is sorted in non-decreasing order.


Follow up: Squaring each element and sorting the new array is very trivial, could you find an O(n) solution using a different approach?
*/

package main

import (
	"fmt"
)

func main() {
	fmt.Println(sortedSquares([]int{-4, -1, 0, 3, 10}))
	fmt.Println(sortedSquares([]int{-7, -3, 2, 3, 11}))
}

func sortedSquares(nums []int) []int {
	result := make([]int, len(nums))

	for begin, end, cursor := 0, len(nums)-1, len(nums)-1; cursor >= 0; cursor-- {
		bv, ev := nums[begin]*nums[begin], nums[end]*nums[end]

		if bv > ev {
			result[cursor] = bv
			begin++
		} else {
			result[cursor] = ev
			end--
		}
	}

	return result
}
