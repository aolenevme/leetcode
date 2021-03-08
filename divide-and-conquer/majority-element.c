/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example 1:

Input: nums = [3,2,3]
Output: 3

Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2

Constraints:

    n == nums.length
    1 <= n <= 5 * 104
    -231 <= nums[i] <= 231 - 1
 
Follow-up: Could you solve the problem in linear time and in O(1) space?
*/

#include <stdio.h>
#include <stdlib.h>

int majorityElement(int* nums, int numsSize){
	int res = nums[0],
	    counter = 0;
	for (int i = 0; i < numsSize; i++) {
		if (counter == 0) {
			res = nums[i];
		}

		if (nums[i] == res) {
			counter++;
		} else {
			counter--;
		}
	}
	
	return res;
}

int main() {
	int *nums = (int *) malloc(7 * sizeof(int));
	nums[0] = 2;
	nums[1] = 2;
	nums[2] = 1;
	nums[3] = 1;
	nums[4] = 1;
	nums[5] = 2;
	nums[6] = 2;

	printf("%d", majorityElement(nums, 7));
}
