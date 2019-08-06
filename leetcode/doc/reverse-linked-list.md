#### 题目描述
反转一个单链表。

#### 测试用例
```js
输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
```

#### 方案1
假设存在链表(非头的单链表) 1 → 2 → 3 → Ø，我们想要把它改成 Ø ← 1 ← 2 ← 3。

在遍历列表时，将当前节点的 next 指针改为指向前一个元素。由于节点没有引用其上一个节点，因此必须事先存储其前一个元素。在更改引用之前，还需要另一个指针来存储下一个节点。不要忘记在最后返回新的头引用！

时间复杂度分析
- 时间复杂度：O(n)，假设 n 是列表的长度
- 空间复杂度：O(1)

#### 方案2: 递归法
其关键在于反向工作，假设列表的其余部分已经被反转，现在该如何反转它前面的部分？若从节点 n{k+1} 到 n{m} 已经反转，而我们正处于 n{k}，希望 n{k+1} 的下一个节指向 n{k}，所以，n{k}.next.next = n{k}
​
```js
public ListNode reverseList(ListNode head) {
  if (head == null || head.next == null) return head;
  ListNode p = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return p;
}
```

复杂度分析
- 时间复杂度：O(n)，假设 n 是列表的长度
- 空间复杂度：O(n)，由于使用递归，将会使用隐式栈空间。递归深度可能会达到 n 层

#### code
[JavaScript: reverse-linked-list](../code/JavaScript/reverse-linked-list.js)

#### 链接
- [https://leetcode-cn.com/problems/reverse-linked-list/](https://leetcode-cn.com/problems/reverse-linked-list/)
