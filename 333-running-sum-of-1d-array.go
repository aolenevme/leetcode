package main

import "fmt"

func main() {
	example := []int{1, 2, 3, 4}

	res := runningSum(example)

	fmt.Printf("%v", res)
}

func runningSum(nums []int) []int {
	newNums := make([]int, cap(nums))

	for i := 0; i < cap(nums); i++ {
		newNum := 0

		for j := 0; j <= i; j++ {
			newNum += nums[j]
		}

		newNums[i] = newNum
	}

	return newNums
}
