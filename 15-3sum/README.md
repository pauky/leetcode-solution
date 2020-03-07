# 15. 3数之和
> 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。
注意：答案中不可以包含重复的三元组。

[题目地址](https://leetcode-cn.com/problems/3sum/)

## 解法1：暴力法
### 思路
* 三重循环遍历

注：解法超出leetcode超时限制

### 复杂度分析
* 时间复杂度：O(n^3)
* 空间复杂度：O(1) 

## 解法2：哈希
### 思路
* 为整体列表的元素生成hash
* 两重循环遍历，判断 a + b = -c

注：解法超出leetcode超时限制

## 复杂度分析
* 时间复杂度：O(n^2)
* 空间复杂度：O(n)

## 解法3：三指针
### 思路
* 数组从小到大排序
* 两重循环
* k指针遍历整个数组，嵌套的循环是i、j指针分别从数组两端向中间收敛，判断i的值 + j的值 + k的值 = 0
* k的值 > 0 时跳出循环，因为j的值 > i的值 >= k的值，这样三者之和肯定大于0
* k > 0 且 k的值等于前一个值，则跳过此次循环
* 三者之和小于0，i++；大于0，j--；等于0，i++，j--

## 复杂度分析
相比解法2，空间复杂度优化了
* 时间复杂度：O(n^2)
* 空间复杂度：O(1)