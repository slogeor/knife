/**
 * @description 二分查找之遍历法
 * @param {Array} arr
 * @param {number} target
 * @returns {number}
 */
function binarySearch(arr = [], target) {
  // 异常
  if (arr.length === 0) return -1;

  var low = 0;
  var high = arr.length - 1;

  while (low <= high) {
    var mid = Math.floor((low + high) / 2);
    if (arr[mid] < target) {
      low = mid + 1;
    } else if (arr[mid] > target) {
      high = mid - 1;
    } else if (arr[mid] === target) {
      return mid;
    }
  }
  return -1;
}

/**
 * 二分查找之递归法
 * @param {Array} arr
 * @param {number} target
 * @param {number} low
 * @param {number} high
 * @returns {number}
 */
function binarySearch2(arr = [], target, low, high) {
  if (arr.length === 0) return -1;
  var mid = Math.floor((low + high) / 2);

  // 递归结束条件
  if (low > high) return - 1;

  if (arr[mid] < target) {
    low = mid + 1;
  } else if (arr[mid] > target) {
    high = mid - 1;
  } else if (arr[mid] === target) {
    return mid;
  }
  return binarySearch2(arr, target, low, high);
}
