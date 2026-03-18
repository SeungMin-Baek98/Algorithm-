function solution(k, tangerine) {
  const orangeCountMap = new Map();
  let answer = 0;
  let sum = 0;

  for (const orange of tangerine) {
    // orange 각 크기별로 카운팅
    orangeCountMap.set(orange, (orangeCountMap.get(orange) || 0) + 1);
  }

  const orangeCounts = [...orangeCountMap.values()].sort((a, b) => b - a);

  for (let i = 0; i < orangeCounts.length; i++) {
    sum += orangeCounts[i];
    answer += 1;
    if (sum >= k) break;
  }

  return answer;
}
