/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.helper = [];
  this.stack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.stack.push(x);
  var len = this.helper.length;

  if (len === 0 || this.helper[len - 1] > x) {
    this.helper.push(x);
  } else {
    this.helper.push(this.helper[len - 1]);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  if (this.stack.length === 0) return -1;
  this.stack.pop();
  this.helper.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  if (this.stack.length === 0) return -1;
  return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  console.log(this.helper.length )
  if (this.helper.length === 0) return -1;
  return this.helper[this.helper.length - 1];
};
