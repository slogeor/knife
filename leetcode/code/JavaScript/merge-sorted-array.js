/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  // nums2 为空的情况
  if (n === 0) return nums1;
  // nums1 为空的情况，都是占位符
  if (nums1.length === m || m === 0) return nums2;

  var len = nums1.length;
  // nums1 非空的位置
  var longP = nums1.length - m - 1;
  // 最后的位置
  var shortP = n - 1;

  for (var i = len - 1; i >= 0; i--) {
    if (shortP < 0) {
      break;
    }

    if (nums1[longP] > nums2[shortP]) {
      nums1[i] = nums1[longP] ;
      longP--;
    } else {
      nums1[i] = nums2[shortP]
      shortP--;
    }
  }
  return nums1;
};
