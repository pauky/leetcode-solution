# 1. 两数之和
> 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

## 解法1：暴力法
### 思路
* 两重循环

```
for i = 0; i < n-1; i++
    for j = i + 1; j < n; j++
```

### 代码
```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 暴力法
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
}
```

### 复杂度分析
* 时间复杂度：O(n^2)
* 空间复杂度：O(1)

## 解法2：两遍hash
### 思路
* 先遍历数组建立hash
* 再遍历数组，并判断target-val是否在hash，是则记录元素位置

### 代码
```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const hash = {}
    for (let i = 0; i < nums.length; i++) {
        hash[nums[i]] = i
    }
    let j
    for (let i = 0; i < nums.length; i++) {
        j = hash[target - nums[i]]
        if (Number.isInteger(j) && i !== j) {
            return [i, j]
        }
    }
}
```

### 复杂度分析
* 时间复杂度：O(n), 但数组被遍历了两次
* 空间复杂度：O(1)

## 解法3：一遍hash
### 思路
* 遍历数组，同时建立hash和判断target-val是否在hash
* 因为在遍历一次后，两个元素会被一前一后拿到，所以不会遗漏掉

### 代码
```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const hash = {}
    let j
    for (let i = 0; i < nums.length; i++) {
        j = hash[target - nums[i]]
        if (Number.isInteger(j) && i !== j) {
            return [i, j]
        }
        hash[nums[i]] = i
    }
}
```

### 复杂度分析
* 时间复杂度：O(n)，相对解法2的两遍hash，这里只遍历了一次，相当于优化了一倍
* 空间复杂度：O(1)