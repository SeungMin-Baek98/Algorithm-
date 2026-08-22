function solution(progresses, speeds) {
  // progresses를 활용하여 각 몇일이 걸리는지 days배열 생성
  // Math.ceil() 사용 ->  "95%인 작업의 개발 속도가 하루에 4%라면 배포는 2일 뒤에 이루어집니다."
  const days = progresses.map((progress, index) =>
    Math.ceil((100 - progress) / speeds[index]),
  );
  const result = [];
  let maxDays = days[0]; // 첫번째 날 기준
  let count = 1; // 1일 기준

  for (let i = 1; i < days.length; i++) {
    if (maxDays >= days[i]) {
      count++;
    } else {
      result.push(count);
      maxDays = days[i];
      count = 1;
    }
  }
  result.push(count);
  return result;
}
