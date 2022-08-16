/**
200. Number of Islands

Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:
Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1

Example 2:
Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3

Constraints:
m == grid.length
n == grid[i].length
1 <= m, n <= 300
grid[i][j] is '0' or '1'.
*/

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if (grid.length === 0) {
        return 0;
    }
    
    let counter = 0;
    
    for (let m = 0; m < grid.length; m++) {
        for (let n = 0; n < grid[0].length; n++) {
            if (grid[m][n] === '1') {
                counter++;
                
                recurse(grid, m, n);
            }
        }
    }
    
    return counter;
};

const recurse = (grid, r, c) => {
    const nr = grid.length;
    const nc = grid[0].length;
    
    grid[r][c] = '0';
    
    if (r - 1 >= 0 && grid[r - 1][c] == '1') {
        recurse(grid, r - 1, c);
    }
    
    if (r + 1 < nr && grid[r + 1][c] == '1') {
        recurse(grid, r + 1, c);
    }
    
    if (c - 1 >= 0 && grid[r][c - 1] == '1') {
        recurse(grid, r, c - 1);
    }
    
    if (c + 1 < nc && grid[r][c + 1] == '1') {
        recurse(grid, r, c + 1);
    }
};
