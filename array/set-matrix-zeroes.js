/**
73. Set Matrix Zeroes

Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

You must do it in place.

Example 1:
Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]

Example 2:
Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]

Constraints:
m == matrix.length
n == matrix[0].length
1 <= m, n <= 200
-231 <= matrix[i][j] <= 231 - 1

Follow up:
A straightforward solution using O(mn) space is probably a bad idea.
A simple improvement uses O(m + n) space, but still not the best solution.
Could you devise a constant space solution?
*/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const cache = {};

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            const key = `${i},${j}`;
            const value = matrix[i][j];

            if (key in cache) {
                continue;
            }

            if (value === 0) {
                fillWithZeroes(matrix, i, j, cache);
            }
        }
    }
};

const fillWithZeroes = (matrix, i, j, cache) => {
    for (let k = 0; k < matrix[0].length; k++) {
        if (matrix[i][k] === 0) {
            continue;
        }

        const key = `${i},${k}`;

        cache[key] = true;


        matrix[i][k] = 0;
    }

    for (let k = 0; k < matrix.length; k++) {
        if (matrix[k][j] === 0) {
            continue;
        }

        const key = `${k},${j}`;

        cache[key] = true;

        matrix[k][j] = 0;
    }
}
