/**
212. Word Search II

Given an m x n board of characters and a list of strings words, return all words on the board.

Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.

Example 1:
Input: board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]
Output: ["eat","oath"]

Example 2:
Input: board = [["a","b"],["c","d"]], words = ["abcb"]
Output: []

Constraints:
m == board.length
n == board[i].length
1 <= m, n <= 12
board[i][j] is a lowercase English letter.
1 <= words.length <= 3 * 104
1 <= words[i].length <= 10
words[i] consists of lowercase English letters.
All the strings of words are unique.
*/

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
const findWords = (board, words) => {
  let res = [];

  const root = trie(words);
    
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      search(root, board, res, i, j);
    }
  }
    
  return res;
};

const trie = (words) => {
    const root = {};
      
    for (const word of words) {
      let node = root;
        
      for (const c of word) {
        if (!node[c]) {
            node[c] = {};
        }
          
        node = node[c];
      }
        
      node.word = word;
    }
      
    return root;
};

const search = (node, board, res, x, y) => {
    const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    
    if (node.word != null) {
      res.push(node.word);
        
      node.word = null;
    }

    if (x < 0 || x >= board.length || y < 0 || y >= board[0].length) {
       return; 
    }
      
    if (node[board[x][y]] == null) {
        return;
    }

    const c = board[x][y];
      
    board[x][y] = '#';
      
    for (const [dx, dy] of dirs) {
      const i = x + dx;
      const j = y + dy;
        
      search(node[c], board, res, i, j);
    }
      
    board[x][y] = c;
};
