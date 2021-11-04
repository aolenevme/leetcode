/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true


Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109
*/

package main

import (
	"fmt"
)

func main() {
	fmt.Println(containsDuplicate([]int{}))
	fmt.Println(containsDuplicate([]int{0}))
	fmt.Println(containsDuplicate([]int{0, 1}))
	fmt.Println(containsDuplicate([]int{0, 1, 1}))
	fmt.Println(containsDuplicate([]int{1, 1, 1, 3, 3, 4, 3, 2, 4, 2}))
}

func containsDuplicate(nums []int) bool {
	hasDuplicate := false

	if len(nums) <= 1 {
		return hasDuplicate
	}

	kv := make(map[int]int)

	for _, num := range nums {
		v, ok := kv[num]

		if !ok {
			kv[num] = 1

			continue
		}

		if v == 1 {
			hasDuplicate = true

			break
		}
	}

	return hasDuplicate
}
