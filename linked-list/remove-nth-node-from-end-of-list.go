package main

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func removeNthFromEnd(head *ListNode, n int) *ListNode {
	ptr := head

	nodes := make([]*ListNode, 0, 30)

	for ptr != nil {
		nodes = append(nodes, ptr)

		ptr = ptr.Next
	}

	if len(nodes) == 1 {
		return nil
	}

	if n != 1 {
		nth := nodes[len(nodes)-n]

		nth.Val = nth.Next.Val
		nth.Next = nth.Next.Next
	} else {
		nth := nodes[len(nodes)-1-n]

		nth.Next = nil
	}

	return head
}
