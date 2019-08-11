#### 题目描述
使用队列实现栈的下列操作：

- push(x) -- 元素 x 入栈
- pop() -- 移除栈顶元素
- top() -- 获取栈顶元素
- empty() -- 返回栈是否为空

需要注意的
- 你只能使用队列的基本操作-- 也就是 push to back, peek/pop from front, size, 和 is empty 这些操作是合法的
- 你所使用的语言也许不支持队列。 你可以使用 list 或者 deque（双端队列）来模拟一个队列 , 只要是标准的队列操作即可
- 你可以假设所有操作都是有效的（例如, 对一个空的栈不会调用 pop 或者 top 操作）

#### 方案1: 两个队列，压入 -O(1)， 弹出 -O(n)

栈是一种 后进先出（last in - first out， LIFO）的数据结构，栈内元素从顶端压入（push），从顶端弹出（pop）。一般我们用数组或者链表来实现栈，但是这篇文章会来介绍如何用队列来实现栈。

队列是一种与栈相反的 先进先出（first in - first out， FIFO）的数据结构，队列中元素只能从后端（rear）入队（push），然后从前端（front）出队（pop）。为了满足栈的特性，我们需要维护两个队列 q1 和 q2。同时，我们用一个额外的变量来保存栈顶元素。

压入（push）新元素永远从 q1 的后端入队，同时 q1 的后端也是栈的 栈顶（top）元素。

弹出（pop）我们需要把栈顶元素弹出，就是 q1 中最后入队的元素。

考虑到队列是一种 FIFO 的数据结构，最后入队的元素应该在最后被出队。因此我们需要维护另外一个队列 q2，这个队列用作临时存储 q1 中出队的元素。q2 中最后入队的元素将作为新的栈顶元素。接着将 q1 中最后剩下的元素出队。我们通过把 q1 和 q2 互相交换的方式来避免把 q2 中的元素往 q1 中拷贝。

#### 方法2: 两个队列， 压入 - O(n)， 弹出 - O(1)

压入（push) 每一个新元素从 q2 入队，同时把这个元素作为栈顶元素保存。当 q1 非空（也就是栈非空），我们让 q1 中所有的元素全部出队，再将出队的元素从 q2 入队。通过这样的方式，新元素（栈中的栈顶元素）将会在 q2 的前端。我们通过将 q1， q2 互相交换的方式来避免把 q2 中的元素往 q1 中拷贝。

弹出（pop）直接让 q1 中元素出队，同时将出队后的 q1 中的队首元素作为栈顶元素保存。

#### code
[JavaScript: implement-stack-using-queues](../code/JavaScript/implement-stack-using-queues.js)

#### 链接
- [https://leetcode-cn.com/problems/implement-stack-using-queues/](https://leetcode-cn.com/problems/implement-stack-using-queues/)
