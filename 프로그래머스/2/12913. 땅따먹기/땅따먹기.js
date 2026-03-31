function solution(land) {
  if (land.length === 0) {
    return 0;
  }

  // dp[i][j] = i행 j열을 밟았을 때 얻을 수 있는 최대 점수
  const dp = land.map((row) => [...row]);

  for (let i = 1; i < dp.length; i++) {
    for (let j = 0; j < dp[i].length; j++) {
      let prevMax = 0;

      for (let k = 0; k < dp[i - 1].length; k++) {
        if (j !== k) {
          prevMax = Math.max(prevMax, dp[i - 1][k]);
        }
      }

      dp[i][j] += prevMax;
    }
  }

  return Math.max(...dp[dp.length - 1]);
}
