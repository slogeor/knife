/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  var currentNode = head;
  var newHead = null;
  // 遍历链表
  while(currentNode) {
    var tempNode = currentNode;
    currentNode = currentNode.next;

    tempNode.next = newHead;
    newHead = tempNode;
  }
  return newHead;
};
