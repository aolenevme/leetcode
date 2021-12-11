/*
695. Max Area of Island

You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

The area of an island is the number of cells with a value 1 in the island.

Return the maximum area of an island in grid. If there is no island, return 0.

Example 1:

Input: grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
Output: 6
Explanation: The answer is not 11, because the island must be connected 4-directionally.

Example 2:

Input: grid = [[0,0,0,0,0,0,0,0]]
Output: 0

Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 50
grid[i][j] is either 0 or 1.
*/

package main

import (
	"fmt"
)

func main() {
	fmt.Println(maxAreaOfIsland([][]int{{0, 1, 1}, {1, 1, 0}, {1, 0, 0}}))
	fmt.Println(maxAreaOfIsland([][]int{{0, 0, 0, 0, 0, 0, 0, 0}}))
	fmt.Println(maxAreaOfIsland([][]int{
		{0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0},
		{0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0},
		{0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0},
		{0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0},
		{0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0},
		{0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0},
		{0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0},
		{0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0},
	}))
}

func maxAreaOfIsland(grid [][]int) int {
	result := 0

	visited := make([][]bool, len(grid))
	for i := range visited {
		visited[i] = make([]bool, len(grid[0]))
	}

	for r := 0; r < len(grid); r++ {
		for c := 0; c < len(grid[0]); c++ {
			nextResult := dfs(grid, visited, r, c)

			if nextResult > result {
				result = nextResult
			}
		}
	}

	return result
}

func dfs(grid [][]int, visited [][]bool, r, c int) int {
	newMaxArea := 0

	if grid[r][c] == 1 {
		newMaxArea++
		visited[r][c] = true

		if r-1 >= 0 && !visited[r-1][c] {
			newMaxArea = newMaxArea + dfs(grid, visited, r-1, c)
		}

		if c-1 >= 0 && !visited[r][c-1] {
			newMaxArea = newMaxArea + dfs(grid, visited, r, c-1)
		}

		if r+1 < len(grid) && !visited[r+1][c] {
			newMaxArea = newMaxArea + dfs(grid, visited, r+1, c)
		}

		if c+1 < len(grid[0]) && !visited[r][c+1] {
			newMaxArea = newMaxArea + dfs(grid, visited, r, c+1)
		}
	}

	return newMaxArea
}
