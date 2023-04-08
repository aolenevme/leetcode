/**
1020. Number of Enclaves

You are given an m x n binary matrix grid, where 0 represents a sea cell and 1 represents a land cell.

A move consists of walking from one land cell to another adjacent (4-directionally) land cell or walking off the boundary of the grid.

Return the number of land cells in grid for which we cannot walk off the boundary of the grid in any number of moves.

Example 1:
Input: grid = [[0,0,0,0],[1,0,1,0],[0,1,1,0],[0,0,0,0]]
Output: 3
Explanation: There are three 1s that are enclosed by 0s, and one 1 that is not enclosed because its on the boundary.

Example 2:
Input: grid = [[0,1,1,0],[0,0,1,0],[0,0,1,0],[0,0,0,0]]
Output: 0
Explanation: All 1s are either on the boundary or can reach the boundary.

Constraints:
m == grid.length
n == grid[i].length
1 <= m, n <= 500
grid[i][j] is either 0 or 1.
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function (grid) {
  const memo = [];

  for (let i = 0; i < grid.length; i++) {
    const row = [];

    for (let j = 0; j < grid[0].length; j++) {
      row.push(false);
    }

    memo.push(row);
  }

  const columnEnd = grid[0].length - 1;
  const rowEnd = grid.length - 1;

  const dfs = (row, column) => {
    if (
      row < 0 ||
      column < 0 ||
      row >= grid.length ||
      column >= grid[0].length
    ) {
      return;
    }

    if (memo[row][column]) {
      return;
    }

    memo[row][column] = true;

    const value = grid[row][column];

    if (value === 1) {
      dfs(row - 1, column);
      dfs(row + 1, column);
      dfs(row, column - 1);
      dfs(row, column + 1);
    }
  };

  for (let i = 0; i < grid[0].length; i++) {
    dfs(0, i);
    dfs(rowEnd, i);
  }

  for (let i = 0; i < grid.length; i++) {
    dfs(i, 0);
    dfs(i, columnEnd);
  }

  let counter = 0;
  for (let i = 1; i < grid.length - 1; i++) {
    for (let j = 1; j < grid[0].length - 1; j++) {
      if (!memo[i][j] && grid[i][j] === 1) {
        counter++;
      }
    }
  }

  return counter;
};
