# 柱状图中最大的矩形
> 给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。

[LeetCode地址](https://leetcode-cn.com/problems/largest-rectangle-in-histogram/)

## 解法1
### 思路
* 暴力遍历
* 两层遍历，顺序比较两根柱子构成的矩形面积，并拿到最大值
* 宽度为两柱的距离，高度为两柱之间的最低柱子高度，这里需要遍历查找

注：LeetCode上提交会超出时间限制

### 代码
```js
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
    if (heights.length === 0) return 0
    if (heights.length === 1) return heights[0]
    let maxArea = 0
    for (let i = 0; i < heights.length; i++) {
        for (let j = i; j < heights.length; j++) {
            let minHeight = Infinity
            for (let k = i; k <= j; k++) {
                minHeight = Math.min(minHeight, heights[k])
            }
            maxArea = Math.max(maxArea, (j - i + 1) * minHeight)
        }
    }
    return maxArea
};
```

### 复杂度分析
* 时间复杂度：O(n^3)， 两层遍历加上查找柱子间最低柱子的遍历
* 空间复杂度：O(1) 

## 解法2
### 思路
* 暴力法的优化版本
* 找柱子间最低柱子高度可以利用前一步的最小高度与本次遍历新拿到的柱子高度对比
* 减少了一层找柱子间最小调度的遍历

### 代码
```js
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
    if (heights.length === 0) return 0
    if (heights.length === 1) return heights[0]
    let maxArea = 0
    for (let i = 0; i < heights.length; i++) {
        let minHeight = Infinity
        for (let j = i; j < heights.length; j++) {
            minHeight = Math.min(minHeight, heights[j])
            maxArea = Math.max(maxArea, (j - i + 1) * minHeight)
        }
    }
    return maxArea
};
```

## 复杂度分析
* 时间复杂度：O(n^2)
* 空间复杂度：O(1)

## 解法3
### 思路
* 栈的方法
* 柱子依次入栈，栈从底到顶需要保持高度从低到高的顺序
* 入栈时若元素比栈顶元素小，说明栈顶元素的右边界出现，栈顶元素的前一个元素则是左边界，计算边界内的面积
* 若原列表遍历完，栈不空则逐个出栈，左边界是其前一元素，右边界是在柱图的最右，计算边界内的面积；

### 代码
```js
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
    if (heights.length === 0) return 0
    if (heights.length === 1) return heights[0]
    let maxArea = 0
    let stack = [-1]
    let current

    for (let i = 0; i < heights.length; i++) {
        while (stack.length > 1 && heights[stack[stack.length - 1]] > heights[i]) {
            current = stack.pop()
            maxArea = Math.max(heights[current] * (i - stack[stack.length - 1] - 1), maxArea)
        }
        stack.push(i)
    }

    while (stack.length > 1) {
        current = stack.pop()
        maxArea = Math.max(heights[current] * (heights.length - stack[stack.length - 1] - 1), maxArea)
    }

    return maxArea
};
```

### 复杂度分析
* 时间复杂度：O(n)
* 空间复杂度：O(n)