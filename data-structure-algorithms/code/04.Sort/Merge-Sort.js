/**
 * @description 归并排序，分解操作
 * @param {Array} arr 原始数组
 */
function mergeSort(arr = []) {
  // 边界条件
  if (arr.length < 2) return arr;

  var len = arr.length;
  var mid = Math.floor(len / 2);
  // 归并排序借助递归，先写递归代码
  var arr1 = arr.slice(0, mid);
  var arr2 = arr.slice(mid, len);
  return merge(mergeSort(arr1), mergeSort(arr2));
}

/**
 * @description 归并排序，合并操作
 * @param {Array} a1 有效的子数组
 * @param {Array} a2 有效的子数组
 * @returns {Array} result 排序后数组
 */
function merge(a1 = [], a2 = []) {
  console.log('---merge---')
  var result = [];
  var a1Len = a1.length;
  var a2Len = a2.length;
  // 指向 a1
  var i1 = 0;
  // 指向 a2
  var i2 = 0;

  while (i1 < a1Len && i2 < a2Len) {
    if (a1[i1] > a2[i2]) {
      result.push(a2[i2]);
      i2++;
    } else {
      result.push(a1[i1]);
      i1++;
    }
  }

  while (i1 < a1Len) {
    result.push(a1[i1]);
    i1++;
  }

  while (i2 < a2Len) {
    result.push(a2[i2]);
    i2++;
  }
  return result;
}

mergeSort([11, 8, 3, 9, 7, 1, 2, 5]);
// 1, 2, 3, 5, 7, 8, 9, 11
// 输出 7 次 merge

mergeSort([ 1, 2, 3, 5, 7, 8, 9, 11 ]);
// 1, 2, 3, 5, 7, 8, 9, 11
// 输出 7 次 merge
