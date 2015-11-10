'use strict';

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  size() {
    return this.length;
  }

  isEmpty() {
    return this.length === 0;
  }

  head() {
    if (!this.head) {
      return null;
    }

    return this.head.val;
  }

  append(val) {
    if (!val) {
      return;
    }

    const newItem = { val: val, next: null };

    if (this.length === 0) {
      this.head = newItem;
    } else {
      let currentItem = this.head;

      while (currentItem.next) {
        currentItem = currentItem.next;
      }

      currentItem.next = newItem;
    }

    this.length++;
  }

  insert(position, val) {
    if (typeof position !== 'number' || !val || position < 0 || position > this.length) {
      return false;
    }

    const newItem = { val: val, next: null };

    if (position === 0) {
      newItem.next = this.head;
      this.head = newItem;
    } else {
      let currentItem = this.head;
      let previousItem;
      let index = 0;

      while (index++ < position) {
        previousItem = currentItem;
        currentItem = currentItem.next;
      }

      newItem.next = currentItem;
      previousItem.next = newItem;
    }

    this.length++;

    return true;
  }

  indexOf(val) {
    let currentItem = this.head;

    for (let i = 0; i < this.length; i++) {
      if (currentItem.val === val) {
        return i;
      }

      currentItem = currentItem.next;
    }

    return -1;
  }

  removeAt(position) {
    if (!position || position < 0 || position >= this.length) {
      return null;
    }

    let currentItem = this.head;
    let previousItem;
    let index = 0;

    if (position === 0) {
      this.head = currentItem.next;
    } else {
      while (index++ < position) {
        previousItem = currentItem;
        currentItem = currentItem.next;
      }

      previousItem.next = currentItem.next;
    }

    this.length--;

    return currentItem.val;
  }

  remove(val) {
    return this.removeAt(this.indexOf(val));
  }

  displayAll() {
    const arr = [];
    let currentItem = this.head;

    for (let i = 0; i < this.length; i++) {
      arr.push(currentItem.val);
      currentItem = currentItem.next;
    }

    return arr;
  }
}

module.exports = LinkedList;
