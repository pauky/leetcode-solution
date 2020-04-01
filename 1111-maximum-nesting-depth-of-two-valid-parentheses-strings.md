# 1111. 有效括号的嵌套深度
[题目地址](https://leetcode-cn.com/problems/maximum-nesting-depth-of-two-valid-parentheses-strings/)
## 解法1
### 思路
* 用栈给每个括号标记嵌套深度，即栈的深度
* 按深度奇偶分配给A,B即可让A,B的嵌套深度最小

### 代码
```js
/**
 * @param {string} seq
 * @return {number[]}
 */
var maxDepthAfterSplit = function (seq) {
    const res = []
    let depth = 0
    for (let i = 0; i < seq.length; i++) {
        if (seq[i] === '(') {
            depth++
            res.push(depth % 2)
        } else {
            res.push(depth % 2)
            depth--
        }
    }
    return res
};
```

### 复杂度分析
* 时间复杂度：O(n)
* 空间复杂度：O(n)

## 解法2
### 思路
* 空间复杂度优化到O(1)

### 代码
```js
var maxDepthAfterSplit = function (seq) {
    const res = []
    let depth = 0
    for (let i = 0; i < seq.length; i++) {
        res[depth++] = seq[i] === '(' ? depth % 2 : (depth + 1) % 2
    }
    return res
};
```

### 复杂度分析
* 时间复杂度：O(n)
* 空间复杂度：O(1)