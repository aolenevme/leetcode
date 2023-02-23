/**
277. Find the Celebrity

Suppose you are at a party with n people labeled from 0 to n - 1 and among them, there may exist one celebrity. The definition of a celebrity is that all the other n - 1 people know the celebrity, but the celebrity does not know any of them.

Now you want to find out who the celebrity is or verify that there is not one. You are only allowed to ask questions like: "Hi, A. Do you know B?" to get information about whether A knows B. You need to find out the celebrity (or verify there is not one) by asking as few questions as possible (in the asymptotic sense).

You are given a helper function bool knows(a, b) that tells you whether a knows b. Implement a function int findCelebrity(n). There will be exactly one celebrity if they are at the party.

Return the celebrity's label if there is a celebrity at the party. If there is no celebrity, return -1.

Example 1:
Input: graph = [[1,1,0],[0,1,0],[1,1,1]]
Output: 1
Explanation: There are three persons labeled with 0, 1 and 2. graph[i][j] = 1 means person i knows person j, otherwise graph[i][j] = 0 means person i does not know person j. The celebrity is the person labeled as 1 because both 0 and 2 know him but 1 does not know anybody.

Example 2:
Input: graph = [[1,0,1],[1,1,0],[0,1,1]]
Output: -1
Explanation: There is no celebrity.

Constraints:
n == graph.length == graph[i].length
2 <= n <= 100
graph[i][j] is 0 or 1.
graph[i][i] == 1
 
Follow up: If the maximum number of allowed calls to the API knows is 3 * n, could you find a solution without exceeding the maximum number of calls?
*/

/**
 * Definition for knows()
 *
 * @param {integer} person a
 * @param {integer} person b
 * @return {boolean} whether a knows b
 * knows = function(a, b) {
 *     ...
 * };
 */

/**
 * @param {function} knows()
 * @return {function}
 */
var solution = function (knows) {
  /**
   * @param {integer} n Total people
   * @return {integer} The celebrity
   */
  return function (n) {
    const ignoredPeople = {};

    const peopleKnownByCounter = {};
    const peopleWhoKnowPeople = {};

    for (let i = 0; i < n; i++) {
      peopleKnownByCounter[i] = n - 1;
      peopleWhoKnowPeople[i] = 0;
    }

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (i === j) {
          continue;
        }

        const isKnown = knows(i, j);

        if (isKnown) {
          peopleKnownByCounter[j]--;
          peopleWhoKnowPeople[i]++;
        }
      }
    }

    const entries = Object.entries(peopleKnownByCounter);

    for (const [person, knownByCounter] of entries) {
      if (knownByCounter === 0 && peopleWhoKnowPeople[person] === 0) {
        return person;
      }
    }

    return -1;
  };
};
