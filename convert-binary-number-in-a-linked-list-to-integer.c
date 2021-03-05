#include <stdio.h>

struct ListNode {
	int val;
	struct ListNode *next;
};

int getDecimalValue(struct ListNode* head){
	return head->val;
}

int main() {
	struct ListNode third = {1, NULL};
	struct ListNode second = {0, &third};
	struct ListNode head = {1, &second}; 

	printf("%d", getDecimalValue(&head));
}
