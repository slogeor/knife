/**
 * @description 插入排序
 * @param {Array} arr
 * @returns {Array} arr
 */
function insertionSort(arr = []) {
  // 边界判断
  if (arr.length < 1) return arr;
  // 记录交换次数
  let count = 0;

  for (let i = 1; i < arr.length; i++) {
    // 下一个要插入的元素
    const nextInsertVal = arr[i];
    let j = i - 1;
    // 已有序的元素个数
    for (j; j >= 0; j--) {
      // 已排序的元素小于插入的元素，跳出循环
      if (arr[j] <= nextInsertVal) {
        break;
      }
      // 已排序的元素大于插入的元素，元素后移
      if (arr[j] > nextInsertVal) {
        arr[j + 1] = arr[j];
        count++;
      }
    }
    // 插入元素
    arr[j + 1] = nextInsertVal;
  }
  console.log('交换次数:', count);
  return arr;
}

// test
console.log('原始数据 [9, 8, 7, 6, 5, 4, 3, 2, 1]');
console.log('结果: ', insertionSort([9, 8, 7, 6, 5, 4, 3, 2, 1]));
// 交换次数: 36
console.log();

// test
console.log('原始数据 [1, 2, 3, 4, 5, 6, 7, 8, 9]');
console.log('结果: ', insertionSort([1, 2, 3, 4, 5, 6, 7, 8, 9]));
// 交换次数: 36
console.log();

console.log('原始数据 [1, 4, 3, 2, 9, 6, 7, 5, 8]');
console.log('结果: ', insertionSort([1, 4, 3, 2, 9, 6, 7, 5, 8]));
// 交换次数: 9
console.log();
