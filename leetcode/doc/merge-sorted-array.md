#### 题目描述
给定两个有序整数数组 nums1 和 nums2，将 nums2 合并到 nums1 中，使得 num1 成为一个有序数组。

说明:
- 初始化 nums1 和 nums2 的元素数量分别为 m 和 n
- 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素

#### 测试用例
```
输入:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

输出: [1,2,2,3,5,6]
```

#### 思路
- 方案1：nums2 追加到 nums1里，然后在对 nums1 进行排序，时间复杂度最好是 O(nlogn)，空间复杂度是O(1)
- 方案2：定义一个新数组 nums3，遍历nums1 和 nums2，按顺序将数字放到 nums3 数组列，时间复杂度是 O(m)，空间复杂度是 O(m)
- 方案3：数组逆序遍历，比较 num1 和 nums2 元素的大小

#### code
[JavaScript: merge-sorted-array](../code/JavaScript/merge-sorted-array.js)

#### 链接
- [https://leetcode-cn.com/problems/merge-sorted-array/](https://leetcode-cn.com/problems/merge-sorted-array/)
