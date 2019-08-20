#### 题目描述
给定一个字符串，请你找出其中不含有重复字符的最长子串的长度。

#### 测试用例
```js
示例 1:
输入: "abcabcbb"
输出: 3
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

示例 2:
输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。

示例 3:
输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
```

#### 方案：借助哈希表
可以转换为求从索引 i 到 j - 1 之间的子串长度，这里有个前提条件，就是索引 j 位置的元素存在 i 到 j - 1 之间的子串中(这个判断可以借助哈希表，能在 O(1)时间复杂度完成)。

假设索引 j 位置的元素存在 i 到 j - 1 之间的子串中 索引为 k (i <= k；k <= j-1) 的位置，下一个子串开始的位置则为 k + 1

依次类推，遍历完字符串

复杂度度分析
- 时间复杂度: O(n) n 是字符串长度
- 空间复杂度: O(min(m,n))，n 是字符串长度，m 是最长子串的长度

#### code
[JavaScript: longest-substring-without-repeating-characters](../code/JavaScript/longest-substring-without-repeating-characters.js)

#### 链接
[https://leetcode-cn.com/problems/longest-substring-without-repeating-characters](https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/)
