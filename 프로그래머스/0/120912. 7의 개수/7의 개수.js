function solution(array) {
  let answer = 0;

  for (let i = 0; i < array.length; i++) {
    const num = String(array[i]).split("");
    for (let j = 0; j < num.length; j++) {
      if (+num[j] === 7) answer++;
    }
  }
  return answer;
}