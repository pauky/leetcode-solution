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

## 解法2：递归法

### 思路
* 递：一直遍历到倒数第二个节点（不包含null）
* 归：从倒数第二个节点 p 时，递的终止条件成立（head.next为null）
    1. 返回到递归的上一层
    2. 倒数第二节点的前一节点为head
    3. head的next为p，p的next本来是null，此时将p的next指向head，将完成head的反转，并删除head.next，并返回反转后的头指针p
    4. 之后不断向上再回到上一层，重复2和3，将p带到最上层返回

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
    if (!head || !head.next) return head
    const p = reverseList(head.next)
    head.next.next = head
    delete head.next
    return p
};
```

### 复杂度分析
* 时间复杂度O(n)
* 空间复杂度O(n)，系统维护了调用栈的空间