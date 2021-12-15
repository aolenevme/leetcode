/*
77. Combinations

Given two integers n and k, return all possible combinations of k numbers out of the range [1, n].

You may return the answer in any order.

Example 1:

Input: n = 4, k = 2
Output:
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]

Example 2:

Input: n = 1, k = 1
Output: [[1]]


Constraints:

1 <= n <= 20
1 <= k <= n
*/

package main

import "fmt"

func main() {
	fmt.Println(combine(4, 2))
	fmt.Println(combine(1, 1))
}

func combine(n int, k int) [][]int {
	results := [][]int{}
	if k > n {
		return results
	}

	dfs([]int{}, n, k, 1, &results)
	return results
}

func dfs(buf []int, n, k, idx int, results *[][]int) {
	if k == 0 {
		tmp := make([]int, len(buf))
		copy(tmp, buf)
		*results = append(*results, tmp)
	}

	for i := idx; i <= n; i++ {
		buf = append(buf, i)

		dfs(buf, n, k-1, i+1, results)

		buf = buf[:len(buf)-1]
	}
}
