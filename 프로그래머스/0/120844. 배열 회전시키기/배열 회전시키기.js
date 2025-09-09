function solution(numbers, direction) {
  const answer = [];
  if (direction === "right") {
    const lastIdx = numbers.pop();
    answer.push(lastIdx, ...numbers);
  } else if (direction === "left") {
    const firstIdx = numbers.shift();
    answer.push(...numbers, firstIdx);
  }
  return answer;
}