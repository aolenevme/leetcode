/*
78. Subsets

Given an integer array nums of unique elements, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

Example 1:

Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

Example 2:

Input: nums = [0]
Output: [[],[0]]

Constraints:

1 <= nums.length <= 10
-10 <= nums[i] <= 10
All the numbers of nums are unique.
*/

package main

import (
	"fmt"
)

func main() {
	fmt.Println(subsets([]int{1, 2, 3}))
	fmt.Println(subsets([]int{0}))
}

func subsets(nums []int) [][]int {
	result := [][]int{{}}

	for _, d1 := range nums {
		for _, combination := range result {
			next := append([]int{d1}, combination...)

			result = append(result, next)
		}
	}

	return result
}
