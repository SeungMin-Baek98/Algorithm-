function solution(priorites, location) {
  // index를 가진 배열 생성
  const priorityWithIdx = priorites.map((priority, index) => [index, priority]);

  let count = 0;

  while (priorityWithIdx.length > 0) {
    const current = priorityWithIdx.shift();

    const hasHigherPriority = priorityWithIdx.some(
      ([index, priority]) => current[1] < priority,
    );

    if (hasHigherPriority) {
      priorityWithIdx.push(current);
    } else {
      count++;

      if (current[0] === location) return count;
    }
  }
}
