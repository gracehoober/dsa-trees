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
      sum = sum + current.val;

      for(let child of current.children){
        stack.push(child);
      }
    }
    return sum;
  }

  /** countEvens(): starting from the invoking node and moving through its
   * children, count how many nodes have even values. Returns that count as
   * an integer. */
  countEvens() {
    let evenCount = 0;
    let stack = [this];

    while(stack.length){
      let current = stack.pop();
      if (current.val % 2 === 0){
        evenCount++;
      }

      for (let child of current.children){
        stack.push(child);
      }
    }

    return evenCount;
  }

  /** numGreater(lowerBound): starting from the invoking node and moving through
   * its children, return a count of the number of nodes whose value is greater
   * than lowerBound. */
  numGreater(lowerBound){
    let greaterCount = 0;
    let stack = [this];

    while (stack.length){
      let current = stack.pop();
      if (current.val > lowerBound) greaterCount++;

      for (let child of current.children){
        stack.push(child);
      }
    }

    return greaterCount;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all values in the tree. */
  sumValues() {
    let sum = 0;
    if (this.root){
      sum+= this.root.sumValues();
    }
    return sum;
  }

  /** countEvens(): count all nodes in the tree that have even values. */
  countEvens() {
    let evenCount = 0;
    if (this.root){
      evenCount+= this.root.countEvens();
    }
    return evenCount;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */
  numGreater(lowerBound) {
    let greaterCount = 0;
    if (this.root){
      greaterCount+= this.root.numGreater(lowerBound);
    }
    return greaterCount;
  }
}

module.exports = { Tree, TreeNode };
