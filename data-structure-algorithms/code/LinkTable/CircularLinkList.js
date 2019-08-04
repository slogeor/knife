/**
 * @description 结点对象
 * @param element {int} 存储的数据
 */
class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

/**
 * @description 循环链表的插入、删除、查找操作，链表中存储的是 int 类型的数据
 */
class CircularLinkList {
  constructor() {
    this.head = new Node('head');
    // 与单链表的区别
    this.head.next = this.head;
  }

  /**
   * @description 查询数据 element 的位置
   * @param {int} element 结点的值
   * @returns {Node} node
   */
  findByValue(element) {
    let currentNode = this.head.next;
    // 单链表的判断: currentNode !== null
    // 循环链表的判断: currentNode !== this.head
    while (currentNode !== this.head && currentNode.element !== element) {
      currentNode = currentNode.next;
    }
    return currentNode === this.head ? null : currentNode;
  }

  /**
   * @description 查找第 index 位置的结点，索引从 0 开始
   * @param {int} index 位置
   * @returns {Node} node
   */
  findByIndex(index) {
    let currentNode = this.head.next;
    let pos = 0;
    // 单链表的判断: currentNode !== null
    // 循环链表的判断: currentNode !== this.head
    while (currentNode !== this.head && pos !== index) {
      pos++;
      currentNode = currentNode.next;
    }
    return currentNode === this.head ? null : currentNode;
  }

  /**
   * @description 向链表尾追加一个结点
   * @param {int} element 数据
   */
  append(element) {
    const newNode = new Node(element);
    // 与单链表的区别: newNode.next = this.head;
    newNode.next = this.head;

    let currentNode = this.head;
    // 查找最后一个结点
    // 单链表的判断: currentNode.next !== null
    // 循环链表的判断: currentNode.next !== this.head
    while (currentNode.next !== this.head) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
  }

  /**
   * @description 指定元素向后插入
   * @param {int} newElement 插入的元素
   * @param {int} element  插入元素的下个结点元素
   */
  insert(newElement, element) {
    const currentNode = this.findByValue(element);
    // 不存在，直接返回
    if (!currentNode) return;
    // 核心代码
    const newNode = new Node(newElement);
    newNode.next = currentNode.next;
    currentNode.next = newNode;
  }

  /**
   * @description 查询指定元素的前驱结点
   * @param {int} element 元素的值
   * @returns {Node} node
   */
  findPrevious(element) {
    let currentNode = this.head;
    // 单链表的判断: currentNode.next !== null
    // 循环链表的判断: currentNode.next !== this.head
    while (currentNode.next !== this.head && currentNode.next.element !== element) {
      currentNode = currentNode.next;
    }
    return currentNode.next !== this.head ? currentNode : null;
  }

  /**
   * @description 删除指定值的结点
   * @param {int} element
   */
  remove(element) {
    const prevNode = this.findPrevious(element);
    if (!prevNode) return;
    // 核心代码
    prevNode.next = prevNode.next.next;
  }

  /**
   * @description 判断链表是否为空
   * @returns Boolean
   */
  isEmpty() {
    return this.head.next === this.head;
  }

  /**
   * @description 打印单链表
   */
  printList() {
    // 忽略头指针的值
    let currentNode = this.head.next;
    // 单链表的判断: currentNode !== null
    // 循环链表的判断: currentNode !== this.head
    while (currentNode !== this.head) {
      console.log(currentNode.element);
      currentNode = currentNode.next;
    }
  }
}

/**
 * 测试用例
 */
(function () {
  const circularList = new CircularLinkList();
  console.log('-------------test: append------------');
  circularList.append(10);
  circularList.append(20);
  circularList.append(30);
  circularList.printList(); // 10, 20, 30
  console.log('-------------test: insert------------');
  circularList.insert(11, 10);
  circularList.insert(31, 30);
  circularList.insert(41, 40);
  circularList.printList(); // 10, 11, 20, 30, 31
  console.log('-------------test: remove------------');
  circularList.remove(11);
  circularList.remove(30);
  circularList.printList(); // 10, 20, 31
  console.log('-------------test: findByValue------------');
  const p = circularList.findByValue(10);
  console.log(p.element); // 10
  console.log('-------------test: findByValue------------');
  const p1 = circularList.findByIndex(2);
  console.log(p1.element); // 31
  console.log('-------------test: findPrevious------------');
  const p2 = circularList.findPrevious(31);
  console.log(p2.element); // 20
}());
