#### 题目描述
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

有效字符串需满足：
- 左括号必须用相同类型的右括号闭合。
- 左括号必须以正确的顺序闭合。
- 注意空字符串可被认为是有效字符串。

#### 测试用例
```js
示例 1:
输入: "()"
输出: true

示例 2:
输入: "()[]{}"
输出: true

示例 3:
输入: "(]"
输出: false

示例 4:
输入: "([)]"
输出: false

示例 5:
输入: "{[]}"
输出: true
```

#### 关键点解析
- 考察知识点: 数据结构栈，先进先出
- 异常情况: 压栈 )、]、}
- 进栈操作: Array.push(el)
- 出栈操作: Array.pop()

#### code
[JavaScript: valid-parentheses](../code/JavaScript/valid-parentheses.js)

#### 链接
[https://leetcode-cn.com/problems/valid-parentheses](https://leetcode-cn.com/problems/valid-parentheses)
