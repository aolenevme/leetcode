/*
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).



Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21
Example 4:

Input: x = 0
Output: 0


Constraints:

-231 <= x <= 231 - 1
*/

package main

import (
	"fmt"
	"math"
)

func main() {
	fmt.Println(reverse(123))
	fmt.Println(reverse(-123))
	fmt.Println(reverse(1534236469))
}

func reverse(x int) int {
	result := 0
	for x != 0 {
		rest := x % 10

		if (result+rest) > math.MaxInt32 || (result+rest) < math.MinInt32 {
			return 0
		}

		result = result + rest

		if x >= 10 || x <= -10 {
			if result*10 > math.MaxInt32 || result*10 < math.MinInt32 {
				return 0
			}

			result = result * 10
		}

		x = x / 10
	}

	return result
}
