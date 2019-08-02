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
class CycleLinkList {
  constructor() {
    // 头结点
    this.head = new Node();
    // 指向当前链表最后一个节点
    this.point = new Node();
    // 尾结点指向头结点
    this.point.next = this.head;
  }

  /**
   * @description 在链表尾部出入一个结点
   * @param value 数据
   */
  add(value) {
    // 声明一个新结点，设置传入的数据
    const node = new Node(value, null);
    node.next = this.head;
    // 头结点的 next 指向这个结点
    if (!this.head.next) {
      this.head.next = node;
    }
    // 指针往下移动，指向新结点
    this.point.next = node;
    this.point = node;
  }

  /**
   * 删除元素 x
   * @param  x
   * @param {List} list 对象
   */
  delete(x) {
    let point = this.findPrevious(x);
    let temp = null;
    if (!point) return -1;
    temp = point.next;
    point.next = temp.next;
    temp = null;
  }

  /**
   * @description 判断链表是否为空
   * @param {List} list 链表对象
   */
  isEmpty() {
    return this.point.next === this.head;
  }

  /**
   * @description 清空链表
   *  @param {List} list 链表对象
   */
  clear() {
    let head = this.head;
    let point = null;
    while (head.next && head.next !== this.head) {
      point = head;
      head = point.next;
      point = null;
    }
    this.head = new Node(0, null);
    this.point = new Node(0, null);
    // 尾结点指向头结点
    this.point.next = this.head;
  }

  /**
   * @description 查询元素 X 的位置
   * @param {*} x
   * @param {*} list
   */
  find(x) {
    let head = this.head;
    let point = null;
    while (head.next && head.next !== this.head) {
      point = head.next;
      if (point.value === x) {
        return point;
      }
      head = point;
    }
    return null;
  }

  /**
   * @description 查询元素x的前驱结点
   * @param x 元素的值
   * @param {List} list 链表对象
   */
  findPrevious(x) {
    let head = this.head;
    let point = null;
    // 与单链表的区别 head.next !== this.head)
    while (head.next && head.next !== this.head) {
      point = head.next;
      if (point.next && point.next.value === x) {
        return point;
      }
      head = point;
    }
    return null;
  }

  /**
   * @description 插入结点
   * @param {*} x  插入的元素
   * @param {*} pos 位置
   */
  insert(x, pos) {
    let point = this.findPrevious(pos);
    // 找不到，插入最后
    if (!point) {
      this.add(x);
      return;
    }
    // 创建结点
    const node = new Node(x, null);
    node.next = this.head;
    const nextNode = point.next;
    node.next = nextNode;
    point.next = node;
  }
}

/**
 * 测试用例
 */
(function () {
  function printList(list, debug) {
    if (!debug) return;
    let head = list.head;
    let point;
    while (head.next && head.next !== list.head) {
      point = head.next;
      console.log(point.value);
      head = point;
    }
  }

  function printPointer(point, debug) {
    if (!debug) return;
    if (!point) {
      console.log('没找到');
      return;
    }
    console.log('元素：', point.value);
    console.log('指针：', point.next);
  }

  const list = new CycleLinkList();
  let p = null;
  console.log('-----------判断是否为空-----------:', list.isEmpty());
  console.log('');
  console.log('-----------创建循环链表----------');
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
  console.log('----------查找元素11----------');
  p = list.find(11);
  printPointer(p, true);
  console.log('');
  console.log('----------删除元素2----------');
  p = list.delete(2);
  printList(list, true);
  console.log('');
  list.add(4);
  list.add(5);
  console.log('----------追加2个结点: 4、5----------');
  console.log('');
  printList(list, true);
  console.log('-----------链表的头结点-----------');
  console.log(list.head);
  console.log('');
  console.log('-----------链表的未结点是否等于头结点：', list.point.next === list.head);
  console.log('');
  console.log('-----------判断是否为空-----------:', list.isEmpty());
  console.log('');
  console.log('在元素3前面插入元素2');
  list.insert(2, 3);
  printList(list, true);
  console.log('');
  console.log('在元素8前面插入元素10');
  list.insert(8, 10);
  printList(list, true);
  console.log('');
  console.log('-----------链表的头结点-----------');
  console.log(list.head);
  console.log('');
  console.log('-----------链表当前指针-----------');
  console.log(list.point);
  console.log('');
  console.log('-----------清空链表-----------');
  list.clear();
  console.log('-----------链表的头结点-----------');
  console.log(list.head);
  console.log('-----------链表当前指针-----------');
  console.log(list.point);
  printList(list, true);
}());
