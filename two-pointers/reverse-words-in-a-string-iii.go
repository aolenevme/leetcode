/*
Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

Example 1:

Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"

Example 2:

Input: s = "God Ding"
Output: "doG gniD"

Constraints:

1 <= s.length <= 5 * 104
s contains printable ASCII characters.
s does not contain any leading or trailing spaces.
There is at least one word in s.
All the words in s are separated by a single space.
*/

package main

import (
	"fmt"
)

func main() {
	fmt.Println(reverseWords("Let's take LeetCode contest"))
	fmt.Println(reverseWords("God Ding"))
	fmt.Println(reverseWords("Ding"))
	fmt.Println(reverseWords("Di"))
	fmt.Println(reverseWords("D"))
}

func reverseWords(s string) string {
	prevSpace, space := 0, 0
	runes := []rune(s)

	for space < len(s) {
		for i := space; i < len(s); i++ {
			if i == len(s)-1 {
				space = i + 1
				break
			}

			if runes[i] == ' ' {
				space = i
				break
			}
		}

		for begin, end := prevSpace, space-1; begin <= end; {
			temp := runes[begin]
			runes[begin] = runes[end]
			runes[end] = temp

			begin++
			end--
		}

		space++
		prevSpace = space
	}

	return string(runes)
}
