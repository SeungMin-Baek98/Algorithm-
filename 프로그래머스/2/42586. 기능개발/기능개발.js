function solution(progresses, speeds) {
  // 각각 몇일 걸리는지 배열 생성
  const days = progresses.map((progress, index) =>
    Math.ceil((100 - progress) / speeds[index]),
  );

  // 기준일 지정
  const answer = [];
  let maxDay = days[0];
  let count = 1;

  for (let i = 1; i < days.length; i++) {
    if (maxDay >= days[i]) {
      count++;
    } else {
      answer.push(count);
      maxDay = days[i];
      count = 1;
    }
  }
  answer.push(count);
  return answer;
}
