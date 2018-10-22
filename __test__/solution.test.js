'use strict';

const isAChild = require('../src/solution');
const Node = require('../src/lib/node');
const Tree = require('../src/lib/tree');

const testTree = new Tree(10);
testTree.root.left = new Node(1);
testTree.root.left.left = new Node(9);
testTree.root.left.right = new Node(3);
testTree.root.right = new Node(5);
testTree.root.right.right = new Node(7);
testTree.root.right.left = new Node(4);
testTree.root.right.left.left = new Node(100);
testTree.root.right.left.right = new Node(11);

describe('solution.js', () => {
  test('Successfully return false when checking 100 is a child of 9', () => {
    const result = isAChild(testTree.root, 9, 100);
    expect(result).toEqual(false);
  });
  test('Successfully returned false if 4 is child 1', () => {
    const result = isAChild(testTree.root, 1, 4);
    expect(result).toEqual(false);
  });
  test('Succesfully returned false if 11 is child of 10', () => {
    const result = isAChild(testTree.root, 10, 11);
    expect(result).toEqual(true);
  });
  test('Successfully returned false if 7 is child of 5', () => {
    const result = isAChild(testTree.root, 5, 7);
    expect(result).toEqual(true);
  });
});
