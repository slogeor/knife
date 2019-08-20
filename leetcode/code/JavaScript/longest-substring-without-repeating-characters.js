/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (!s) return 0;
  if (s.length === 1) return 1;

  var map = new Map();

  var subLen = 0;
  // 记录当前指针的位置
  var pos = 0;

  for (var i = 0; i < s.length; i++) {
    var temp = s[i];
    if (map.has(temp)) {
      // 元素出现位置
      var index = map.get(temp);
      // 元素出现位置 >= 记录当前指针的位置
      if (index >= pos) {
        map.delete(temp);
        if (i - pos > subLen) {
          subLen = i - pos;
        }
        // 指向下一个位置
        pos = index + 1;
      }
    }
    // 存放元素
    map.set(temp, i);
  }

  if (s.length- pos > subLen) {
    subLen = s.length - pos;
  }

  return subLen;
}
