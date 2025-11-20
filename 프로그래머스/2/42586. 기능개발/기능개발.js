function solution(progresses, speeds) {
  var answer = [];
  const days = progresses.map((progess, idx) => {
    return Math.ceil((100 - progess) / speeds[idx]);
  });
  let maxDay = days[0];
  let count = 1;
  for (let i = 1; i < days.length; i++) {
    if (days[i] <= maxDay) {
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
