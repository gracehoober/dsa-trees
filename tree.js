"use strict";

/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }

  /** sumValues(): add up all values of invoking node and its children.
   * Returns sum as an integer. */

  /** 1 -> 2 -> 3
   * sum = 6
   * []
   * current = 1
   */
  sumValues() {
    let sum = 0;
    let stack = [this];

    while(stack.length > 0){
      let current = stack.pop();
      sum += current.val;

      for(let child of current.children){
        stack.push(child)
      }
    }
    return sum;
  }

  /** countEvens(): starting from the invoking node and moving through its
   * children, count how many nodes have even values. Returns that count as
   * an integer. */
  countEvens() {

  }

  /** numGreater(lowerBound): starting from the invoking node and moving through
   * its children, return a count of the number of nodes whose value is greater
   * than lowerBound. */
  numGreater(lowerBound){

  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all values in the tree. */
  sumValues() {

  }

  /** countEvens(): count all nodes in the tree that have even values. */
  countEvens() {

  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */
  numGreater(lowerBound) {

  }
}

module.exports = { Tree, TreeNode };
