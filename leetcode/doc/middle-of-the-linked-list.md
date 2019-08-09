#### 题目描述
给定一个带有头结点 head 的非空单链表，返回链表的中间结点。如果有两个中间结点，则返回第二个中间结点。

#### 测试用例
```js
示例1
输入：[1,2,3,4,5]
输出：此列表中的结点 3，返回的结点值为 3

示例2
输入：[1,2,3,4,5,6]
输出：此列表中的结点 4，由于该列表有两个中间结点，值分别为 3 和 4，我们返回第二个结点。
```
提示：给定链表的结点数介于 1 和 100 之间。

#### 方案1: 输出到数组
按顺序将每个结点放入数组 A 中，然后中间结点就是 A[A.Length/2]，因为我们可以通过索引检索每个结点。

复杂度分析
- 时间复杂度：O(N)
- 空间复杂度：O(N)

#### 方案2: 快慢指针法
当用慢指针 slow 遍历列表时，让另一个指针 fast 的速度是它的两倍。当 fast 到达列表的末尾时，slow 必然位于中间。

复杂度分析
- 时间复杂度：O(N)
- 空间复杂度：O(1)

#### code
[JavaScript: middle-of-the-linked-list](../code/JavaScript/middle-of-the-linked-list.js)

#### 链接
- [https://leetcode-cn.com/problems/middle-of-the-linked-list/](https://leetcode-cn.com/problems/middle-of-the-linked-list/)
