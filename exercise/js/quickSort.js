/**
 * @description 查找数组中第 K 大的元素
 * @param {Array} arr
 * @param {Number} k
 * @returns {Number} k
 */
function findKthNum(arr = [], k) {
  // 异常处理
  if (arr.length === 0 || k < 1 || arr.length < k) return -1;
  // 边界处理
  if (arr.length === 1 && k === 1) return arr[0];

  var len = arr.length;
  var i = 0;
  // 分区点
  var pivot = len - 1;
  for (var j = 0; j < len; j++) {
    if (arr[j] < arr[pivot]) {
      // 数据交换
      if (i !== j) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
      i++
    }
  }

  // 分区点，要记得返回 arr[pivot]，不能返回 arr[k]
  if (k === i + 1) {
    return arr[pivot];
  }

  // 后半部分
  if (k > i + 1) {
    return findKthNum(arr.slice(i, len - 1), k - i - 1);
  }

  // 前半部分
  if (k < i + 1) {
    return findKthNum(arr.slice(0, i), k);
  }
}

findKthNum([1, 3, 2, 5, 4, 6, 9, 8, 7], 8); // 8
findKthNum([1, 2, 3, 4, 5, 6, 7, 8, 9], 4); // 4

