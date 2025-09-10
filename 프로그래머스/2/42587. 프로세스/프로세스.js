function solution(priorities, location) {
  let answer = 0;
  const queue = priorities.map((priority, index) => ({
    priority,
    index,
  }));

  while (queue.length) {
    const current = queue.shift();
    if (queue.some((item) => item.priority > current.priority)) {
      queue.push(current);
    } else {
      answer++;

      if (current.index === location) {
        break;
      }
    }
  }

  return answer;
}