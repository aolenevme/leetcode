/**
211. Design Add and Search Words Data Structure

Design a data structure that supports adding new words and finding if a string matches any previously added string.

Implement the WordDictionary class:

WordDictionary() Initializes the object.
void addWord(word) Adds word to the data structure, it can be matched later.
bool search(word) Returns true if there is any string in the data structure that matches word or false otherwise. word may contain dots '.' where dots can be matched with any letter.

Example:
Input
["WordDictionary","addWord","addWord","addWord","search","search","search","search"]
[[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]
Output
[null,null,null,null,false,true,true,true]

Explanation
WordDictionary wordDictionary = new WordDictionary();
wordDictionary.addWord("bad");
wordDictionary.addWord("dad");
wordDictionary.addWord("mad");
wordDictionary.search("pad"); // return False
wordDictionary.search("bad"); // return True
wordDictionary.search(".ad"); // return True
wordDictionary.search("b.."); // return True

Constraints:
1 <= word.length <= 25
word in addWord consists of lowercase English letters.
word in search consist of '.' or lowercase English letters.
There will be at most 3 dots in word for search queries.
At most 104 calls will be made to addWord and search.
*/

var WordDictionary = function () {
  this.trie = {};
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  let node = this.trie;

  for (let i = 0; i < word.length; i++) {
    const char = word[i];

    if (!(char in node)) {
      node[char] = {};
    }

    if (i === word.length - 1) {
      node[char].isWord = true;
    }

    node = node[char];
  }
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  let level = [this.trie];

  for (let i = 0; i < word.length; i++) {
    const char = word[i];
    const nextLevel = [];

    while (level.length > 0) {
      const node = level.pop();

      if (char === ".") {
        const nodes = Object.values(node);
        const filtered = nodes.filter((value) => typeof value !== "boolean");

        nextLevel.push(...filtered);
      } else if (char in node) {
        nextLevel.push(node[char]);
      }
    }

    level = nextLevel;
  }

  for (const node of level) {
    if (node.isWord) {
      return true;
    }
  }

  return false;
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
