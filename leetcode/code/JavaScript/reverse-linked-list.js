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
    // 暂存当前结点
    var tempNode = currentNode;
    // 指向下一个结点
    currentNode = currentNode.next;
    // 修改当前结点的 next 指针
    tempNode.next = newHead;
    newHead = tempNode;
  }
  // 返回新的 head
  return newHead;
};
