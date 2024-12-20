function solution(s) {
  let pCount = 0;
  let yCount = 0;

  for (let x of s.toLowerCase()) {
    if (x === "p") {
      pCount++;
    } else if (x === "y") {
      yCount++;
    }
  }

  let answer = pCount === yCount ? true : false;

  return answer;
}


