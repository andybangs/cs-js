'use strict';

class Stack {
  constructor() {
    this.top = null;
    this.count = 0;
  }

  size() {
    return this.count;
  }

  isEmpty() {
    return this.count === 0;
  }

  push(val) {
    if (!val) {
      return;
    }

    const newItem = { val: val, next: null };

    newItem.next = this.top;
    this.top = newItem;
    this.count++;
  }

  pop() {
    if (this.count === 0) {
      return null;
    }

    const outItem = this.top;

    this.top = outItem.next;
    this.count--;

    return outItem.val;
  }

  peek() {
    if (this.count === 0) {
      return null;
    }

    return this.top.val;
  }

  displayAll() {
    const arr = [];
    let currentItem = this.top;

    while (currentItem.next) {
      arr.push(currentItem.val);
      currentItem = currentItem.next;
    }

    arr.push(currentItem.val);

    return arr;
  }
}

module.exports = Stack;
