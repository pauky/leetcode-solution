# 206. reverse-linked-list 
> 反转一个单链表。

[题目地址](https://leetcode-cn.com/problems/reverse-linked-list/)

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