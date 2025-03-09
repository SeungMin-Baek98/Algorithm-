
function solution(progresses, speeds) {
  const days = progresses.map((progress, idx) =>
    Math.ceil((100 - progress) / speeds[idx])
  );

  const answer = [];
  let maxDay = days[0];
  let count = 1;

  for (let i = 1; i < days.length; i++) {
    if (maxDay >= days[i]) {
      count++;
    } else {
      answer.push(count);
      count = 1; // 다시 초기화를 함으로서 다음 기능의 개발 속도 세기위함
      maxDay = days[i]; // maxDay를 다음 기능의 개발 속도로 변경
    }
  }
  answer.push(count); // 마지막 기능의 개발 속도를 answer에 push

  return answer;
}