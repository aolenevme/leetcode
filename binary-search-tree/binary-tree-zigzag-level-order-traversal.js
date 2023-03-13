/**
103. Binary Tree Zigzag Level Order Traversal

Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[20,9],[15,7]]

Example 2:
Input: root = [1]
Output: [[1]]

Example 3:
Input: root = []
Output: []

Constraints:
The number of nodes in the tree is in the range [0, 2000].
-100 <= Node.val <= 100
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  if (!root) return [];
  let stackQueue = [root];
  let result = [];
  let level = 1;

  while (stackQueue.length > 0) {
    const isLtoR = level % 2 === 1;
    const subLength = stackQueue.length;
    const subList = [];
    for (let i = 0; i < subLength; i++) {
      let node;
      if (isLtoR) {
        node = stackQueue.shift();
        if (node.left) stackQueue.push(node.left);
        if (node.right) stackQueue.push(node.right);
      } else {
        node = stackQueue.pop();
        if (node.right) stackQueue.unshift(node.right);
        if (node.left) stackQueue.unshift(node.left);
      }
      subList.push(node.val);
    }
    level++;
    result.push(subList);
  }
  return result;
};
