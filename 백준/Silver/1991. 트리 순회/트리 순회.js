const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.nodes = {};
  }

  addNode(value, left, right) {
    if (!this.nodes[value]) this.nodes[value] = new Node(value);
    if (left !== ".") {
      this.nodes[left] = new Node(left);
      this.nodes[value].left = this.nodes[left];
    }
    if (right !== ".") {
      this.nodes[right] = new Node(right);
      this.nodes[value].right = this.nodes[right];
    }
  }

  preOrder(node, result = []) {
    if (node) {
      result.push(node.value);
      this.preOrder(node.left, result);
      this.preOrder(node.right, result);
    }
    return result;
  }

  inOrder(node, result = []) {
    if (node) {
      this.inOrder(node.left, result);
      result.push(node.value);
      this.inOrder(node.right, result);
    }
    return result;
  }

  postOrder(node, result = []) {
    if (node) {
      this.postOrder(node.left, result);
      this.postOrder(node.right, result);
      result.push(node.value);
    }
    return result;
  }
}

const n = parseInt(input[0], 10);
const tree = new BinaryTree();

for (let i = 1; i <= n; i++) {
  const [value, left, right] = input[i].split(" ");
  tree.addNode(value, left, right);
}

console.log(tree.preOrder(tree.nodes["A"]).join(""));
console.log(tree.inOrder(tree.nodes["A"]).join(""));
console.log(tree.postOrder(tree.nodes["A"]).join(""));
