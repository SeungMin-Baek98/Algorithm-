class MinHeap {
  constructor() {
    this.heap = []; // 힙을 저장할 배열을 초기화합니다.
  }

  // 부모 노드의 인덱스를 찾는 메서드
  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }

  // 왼쪽 자식 노드의 인덱스를 찾는 메서드
  getLeftChildIndex(i) {
    return 2 * i + 1;
  }

  // 오른쪽 자식 노드의 인덱스를 찾는 메서드
  getRightChildIndex(i) {
    return 2 * i + 2;
  }

  // 두 노드의 값을 스왑하는 메서드
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  // 값을 추가하는 메서드 (삽입 연산)
  insert(value) {
    this.heap.push(value); // 힙 배열의 끝에 값을 추가합니다.
    this.heapifyUp(); // 힙 속성을 유지하기 위해 위쪽으로 재배치합니다.
  }

  // 힙 속성을 유지하면서 위로 재배치하는 메서드
  heapifyUp() {
    let index = this.heap.length - 1; // 새로 추가된 노드의 인덱스
    while (
      this.getParentIndex(index) >= 0 &&
      this.heap[this.getParentIndex(index)] > this.heap[index]
    ) {
      // 부모가 자식보다 크면 스왑하여 올바른 위치로 이동
      this.swap(this.getParentIndex(index), index);
      index = this.getParentIndex(index); // 부모 인덱스로 이동
    }
  }

  // 최소값을 제거하고 반환하는 메서드
  removeMin() {
    if (this.heap.length === 1) return this.heap.pop(); // 힙에 하나만 있으면 바로 반환
    const min = this.heap[0]; // 루트의 최소값을 저장
    this.heap[0] = this.heap.pop(); // 마지막 요소를 루트로 이동
    this.heapifyDown(); // 힙 속성을 유지하기 위해 아래로 재배치합니다.
    return min;
  }

  // 힙 속성을 유지하면서 아래로 재배치하는 메서드
  heapifyDown() {
    let index = 0; // 루트에서 시작
    while (this.getLeftChildIndex(index) < this.heap.length) {
      let smallerChildIndex = this.getLeftChildIndex(index);
      if (
        this.getRightChildIndex(index) < this.heap.length &&
        this.heap[this.getRightChildIndex(index)] < this.heap[smallerChildIndex]
      ) {
        smallerChildIndex = this.getRightChildIndex(index); // 오른쪽 자식이 더 작으면 선택
      }

      if (this.heap[index] < this.heap[smallerChildIndex]) break; // 힙 조건을 만족하면 종료

      this.swap(index, smallerChildIndex); // 자식과 스왑
      index = smallerChildIndex; // 스왑한 자식 인덱스로 이동
    }
  }

  // 최소값을 반환하는 메서드 (제거하지 않음)
  getMin() {
    return this.heap[0];
  }
}

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const tryCount = Number(input[0]);
const numbers = input.slice(1).map(Number);

const minHeap = new MinHeap();
const result = [];
for (let i = 0; i < tryCount; i++) {
  const number = numbers[i];

  if (number === 0) {
    if (minHeap.heap.length === 0) {
      result.push(0);
    } else {
      result.push(minHeap.removeMin());
    }
  } else {
    minHeap.insert(number);
  }
}

console.log(result.join(' '));
