/**
Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2.

Example 1:

Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").

Example 2:

Input: s1 = "ab", s2 = "eidboaoo"
Output: false


Constraints:

1 <= s1.length, s2.length <= 104
s1 and s2 consist of lowercase English letters.
*/

package main

import (
	"fmt"
	"sort"
)

func main() {
	fmt.Println(checkInclusion("abc", "eidbacooo"))
	fmt.Println(checkInclusion("abc", "eidbaocoo"))
	fmt.Println(checkInclusion("ab", "eidbaooo"))
	fmt.Println(checkInclusion("ab", "eidboaoo"))
	fmt.Println(checkInclusion("ab", "a"))
	fmt.Println(checkInclusion("a", "a"))
	fmt.Println(checkInclusion("a", "ab"))
	fmt.Println(checkInclusion("hello", "ooolleoooleh"))
	fmt.Println(checkInclusion("hell", "heel"))
}

func checkInclusion(s1 string, s2 string) bool {
	s1Len, s2Len := len(s1), len(s2)

	if s1Len > s2Len {
		return false
	}

	for i := 0; i < s2Len-s1Len+1; i++ {
		if isPermutation(s1, s2[i:i+s1Len]) {
			return true
		}
	}

	return false
}

func isPermutation(s1 string, s2 string) bool {
	return sortString(s1) == sortString(s2)
}

func sortString(s string) string {
	strSlice := []rune(s)

	sort.Slice(strSlice, func(i, j int) bool {
		return strSlice[i] < strSlice[j]
	})

	return string(strSlice)
}
