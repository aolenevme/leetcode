/**
723. Candy Crush

This question is about implementing a basic elimination algorithm for Candy Crush.

Given an m x n integer array board representing the grid of candy where board[i][j] represents the type of candy. A value of board[i][j] == 0 represents that the cell is empty.

The given board represents the state of the game following the player's move. Now, you need to restore the board to a stable state by crushing candies according to the following rules:

If three or more candies of the same type are adjacent vertically or horizontally, crush them all at the same time - these positions become empty.
After crushing all candies simultaneously, if an empty space on the board has candies on top of itself, then these candies will drop until they hit a candy or bottom at the same time. No new candies will drop outside the top boundary.
After the above steps, there may exist more candies that can be crushed. If so, you need to repeat the above steps.
If there does not exist more candies that can be crushed (i.e., the board is stable), then return the current board.
You need to perform the above rules until the board becomes stable, then return the stable board.

Example 1:
Input: board = [[110,5,112,113,114],[210,211,5,213,214],[310,311,3,313,314],[410,411,412,5,414],[5,1,512,3,3],[610,4,1,613,614],[710,1,2,713,714],[810,1,2,1,1],[1,1,2,2,2],[4,1,4,4,1014]]
Output: [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[110,0,0,0,114],[210,0,0,0,214],[310,0,0,113,314],[410,0,0,213,414],[610,211,112,313,614],[710,311,412,613,714],[810,411,512,713,1014]]

Example 2:
Input: board = [[1,3,5,5,2],[3,4,3,3,1],[3,2,4,5,2],[2,4,4,5,5],[1,4,4,1,1]]
Output: [[1,3,0,0,0],[3,4,0,5,2],[3,2,0,3,1],[2,4,0,5,2],[1,4,3,1,1]]

Constraints:
m == board.length
n == board[i].length
3 <= m, n <= 50
1 <= board[i][j] <= 2000
*/

/**
 * @param {number[][]} board
 * @return {number[][]}
 */
var candyCrush = function (board) {
  if (!board) {
    return board;
  }

  let done = true;

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col + 2 < board[0].length; col++) {
      let candy1 = Math.abs(board[row][col]);
      let candy2 = Math.abs(board[row][col + 1]);
      let candy3 = Math.abs(board[row][col + 2]);

      if (candy1 && candy1 === candy2 && candy2 === candy3) {
        board[row][col] = board[row][col + 1] = board[row][col + 2] = -candy1;
        done = false;
      }
    }
  }

  for (let col = 0; col < board[0].length; col++) {
    for (let row = 0; row + 2 < board.length; row++) {
      let candy1 = Math.abs(board[row][col]);
      let candy2 = Math.abs(board[row + 1][col]);
      let candy3 = Math.abs(board[row + 2][col]);

      if (candy1 && candy1 === candy2 && candy2 === candy3) {
        board[row][col] = board[row + 1][col] = board[row + 2][col] = -candy1;
        done = false;
      }
    }
  }

  if (!done) {
    for (let col = 0; col < board[0].length; col++) {
      let index = board.length - 1; // get to bottom
      for (let row = board.length - 1; row >= 0; row--) {
        if (board[row][col] > 0) {
          board[index][col] = board[row][col];
          index--;
        }
      }
      while (index >= 0) {
        board[index][col] = 0;
        index--;
      }
    }
  }

  return done ? board : candyCrush(board);
};
