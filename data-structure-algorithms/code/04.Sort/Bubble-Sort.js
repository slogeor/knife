/**
 * @description 冒泡排序
 * @param {Array} arr
 * @returns {Array} res
 */
function bubbleSort(arr = []) {
  // 空判断
  if (arr.length < 1) return arr;

  const len = arr.length;
  let count = 0;

  for (let i = 0; i < len; i++) {
    // 记录是否有交互
    let hasChange = false;
    for (let j = 0; j < len - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1]
        arr[j + 1] = temp;
        // 记录交换次数
        count++;
        hasChange = true;
      }
    }
    // 没有发生交换，说明已有序
    if (!hasChange) {
      break;
    }
  }
  console.log('交换次数: ', count);
  return arr;
}

// test
console.log('原始数据 [9, 8, 7, 6, 5, 4, 3, 2, 1]');
console.log('结果: ', bubbleSort([9, 8, 7, 6, 5, 4, 3, 2, 1]));
// 交换次数: 36
console.log();

console.log('原始数据 [1, 2, 3, 4, 5, 6, 7, 8, 9]');
console.log('结果: ', bubbleSort([1, 2, 3, 4, 5, 6, 7, 8, 9]));
// 交换次数: 0
console.log();

console.log('原始数据 [1, 4, 3, 2, 9, 6, 7, 5, 8]');
console.log('结果: ', bubbleSort([1, 4, 3, 2, 9, 6, 7, 5, 8]));
// 交换次数: 9
console.log();
