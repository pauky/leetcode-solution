# 11. 盛最多水的容器
题目：https://leetcode-cn.com/problems/container-with-most-water/

## 解法1
### 思路
* 暴力法
* 两重循环

### 代码
```js
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let max = 0
    let area = 0
    for (let i = 0; i < height.length; i++) {
        for (let j = i + 1; j < height.length; j++) {
            area = (j - i) * Math.min(height[i], height[j])
            max = Math.max(area, max)
        }
    }
    return max
};
```

### 复杂度分析
* 时间复杂度：O(n^2)
* 空间复杂度：O(1) 

## 解法2
### 思路
* 双指针i和j在左右边界，向中间收敛；
* 每次只移动高度小的；

### 代码
```js
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let max = 0
    let area = 0
    for (let i = 0, j = height.length - 1; i < j;) {
        area = (j - i) * Math.min(height[i], height[j])
        max = Math.max(area, max)
        if (height[i] < height[j]) {
            i++
        } else {
            j--
        }
    }
    return max
}
```

## 复杂度分析
* 时间复杂度：O(n)
* 空间复杂度：O(1)