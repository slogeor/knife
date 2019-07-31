/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (!nums) return 0;
  // 指向非重复元素的指针
  var i = 0;
  // 指向数组的指针
  var j = 0;

  for (j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      // 非重复元素，确定元素位置
      if ((i + 1) !== j) {
        // 交互元素
        var temp = nums[i + 1];
        nums[i + 1] = nums[j];
        nums[j] = temp;
      }
      i++;
    }
  }
  return (i + 1);
}
