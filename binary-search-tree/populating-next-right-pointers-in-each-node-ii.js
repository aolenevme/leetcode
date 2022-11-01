/**
117. Populating Next Right Pointers in Each Node II

Given a binary tree

struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}

Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

Initially, all next pointers are set to NULL.

Example 1:
Input: root = [1,2,3,4,5,null,7]
Output: [1,#,2,3,#,4,5,7,#]
Explanation: Given the above binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B. The serialized output is in level order as connected by the next pointers, with '#' signifying the end of each level.

Example 2:
Input: root = []
Output: []

Constraints:
The number of nodes in the tree is in the range [0, 6000].
-100 <= Node.val <= 100

Follow-up:
You may only use constant extra space.
The recursive approach is fine. You may assume implicit stack space does not count as extra space for this problem.
*/

/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     left: Node | null
 *     right: Node | null
 *     next: Node | null
 *     constructor(val?: number, left?: Node, right?: Node, next?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function connect(root) {
  recurse([root]);

  return root;
}

function recurse(level) {
  let previous = level[0];

  if (!level.length) {
    return;
  }

  const nextLevel = [];

  if (previous?.left) {
    nextLevel.push(previous.left);
  }

  if (previous?.right) {
    nextLevel.push(previous.right);
  }

  for (let i = 1; i < level.length; i++) {
    const current = level[i];

    previous.next = current;

    if (current?.left) {
      nextLevel.push(current.left);
    }

    if (current?.right) {
      nextLevel.push(current.right);
    }

    previous = current;
  }

  recurse(nextLevel);
}
