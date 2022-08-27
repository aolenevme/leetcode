/**
329. Longest Increasing Path in a Matrix

Given an m x n integers matrix, return the length of the longest increasing path in matrix.

From each cell, you can either move in four directions: left, right, up, or down. You may not move diagonally or move outside the boundary (i.e., wrap-around is not allowed).

Example 1:
Input: matrix = [[9,9,4],[6,6,8],[2,1,1]]
Output: 4
Explanation: The longest increasing path is [1, 2, 6, 9].

Example 2:
Input: matrix = [[3,4,5],[3,2,6],[2,2,1]]
Output: 4
Explanation: The longest increasing path is [3, 4, 5, 6]. Moving diagonally is not allowed.

Example 3:
Input: matrix = [[1]]
Output: 1

Constraints:
m == matrix.length
n == matrix[i].length
1 <= m, n <= 200
0 <= matrix[i][j] <= 231 - 1
*/

/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
    let max = 1;
    
    const map = new Map();
    
    for (let c = 0; c < matrix.length; c++) {
        for (let r = 0; r < matrix[0].length; r++) {
            const nextMax = recurse(c, r, matrix, map);
                
            max = Math.max(max, nextMax);
        }
    }
    
    return max;
};

const recurse = (c, r, matrix, map) => {
    const cacheId = `${c},${r}`;
    if (map.has(cacheId)) {
        return map.get(cacheId);
    }
    
    const current = matrix[c][r];
    
    let leftMax = 1;
    let rightMax = 1;
    let bottomMax = 1;
    let topMax = 1;
    
    if (c - 1 >= 0 && matrix[c - 1][r] > current) {
        leftMax += recurse(c - 1, r, matrix, map);
    }
            
    if (c + 1 < matrix.length && matrix[c + 1][r] > current) {
        rightMax += recurse(c + 1, r, matrix, map);
    }
            
    if (r - 1 >= 0 && matrix[c][r - 1] > current) {
        bottomMax += recurse(c, r - 1, matrix, map);
    }
            
    if (r + 1 < matrix[0].length && matrix[c][r + 1] > current) {
        topMax += recurse(c, r + 1, matrix, map);
    }
    
    const result = Math.max(leftMax, rightMax, bottomMax, topMax);
    
    map.set(cacheId, result);
    
    return result;
};
