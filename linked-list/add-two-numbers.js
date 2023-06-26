/**
2. Add Two Numbers

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example 1:
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

Example 2:
Input: l1 = [0], l2 = [0]
Output: [0]

Example 3:
Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]

Constraints:
The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const l = new ListNode();
  const prevL = null;

  recurse(l1, l2, l, prevL, 0);

  return l;
};

function recurse(l1, l2, l, prevL, prev) {
  if (!l1 && !l2) {
    if (prev !== 0) {
      l.val = prev;
    } else {
      prevL.next = null;
    }

    return;
  }

  const l1Val = !l1 ? 0 : l1.val;
  const l2Val = !l2 ? 0 : l2.val;

  const newVal = l1Val + l2Val + prev;

  l.val = newVal % 10;

  l.next = new ListNode();

  recurse(l1?.next, l2?.next, l.next, l, Math.floor(newVal / 10));
}
