#### 题目描述
给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那两个整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

#### 测试用例
```js
给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
```

#### 方案1: 使用有序数组，从头(start)和尾(end)向中间遍历
- 循环终止的条件: end - start === 1 （前提是end 和 start 都合法）
- 如果 nums[end] + nums[start] > target，tail--
- 如果 nums[end] + nums[start] < target，head++
- 循环结束后，如果 nums[start] + start[end] === target， 返回[start, end]，否则 []

复杂度度分析
- 平均时间复杂度: O(n)
- 空间复杂度: O(1)

#### 方案2: 借助哈希，2次遍历，使用任何场景
- 第一次遍历，更新哈希(helper)，key 为数组的取值，value 为数组的索引
- 第二次遍历，判断target - nums[i] 是否在 helper 里，如有，返回(需要判断2个下标不能相同)

复杂度度分析
- 平均时间复杂度: O(n)
- 空间复杂度: O(n)

#### 方案3:  借助哈希，1次遍历，使用任何场景
- 遍历数组，判断target - nums[i] 是否在哈希表(helper)里
- 如果不在，更新helper，如果在返回索引

复杂度度分析
- 平均时间复杂度: O(n)
- 空间复杂度: O(n)

#### code
[JavaScript: two-sum](../code/JavaScript/two-sum.js)

#### 链接
[https://leetcode-cn.com/problems/two-sum](https://leetcode-cn.com/problems/two-sum/)
