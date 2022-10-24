/**
692. Top K Frequent Words

Given an array of strings words and an integer k, return the k most frequent strings.

Return the answer sorted by the frequency from highest to lowest. Sort the words with the same frequency by their lexicographical order.

Example 1:
Input: words = ["i","love","leetcode","i","love","coding"], k = 2
Output: ["i","love"]
Explanation: "i" and "love" are the two most frequent words.
Note that "i" comes before "love" due to a lower alphabetical order.

Example 2:
Input: words = ["the","day","is","sunny","the","the","the","sunny","is","is"], k = 4
Output: ["the","is","sunny","day"]
Explanation: "the", "is", "sunny" and "day" are the four most frequent words, with the number of occurrence being 4, 3, 2 and 1 respectively.

Constraints:
1 <= words.length <= 500
1 <= words[i].length <= 10
words[i] consists of lowercase English letters.
k is in the range [1, The number of unique words[i]]
 
Follow-up: Could you solve it in O(n log(k)) time and O(n) extra space?
*/

/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
        const map = new Map();

        for (const word of words) {
                if (map.has(word)) {
                        const counter = map.get(word);

                        map.set(word, counter + 1);
                } else {
                        map.set(word, 1);
                }
        }

        const array = Array.from(map);
        const sorted = array.sort(([word1, counter1], [word2, counter2]) => {
                const diff = counter2 - counter1;

                if (diff === 0) {
                        return word1 <= word2 ? -1 : 1;
                }

                return diff;
        });

        const result = sorted.slice(0, k).map(([word]) => word);

        return result;
};
