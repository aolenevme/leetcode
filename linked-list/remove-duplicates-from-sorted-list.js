/**
83. Remove Duplicates from Sorted List

Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

Example 1:
Input: head = [1,1,2]
Output: [1,2]

Example 2:
Input: head = [1,1,2,3,3]
Output: [1,2,3]

Constraints:
The number of nodes in the list is in the range [0, 300].
-100 <= Node.val <= 100
The list is guaranteed to be sorted in ascending order.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (!head) {
    return head;
  }

  const set = new Set();

  let node = head;

  while (node) {
    set.add(node.val);

    node = node.next;
  }

  const withoutDuplicates = Array.from(set);
  withoutDuplicates.sort((a, b) => a - b);

  const newHead = new ListNode(withoutDuplicates[0]);
  let newNode = newHead;

  for (let i = 1; i < withoutDuplicates.length; i++) {
    const nextNode = new ListNode(withoutDuplicates[i]);
    newNode.next = nextNode;

    newNode = nextNode;
  }

  return newHead;
};
