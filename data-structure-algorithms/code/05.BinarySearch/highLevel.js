/**
 * @description 查找第一个值等于给定值的元素
 * @param {Array} arr
 * @param {number} target
 * @returns {number}
 */

function binarySearch1(arr = [], target) {
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
      // 分支1: 第一个元素
      if (mid === 0) return mid;
      // 分支2: 前一个元素不等于 target
      if (arr[mid - 1] !== target) {
        return mid;
      } else {
        high = mid - 1;
      }
    }
  }
  return -1;
}
// binarySearch1([1,2,3,5,5,6,7,8,9], 5); // 3


/**
 * @description 查找最后一个值等于给定值的元素
 * @param {Array} arr
 * @param {number} target
 * @returns {number}
 */

function binarySearch2(arr = [], target) {
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
      // 分支1: 最后一个元素
      if (mid === high) return mid;
      // 分支2: 前一个元素不等于 target
      if (arr[mid + 1] !== target) {
        return mid;
      } else {
        low = mid + 1;
      }
    }
  }
  return -1;
}

// binarySearch2([1,2,3,4,5,5,5,8,9], 5); // 6


/**
 * @description 查找第一个大于等于给定值的元素
 * @param {Array} arr
 * @param {number} target
 * @returns {number}
 */

function binarySearch3(arr = [], target) {
  // 异常
  if (arr.length === 0) return -1;

  var low = 0;
  var high = arr.length - 1;

  while (low <= high) {
    var mid = Math.floor((low + high) / 2);
    if (arr[mid] >= target) {
      if (mid === arr.length - 1) return mid;
      if (arr[mid - 1] < target) {
        return mid;
      } else {
        high = mid - 1;
      }
    } else {
      low = mid + 1;
    }
  }
  return -1;
}

// binarySearch3([1,2,3,4,5,5,5,8,9], 6) // 7;
// binarySearch3([1,2,3,4,5,5,5,8,9], 5); // 4


/**
 * @description 查找最后一个小于等于给定值的元素
 * @param {Array} arr
 * @param {number} target
 * @returns {number}
 */

function binarySearch4(arr = [], target) {
  // 异常
  if (arr.length === 0) return -1;

  var low = 0;
  var high = arr.length - 1;

  while (low <= high) {
    var mid = Math.floor((low + high) / 2);
    if (arr[mid] <= target) {
      if (mid === arr.length - 1) return mid;
      if (arr[mid + 1] > target) {
        return mid;
      } else {
        low = mid + 1;
      }
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

// binarySearch4([1,2,3,4,5,5,5,8,9], 9) // 8;
// binarySearch4([1,2,3,4,5,5,5,8,9], 5); // 6
