/*
Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.



Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]


Constraints:

1 <= s.length <= 105
s[i] is a printable ascii character.
*/

package main

import "fmt"

func main() {
	reverseString([]byte(string([]rune{'h', 'e', 'l', 'l', 'o'})))
}

func reverseString(s []byte) {
	start, end := 0, len(s)-1
	for start <= end {
		tmp := s[start]
		s[start] = s[end]
		s[end] = tmp

		start++
		end--
	}

	fmt.Println(string(s))
}
