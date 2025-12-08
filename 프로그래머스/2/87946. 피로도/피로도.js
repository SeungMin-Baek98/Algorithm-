function solution(k, dungeons) {
  let maxCount = 0;
  const visited = Array.from({ length: dungeons.length }, () => false);
  function backtrack(count, fatigue) {
    maxCount = Math.max(maxCount, count);
    for (let i = 0; i < dungeons.length; i++) {
      if (!visited[i] && fatigue >= dungeons[i][0]) {
        visited[i] = true;
        backtrack(count + 1, fatigue - dungeons[i][1]);
        visited[i] = false;
      }
    }
  }
  backtrack(0, k);
  return maxCount;
}
