/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// hash 解法
var hasCycle = function (head) {
  const nodeMap = new Map();
  while (head) {
    if (nodeMap.get(head)) return true;
    nodeMap.set(head, 1)
    head = head.next;
  }
  return false;
};

// 双指针解法: 慢指针和快指针
var hasCycle = function (head) {
  // 边界条件的判断: 空链表和只有一个结点的链表
  if (!head || !head.next) return false;

  // 慢指针，一次走一步
  var slow = head;
  // 快指针，一次走两步
  var fast = head.next;

  while (slow && fast) {
    if (slow === fast) return true;
    if (!fast.next) return false;
    slow = slow.next;
    fast = fast.next.next;
  }
  return false;
};
