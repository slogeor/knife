/**
 * @description 结点对象
 * @param value 数据
 * @param  next 指针
 */
class Node {
  constructor(value = 0, next = null) {
    this.value = value;
    this.next = next;
  }
}

/**
 * @description 单链表
 */
class LinkList {
  constructor() {
    // 头结点
    this.header = new Node();
    // 指向当前链表最后一个节点
    this.pointer = new Node();
  }

  /**
   * @description 在链表尾部出入一个结点
   * @param value 数据
   */
  add(value) {
    // 声明一个新结点，设置传入的数据
    const node = new Node(value, null);
    // 头结点的 next 指向这个结点
    if (!this.header.next) {
      this.header.next = node;
    }
    // 指针往下移动，指向新结点
    this.pointer.next = node;
    this.pointer = node;
  }

  /**
   * 删除元素 x
   * @param  x
   * @param {List} list 对象
   */
  delete(x) {
    let pointer = this.findPrevious(x);
    let temp = null;
    if (!pointer) return -1;
    temp = pointer.next;
    pointer.next = temp.next;
    temp = null;
  }

  /**
   * @description 判断链表是否为空
   * @param {List} list 链表对象
   */
  isEmpty() {
    return this.header.next === null;
  }

  /**
   * @description 清空链表
   *  @param {List} list 链表对象
   */
  clear() {
    let header = this.header;
    let pointer = null;
    while (header.next) {
      pointer = header;
      header = pointer.next;
      pointer = null;
    }
    this.header = new Node(0, null);
    this.pointer = new Node(0, null);
  }

  /**
   * @description 查询元素 X 的位置
   * @param {*} x
   * @param {*} list
   */
  find(x) {
    let header = this.header;
    let pointer = null;
    while (header.next) {
      pointer = header.next;
      if (pointer.value === x) {
        return pointer;
      }
      header = pointer;
    }
    return null;
  }

  /**
   * @description 查询元素x的前驱结点
   * @param x 元素的值
   * @param {List} list 链表对象
   */
  findPrevious(x) {
    let header = this.header;
    let pointer = null;
    while (header.next) {
      pointer = header.next;
      if (pointer.next && pointer.next.value === x) {
        return pointer;
      }
      header = pointer;
    }
    return null;
  }

  /**
   * @description 插入结点
   * @param {*} x  插入的元素
   * @param {*} value  插入元素的下个结点元素
   */
  insert(x, value) {
    let pointer = this.findPrevious(value);
    console.log('pointer:', pointer)
    // 找不到，插入最后
    if (!pointer) {
      this.add(x);
      return;
    }
    // 创建结点
    const node = new Node(x, null);
    const nextNode = pointer.next;
    node.next = nextNode;
    pointer.next = node;
  }
}

/**
 * 测试用例
 */
(function () {
  function printList(list, debug) {
    if (!debug) return;
    let header = list.header;
    let pointer;
    while (header.next) {
      pointer = header.next;
      console.log(pointer.value);
      header = pointer;
    }
  }

  function printPointer(pointer, debug) {
    if (!debug) return;
    console.log('元素：', pointer.value);
    console.log('指针：', pointer.next);
  }

  const list = new LinkList();
  let p = null;
  console.log('-----------判断是否为空-----------:', list.isEmpty());
  console.log('');
  console.log('-----------创建单链表----------');
  console.log(list);
  console.log('');
  list.add(1);
  list.add(2);
  list.add(3);
  console.log('----------追加3个结点: 1、2、3----------');
  printList(list, true);
  console.log('');
  console.log('----------查找元素2的前驱----------');
  p = list.findPrevious(2);
  printPointer(p, true);
  console.log('');
  console.log('----------查找元素2----------');
  p = list.find(2);
  printPointer(p, true);
  console.log('');
  console.log('----------删除元素2----------');
  p = list.delete(2);
  printList(list, true);
  console.log('');
  list.add(4);
  list.add(5);
  console.log('----------追加2个结点: 1、2、3----------');
  console.log('');
  printList(list, true);
  console.log('-----------链表的头结点-----------');
  console.log(list.header);
  console.log('');
  console.log('-----------判断是否为空-----------:', list.isEmpty());
  console.log('');
  console.log('在元素3前面插入元素2');
  list.insert(2, 3);
  printList(list, true);
  console.log('');
  console.log('在元素1前面插入元素10');
  list.insert(8, 10);
  printList(list, true);
  console.log('');
  console.log('-----------链表的头结点-----------');
  console.log(list.header);
  console.log('');
  console.log('-----------链表当前指针-----------');
  console.log(list.pointer);
  console.log('');
  console.log('-----------清空链表-----------');
  list.clear();
  console.log('-----------链表的头结点-----------');
  console.log(list.header);
  console.log('-----------链表当前指针-----------');
  console.log(list.pointer);
  printList(list, true);
}());
