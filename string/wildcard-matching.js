/**
44. Wildcard Matching

Given an input string (s) and a pattern (p), implement wildcard pattern matching with support for '?' and '*' where:

'?' Matches any single character.
'*' Matches any sequence of characters (including the empty sequence).
The matching should cover the entire input string (not partial).

Example 1:
Input: s = "aa", p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".

Example 2:
Input: s = "aa", p = "*"
Output: true
Explanation: '*' matches any sequence.

Example 3:
Input: s = "cb", p = "?a"
Output: false
Explanation: '?' matches 'c', but the second letter is 'a', which does not match 'b'.

Constraints:
0 <= s.length, p.length <= 2000
s contains only lowercase English letters.
p contains only lowercase English letters, '?' or '*'.
*/

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let sLen = s.length;
    let pLen = p.length;
    let sIdx = 0;
    let pIdx = 0;
    let starIdx = -1;
    let sTmpIdx = -1;

    while (sIdx < sLen) {
        if (pIdx < pLen && ['?', s[sIdx]].includes(p[pIdx])) {
            sIdx++;
            pIdx++;
        } else if (pIdx < pLen && p[pIdx] === '*') {
            starIdx = pIdx;
            sTmpIdx = sIdx;
            pIdx++;
        } else if (starIdx === -1) {
            return false;
        } else {
            pIdx = starIdx + 1;
            sIdx = sTmpIdx + 1;
            sTmpIdx = sIdx;
        }
    }

    for (let i = pIdx; i < pLen; i++) {
        if (p.charAt(i) !== '*') {
            return false;
        }
    }
        
    return true;
};
