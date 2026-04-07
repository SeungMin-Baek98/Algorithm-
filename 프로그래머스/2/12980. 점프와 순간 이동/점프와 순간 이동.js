function solution(n) {
  let answer = 0;

  while (n > 0) {
    // 반대로 생각하여 n이 짝수일 때는 순간이동으로 배터리 소모가없으니간 계속 n/2를 해준다.
    // n이 홀수일 경우에는 점프를 해야하므로 배터리 소모가 1이 되니간 n-1을 해주고 답을 추가한다.
    if (n % 2 === 0) {
      n /= 2;
    } else {
      n -= 1;
      answer++;
    }
  }

  return answer;
}