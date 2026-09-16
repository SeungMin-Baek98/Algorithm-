function solution(prices) {
  let result = [];

  for (let i = 0; i < prices.length; i++) {
    // 각 시점마다 유지시간을 새로 계산한다.
    let time = 0;

    for (let j = i + 1; j < prices.length; j++) {
      // 다음 시점으로 이동했으므로 하락 여부와 상관없이 1초 증가
      time++;

      // 현재 가격보다 낮아진 최초 시점에서 반복문 종료
      if (prices[i] > prices[j]) break;
    }
    result.push(time);
  }

  return result;
}