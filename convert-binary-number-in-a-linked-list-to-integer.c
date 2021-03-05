/**
Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number.

Return the decimal value of the number in the linked list.

Input: head = [1,0,1]
Output: 5
Explanation: (101) in base 2 = (5) in base 10
**/

#include <stdio.h>

struct ListNode {
	int val;
	struct ListNode *next;
};

int getDecimalValue(struct ListNode* head){
	int result = head->val;
	
	while (head->next != NULL) {
		result = (result << 1) | head->next->val;
		head = head->next;
	}

	return result;
}

int main() {
	struct ListNode third = {1, NULL};
	struct ListNode second = {0, &third};
	struct ListNode head = {1, &second}; 

	printf("%d", getDecimalValue(&head));
}
