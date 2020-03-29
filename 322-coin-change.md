# 322. 零钱兑换
> 给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。

[题目地址](https://leetcode-cn.com/problems/coin-change)

## 解法1：动态规划
### 思路
* 状态：dp[i] 金额 i 所需要的最少硬币数量
* dp方程： dp[i] = min([dp[i-k1], dp[i-k2], dp[i-k3]...]) + 1 , (k1,k2,k3... in conins) ，方程最后的+1，是代表那个面值为k的硬币
* 与(70. 爬楼梯)题目类似，我们可以自顶向下画一个状态树，每个节点表示dp的状态，前者求的是各分支值的和，而本题求的是各分支的最小值
* 此类问题一般首先可能会想到自顶而下的递归回溯，然后缓存剪枝优化递归，然后就是自底而上的动态规划（动态递推）

### 代码
```js
var coinChange = function(coins, amount) {
    const dp = new Array(amount+1).fill(amount+1)
    dp[0] = 0
    for (let i = 1; i <= amount; i++) {
        for (const k of coins) {
            if (k <= i) {
                dp[i] = Math.min(dp[i], dp[i-k] + 1)
            }
        }
    }
    return dp[amount] > amount ? -1 : dp[amount]
};
```