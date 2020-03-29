# 1143. 最长公共子序列
> 给定两个字符串 text1 和 text2，返回这两个字符串的最长公共子序列。

一个字符串的 子序列 是指这样一个新的字符串：它是由原字符串在不改变字符的相对顺序的情况下删除某些字符（也可以不删除任何字符）后组成的新字符串。
例如，"ace" 是 "abcde" 的子序列，但 "aec" 不是 "abcde" 的子序列。两个字符串的「公共子序列」是这两个字符串所共同拥有的子序列。

若这两个字符串没有公共子序列，则返回 0。

[题目地址](https://leetcode-cn.com/problems/longest-common-subsequence)

## 解法1：二维DP
### 思路
* text1各字符的位置用i表示，text2用j，建立二维dp table
* 状态：dp[i][j] 表示i,j位置两子串的公共子序列数量
* 当i,j位置的字符相同时，公共子序列数量为i-1,j-1位置的值+1
* 当i,j位置的字符不同时，公共子序列数量取i-1,j与i,j-1数量的最大值
* DP方程：
* text1[i-1] === text2[j-1], dp[i][j] = dp[i-1][j-1] + 1
* text1[i-1] !== text2[j-1], dp[i][j] = max(dp[i-1][j], dp[i][j-1])
* text1, text2在dp table上是从1开始，所以取子串的最后字符要用位置值-1

### 代码
```js
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    if (!text1 || !text2) return 0

    const m = text1.length
    const n = text2.length

    const dp = new Array(m+1).fill(0).map(() => new Array(n+1).fill(0))
    for (let i = 1; i < m+1; i++) {
        for (let j = 1; j < n+1; j++) {
            if (text1[i-1] === text2[j-1]) {
                dp[i][j] = dp[i-1][j-1] + 1
            } else {
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])
            }
        }
    }
    return dp[m][n]
};
```

### 复杂度分析
* 时间复杂度：O(m*n)
* 空间复杂度：O(m*n)