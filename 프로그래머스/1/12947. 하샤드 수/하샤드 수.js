function solution(x) {
  let sum = 0;
  let xStr = x.toString();
  for (let i = 0; i < xStr.length; i++) {
    sum += parseInt(xStr[i]);
  }
  let answer;

  if (x % sum === 0) {
    answer = true;
  } else {
    answer = false;
  }
  return answer;
}
