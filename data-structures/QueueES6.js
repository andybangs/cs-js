'use strict';

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.count = 0;
  }

  size() {
    return this.count;
  }

  isEmpty() {
    return this.count === 0;
  }

  enqueue(val) {
    if (!val) {
      return;
    }

    const newItem = { val: val, next: null };

    if (!this.head) {
      this.head = newItem;
    } else {
      this.tail.next = newItem;
    }

    this.tail = newItem;
    this.count++;
  }

  dequeue() {
    if (this.count === 0) {
      return null;
    }

    const outItem = this.head;

    this.head = outItem.next;
    this.count--;

    return outItem.val;
  }

  peek() {
    if (this.count === 0) {
      return null;
    }

    return this.head.val;
  }

  peekAt(index = 0) {
    if (index < 0 || index >= this.count) {
      return null;
    }

    let currentItem = this.head;

    for (let i = 0; i < index; i++) {
      currentItem = currentItem.next;
    }

    return currentItem.val;
  }

  displayAll() {
    const arr = [];
    let currentItem = this.head;

    for (let i = 0; i < this.count; i++) {
      arr.push(currentItem.val);
      currentItem = currentItem.next;
    }

    return arr;
  }
}

module.exports = Queue;
