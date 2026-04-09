function solution(x, y, n) {
  const queue = [[x, 0]];
  const visited = new Set([x]);
  let front = 0;

  while (front < queue.length) {
    const [current, calculCount] = queue[front++];
    
    if (current === y) return calculCount;

    for (let next of [current + n, current * 2, current * 3]) {
      if (next <= y && !visited.has(next)) {
        visited.add(next);
        queue.push([next, calculCount + 1]);
      }
    }
  }

  return -1;
}