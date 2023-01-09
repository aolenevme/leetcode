/**
205. Isomorphic Strings

Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

Example 1:
Input: s = "egg", t = "add"
Output: true

Example 2:
Input: s = "foo", t = "bar"
Output: false

Example 3:
Input: s = "paper", t = "title"
Output: true

Constraints:
1 <= s.length <= 5 * 104
t.length == s.length
s and t consist of any valid ascii character.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const s2t = {};
  const t2s = {};

  for (let i = 0; i < s.length; i++) {
    const sChar = s[i];
    const tChar = t[i];

    if (
      (sChar in s2t && !(tChar in t2s)) ||
      (tChar in t2s && !(sChar in s2t))
    ) {
      return false;
    }

    if (sChar in s2t && tChar in t2s) {
      if (s2t[sChar] !== tChar || sChar !== t2s[tChar]) {
        return false;
      }
    } else {
      s2t[sChar] = tChar;
      t2s[tChar] = sChar;
    }
  }

  return true;
};
