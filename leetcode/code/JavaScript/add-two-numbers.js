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
var addTwoNumbers = function (l1, l2) {
  var bit = 0;
  var head = new ListNode('-1');
  var currentNode = head;

  while (l1 && l2) {
    var l1Val = l1.val;
    var l2Val = l2.val;

    l1 = l1.next;
    l2 = l2.next;

    var sum = l1Val + l2Val + bit;
    bit = Math.floor(sum / 10);

    currentNode.next = new ListNode(sum % 10);
    currentNode = currentNode.next;
  }

  while (l1) {
    var l1Val = l1.val;
    l1 = l1.next;

    var sum = l1Val + bit;
    bit = Math.floor(sum / 10);

    currentNode.next = new ListNode(sum % 10);
    currentNode = currentNode.next;
  }

  while (l2) {
    var l2Val = l2.val;
    l2 = l2.next;

    var sum = l2Val + bit;
    bit = Math.floor(sum / 10);

    currentNode.next = new ListNode(sum % 10);
    currentNode = currentNode.next;
  }

  if (bit > 0) {
    currentNode.next = new ListNode(bit);
  }
  return head.next;
};
