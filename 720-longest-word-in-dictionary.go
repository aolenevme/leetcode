/*
	https://leetcode.com/problems/longest-word-in-dictionary/solution/

	Given a list of strings words representing an English Dictionary, find the longest word in words that can be built one character at a time by other words in words. If there is more than one possible answer, return the longest word with the smallest lexicographical order.
	If there is no answer, return the empty string.

	Example 1:

	Input: 
	words = ["w","wo","wor","worl", "world"]
	Output: "world"
	Explanation: 
	The word "world" can be built one character at a time by "w", "wo", "wor", and "worl".

	Example 2:

	Input: 
	words = ["a", "banana", "app", "appl", "ap", "apply", "apple"]
	Output: "apple"
	Explanation: 
	Both "apply" and "apple" can be built from other words in the dictionary. However, "apple" is lexicographically smaller than "apply".

	Note:
	All the strings in the input will only contain lowercase letters.
	The length of words will be in the range [1, 1000].
	The length of words[i] will be in the range [1, 30].
*/

package main

import "fmt"

const ALPHABET_SIZE = 26

type node struct {
	alphabet [ALPHABET_SIZE]*node
	end bool
}

type Trie struct {
	Root *node
}

func (T *Trie) insert(word string) {
	if T.Root == nil {
		T.Root = new(node)
	}

	nextNode := T.Root

	for cursor := 0; cursor < len(word); cursor++ {
		index := int(word[cursor] - 'a')

		if index < 26 {
			if nextNode.alphabet[index] == nil {
				nextNode.alphabet[index] = new(node)
			}

			nextNode = nextNode.alphabet[index]
			nextNode.end = false
		}
	}

	nextNode.end = true
}

func (T *Trie) dfs() {
	ans := ""
	node := T.Root

	for !node.end {
		for i:=0; i<ALPHABET_SIZE; i++ {
			if node.alphabet[i] != nil {
				ans += string(i + 'a')
				node = node.alphabet[i]
			}

			fmt.Println(ans)

			nextTrie := new(Trie)
			nextTrie.Root = node
			nextTrie.dfs()
		}
	}
}

func main() {
	trie := new(Trie)
	trie.insert("aa")
	trie.insert("banana")

	trie.dfs()
}
