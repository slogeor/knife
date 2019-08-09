/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

 /**
  * 方案1: 两次遍历算法
  * 假设链表长度为 m，倒数第 n 个结点可以转化为正序第 m - n + 1 个结点，找到第 m - n 位置的结点
  * step1: 先遍历链表，计算出链表的长度
  * step2: 继续遍历链表，找到链表第 m - n 个结点
  * step3: 修改第 m - n 个结点的后继指针
  */
var removeNthFromEnd = function (head, n) {
  var preHead = new ListNode('head');
  preHead.next = head;
  var fast = preHead;
  var slow = preHead;
  var m = 0;
  // 计算链表的长度
  while (fast.next) {
    fast = fast.next;
    m++;
  }
  var current = m - n;
  while (current > 0) {
    slow = slow.next;
    current--;
  }
  slow.next = slow.next.next;
  return preHead.next;
};

/**
 * 方案2: 一次遍历算法
 * 假设链表长度为 m，倒数第 n 个结点可以转化为正序第 m - n + 1 个结点，找到第 m - n 位置的节点
 * step1: 移动 fast 指针，先移到到第 n 个节点，
 * step2: 移动 fast 和 slow，fast 移到到尾结点时，slow 刚好移动了 m - n 次
 * step3: 修改第 m - n 个结点的后继指针
 */
var removeNthFromEnd = function (head, n) {
  var preHead = new ListNode('head');
  preHead.next = head;
  var fast = preHead;
  var slow = preHead;
  for (var i = 0; i < n; i++) {
    fast = fast.next;
  }
  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return preHead.next;
};
