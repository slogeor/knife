### 单链表

#### 思路
- 构造两个类: Node 和 SingleLinkedList
- Node 类只有两个属性: element 和 next，element 存放结点的值，next 指向下一个结点
- SingleLinkedList 类只有一个属性: head 结点，指向链表的头结点
- SingleLinkedList 类有三个核心操作: 插入(insert、append)、查询(remove)、删除(findByValue、findByIndex、findPrevious)
- 单链表遍历的条件: currentNode.next !== null

#### 代码实现
- [单链表代码实现](./SingleLinkedList.js)

