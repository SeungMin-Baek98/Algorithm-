function solution(priorities, location) {
  const priorityArr = priorities.map((priority, index) => [index, priority]);
  let count = 0;
  while (priorityArr.length > 0) {
    const current = priorityArr.shift();
    const hasHigherPriority = priorityArr.some(
      ([index, priority]) => current[1] < priority,
    );

    if (hasHigherPriority) {
      priorityArr.push(current);
    } else {
      count++;

      if (current[0] === location) return count;
    }
  }
}