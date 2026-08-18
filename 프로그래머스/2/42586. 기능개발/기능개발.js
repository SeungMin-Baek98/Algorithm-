function solution(progresses, speeds) {
  // 각각 몇일 씩 걸리는지 파악해야댐
  // Math.ceil() 로 계산
  const remainDays = [];

  for (let i = 0; i < progresses.length; i++) {
    remainDays.push(Math.ceil((100 - progresses[i]) / speeds[i]));
  }

  const answer = [];
  let deployDay = remainDays[0]; // 첫번째 일 수 기준
  let count = 1; // 1일 선언

  for (let i = 1; i < remainDays.length; i++) {
    if (deployDay >= remainDays[i]) {
      count++;
    } else {
      answer.push(count);
      deployDay = remainDays[i];
      count = 1;
    }
  }
  answer.push(count);

  return answer;
}