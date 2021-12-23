/*
22. Generate Parentheses

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]

Example 2:

Input: n = 1
Output: ["()"]

Constraints:

1 <= n <= 8
*/

package main

import "fmt"

func main() {
	fmt.Println(generateParenthesis(1))
	fmt.Println(generateParenthesis(3))
	fmt.Println(generateParenthesis(8))
}

func generateParenthesis(n int) []string {
	result := []string{}

	backtracking(n, 0, "", &result)

	return result
}

func backtracking(openCounter, closeCounter int, parenthesis string, result *[]string) {
	if openCounter == 0 && closeCounter == 0 {
		*result = append(*result, parenthesis)

		return
	}

	if openCounter > 0 {
		backtracking(openCounter-1, closeCounter+1, parenthesis+"(", result)
	}

	if closeCounter > 0 {
		backtracking(openCounter, closeCounter-1, parenthesis+")", result)
	}
}
