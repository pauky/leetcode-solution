# 70. 爬楼梯
>
假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
注意：给定 n 是一个正整数。

[官方地址](https://leetcode-cn.com/problems/climbing-stairs/)

## 解法1
### 思路
斐波那契数，或者这里也可以是动态规划
* 除了第1、2级台阶，每级都可以从前一级跨一阶，或从前二级台阶跨二阶
* f(n) = f(n-1) + f(n-2)  (n > 2, f(1) = 1, f(2) = 2)

### 代码
```js
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (n < 3) return n
    let f1 = 1
    let f2 = 2
    let f3
    for (let i = 3; i <= n; i++) {
        f3 = f1 + f2
        f1 = f2
        f2 = f3
    }
    return f3
};
```

### 复杂度分析
* 空间复杂度：O(n)
* 时间复杂度：O(1)