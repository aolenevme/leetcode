/**
958. Check Completeness of a Binary Tree

Given the root of a binary tree, determine if it is a complete binary tree.

In a complete binary tree, every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.

Example 1:
Input: root = [1,2,3,4,5,6]
Output: true
Explanation: Every level before the last is full (ie. levels with node-values {1} and {2, 3}), and all nodes in the last level ({4, 5, 6}) are as far left as possible.

Example 2:
Input: root = [1,2,3,4,5,null,7]
Output: false
Explanation: The node with value 7 isn't as far left as possible.

Constraints:
The number of nodes in the tree is in the range [1, 100].
1 <= Node.val <= 1000
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isCompleteTree = function (root) {
  let level = [root];
  let levelCounter = 0;

  while (level.length) {
    const nextLevel = [];
    let isLeftFull = true;

    for (const node of level) {
      const left = node.left;
      const right = node.right;

      if (!left && right) {
        return false;
      }

      if (!left && !right) {
        isLeftFull = false;

        continue;
      }

      if (left && right && !isLeftFull) {
        return false;
      }

      if (!left || !right) {
        if (!isLeftFull) {
          return false;
        }

        isLeftFull = false;
      } else {
        isLeftFull = true;
      }

      if (left) {
        nextLevel.push(left);
      }

      if (right) {
        nextLevel.push(right);
      }
    }

    if (Math.pow(2, levelCounter) !== level.length && nextLevel.length > 0) {
      return false;
    }

    levelCounter++;

    level = nextLevel;
  }

  return true;
};
