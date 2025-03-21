function solution(n, lost, reserve) {
  // n길이 만큼의 학생수 생성하여 초기값 1로 설정
  const students = new Array(n).fill(1);
  let answer = 0;

  // 분실한 학생들의 체육복 수 -1 한다.
  for (let i = 0; i < lost.length; i++) {
    students[lost[i] - 1]--;
  }

  // 여분있는 학생들의 체육복 수 +1 한다;
  for (let i = 0; i < reserve.length; i++) {
    students[reserve[i] - 1]++;
  }

  // 그럼 현재 체육복 수 [2,0,2,0,2]
  for (let i = 0; i < students.length; i++) {
    if (students[i] === 0) {
      if (students[i - 1] === 2) {
        students[i]++;
        students[i - 1]--;
      } else if (students[i + 1] === 2) {
        students[i]++;
        students[i + 1]--;
      }
    }
  }

    for(let i = 0; i < students.length; i++){
        if(students[i] > 0){
            answer++
        }
    }
    
  return answer;
}