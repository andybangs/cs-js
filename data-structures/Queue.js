function Queue() {
  var head = null;
  var tail = null;
  var count = 0;

  this.size = function() {
    return count;
  }

  this.isEmpty = function() {
    return count === 0;
  }

  this.enqueue = function(val) {
    if (!val) {
      return;
    }

    var newItem = { val: val, next: null };

    if (!head) {
      head = newItem;
    } else {
      tail.next = newItem;
    }

    tail = newItem;
    count++;
  }

  this.dequeue = function() {
    if (count === 0) {
      return null;
    }

    var outItem = head;

    head = outItem.next;
    count--;

    return node.val;
  }

  this.peek = function() {
    if (count === 0) {
      return null;
    }

    return head.val;
  }

  this.peekAt = function(index) {
    if (index < -1 || index >= count) {
      return null;
    }

    var currentItem = head;
    var i;

    for (i = 0; i < index; i++) {
      currentItem = currentItem.next;
    }

    return currentItem.val;
  }

  this.displayAll = function() {
    var arr = [];
    var currentItem = head;

    while (currentItem.next) {
      arr.push(currentItem.val);
      currentItem = currentItem.next;
    }

    arr.push(currentItem.val);

    return arr;
  }
}

module.exports = Queue;
