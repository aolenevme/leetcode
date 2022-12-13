/**
399. Evaluate Division

You are given an array of variable pairs equations and an array of real numbers values, where equations[i] = [Ai, Bi] and values[i] represent the equation Ai / Bi = values[i]. Each Ai or Bi is a string that represents a single variable.

You are also given some queries, where queries[j] = [Cj, Dj] represents the jth query where you must find the answer for Cj / Dj = ?.

Return the answers to all queries. If a single answer cannot be determined, return -1.0.

Note: The input is always valid. You may assume that evaluating the queries will not result in division by zero and that there is no contradiction.

Example 1:
Input: equations = [["a","b"],["b","c"]], values = [2.0,3.0], queries = [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]
Output: [6.00000,0.50000,-1.00000,1.00000,-1.00000]
Explanation: 
Given: a / b = 2.0, b / c = 3.0
queries are: a / c = ?, b / a = ?, a / e = ?, a / a = ?, x / x = ?
return: [6.0, 0.5, -1.0, 1.0, -1.0 ]

Example 2:
Input: equations = [["a","b"],["b","c"],["bc","cd"]], values = [1.5,2.5,5.0], queries = [["a","c"],["c","b"],["bc","cd"],["cd","bc"]]
Output: [3.75000,0.40000,5.00000,0.20000]

Example 3:
Input: equations = [["a","b"]], values = [0.5], queries = [["a","b"],["b","a"],["a","c"],["x","y"]]
Output: [0.50000,2.00000,-1.00000,-1.00000]

Constraints:
1 <= equations.length <= 20
equations[i].length == 2
1 <= Ai.length, Bi.length <= 5
values.length == equations.length
0.0 < values[i] <= 20.0
1 <= queries.length <= 20
queries[i].length == 2
1 <= Cj.length, Dj.length <= 5
Ai, Bi, Cj, Dj consist of lower case English letters and digits.
*/

/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
  const tree = createTree(equations, values);

  const results = [];
  for (const query of queries) {
    const result = execute(tree, query);

    results.push(result);

    clean(tree);
  }

  return results;
};

const createTree = (equations, values) => {
  const map = new Map();

  for (let i = 0; i < values.length; i++) {
    const [from, to] = equations[i];
    const value = values[i];

    add(map, [from, to], value);
    add(map, [to, from], 1 / value);
  }

  return map;
};

const add = (map, equation, value) => {
  const [from, to] = equation;

  if (map.has(from)) {
    map.get(from).values.set(to, value);
  } else {
    const values = new Map();

    values.set(to, value);

    map.set(from, {
      isVisited: false,
      values,
    });
  }
};

const execute = (tree, query) => {
  const [from, to] = query;
  const candidates = tree.get(from);

  if (!tree.has(from) || candidates.isVisited) {
    return -1.0;
  }

  if (candidates.values.has(to)) {
    return candidates.values.get(to);
  }

  candidates.isVisited = true;

  for (const [candidateFrom, value] of candidates.values.entries()) {
    const result = value * execute(tree, [candidateFrom, to]);

    if (result >= 0) {
      return result;
    }
  }

  return -1.0;
};

const clean = (tree) => {
  for (const value of tree.values()) {
    value.isVisited = false;
  }
};
