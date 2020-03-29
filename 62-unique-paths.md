# 62. 不同路径
> 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。

问总共有多少条不同的路径？

[题目地址](https://leetcode-cn.com/problems/unique-paths)

## 解法1：二维DP
### 思路

* 二维DP
* 以右下角为原点，i是横轴方向向左，j是纵轴方向向上，
* 状态定义：dp[i][j]机器人走到(i,j)格子的所有可能路径的数量
* 因为机器人只能向下或向右移动，所以(i,j)格子每次只能走到(i-1,j)或(i,j-1)，所以(i,j)的路径数量即为两者的路径数量之和
* DP方程：
* dp[i][j] = dp[i-1][j] + dp[i][j-1]

### 代码
```js
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const dp = new Array(m).fill(0).map(() => new Array(n).fill(0))

    // 初始化第一行和第一列
    for(let i = 0; i < m; i++) dp[i][0] = 1
    for(let j = 0; j < n; j++) dp[0][j] = 1

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i-1][j] + dp[i][j-1]
        }
    }
    return dp[m-1][n-1]
};
```

### 复杂度分析
* 时间复杂度：O(m*n)
* 空间复杂度：O(m*n)