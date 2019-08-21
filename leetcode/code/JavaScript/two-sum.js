/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/**
 * 场景1: 适用于数组已有序
 * 设置两个指针，头指针和尾指针
 */
var twoSum = function (nums, target) {
  // 空判断
  if (!nums || nums.length === 0) return [];

  var start = 0;
  var end = nums.length - 1;

  // 异常判断
  if ((nums[end] * 2) < target || (nums[start] * 2) > target) return [];

  while ((end - start) > 1) {
    if ((nums[start] + nums[end]) > target) {
      // 保证 end 合法
      if (end === 0) break;
      end--;
    } else if ((nums[start] + nums[end]) < target) {
      // 保证 start 合法
      if (start === nums.length - 1) break;
      start++
    } else {
      break;
    }
  }

  if (nums[start] + nums[end] === target) {
    return [start, end];
  }
  return [];
};

/**
 * 适用任何场景，利用哈希，遍历两次
 */
var twoSum = function (nums, target) {
  // 空判断
  if (!nums || nums.length === 0) return [];

  var helper = new Map();
  // 第一次遍历，存储 value 和 index
  for (var i = 0; i < nums.length; i++) {
    helper.set(nums[i], i);
  }

  // 第二次遍历，查找目标
  for (var i = 0; i < nums.length; i++) {
    var firstVal = nums[i];
    var secondVal = target - firstVal;
    // i !== helper.get(secondVal) 这个重要
    if (helper.has(secondVal) && i !== helper.get(secondVal)) {
      return [i, helper.get(secondVal)];
    }
  }
  return [];
};

/**
 * 借助哈希，一次遍历，需要使用哈希的 has 方法，判断key是否存
 */
var twoSum = function (nums, target) {
  // 空判断
  if (!nums || nums.length === 0) return [];
  var helper = new Map();

  for (var i = 0; i < nums.length; i++) {
    var firstVal = nums[i];
    var secondVal = target - firstVal;
    if (helper.has(secondVal)) {
      return [helper.get(secondVal), i];
    } else {
      helper.set(firstVal, i);
    }
  }
  return [];
};
