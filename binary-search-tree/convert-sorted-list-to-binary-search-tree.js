/**
109. Convert Sorted List to Binary Search Tree

Given the head of a singly linked list where elements are sorted in ascending order, convert it to a height-balanced binary search tree.

Example 1:
Input: head = [-10,-3,0,5,9]
Output: [0,-3,9,-10,null,5]
Explanation: One possible answer is [0,-3,9,-10,null,5], which represents the shown height balanced BST.

Example 2:
Input: head = []
Output: []

Constraints:
The number of nodes in head is in the range [0, 2 * 104].
-105 <= Node.val <= 105
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
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
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
  const array = toArray(head);

  const bst = construct(0, array.length - 1, array);

  return bst;
};

const toArray = (head) => {
  const array = [];

  let node = head;

  while (node) {
    array.push(node.val);

    node = node.next;
  }

  return array;
};

const construct = (l, r, array) => {
  if (l > r) {
    return null;
  }

  const middle = Math.round((l + r) / 2);
  const value = array[middle];

  const root = new TreeNode(value);
  root.left = construct(l, middle - 1, array);
  root.right = construct(middle + 1, r, array);

  return root;
};
