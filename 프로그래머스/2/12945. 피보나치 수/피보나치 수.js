function solution(n) {
  let dp = Array.from({ length: n + 1 }).fill(0);
  let num = 1234567;

  dp[0] = 0;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % num;
  }

  return dp[n];
}
