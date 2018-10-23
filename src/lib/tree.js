'use strict';

const Node = require('./node');

module.exports = class Tree {
  constructor(rootVal) {
    this.root = new Node(rootVal);
  }
};
