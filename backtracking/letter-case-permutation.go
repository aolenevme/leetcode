/*
784. Letter Case Permutation
Given a string s, we can transform every letter individually to be lowercase or uppercase to create another string.

Return a list of all possible strings we could create. You can return the output in any order.

Example 1:

Input: s = "a1b2"
Output: ["a1b2","a1B2","A1b2","A1B2"]

Example 2:

Input: s = "3z4"
Output: ["3z4","3Z4"]

Example 3:

Input: s = "12345"
Output: ["12345"]

Example 4:

Input: s = "0"
Output: ["0"]

Constraints:

s will be a string with length between 1 and 12.
s will consist only of letters or digits.
*/

package main

import (
	"fmt"
	"unicode"
)

func main() {
	fmt.Println(letterCasePermutation(""))
	fmt.Println(letterCasePermutation("0"))
	fmt.Println(letterCasePermutation("a1b2"))
	fmt.Println(letterCasePermutation("12345"))
	fmt.Println(letterCasePermutation("3z4"))
}

func letterCasePermutation(s string) []string {
	results := []string{}
	path := ""

	dfs([]rune(s), []rune(path), 0, &results)

	return results
}

func dfs(s, path []rune, idx int, results *[]string) {
	if len(path) == len(s) {
		*results = append(*results, string(path))

		return
	}

	letter := s[idx]

	if !unicode.IsLetter(letter) {
		path = append(path, letter)

		dfs(s, path, idx+1, results)
	} else {
		dfs(s, append(path, unicode.ToUpper(letter)), idx+1, results)

		dfs(s, append(path, unicode.ToLower(letter)), idx+1, results)
	}
}
