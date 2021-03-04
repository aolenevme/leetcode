package main

import "fmt"

func main() {
	example := []int{3, 1, 2, 10, 1}

	res := runningSum(example)

	fmt.Printf("%v", res)
}

func runningSum(nums []int) []int {
	var newNums []int
	var sum int

	for i := 0; i < len(nums); i++ {
		sum += nums[i]
		newNums = append(newNums, sum)
	}

	return newNums
}
