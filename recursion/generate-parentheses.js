/**
22. Generate Parentheses

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

Example 1:
Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]

Example 2:
Input: n = 1
Output: ["()"]

Constraints:
1 <= n <= 8
*/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const result = [];

  recurse(["("], n * 2, 1, result);

  return result;
};

const recurse = (array, length, counter, result) => {
  if (counter < 0) {
    return;
  }

  if (length === array.length) {
    if (counter === 0) {
      result.push(array.join(""));
    }

    return;
  }

  recurse([...array, "("], length, counter + 1, result);
  recurse([...array, ")"], length, counter - 1, result);
};
