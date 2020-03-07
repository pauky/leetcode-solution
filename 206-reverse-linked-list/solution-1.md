# 206. reverse-linked-list 
> 反转一个单链表。

[题目地址](https://leetcode-cn.com/problems/reverse-linked-list/)

## 解法1：迭代法
### 思路
* 从head开始遍历当前链接
* 初始值：pre(上一个节点)为null，current(当前节点)为head
* 当current不为null时，准备把current的指针反转：
    1. 在反转前需要存储current的next指针为: next = current.next
    2. 反转current的next指针指向prev：current.next = prev
    3. 继续向后遍历，将current推到下一个节点：current = next
    4. 下一次遍历的上一节点则为当前节点：prev = current

### 代码
```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    let prev = null
    let current = head
    let next
    while (current) {
        // 在反转前需要存储current的next指针
        next = current.next
        // 反转当前节点的next指向前一个节点
        current.next = prev
        // 赋值，继续链表的遍历
        prev = current
        current = next
    }
    return prev
};
```

### 复杂度分析
* 时间复杂度O(n)
* 空间复杂度O(1)