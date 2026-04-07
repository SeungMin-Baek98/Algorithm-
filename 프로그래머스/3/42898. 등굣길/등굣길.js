function solution(m, n, puddles) {
  const MOD = 1000000007;

  // 2차원 배열 초기화 -> 1,1시작하므로 기존 크기의 1을 각 더해준다.
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  // 웅덩이 위치는 -1로 표시한다.
  for (const [x, y] of puddles) {
    dp[x][y] = -1;
  }

  // 시작점은 1로 초기화한다.
  dp[1][1] = 1;

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      // 웅덩이는 건너뛴다.
      if (dp[i][j] === -1) continue;

      // 왼쪽과 위쪽에서 오는 경로의 수를 더한다.
      if (dp[i - 1][j] !== -1) {
        dp[i][j] += dp[i - 1][j];
      }

      if (dp[i][j - 1] !== -1) {
        dp[i][j] += dp[i][j - 1];
      }

      // 경로의 수가 매우 커질 수 있으므로 모듈로 연산을 한다.
      dp[i][j] %= MOD;
    }
  }

  return dp[m][n];
}
