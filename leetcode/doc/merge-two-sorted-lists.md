#### 题目描述
将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。

#### 测试用例
```js
示例1
输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4
```

#### 方案1: 迭代法
设定一个哨兵节点 prehead ，这可以在最后让我们比较容易地返回合并后的链表。我们维护一个 prev 指针，我们需要做的是调整它的 next 指针。然后，我们重复以下过程，直到 l1 或者 l2 指向了 null；如果 l1 当前位置的值小于等于 l2 ，我们就把 l1 的值接在 prev 节点的后面同时将 l1 指针往后移一个。否则，我们对 l2 做同样的操作。不管我们将哪一个元素接在了后面，我们都把 prev 向后移一个元素。

复杂度分析
- 时间复杂度: O(m + n)
- 空间复杂度: O(1)

#### 方案2: 递归法
我们要判断 l1 和 l2 哪一个的头元素更小，然后递归地决定下一个添加到结果里的值。如果两个链表都是空的，那么过程终止，所以递归过程最终一定会终止。

复杂度分析
- 时间复杂度: O(m + n)
- 空间复杂度: O(m + n)；调用 mergeTwoLists 退出时 l1 和 l2 中每个元素都一定已经被遍历过了，所以 n + m 个栈帧会消耗 O(n + m) 的空间

#### code
[JavaScript: merge-two-sorted-lists](../code/JavaScript/merge-two-sorted-lists.js)

#### 链接
- [https://leetcode-cn.com/problems/merge-two-sorted-lists/](https://leetcode-cn.com/problems/merge-two-sorted-lists/)
