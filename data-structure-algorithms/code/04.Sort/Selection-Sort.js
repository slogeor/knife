/**
 * @description 选择排序
 * @param {Array} arr
 * @returns {Array} arr;
 */
function selectionSort(arr = []) {
  // 边界判断
  if (arr.length < 2) {
    return arr;
  }

  // 记录交换次数
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    let minPos = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[minPos] > arr[j + 1]) {
        minPos = j + 1;
      }
    }

    if (minPos !== i) {
      count ++;
      const temp = arr[i];
      arr[i] = arr[minPos];
      arr[minPos] = temp;
    }
  }
  console.log('交换次数:', count);
  return arr;
}

// test
console.log('原始数据 [9, 8, 7, 6, 5, 4, 3, 2, 1]');
console.log('结果: ', selectionSort([9, 8, 7, 6, 5, 4, 3, 2, 1]));
// 交换次数: 36
console.log();

console.log('原始数据 [1, 2, 3, 4, 5, 6, 7, 8, 9]');
console.log('结果: ', selectionSort([1, 2, 3, 4, 5, 6, 7, 8, 9]));
// 交换次数: 0
console.log();

console.log('原始数据 [1, 4, 3, 2, 9, 6, 7, 5, 8]');
console.log('结果: ', selectionSort([1, 4, 3, 2, 9, 6, 7, 5, 8]));
// 交换次数: 9
console.log();


