/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  // 定义括号的模式
  var PATTERN = {
    '{' : '}',
    '[' : ']',
    '(' : ')'
  };

  // 定义栈数组
  var stack = [];

  // 空判断
  if (!s) return true;

  // 初始化，将第一个字符压入栈
  stack[0] = s[0];

  for (var i = 1; i < s.length; i++) {
    var temp = s[i];
    if (PATTERN[stack[stack.length - 1]] === temp) {
      // 匹配，出栈
      stack.pop();
    } else {
      // 不正确的模式
      if (temp === '}' || temp === ')' || temp === ']') {
        return false;
      }
      // 压栈
      stack.push(temp);
    }
  }
  return !stack.length;
};
