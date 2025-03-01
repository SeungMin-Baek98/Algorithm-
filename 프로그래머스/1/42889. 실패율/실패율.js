function solution(N, stages) {
  const answer = [];

  for (let i = 1; i <= N; i++) {
    const notClear = stages.filter((value) => value === i).length; // 스테이지에 도달했으나 클리어 하지못한 플레이어 수
    const clear = stages.filter((value) => value >= i).length; // 스테이지에 도달한 총 플레이어 수
    const failRate = notClear / clear; // 실패율 계산

    answer.push({ stage: i, rate: failRate });
  }

  answer.sort((a, b) => {
    // 실패율이 같으면 작은 번호의 스테이지가 앞에 온다.
    if (a.rate === b.rate) return a.stage - b.stage;
    // 그 외의 경우 실패율이 높은 스테이지가 앞에 온다.
    else return b.rate - a.rate;
  });

  return answer.map((value) => value.stage);
}