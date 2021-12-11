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
	fmt.Println(floodFill([][]int{{0, 0, 0}, {0, 1, 1}}, 1, 1, 1))
	fmt.Println(floodFill([][]int{{0, 0, 0}, {0, 0, 0}}, 0, 0, 2))
	fmt.Println(floodFill([][]int{{0}, {0}}, 0, 0, 2))
	fmt.Println(floodFill([][]int{{0}}, 0, 0, 2))
	fmt.Println(floodFill([][]int{{1, 1, 1}, {1, 1, 0}, {1, 0, 1}}, 1, 1, 2))
}

func floodFill(image [][]int, sr, sc, newColor int) [][]int {
	oldColor := image[sr][sc]

	dfs(image, sr, sc, oldColor, newColor)

	return image
}

func dfs(image [][]int, sr, sc, oldColor, newColor int) {
	if oldColor == image[sr][sc] && newColor != oldColor {
		image[sr][sc] = newColor

		if sr-1 >= 0 {
			dfs(image, sr-1, sc, oldColor, newColor)
		}

		if sc-1 >= 0 {
			dfs(image, sr, sc-1, oldColor, newColor)
		}

		if sr+1 < len(image) {
			dfs(image, sr+1, sc, oldColor, newColor)
		}

		if sc+1 < len(image[0]) {
			dfs(image, sr, sc+1, oldColor, newColor)
		}
	}
}
