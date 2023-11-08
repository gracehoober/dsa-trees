"use strict";

/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  /** minDepthToIncompleteNode(): return the minimum depth of the tree to an
   * incomplete node-- that is, the length of the shortest path from the root to
   * a node with less than two children. */
  minDepthToIncompleteNode() {
    let pathCount = 1;
    let levelPower = 0;
    let queue = [this]
    let currLevel = 2 ** levelPower;

    while (queue.length){
      let current = queue.shift();
      currLevel--;
      if (!current.left || !current.right){
        return pathCount;
      }
      queue.push(current.left);
      queue.push(current.right);
      if (currLevel === 0){
        pathCount++;
        levelPower++;
        currLevel = 2 ** levelPower;
      }
    }

    return pathCount;
  }


  /** maxDepth(): return the maximum depth from the invoking node -- that is,
   * the length of the longest path from the invoking node to a leaf. */
  maxDepth() {
    let count = 1;
    let current = this;

    if(!current.right && current.left){
      count += current.left.maxDepth()
    }
    if(!current.left && current.right){
      count += current.right.maxDepth()
    }
    if(!current.left && !current.right){
      return count;
    }
    if(current.left && current.right){
      count += Math.max(current.left.maxDepth(), current.right.maxDepth())
    }

    return count;
  }

  /** minDepth(): return the minimum depth from the invoking node -- that is,
   * the length of the shortest path from the invoking node to a leaf. */
   minDepth() {

  }

  /** nextLarger(lowerBound): return the smallest value from the invoking node
   * that is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {

  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepthToIncompleteNode(): return the minimum depth of the tree to an
   * incomplete node-- that is, the length of the shortest path from the root to
   * a node with less than two children. */

  // this is a stack or recursion problem; we'll use recursion

  minDepthToIncompleteNode() {
    let pathCount = 0;
    if (this.root){
      pathCount+= this.root.minDepthToIncompleteNode();
    }

    return pathCount;
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  // this is a stack or recursion problem; we'll use recursion

  maxDepth() {
    let pathCount = 0;
    if (this.root){
      pathCount += this.root.maxDepth();
    }
    return pathCount;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  // this is a stack or recursion problem; we'll use recursion

  minDepth() {

  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * that is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {

  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }
}

module.exports = { BinaryTree, BinaryTreeNode };
