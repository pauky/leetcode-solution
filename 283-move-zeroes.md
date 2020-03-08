# 移动零
题目：https://leetcode-cn.com/problems/move-zeroes/

## 解法1
### 思路
1. 双指针i和j，遍历数组；
2. i不断检测后面的数组元素，j存储非零元素索引的最大值；
3. 当i遇到非零元素时，交换i、j指针上的数组值；

### 代码
```js
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let j = 0
    let tmp
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            tmp = nums[j]
            nums[j] = nums[i]
            nums[i] = tmp
            j++
        }
    }
};
```

### 复杂度分析
* 时间复杂度：O(n)
* 空间复杂度：O(1) 

## 解法2
### 思路
1. 双指针i和j，遍历数组；
2. i不断检测后面的数组元素，j存储非零元素索引的最大值；
3. 当i遇到非零元素时，并且i和j指针值不相同时，交换i、j指针上的数组值；
4. 比解法1会少一些交换的操作，解法1无论i、j是否重合都会交换；

### 代码
```js
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let j = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            if (i !== j) {
                nums[j] = nums[i]
                nums[i] = 0
            }
            j++
        }
    }
};
```

## 复杂度分析
* 时间复杂度：O(n)
* 空间复杂度：O(1)