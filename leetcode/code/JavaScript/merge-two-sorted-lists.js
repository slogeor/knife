/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// 方案1: 迭代法，设置头结点为哨兵
var mergeTwoLists = function (l1, l2) {
  // 利用哨兵简化操作
  var head = new ListNode('head');
  var preNode = head;
  while (l1 && l2) {
    if (l1.val > l2.val) {
      preNode.next = l2;
      l2 = l2.next;
    } else {
      preNode.next = l1;
      l1 = l1.next;
    }
    preNode = preNode.next;
  }

  preNode.next = !l2 ? l1 : l2;
  return head.next;
};

// 方案2: 递归
var mergeTwoLists = function (l1, l2) {
  if (l1 == null) return l2;
  if (l2 == null) return l1;
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
}
