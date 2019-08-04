### 单链表
#### 思路
- 构造两个类: Node 和 SinglyLinkedList
- Node 类只有两个属性: element 和 next，element 存放结点的值，next 指向下一个结点
- SinglyLinkedList 类只有一个属性: head 结点，指向链表的头结点
- SinglyLinkedList 类有三个核心操作: 插入(insert、append)、查询(remove)、删除(findByValue、findByIndex、findPrevious)
- 单链表遍历的条件: currentNode.next !== null 或者 currentNode !== null

#### 代码实现
- [单链表代码实现](./SinglyLinkedList.js)

### 循环链表
#### 与单链表的差异
- 主要区别: 循环链表最后一个结点的 next 指向了头结点 this.head
- 初始化: 单链表是 this.head.next = null; 循环链表是 this.head.next = this.head;
- 链表遍历的条件: 单链表是 currentNode.next !== null 或者 currentNode !== null; 循环链表是  currentNode.next !== this.head 或者 currentNode !== this.head;

#### 代码实现
- [循环链表代码实现](./CircularLinkList.js)

#### 双向链表
#### 与单链表的差异
- 主要区别: 双向链表的每个节点都有两个指向，next 指向下一个结点，previous 指向前一个结点
- Node 类: 单链表只有 element 和 next；双向链表有 element、next 和 previous
- 插入和删除操作: 单链表只需更新 next 指针；双向链表需要更新 next 和 previous 指针

#### 代码实现
- [双向链表代码实现](./DoublyLinkedList.js)
