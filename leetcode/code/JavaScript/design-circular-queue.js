/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
var MyCircularQueue = function (k) {
  this.queue = [];
  this.size = k + 1;
  this.head = 0;
  this.tail = 0;
};

/**
 * Insert an element into the circular queue. Return true if the operation is successful.
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
  // 队满
  if ((this.tail + 1) % this.size === this.head) return false;
  // 存放元素
  this.queue[(this.tail % this.size)] = value;
  // 移动队尾指针，指向下一个空位置
  this.tail = (this.tail + 1) % this.size;
  return true;
};

/**
 * Delete an element from the circular queue. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
  // 队空
  if (this.head === this.tail) return false;
  // 移动头指针
  this.head = (this.head + 1) % this.size;
  return true;
};

/**
 * Get the front item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
  // 队空
  if (this.head === this.tail) return -1;
  // 返回头指针指向的元素
  return this.queue[this.head % this.size];
};

/**
 * Get the last item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
  // 对空
  if (this.head === this.tail) return -1;
  // 访问队尾上一个结点
  return this.queue[(this.size + this.tail - 1) % this.size];
};

/**
 * Checks whether the circular queue is empty or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
  return this.head === this.tail;
};

/**
 * Checks whether the circular queue is full or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
  return (this.tail + 1) % this.size === this.head;
};
