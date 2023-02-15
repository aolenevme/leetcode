/**
240. Search a 2D Matrix II

Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:

Integers in each row are sorted in ascending from left to right.
Integers in each column are sorted in ascending from top to bottom.

Example 1:
Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5
Output: true

Example 2:
Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 20
Output: false

Constraints:
m == matrix.length
n == matrix[i].length
1 <= n, m <= 300
-109 <= matrix[i][j] <= 109
All the integers in each row are sorted in ascending order.
All the integers in each column are sorted in ascending order.
-109 <= target <= 109
*/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const column = [];

  for (let i = 0; i < matrix.length; i++) {
    const value = matrix[i][0];

    column.push(value);
  }

  const pivot = findPivotRowIdx(column, target);
  const rows = matrix.slice(0, pivot + 1);

  for (const row of rows) {
    const isFound = isValueFound(row, target);

    if (isFound) {
      return true;
    }
  }

  return false;
};

const findPivotRowIdx = (column, target) => {
  let left = 0;
  let right = column.length;
  const cache = {};

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (middle in cache) {
      break;
    }

    const value = column[middle];

    if (value <= target) {
      cache[middle] = middle;

      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  const indicies = Object.values(cache);
  const pivot = Math.max(...indicies);

  return pivot;
};

const isValueFound = (row, target) => {
  let left = 0;
  let right = row.length;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const value = row[middle];

    if (middle === row.length) {
      break;
    }

    if (value < target) {
      left = middle + 1;
    } else if (value > target) {
      right = middle - 1;
    } else {
      return true;
    }
  }

  return false;
};
