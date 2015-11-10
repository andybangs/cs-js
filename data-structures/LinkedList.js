function LinkedList() {
  var head = null;
  var length = 0;

  this.size = function() {
    return length;
  };

  this.isEmpty = function() {
    return length === 0;
  };

  this.head = function() {
    if (!head) {
      return null;
    }

    return head.val;
  };

  this.append = function(val) {
    if (!val) {
      return;
    }

    var newItem = { val: val, next: null };
    var currentItem;

    if (!head) {
      head = newItem;
    } else {
      currentItem = head;

      while (currentItem.next) {
        currentItem = currentItem.next;
      }

      currentItem.next = newItem;
    }

    length++;
  };

  this.insert = function(position, val) {
    if (typeof position !== 'number' || !val || position < 0 || position > length) {
      return false;
    }

    var newItem = { val: val, next: null };
    var currentItem = head;
    var previousItem;
    var index = 0;

    if (position === 0) {
      newItem.next = currentItem;
      head = newItem;
    } else {
      while (index++ < position) {
        previousItem = currentItem;
        currentItem = currentItem.next;
      }

      newItem.next = currentItem;
      previousItem.next = newItem;
    }

    length++;

    return true;
  };

  this.indexOf = function(val) {
    var currentItem = head;
    var i;

    for (i = 0; i < length; i++) {
      if (currentItem.val === val) {
        return i;
      }

      currentItem = currentItem.next;
    }

    return -1;
  };

  this.removeAt = function(position) {
    if (!position || position < 0 || position >= length) {
      return null;
    }

    var currentItem = head;
    var previousItem;
    var index = 0;

    if (position === 0) {
      head = currentItem.next;
    } else {
      while (index++ < position) {
        previousItem = currentItem;
        currentItem = currentItem.next
      }

      previousItem.next = currentItem.next;
    }

    length--;

    return currentItem.val;
  };

  this.remove = function(val) {
    return this.removeAt(this.indexOf(val));
  };

  this.displayAll = function() {
    var arr = [];
    var currentItem = head;
    var i;

    for (i = 0; i < length; i++) {
      arr.push(currentItem.val);
      currentItem = currentItem.next;
    }

    return arr;
  };
}

module.exports = LinkedList;
