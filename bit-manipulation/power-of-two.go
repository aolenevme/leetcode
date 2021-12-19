/*
231. Power of Two

Given an integer n, return true if it is a power of two. Otherwise, return false.

An integer n is a power of two, if there exists an integer x such that n == 2x.

Example 1:

Input: n = 1
Output: true
Explanation: 20 = 1

Example 2:

Input: n = 16
Output: true
Explanation: 24 = 16

Example 3:

Input: n = 3
Output: false


Constraints:

-231 <= n <= 231 - 1


Follow up: Could you solve it without loops/recursion?
*/

package main

import (
	"fmt"
	"math/bits"
)

func main() {
	fmt.Println(isPowerOfTwo(1))
	fmt.Println(isPowerOfTwo(16))
	fmt.Println(isPowerOfTwo(3))
	fmt.Println(isPowerOfTwo(-1))
}

func isPowerOfTwo(n int) bool {
	return n > 0 && bits.OnesCount32(uint32(n)) == 1
}
