/**
161. One Edit Distance

Given two strings s and t, return true if they are both one edit distance apart, otherwise return false.

A string s is said to be one distance apart from a string t if you can:

Insert exactly one character into s to get t.
Delete exactly one character from s to get t.
Replace exactly one character of s with a different character to get t.

Example 1:
Input: s = "ab", t = "acb"
Output: true
Explanation: We can insert 'c' into s to get t.

Example 2:
Input: s = "", t = ""
Output: false
Explanation: We cannot get t from s by only one step.

Constraints:
0 <= s.length, t.length <= 104
s and t consist of lowercase letters, uppercase letters, and digits.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isOneEditDistance = function (s, t) {
  const sArray = s.split("");
  const tArray = t.split("");

  return (
    insertionCheck(sArray, tArray) ||
    deletionCheck(sArray, tArray) ||
    replaceCheck(sArray, tArray)
  );
};

const insertionCheck = (s, t) => {
  if (s.length + 1 !== t.length) {
    return false;
  }

  if (s.length === 0) {
    return true;
  }

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== t[i]) {
      const spliced = [...s];
      spliced.splice(i, 1, t[i], s[i]);
      const areEqual = compare(spliced, t);

      if (areEqual) {
        return true;
      }
    }

    if (i === s.length - 1) {
      const spliced = [...s];
      spliced.splice(i, 1, s[i], t[i + 1]);
      const areEqual = compare(spliced, t);

      if (areEqual) {
        return true;
      }
    }
  }

  return false;
};

const deletionCheck = (s, t) => {
  if (s.length - 1 !== t.length) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    const spliced = [...s];
    spliced.splice(i, 1);
    const areEqual = compare(spliced, t);

    if (areEqual) {
      return true;
    }
  }

  return false;
};

const replaceCheck = (s, t) => {
  if (s.length !== t.length) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== t[i]) {
      const spliced = [...s];
      spliced.splice(i, 1, t[i]);

      const areEqual = compare(spliced, t);

      if (areEqual) {
        return true;
      }
    }
  }

  return false;
};

const compare = (s, t) => {
  return s.join("") === t.join("");
};
