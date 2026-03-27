function solution(numbers, target) {
  var answer = 0;

  function dfs(idx, sum) {
    if (idx === numbers.length) {
      if (sum === target) answer++;
      return;
    }
    dfs(idx + 1, sum + numbers[idx]); // 더한 경우
    dfs(idx + 1, sum - numbers[idx]); // 뺀 경우
  }

  dfs(0, 0);

  return answer;
}
