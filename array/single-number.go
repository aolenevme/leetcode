/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.



Example 1:

Input: nums = [2,2,1]
Output: 1
Example 2:

Input: nums = [4,1,2,1,2]
Output: 4
Example 3:

Input: nums = [1]
Output: 1


Constraints:

1 <= nums.length <= 3 * 104
-3 * 104 <= nums[i] <= 3 * 104
Each element in the array appears twice except for one element which appears only once.
*/

package main

import (
	"fmt"
)

func main() {
	fmt.Println(singleNumber([]int{1}))
	fmt.Println(singleNumber([]int{1, 1, 2, 3, 2}))
	fmt.Println(singleNumber([]int{2, 2, 1}))
}

func singleNumber(nums []int) int {
	duplication := nums[0]

	kv := make(map[int]int)

	for _, num := range nums {
		v, ok := kv[num]

		if !ok {
			kv[num] = 1

			continue
		}

		if v == 1 {
			kv[num] = v + 1
		}
	}

	for k, v := range kv {
		if v == 1 {
			return k
		}
	}

	return duplication
}
