package main

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func middleNode(head *ListNode) *ListNode {
	tick := head
	ticktick := head

	for ticktick != nil && ticktick.Next != nil {
		tick = tick.Next
		ticktick = ticktick.Next.Next
	}

	return tick
}
