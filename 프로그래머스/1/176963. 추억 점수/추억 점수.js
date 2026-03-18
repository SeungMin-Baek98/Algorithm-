function solution(name, yearning, photo) {
  const answer = [];
  const obj = {};

  for (let i = 0; i < name.length; i++) {
    // obj 설정
    obj[name[i]] = yearning[i];
  }

  for (let i = 0; i < photo.length; i++) {
    let sum = 0;

    for (let j = 0; j < photo[i].length; j++) {
      sum += obj[photo[i][j]] || 0;
    }
    answer.push(sum);
  }

  return answer;
}