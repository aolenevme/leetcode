/**
445. Add Two Numbers II

You are given two non-empty linked lists representing two non-negative integers. The most significant digit comes first and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example 1:
Input: l1 = [7,2,4,3], l2 = [5,6,4]
Output: [7,8,0,7]

Example 2:
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [8,0,7]

Example 3:
Input: l1 = [0], l2 = [0]
Output: [0]

Constraints:
The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.

Follow up: Could you solve it without reversing the input lists?
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
var addTwoNumbers = function(l1, l2) {
    const nodes1 = [];
    const nodes2 = [];

    let node1 = l1;

    while (node1) {
        nodes1.unshift(node1);

        node1 = node1.next;
    }

    let node2 = l2;

    while (node2) {
        nodes2.unshift(node2);

        node2 = node2.next;
    }

    const modified = nodes1.length > nodes2.length ? nodes1 : nodes2;

    return recurse(nodes1, nodes2, modified, 0, 0);
};

const recurse = (nodes1, nodes2, modified, i, prev) => {
    if (i === modified.length) {
        if (prev > 0) {
            return new ListNode(prev, modified[i - 1]);
        }

        return modified[i - 1];
    }

    const first = i >= nodes1.length ? 0 : nodes1[i].val;
    const second = i >= nodes2.length ? 0 : nodes2[i].val;

    const sum = first + second + prev;
    const rest = sum % 10;
    const nextPrev = Math.floor(sum / 10);

    modified[i].val = rest;

    return recurse(nodes1, nodes2, modified, i + 1, nextPrev);
}
