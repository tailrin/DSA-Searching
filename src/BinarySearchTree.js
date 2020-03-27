class BinarySearchTree {
  constructor(key = null, value = null, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  insert(key, value) {
    if (this.key == null) {
      this.key = key;
      this.value = value;
    } else if (key < this.key) {
      if (this.left == null) {
        this.left = new BinarySearchTree(key, value, this);
      } else {
        this.left.insert(key, value);
      }
    } else {
      if (this.right == null) {
        this.right = new BinarySearchTree(key, value, this);
      } else {
        this.right.insert(key, value);
      }
    }
  }

  find(key) {
    if (this.key == key) {
      return this.value;
    } else if (key < this.key && this.left) {
      return this.left.find(key);
    } else if (key > this.key && this.right) {
      return this.right.find(key);
    } else {
      throw new Error("Key Error");
    }
  }

  remove(key) {
    if (this.key == key) {
      if (this.left && this.right) {
        const successor = this.right._findMin();
        this.key = successor.key;
        this.value = successor.value;
        successor.remove(successor.key);
      } else if (this.left) {
        this._replaceWith(this.left);
      } else if (this.right) {
        this._replaceWith(this.right);
      } else {
        this._replaceWith(null);
      }
    } else if (key < this.key && this.left) {
      this.left.remove(key);
    } else if (key > this.key && this.right) {
      this.right.remove(key);
    } else {
      throw new Error("Key Error");
    }
  }
  _replaceWith(node) {
    if (this.parent) {
      if (this == this.parent.left) {
        this.parent.left = node;
      } else if (this == this.parent.right) {
        this.parent.right = node;
      }

      if (node) {
        node.parent = this.parent;
      }
    } else {
      if (node) {
        this.key = node.key;
        this.value = node.value;
        this.left = node.left;
        this.right = node.right;
      } else {
        this.key = null;
        this.value = null;
        this.left = null;
        this.right = null;
      }
    }
  }

  _findMin() {
    if (!this.left) {
      return this;
    }
    return this.left._findMin();
  }

  _findMax() {
    if (!this.right) {
      return this;
    }
    return this.right._findMax();
  }
}

// Outside helper function
function findMinLayers(bst) {
  left = bst.left;
  let count = 0;

  function minFind(left) {
    //  console.log("min find firing");
    if (!left) {
      return 1;
    }
    left = left.left;
    count = 1 + minFind(left);
  }
  minFind(left);
  console.log(count);
  return count;
}

function findMaxLayers(bst) {
  right = bst.right;
  let count = 0;

  function maxFind(right) {
    // console.log("max find firing");
    if (!right) {
      return 1;
    }
    right = right.right;
    count = 1 + maxFind(right);
  }
  maxFind(right);
  console.log(count);
  return count;
}

// Doesn't work because need to be able to check both left and right, need to modify the min and max helper
// functions to search both left and right for the max
//    3
//  2   4
//   1
// the above would stop looking for the left without seeing the 1 on the right as it is now
function height(bst) {
  let root = bst;

  if (!root) {
    return 0;
  }
  return 1 + Math.max(height(root.left), height(root.right));
}

const BST = new BinarySearchTree();

// BST.insert(3);
// BST.insert(1);
// BST.insert(4);
// BST.insert(6);
// BST.insert(9);
// BST.insert(2);
// BST.insert(5);
// BST.insert(7);

// BST.insert("E");
// BST.insert("A");
// BST.insert("S");
// BST.insert("Y");
// BST.insert("Q");
// BST.insert("U");
// BST.insert("E");
// BST.insert("S");
// BST.insert("T");
// BST.insert("I");
// BST.insert("O");
// BST.insert("N");

//console.log(BST);
//console.log(BST.right.left);
//console.log(BST.right.right);

// Question 4
// BST.insert(2);
// BST.insert(1);

// function tree(t) {
//   if (!t) {
//     return 0;
//   }
//   return tree(t.left) + t.key + tree(t.right);
// }
// console.log(tree(BST));

// Question 5

// BST.insert(1);
// BST.insert(2);
// BST.insert(3);
// BST.insert(4);
// BST.insert(5);
// BST.insert(6);
// BST.insert(7);
// BST.insert(8);

BST.insert(2);
BST.insert(1);

console.log(height(BST));

//console.log(BST);
