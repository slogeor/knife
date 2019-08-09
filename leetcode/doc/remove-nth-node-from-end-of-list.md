#### 题目描述
给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。

#### 测试用例
```js
给定一个链表: 1->2->3->4->5, 和 n = 2.

当删除了倒数第二个节点后，链表变为 1->2->3->5.
```
说明：给定的 n 保证是有效的。

#### 思路
假设链表长度为 m，倒数第 n 个结点可以转化为正序第 m - n + 1 个结点，找到第 m - n 位置的结点即可

#### 方案1: 两次遍历算法
- step1: 先遍历链表，计算出链表的长度
- step2: 继续遍历链表，找到链表第 m - n 个结点
- step3: 修改第 m - n 个结点的后继指针

复杂度分析
- 时间复杂度: O(m)，m 是链表的长度
- 空间复杂度: O(1)

#### 方案2: 一次遍历算法
- step1: 移动 fast 指针，先移到到第 n 个节点，
- step2: 同时移动 fast 和 slow，fast 移到到尾结点时，slow 刚好移动了 m - n 次
- step3: 修改第 m - n 个结点的后继指针

复杂度分析
- 时间复杂度: O(m)，m 是链表的长度
- 空间复杂度: O(1)

#### code
[JavaScript: remove-nth-node-from-end-of-list](../code/JavaScript/remove-nth-node-from-end-of-list.js)

#### 链接
- [https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/](https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/)
