/*
46. Permutations

Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

Example 1:

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

Example 2:

Input: nums = [0,1]
Output: [[0,1],[1,0]]

Example 3:

Input: nums = [1]
Output: [[1]]


Constraints:

1 <= nums.length <= 6
-10 <= nums[i] <= 10
All the integers of nums are unique.
*/

package main

import "fmt"

func main() {
	fmt.Println(permute([]int{1, 2, 3}))
	fmt.Println(permute([]int{0, 1}))
	fmt.Println(permute([]int{1}))
}

func permute(nums []int) [][]int {
	permutations := [][]int{}

	finalLen := len(nums)

	recursion(nums, []int{}, finalLen, &permutations)

	return permutations
}

func recursion(nums []int, path []int, finalLen int, permutations *[][]int) {
	if len(path) == finalLen {
		*permutations = append(*permutations, path)

		return
	}

	for i, num := range nums {
		nextPath := append(path, num)

		recursion(merge(nums[:i], nums[i+1:]), nextPath, finalLen, permutations)
	}
}

func merge(first, second []int) []int {
	newSlice := make([]int, 0, len(first)+len(second))
	for _, num := range first {
		newSlice = append(newSlice, num)
	}

	for _, num := range second {
		newSlice = append(newSlice, num)
	}

	return newSlice
}
