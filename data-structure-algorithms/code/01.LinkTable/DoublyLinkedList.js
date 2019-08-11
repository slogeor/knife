/**
 * @description 结点对象
 * @param element {int} 存储的数据
 */
class Node {
  constructor(element) {
    this.element = element;
    // 下一个结点
    this.next = null;
    // 上一个结点
    this.previous = null;
  }
}

/**
 * @description 双向链表的插入、删除、查找操作，链表中存储的是 int 类型的数据
 */
class DoublyLinkedList {
  constructor() {
    // 头结点
    this.head = new Node('head');
  }

  /**
   * @description 查询数据 element 的位置
   * @param {int} element 结点的值
   * @returns {Node} node
   */
  findByValue(element) {
    let currentNode = this.head.next;
    while (currentNode && currentNode.element !== element) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  /**
   * @description 查找第 index 位置的结点，索引从 0 开始
   * @param {int} index 位置
   * @returns {Node} node
   */
  findByIndex(index) {
    let currentNode = this.head.next;
    let pos = 0;
    while (currentNode && pos !== index) {
      pos++;
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  /**
   * @description 向链表尾追加一个结点
   * @param {int} element 数据
   */
  append(element) {
    const newNode = new Node(element);
    let currentNode = this.head;
    // 查找最后一个结点
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    newNode.previous = currentNode;
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
    newNode.previous = currentNode;
    currentNode.next = newNode;
    if (newNode.next) {
      newNode.next.previous = newNode;
    }
  }

  /**
   * @description 查询指定元素的前驱结点
   * @param {int} element 元素的值
   * @returns {Node} node
   */
  findPrevious(element) {
    let currentNode = this.head;
    while (currentNode.next && currentNode.next.element !== element) {
      currentNode = currentNode.next;
    }
    return currentNode.next ? currentNode : null;
  }

  /**
   * @description 删除指定值的结点
   * @param {int} element
   */
  remove(element) {
    const currentNode = this.findByValue(element);
    if (!currentNode) return;
    // 核心代码
    currentNode.previous.next = currentNode.next;
    currentNode.next.previous = currentNode.previous;
    currentNode.next = null;
    currentNode.previous = null;
  }

  /**
   * @description 判断链表是否为空
   * @returns Boolean
   */
  isEmpty() {
    return this.head.next === null;
  }

  /**
   * @description 打印单链表
   */
  printList() {
    // 忽略头指针的值
    let currentNode = this.head.next;
    while (currentNode) {
      console.log(currentNode.element);
      currentNode = currentNode.next;
    }
  }

  printReversedList(len) {
    // 忽略头指针的值
    let currentNode = this.findByIndex(2);
    while (currentNode !== this.head) {
      console.log(currentNode.element);
      currentNode = currentNode.previous;
    }
  }
}

/**
 * 测试用例
 */
(function () {
  const doublyList = new DoublyLinkedList();
  console.log('-------------test: append------------');
  doublyList.append(10);
  doublyList.append(20);
  doublyList.append(30);
  doublyList.printList(); // 10, 20, 30
  console.log('-------------test: insert------------');
  doublyList.insert(11, 10);
  doublyList.insert(31, 30);
  doublyList.insert(41, 40);
  doublyList.printList(); // 10, 11, 20, 30, 31
  console.log('-------------test: remove------------');
  doublyList.remove(11);
  doublyList.remove(30);
  doublyList.printList(); // 10, 20, 31
  console.log('-------------test: 逆序打印链表------------');
  doublyList.printReversedList(2); // 31, 20, 10
  console.log('-------------test: findByValue------------');
  const p = doublyList.findByValue(10);
  console.log(p.element); // 10
  console.log('10 的下一个元素：', p.next.element); // 20
  console.log('10 的前一个元素：', p.previous.element); // 10
  console.log('-------------test: findByValue------------');
  const p1 = doublyList.findByIndex(2);
  console.log(p1.element); // 31
  console.log('第二个位置的下一个元素：', p1.next); // null
  console.log('第二个位置的前一个元素：', p1.previous.element); // 20
  console.log('-------------test: findPrevious------------');
  const p2 = doublyList.findPrevious(31);
  console.log(p2.element); // 20
}());
