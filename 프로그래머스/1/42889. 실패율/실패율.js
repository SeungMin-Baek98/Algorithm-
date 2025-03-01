function solution(N, stages) {
  const answer = [];

  for (let i = 1; i <= N; i++) {
    const notClear = stages.filter((value) => value === i).length; // 스테이지에 도달했으나 클리어 하지못한 플레이어 수
    const clear = stages.filter((value) => value >= i).length; // 스테이지에 도달한 총 플레이어 수
    const failRate = notClear / clear; // 실패율 계산

    answer.push([i, failRate]);
  }

  answer.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    else return b[1] - a[1];
  });

  return answer.map((value) => value[0]);
}
