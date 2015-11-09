function Stack() {
  var top = null;
  var count = 0;

  this.size = function() {
    return count;
  }

  this.isEmpty = function() {
    return count === 0;
  }

  this.push = function(val) {
    if (!val) {
      return;
    }

    var newItem = { val: val, next: null };

    newItem.next = top;
    top = newItem;
    count++;
  }

  this.pop = function() {
    if (count === 0) {
      return null;
    }

    var outItem = top;

    top = outItem.next;
    count--;

    return outItem.val;
  }

  this.peek = function() {
    if (count === 0) {
      return null;
    }

    return top.val;
  }

  this.displayAll = function() {
    var arr = [];
    var currentItem = top;
    var i;

    for (i = 0; i < count; i++) {
      arr[i] = currentItem.val;
      currentItem = currentItem.next;
    }

    return arr;
  }
}

module.exports = Stack;
