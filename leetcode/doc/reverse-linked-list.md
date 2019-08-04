#### 题目描述
反转一个单链表。

#### 测试用例
```js
输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
```

#### 思路
假设存在链表(非头的单链表) 1 → 2 → 3 → Ø，我们想要把它改成 Ø ← 1 ← 2 ← 3。

在遍历列表时，将当前节点的 next 指针改为指向前一个元素。由于节点没有引用其上一个节点，因此必须事先存储其前一个元素。在更改引用之前，还需要另一个指针来存储下一个节点。不要忘记在最后返回新的头引用！

#### 时间复杂度分析
- 时间复杂度：O(n)，假设 n 是列表的长度
- 空间复杂度：O(1)

#### code
[JavaScript: reverse-linked-list](../code/JavaScript/reverse-linked-list.js)

#### 链接
- [https://leetcode-cn.com/problems/reverse-linked-list/](https://leetcode-cn.com/problems/reverse-linked-list/)
