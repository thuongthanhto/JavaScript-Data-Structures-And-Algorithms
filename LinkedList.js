class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    // The first node is called the head
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Set the current tail's next node to the new node
      this.tail.next = newNode;
      // Set the tail to the new node
      this.tail = newNode;
    }
    this.length++;

    return this;
  }

  pop() {
    if (!this.head) return undefined;

    let temp = this.head;
    let pre = this.head;

    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }

    this.tail = pre;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return temp;
  }

  unshift(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      // Set the new node's next to the current head
      newNode.next = this.head;
      // Set the head to the new node
      this.head = newNode;
    }
    this.length++;

    return this;
  }

  shift() {
    if (!this.head) return undefined;

    let temp = this.head;
    this.head = this.head.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }
    temp.next = null;

    return temp;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;

    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }

    return temp;
  }

  set(index, value) {
    let temp = this.get(index);

    if (temp) {
      temp.value = value;
      return true;
    }

    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;

    if (index === this.length) return !!this.push(value);

    if (index === 0) return !!this.unshift(value);

    let newNode = new Node(value);
    let pre = this.get(index - 1);
    let temp = pre.next;

    pre.next = newNode;
    newNode.next = temp;
    this.length++;

    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;

    if (index === this.length - 1) return this.pop();

    if (index === 0) return this.shift();

    let pre = this.get(index - 1);
    let temp = pre.next;

    pre.next = temp.next;
    temp.next = null;
    this.length--;

    return temp;
  }

  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;

    let next = temp.next;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      // Set the next node to be the current node's next
      next = temp.next;
      // Set the current node'
      temp.next = prev;
      // Set the previous node to be the current node
      prev = temp;
      // Set the current node to be the next node
      temp = next;
    }

    return this;
  }
}

let myLinkList = new LinkedList(0);
myLinkList.push(1);
myLinkList.push(2);
myLinkList.push(3);
