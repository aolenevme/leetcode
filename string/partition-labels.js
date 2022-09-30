/**
763. Partition Labels

You are given a string s. We want to partition the string into as many parts as possible so that each letter appears in at most one part.

Note that the partition is done so that after concatenating all the parts in order, the resultant string should be s.

Return a list of integers representing the size of these parts.

Example 1:
Input: s = "ababcbacadefegdehijhklij"
Output: [9,7,8]
Explanation:
The partition is "ababcbaca", "defegde", "hijhklij".
This is a partition so that each letter appears in at most one part.
A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits s into less parts.

Example 2:
Input: s = "eccbbbbdec"
Output: [10]

Constraints:
1 <= s.length <= 500
s consists of lowercase English letters.
*/

/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    const map = new Map();

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (!map.has(char)) {
            map.set(char, [i, i]);
        } else {
            const [min, max] = map.get(char);

            map.set(char, [Math.min(i, min), Math.max(i, max)]);
        }
    }

    const mergedRanges = [];

    for (const [candidateMin, candidateMax] of map.values()) {
        let isFound = false;

        for (let i = 0; i < mergedRanges.length; i++) {
            const [mergedMin, mergedMax] = mergedRanges[i];

            if (
                (mergedMin <= candidateMin && candidateMin <= mergedMax)
                || (candidateMin <= mergedMin && candidateMax >= mergedMin)
                || (mergedMin <= candidateMin && candidateMax <= mergedMax)
                || (candidateMin <= mergedMin && mergedMax <= candidateMax)
            ) {
                const min = Math.min(candidateMin, mergedMin);
                const max = Math.max(candidateMax, mergedMax);

                mergedRanges[i] = [min, max];
                isFound = true;

                break;
            }
        }

        if (!isFound) {
            mergedRanges.push([candidateMin, candidateMax]);
        }
    }

    const result = mergedRanges.map(([min, max]) => (max - min + 1));

    return result;
};
