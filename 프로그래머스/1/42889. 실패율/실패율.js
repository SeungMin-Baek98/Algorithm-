/**
 * 실패율 (내풀이)
 * N -> 전체 스테이지 개수
 * Stages -> 사용자가 멈춰있는 스테이지의 번호 배열
 * 결과값 -> 내림차순으로 정렬
 */
function solution(N, stages) {
  // stages배열에 filter를 걸어서 각 스테이지별로 그 스테이지와 숫자가 같거나 혹은 큰 숫자들의 개수를 분모에 추가
  // stages배열에 filter를 걸어서 각 스테이지별로 그 스테이지와 숫자가 같은걸 분자에 추가
  // 그래서 비교를 해서 내림차순으로 정렬

  const failureRates = [];

  for (let stage = 0; stage < N; stage++) {
    const stageNumber = stage + 1;
    const reachedUsers = stages.filter((s) => s >= stageNumber).length;
    const failedUsers = stages.filter((s) => s === stageNumber).length;

    // 분자가 0이면 실패율 0 아니면 실패율 계산
    const failureRate = failedUsers === 0 ? 0 : failedUsers / reachedUsers;

    failureRates.push({ stage: stageNumber, rate: failureRate });
  }
  failureRates.sort((a, b) => b.rate - a.rate);

  return failureRates.map((item) => item.stage);
}