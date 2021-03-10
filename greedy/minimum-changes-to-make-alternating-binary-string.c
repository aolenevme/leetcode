/*
You are given a string s consisting only of the characters '0' and '1'. In one operation, you can change any '0' to '1' or vice versa.

The string is called alternating if no two adjacent characters are equal. For example, the string "010" is alternating, while the string "0100" is not.

Return the minimum number of operations needed to make s alternating.

Example 1:

Input: s = "0100"
Output: 1
Explanation: If you change the last character to '1', s will be "0101", which is alternating.

Example 2:

Input: s = "10"
Output: 0
Explanation: s is already alternating.
Example 3:

Example 3:

Input: s = "1111"
Output: 2
Explanation: You need two operations to reach "0101" or "1010".

Constraints:

    1 <= s.length <= 104
    s[i] is either '0' or '1'.
 
*/

#include <stdio.h>
#include <strings.h>

int min(int first, int second) {
    if (first < second) {
        return first;
    }

    return second;
}

int minOperations(char* s) {
    int first = 0,
        second = 0;

    for (int i = 0; i < strlen(s); i++) {
        if (i % 2 == 0 && s[i] == '0') {
            first++;
        }

        if (i % 2 == 1 && s[i] == '1') {
            first++;
        }

        if (i % 2 == 0 && s[i] == '1') {
            second++;
        }

        if (i % 2 == 1 && s[i] == '0') {
            second++;
        }
    }

    return min(first, second);
};

int main() {
        char* s = "0010";

        printf("%d", minOperations(s));
}
