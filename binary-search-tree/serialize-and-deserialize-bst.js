/**
449. Serialize and Deserialize BST

Serialization is converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize a binary search tree. There is no restriction on how your serialization/deserialization algorithm should work. You need to ensure that a binary search tree can be serialized to a string, and this string can be deserialized to the original tree structure.

The encoded string should be as compact as possible.

Example 1:
Input: root = [2,1,3]
Output: [2,1,3]

Example 2:
Input: root = []
Output: []

Constraints:
The number of nodes in the tree is in the range [0, 104].
0 <= Node.val <= 104
The input tree is guaranteed to be a binary search tree.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  const preorder = traversePreorder(root);
  const inorder = traverseInorder(root);

  return JSON.stringify([preorder, inorder]);
};

function traversePreorder(node) {
  if (!node) {
    return [];
  }

  return [
    node.val,
    ...traversePreorder(node.left),
    ...traversePreorder(node.right),
  ];
}

function traverseInorder(node) {
  if (!node) {
    return [];
  }

  return [
    ...traverseInorder(node.left),
    node.val,
    ...traverseInorder(node.right),
  ];
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  const [preorder, inorder] = JSON.parse(data);

  return buildBST(preorder, inorder);
};

function buildBST(preorder, inorder) {
  const hash = {};

  let preorderIdx = 0;

  inorder.forEach((value, index) => {
    hash[value] = index;
  });

  function recurse(left, right) {
    if (left > right) {
      return null;
    }

    const value = preorder[preorderIdx];
    const root = new TreeNode(value);

    preorderIdx++;

    root.left = recurse(left, hash[value] - 1);
    root.right = recurse(hash[value] + 1, right);

    return root;
  }

  return recurse(0, preorder.length - 1);
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
