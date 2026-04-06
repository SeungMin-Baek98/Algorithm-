function solution(triangle) {
  const dp = triangle.map((row) => [...row]);
  // 1. 각 칸까지 도달할 수 있는 최대 합을 저장하면서 삼각형을 순회한다.
  // 2. i는 행, j는 각 행의 열을 의미한다.
  // 3. 현재 칸의 값은 윗줄에서 올 수 있는 부모 칸들 중 최댓값을 더해 갱신한다.
  //    - 왼쪽 끝 칸은 바로 위 값만 더할 수 있다.
  //    - 오른쪽 끝 칸은 왼쪽 위 값만 더할 수 있다.
  //    - 가운데 칸은 왼쪽 위, 바로 위 중 더 큰 값을 더한다.
  // 4. 마지막 행에는 각 위치까지의 최대 합이 저장되므로, 그중 최댓값을 반환한다.
  for (let i = 1; i < triangle.length; i++) {
    for (let j = 0; j < triangle[i].length; j++) {
      if (j === 0) {
        // 왼쪽 끝
        dp[i][j] = triangle[i][j] + dp[i - 1][j];
      } else if (j === triangle[i].length - 1) {
        // 오른쪽 끝
        dp[i][j] = triangle[i][j] + dp[i - 1][j - 1];
      } else {
        // 가운데
        dp[i][j] = triangle[i][j] + Math.max(dp[i - 1][j - 1], dp[i - 1][j]);
      }
    }
  }
  return Math.max(...dp[dp.length - 1]);
}
