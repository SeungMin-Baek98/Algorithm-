/**
 * 실패율 (내풀이)
 * N -> 전체 스테이지 개수
 * Stages -> 사용자가 멈춰있는 스테이지의 번호 배열
 * 결과값 -> 내림차순으로 정렬
 */
// function solution(N, stages) {
//   // stages배열에 filter를 걸어서 각 스테이지별로 그 스테이지와 숫자가 같거나 혹은 큰 숫자들의 개수를 분모에 추가
//   // stages배열에 filter를 걸어서 각 스테이지별로 그 스테이지와 숫자가 같은걸 분자에 추가
//   // 그래서 비교를 해서 내림차순으로 정렬

//   const failureRates = [];

//   for (let stage = 0; stage < N; stage++) {
//     const stageNumber = stage + 1;
//     const reachedUsers = stages.filter((s) => s >= stageNumber).length;
//     const failedUsers = stages.filter((s) => s === stageNumber).length;

//     // 분자가 0이면 실패율 0 아니면 실패율 계산
//     const failureRate = failedUsers === 0 ? 0 : failedUsers / reachedUsers;

//     failureRates.push({ stage: stageNumber, rate: failureRate });
//   }
//   failureRates.sort((a, b) => b.rate - a.rate);

//   return failureRates.map((item) => item.stage);
// }


function solution(N, stages) {
  /**
   * 1. 스테이지별 도전자 수를 구함
   * -> 배열의 크기를 N+2로 정한 이유 : N 번쨰 스테이지를 클리어한 사용자는 stage가 N+1 이다. ex) 1번째 스테이지를 클리어한 사용자의 stage : 1 + 1 -> 2
   * 그러면 challenger배열에서 N+1위치에 데이터를 저장해야 하는데 배열의 인덱스는 0부터 시작하므로 N+1인덱스에 데이터를 저장하려면 N+2크기의 배열이 필요하다.
   * 0번째 인덱스를 사용하지 않아서 데이터 낭비라고 생각할 수 있지만, 오히려 좋다.
   */
  //
  const challenger = new Array(N + 2).fill(0);
  for (const stage of stages) {
    challenger[stage] += 1;
  }

  /**
   * 2. 스테이지별 실패한 사용자 수 계산
   */
  const fails = {};
  let total = stages.length;

  /**
   * 3. 각 스테이지를 순회하며, 실패율 계산
   */
  for (let i = 1; i <= N; i++) {
    if (challenger[i] === 0) {
      // 4. 도전한 사람이 없는 경우, 실패율 -> 0
      fails[i] = 0;
      continue;
    }

    // 5. 실패율 계산
    fails[i] = challenger[i] / total;

    // 6. 다음 스테이지 실패율을 구하기 위해 현재 스테이지의 인원을 뺀다.
    total -= challenger[i];
  }

  // 7. 실패율이 높은 스테이지부터 내림차순으로 정렬
  const result = Object.entries(fails).sort((a, b) => b[1] - a[1]);

  return result.map((v) => Number(v[0]));
}


