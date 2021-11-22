/**
Given two strings s and t, return true if t is an anagram of s, and false otherwise.



Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false


Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.


Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
**/

package main

import (
	"fmt"
)

func main() {
	fmt.Println(isAnagram("anagram", "nagaram"))
	fmt.Println(isAnagram("rat", "car"))
}

func isAnagram(s string, t string) bool {
	kv := make(map[rune]int)

	for _, char := range s {
		kv[char]++
	}

	for _, char := range t {
		kv[char]--
	}

	res := true
	for _, v := range kv {
		if v != 0 {
			res = false
		}
	}

	return res
}
