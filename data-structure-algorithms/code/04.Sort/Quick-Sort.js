/**
 * @description 快速排序算法: 不考虑空间占用情况
 * @param {Array} arr
 * @returns {Array} arr
 */
function quickSort1(arr = []) {
  console.log('quickSort');
  // 边界条件考虑
  if (arr.length < 2) return arr;
  var len = arr.length;

  // 一般取数组最后一个节点作为分区点
  var pivot = len - 1;

  var arr1 = [];
  var arr2 = [];
  for (var k = 0; k < len - 1; k++) {
    if (arr[k] < arr[pivot]) {
      arr1.push(arr[k]);
    } else {
      arr2.push(arr[k]);
    }
  }

  return quickSort(arr1).concat(arr[pivot]).concat(quickSort(arr2));
}

// quickSort1([1, 11, 3, 16, 7, 12, 5, 14, 9, 10])



/**
 * @description 快速排序算法: 空间复杂度 O(1)
 * @param {Array} arr
 * @returns {Array} arr
 */
function quickSort(arr = []) {
  // 边界条件
  if (arr.length < 2) return arr;
  var len = arr.length;

  // 分区点
  var pivot = len - 1;

  var i = 0;

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
  return quickSort(arr.slice(0, i)).concat(arr[pivot]).concat(quickSort(arr.slice(i, len - 1)));
}
quickSort([1, 11, 3, 16, 7, 12, 5, 14, 9, 10])
