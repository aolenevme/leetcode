/**
394. Decode String

Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].

The test cases are generated so that the length of the output will never exceed 105.

Example 1:
Input: s = "3[a]2[bc]"
Output: "aaabcbc"

Example 2:
Input: s = "3[a2[c]]"
Output: "accaccacc"

Example 3:
Input: s = "2[abc]3[cd]ef"
Output: "abcabccdcdcdef"

Constraints:
1 <= s.length <= 30
s consists of lowercase English letters, digits, and square brackets '[]'.
s is guaranteed to be a valid input.
All the integers in s are in the range [1, 300].
*/

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  const array = s.split("");
  const prepared = [];

  for (let i = 0; i < array.length; i++) {
    const char = array[i];
    const number = Number(char);

    if (i !== 0) {
      const prevNumber = Number(prepared[prepared.length - 1]);

      if (!Number.isNaN(number) && !Number.isNaN(prevNumber)) {
        prepared[prepared.length - 1] = String(prevNumber * 10 + number);

        continue;
      }
    }

    prepared.push(char);
  }

  const multiplicators = [];
  const result = [[]];

  let j = 0;

  for (let i = 0; i < prepared.length; i++) {
    const char = prepared[i];
    const number = Number(char);

    if (!Number.isNaN(number)) {
      multiplicators.push(number);
      result.push([]);

      j = result.length - 1;

      continue;
    }

    if (char === "[") {
      continue;
    }

    if (char === "]") {
      const multiplicator = multiplicators.pop();
      const str = result.pop();

      const local = [];

      for (k = 0; k < multiplicator; k++) {
        local.push(...str);
      }

      j--;

      result[j].push(...local);

      continue;
    }

    result[j].push(char);
  }

  return result[0].join("");
};
