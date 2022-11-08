/**
79. Word Search

Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

Example 1:
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true

Example 2:
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
Output: true

Example 3:
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
Output: false

Constraints:
m == board.length
n = board[i].length
1 <= m, n <= 6
1 <= word.length <= 15
board and word consists of only lowercase and uppercase English letters.

Follow up: Could you use search pruning to make your solution faster with a larger board?
*/

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const backtrack = (i, j, word, index) => {
    if (index === word.length) {
      return true;
    }

    if (i < 0 || i === board.length || j < 0 || j === board[0].length) {
      return false;
    }

    const char = board[i][j];

    if (char !== word[index]) {
      return false;
    }

    let result = false;

    board[i][j] = "#";

    const rows = [0, 1, 0, -1];
    const cols = [1, 0, -1, 0];

    for (let d = 0; d < 4; d++) {
      result = backtrack(i + rows[d], j + cols[d], word, index + 1);

      if (result) {
        break;
      }
    }

    board[i][j] = word[index];

    return result;
  };

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (backtrack(i, j, word, 0)) {
        return true;
      }
    }
  }

  return false;
};
