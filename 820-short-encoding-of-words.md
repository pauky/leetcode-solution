# 820. 单词的压缩编码
> 给定一个单词列表，我们将这个列表编码成一个索引字符串 S 与一个索引列表 A。

例如，如果这个列表是 ["time", "me", "bell"]，我们就可以将其表示为 S = "time#bell#" 和 indexes = [0, 2, 5]。

对于每一个索引，我们可以通过从字符串 S 中索引的位置开始读取字符串，直到 "#" 结束，来恢复我们之前的单词列表。

那么成功对给定单词列表进行编码的最小字符串长度是多少呢？

[题目地址](https://leetcode-cn.com/problems/short-encoding-of-words)

## 解法1：踢除重复后缀词
### 思路
* 单词列表放入set中，对每个单词的所有后缀词进行判重，有则从set删除掉
* set只剩下没有重复后缀的词，遍历并累加所有单词及其结束符长度

### 代码
```js
/**
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding1 = function(words) {
    const wordsSet = new Set(words)
    for (let i = 0; i < words.length; i++) {
        const word = words[i]
        for (let j = 1; j < word.length; j++) {
            wordsSet.delete(word.substring(j))
        }
    }
    let len = 0
    for (const val of wordsSet.values()) {
        len += val.length + 1
    }
    return len
};
```

## 解法2：trie树
### 思路
* 从每个单词末尾开始构建trie树
* 遍历trie树中有叶子节点的分支，累加长度

### 代码
```js
/**
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function(words) {
    const root = new TrieNode()
    const trieNodes = new Map()
    for (let i = 0; i < words.length; i++) {
        let node = root
        const word = words[i]
        for (let j = word.length - 1; j >= 0; j--) {
            node = node.insert(word[j])
        }
        trieNodes.set(node, word.length)
    }

    let len = 0
    for (const key of trieNodes.keys()) {
        if (key.count === 0) {
            len += trieNodes.get(key) + 1
        }
    }
    return len
}

function TrieNode() {
    this.count = 0
    this.children = []
}
TrieNode.prototype.insert = function(char) {
    const charAt = char.charCodeAt() - 97
    if (!this.children[charAt]) {
        this.children[charAt] = new TrieNode()
        this.count++
    }
    return this.children[charAt]
}
```

