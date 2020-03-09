# 64. 最小路径和
> 给定一个包含非负整数的 m x n 网格，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。
说明：每次只能向下或者向右移动一步。

## 二维动态方程
### 思路
DP方程： dp[i,j] = g[i,j] + min(dp[i+1, j], dp[i, j+1])

### 代码
```js
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const m = grid.length - 1
    const n = grid[0].length - 1
    const dp = grid
    for (let i = m; i >= 0; i--) {
        for (let j = n; j >= 0; j--) {
            if (i === m && j === n) {
                dp[i][j] = grid[i][j]
            } else if (i !== m && j === n) {
                dp[i][j] = grid[i][j] + dp[i+1][j]
            } else if (i === m && j !== n) {
                dp[i][j] = grid[i][j] + dp[i][j+1]
            } else {
                dp[i][j] = Math.min(dp[i+1][j], dp[i][j+1]) + grid[i][j]
            }
        }
    }
    return dp[0][0]
};
```

### 复杂度分析
* 时间复杂度：O(m*n)
* 空间复杂度：O(m*n)