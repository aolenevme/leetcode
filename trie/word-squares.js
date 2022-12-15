/**
425. Word Squares

Given an array of unique strings words, return all the word squares you can build from words. The same word from words can be used multiple times. You can return the answer in any order.

A sequence of strings forms a valid word square if the kth row and column read the same string, where 0 <= k < max(numRows, numColumns).

For example, the word sequence ["ball","area","lead","lady"] forms a word square because each word reads the same both horizontally and vertically.

Example 1:
Input: words = ["area","lead","wall","lady","ball"]
Output: [["ball","area","lead","lady"],["wall","area","lead","lady"]]
Explanation:
The output consists of two word squares. The order of output does not matter (just the order of words in each word square matters).

Example 2:
Input: words = ["abat","baba","atan","atal"]
Output: [["baba","abat","baba","atal"],["baba","abat","baba","atan"]]
Explanation:
The output consists of two word squares. The order of output does not matter (just the order of words in each word square matters).

Constraints:
1 <= words.length <= 1000
1 <= words[i].length <= 4
All words[i] have the same length.
words[i] consists of only lowercase English letters.
All words[i] are unique.
*/

const Trie = function () {
  this.children = {};
  this.isWord = false;
};

Trie.prototype.addWord = function (word) {
  let node = this;

  for (const char of word) {
    if (!(char in node.children)) {
      node.children[char] = new Trie();
    }

    node = node.children[char];
  }

  node.isWord = true;
};

Trie.prototype.getWordsFromPrefix = function (trie, prefix, length) {
  let words = [];

  for (const char of prefix) {
    if (!(char in trie.children)) {
      return [];
    }

    trie = trie.children[char];
  }

  const prefixDfs = (trie, word) => {
    if (word.length === length) {
      if (trie.isWord) {
        words.push(word);
      }
    }

    for (const child of Object.keys(trie.children)) {
      prefixDfs(trie.children[child], word + child);
    }
  };

  prefixDfs(trie, prefix);

  return words;
};

const wordSquares = (words) => {
  const trie = new Trie();
  const output = [];

  for (const word of words) {
    trie.addWord(word);
  }

  for (const word of words) {
    squaresDfs([word], trie, output);
  }

  return output;
};

const getPrefix = (words) => {
  let prefix = "";

  const length = words.length;

  for (const word of words) {
    prefix += word[length];
  }

  return prefix;
};

const squaresDfs = (squareWords, trie, output) => {
  if (squareWords.length === squareWords[0].length) {
    output.push([...squareWords]);

    return;
  }

  const prefix = getPrefix(squareWords);

  const wordsFromPrefix = trie.getWordsFromPrefix(
    trie,
    prefix,
    squareWords[0].length
  );

  for (const word of wordsFromPrefix) {
    squaresDfs([...squareWords, word], trie, output);
  }
};
