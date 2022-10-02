/**
54. Spiral Matrix

Given an m x n matrix, return all elements of the matrix in spiral order.

Example 1:
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]

Example 2:
Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]

Constraints:
m == matrix.length
n == matrix[i].length
1 <= m, n <= 10
-100 <= matrix[i][j] <= 100
*/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let left = 0;
    let right = matrix[0].length - 1;
    let top = 0;
    let bottom = matrix.length - 1;

    let hDiff = 1; // variants: 0 | -1 | 0  | 1
    let vDiff = 0; // variants: 1 | 0  | -1 | 0

    let v = top;
    let h = left;

    const queue = [];

    while (left <= right && top <= bottom) {
        if (hDiff === 1 && vDiff === 0) {
            h = left;
            v = top;

            while (h <= right) {
                queue.push(matrix[v][h]);

                h++;
            }

            top++;
        } else if (hDiff === 0 && vDiff === 1) {
            h = right;
            v = top;

            while (v <= bottom) {
                queue.push(matrix[v][h]);
                
                v++;
            }

            right--;
        } else if (hDiff === -1 && vDiff === 0) {
            h = right;
            v = bottom;

            while (h >= left) {
                queue.push(matrix[v][h]);

                h--;
            }

            bottom--;
        } else if (hDiff === 0 && vDiff === -1) {
            h = left;
            v = bottom;

            while (v >= top) {
                queue.push(matrix[v][h]);

                v--;
            }

            left++;
        }

        const tempHDiff = hDiff;

        hDiff = hDiff - hDiff - vDiff;
        vDiff = tempHDiff;
    }

    return queue;
};
