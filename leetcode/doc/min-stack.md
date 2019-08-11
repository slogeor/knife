#### 题目描述
设计一个支持 push，pop，top 操作，并能在常数时间内检索到最小元素的栈。

- push(x) -- 将元素 x 推入栈中
- pop() -- 删除栈顶的元素
- top() -- 获取栈顶元素
- getMin() -- 检索栈中的最小元素

#### 测试用例
```
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> 返回 -3.
minStack.pop();
minStack.top();      --> 返回 0.
minStack.getMin();   --> 返回 -2.
```

#### 方案: 辅助栈和数据栈
辅助栈和数据栈同步
特点：编码简单，不用考虑一些边界情况，就有一点不好：辅助栈可能会存一些不必要的元素。

辅助栈和数据栈不同步
- 辅助栈为空的时候，必须放入新进来的数
- 新来的数小于或者等于辅助栈栈顶元素的时候，才放入，特别注意这里等于要考虑进去，因为出栈的时候，连续的、相等的并且是最小值的元素要同步出栈
- 出栈的时候，辅助栈的栈顶元素等于数据栈的栈顶元素，才出栈

总结一下：出栈时，最小值出栈才同步；入栈时，最小值入栈才同步。

#### code
[JavaScript: min-stack](../code/JavaScript/min-stack.js)

#### 链接
- [https://leetcode-cn.com/problems/min-stack/](https://leetcode-cn.com/problems/min-stack/)
