/**
946. Validate Stack Sequences

Given two integer arrays pushed and popped each with distinct values, return true if this could have been the result of a sequence of push and pop operations on an initially empty stack, or false otherwise.

Example 1:
Input: pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
Output: true
Explanation: We might do the following sequence:
push(1), push(2), push(3), push(4),
pop() -> 4,
push(5),
pop() -> 5, pop() -> 3, pop() -> 2, pop() -> 1

Example 2:
Input: pushed = [1,2,3,4,5], popped = [4,3,5,1,2]
Output: false
Explanation: 1 cannot be popped before 2.

Constraints:
1 <= pushed.length <= 1000
0 <= pushed[i] <= 1000
All the elements of pushed are unique.
popped.length == pushed.length
popped is a permutation of pushed.
*/

/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
  let pushedIdx = 0;
  let poppedIdx = 0;
  const stack = [];

  while (pushedIdx < pushed.length || poppedIdx < popped.length) {
    const pushedValue = pushed[pushedIdx];
    const poppedValue = popped[poppedIdx];
    const lastValue = stack.at(-1);

    if (lastValue === undefined && pushedIdx >= pushed.length) {
      break;
    }

    if (lastValue === poppedValue) {
      stack.pop();

      poppedIdx++;

      continue;
    }

    stack.push(pushedValue);

    pushedIdx++;
  }

  const isStackEmpty = stack.length === 0;

  return isStackEmpty;
};
