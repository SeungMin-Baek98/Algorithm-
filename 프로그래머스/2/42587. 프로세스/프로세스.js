// 프로세스
// 13:10
// 13:40
function solution(priorities, location) {
  const priorityArr = priorities.map((priority, index) => [index, priority]);

  let count = 0;

  while (priorityArr.length > 0) {
    // 배열 첫번째 요소 shift()
    const current = priorityArr.shift();
    // 첫번째 idx보다 더 높은 우서순위가 있는지 비교
    const hasHigherPrioirty = priorityArr.some(
      ([idx, priority]) => priority > current[1],
    );

    if (hasHigherPrioirty) {
      // 더 높은 우선순위가 있으면 배열 마지막 idx로 이동
      priorityArr.push(current);
    } else {
      count++;

      // 찾는 위치랑 동일하다면 count반환
      if (current[0] === location) return count;
    }
  }
}
