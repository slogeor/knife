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
 * @description 单链表的插入、删除、查找操作，链表中存储的是 int 类型的数据
 */
class SinglyLinkedList {
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
}

/**
 * 测试用例
 */
(function () {
  const singlyList = new SinglyLinkedList();
  console.log('-------------test: append------------');
  singlyList.append(10);
  singlyList.append(20);
  singlyList.append(30);
  singlyList.printList(); // 10, 20, 30
  console.log('-------------test: insert------------');
  singlyList.insert(11, 10);
  singlyList.insert(31, 30);
  singlyList.insert(41, 40);
  singlyList.printList(); // 10, 11, 20, 30, 31
  console.log('-------------test: remove------------');
  singlyList.remove(11);
  singlyList.remove(30);
  singlyList.printList(); // 10, 20, 31
  console.log('-------------test: findByValue------------');
  const p = singlyList.findByValue(10);
  console.log(p.element); // 10
  console.log('-------------test: findByValue------------');
  const p1 = singlyList.findByIndex(2);
  console.log(p1.element); // 31
  console.log('-------------test: findPrevious------------');
  const p2 = singlyList.findPrevious(31);
  console.log(p2.element); // 20
}());
