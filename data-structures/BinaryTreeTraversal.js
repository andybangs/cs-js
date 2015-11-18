'use strict';

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function log(val) {
  return console.log(val);
}

function traverseInOrder(node, fn) {
  if (node) {
    traverseInOrder(node.left, fn);
    fn(node.val);
    traverseInOrder(node.right, fn);
  }
}

function traversePreOrder(node, fn) {
  if (node) {
    fn(node.val);
    traversePreOrder(node.left, fn);
    traversePreOrder(node.right, fn);
  }
}

function traversePostOrder(node, fn) {
  if (node) {
    traversePostOrder(node.left, fn);
    traversePostOrder(node.right, fn);
    fn(node.val);
  }
}

// TESTS
const two = new Node(2);
const four = new Node(4);
const six = new Node(6);
const eight = new Node(8);
const ten = new Node(10);
const twelve = new Node(12);

eight.left = four;
eight.right = ten;
four.left = two;
four.right = six;
ten.right = twelve;

traverseInOrder(eight, log); // 2 4 6 8 10 12
traversePreOrder(eight, log); // 8 4 2 6 10 12
traversePostOrder(eight, log); // 2 6 4 12 10 8
