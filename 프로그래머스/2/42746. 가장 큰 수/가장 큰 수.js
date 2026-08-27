function solution(numbers) {
  const stringArr = numbers.map((number) => String(number));
  const answer = stringArr
    .sort((a, b) => Number(b + a) - Number(a + b))
    .join("");
  return answer[0] === "0" ? "0" : answer;
}
