const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = parseInt(fs.readFileSync(filePath).toString().trim());

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }
    this.tail = newNode;
    this.length++;
    return newNode;
  }

  getHead() {
    return this.head ? this.head.value : null;
  }

  removeHead() {
    if (this.head) {
      if (this.head === this.tail) {
        // 리스트에 노드가 하나 남았을 때
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
        if (this.head) this.head.prev = null;
      }
      this.length--;
    }
  }

  getSize() {
    return this.length;
  }
}

const numbers = new LinkedList();

for (let i = 1; i <= input; i++) {
  numbers.push(i);
}

while (numbers.getSize() > 1) {
  numbers.removeHead();
  numbers.push(numbers.getHead());
  numbers.removeHead();
}

console.log(numbers.getHead());
