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

type Node struct {
	alphabet [ALPHABET_SIZE]*Node
	visited  bool
	end      bool
}

func (node *Node) dfs() {
	stack := []*Node{node}

	for len(stack) != 0 {
		curNode := stack[0]
		stack = stack[1:]

		if curNode.end == true || curNode == node {
			if curNode != node {
			}
		}
	}
}

type Trie struct {
	Root *Node
}

func (T *Trie) insert(word string) {
	if T.Root == nil {
		T.Root = new(Node)
	}

	nextNode := T.Root

	for cursor := 0; cursor < len(word); cursor++ {
		index := int(word[cursor] - 'a')

		if index < 26 {
			if nextNode.alphabet[index] == nil {
				nextNode.alphabet[index] = new(Node)
			}

			nextNode = nextNode.alphabet[index]
			nextNode.end = false
		}
	}

	nextNode.end = true
}

func main() {
	trie := new(Trie)
	trie.insert("aaabcda")
	trie.insert("none")

	rootNode := trie.Root
	rootNode.dfs()
}
