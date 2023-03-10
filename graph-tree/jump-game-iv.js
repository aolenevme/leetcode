/**
1345. Jump Game IV

Given an array of integers arr, you are initially positioned at the first index of the array.

In one step you can jump from index i to index:

i + 1 where: i + 1 < arr.length.
i - 1 where: i - 1 >= 0.
j where: arr[i] == arr[j] and i != j.
Return the minimum number of steps to reach the last index of the array.

Notice that you can not jump outside of the array at any time.

Example 1:
Input: arr = [100,-23,-23,404,100,23,23,23,3,404]
Output: 3
Explanation: You need three jumps from index 0 --> 4 --> 3 --> 9. Note that index 9 is the last index of the array.

Example 2:
Input: arr = [7]
Output: 0
Explanation: Start index is the last index. You do not need to jump.

Example 3:
Input: arr = [7,6,9,6,9,6,9,7]
Output: 1
Explanation: You can jump directly from index 0 to index 7 which is last index of the array.

Constraints:
1 <= arr.length <= 5 * 104
-108 <= arr[i] <= 108
*/

/**
 * @param {number[]} arr
 * @return {number}
 */
var minJumps = function (arr) {
  const graph = {};

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in graph) {
      graph[arr[i]].add(i);
    } else {
      const set = new Set();

      set.add(i);

      graph[arr[i]] = set;
    }
  }

  let nodes = [0];
  let counter = 0;
  const visited = new Set();
  visited.add(0);

  while (nodes.length > 0) {
    let next = [];

    for (const node of nodes) {
      if (node === arr.length - 1) {
        return counter;
      }

      for (const nextNode of graph[arr[node]]) {
        if (!visited.has(nextNode)) {
          visited.add(nextNode);
          next.push(nextNode);
        }
      }

      graph[arr[node]].clear();

      for (const nextNode of [node - 1, node + 1]) {
        if (nextNode >= 0 && nextNode < arr.length && !visited.has(nextNode)) {
          visited.add(nextNode);
          next.push(nextNode);
        }
      }
    }

    nodes = next;
    counter++;
  }

  return -1;
};
