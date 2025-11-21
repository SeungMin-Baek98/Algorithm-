class Queue {
  items = [];
  rear = 0;
  front = 0;

  constructor(array) {
    this.items = array;
    this.rear = array.length;
  }

  /** push */
  push(item) {
    this.items.push(item);
    this.rear++;
  }

  /** pop */
  pop() {
    return this.items[this.front++];
  }

  /** front에 해당되는 값 반환 */
  first() {
    return this.items[this.front];
  }

  isEmpty() {
    return this.rear === this.front;
  }
}

function solution(card1, card2, goal) {
  card1 = new Queue(card1);
  card2 = new Queue(card2);
  goal = new Queue(goal);

  while (!goal.isEmpty()) {
    if (!card1.isEmpty() && card1.first() === goal.first()) {
      card1.pop();
      goal.pop();
    } else if (!card2.isEmpty() && card2.first() === goal.first()) {
      card2.pop();
      goal.pop();
    } else {
      break;
    }
  }

  return goal.isEmpty() ? "Yes" : "No";
}