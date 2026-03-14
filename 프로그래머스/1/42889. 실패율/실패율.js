function solution(N, stages) {
  const challengers = {}; // 1. 각 스테이지랑 그 스테이지에 도달한 사람들 담을 객체

  for (let i = 1; i <= N; i++) {
    challengers[i] = 0;
  }

  // 2. stages요소랑 challengers key값이랑 동일하면 그 value값을 증가 시켜라
  for (let i = 0; i < stages.length; i++) {
    if (challengers[stages[i]] !== undefined) {
      challengers[stages[i]]++;
    }
  }

  // 3. 이제 각 단계의 실패율을 구해야됌
  const failure = [];
  let n = stages.length;
  for (let i = 1; i <= N; i++) {
    failure.push([i, challengers[i] / n]);
    n -= challengers[i];
  }

  const result = failure.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[1] - b[1];
    } else {
      return b[1] - a[1];
    }
  });

  return result.map(([order]) => order);
}
