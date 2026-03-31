function solution(land) {
  const dp = [[...land[0]]];

  for (let i = 1; i < land.length; i++) {
    const row = [];

    row.push(Math.max(dp[i - 1][1], dp[i - 1][2], dp[i - 1][3]) + land[i][0]);
    row.push(Math.max(dp[i - 1][0], dp[i - 1][2], dp[i - 1][3]) + land[i][1]);
    row.push(Math.max(dp[i - 1][0], dp[i - 1][1], dp[i - 1][3]) + land[i][2]);
    row.push(Math.max(dp[i - 1][0], dp[i - 1][1], dp[i - 1][2]) + land[i][3]);

    dp.push(row);
  }

  return Math.max(...dp[dp.length - 1]);
}
