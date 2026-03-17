function solution(a, b, n) {
  let answer = 0;

  while (a <= n) {
    const bottle = Math.floor(n / a);
    // 1. 받은 병의 개수를 구한다.
    let getBottle = bottle * b;
    answer += getBottle;
    // 2. 전체 병의 개수를 구한다.
    let totalBottle = n - bottle * a + getBottle;
    // 3. n을 최신화 한다.
    n = totalBottle;
    // 4. 1,2,3 과정을 반복하다가 a > n 가 되는 순간의 값을 구한다.
  }
  return answer;
}
