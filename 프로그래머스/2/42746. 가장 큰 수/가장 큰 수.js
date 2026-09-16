function solution(numbers) {
  const stringArr = numbers.map((number) => String(number));
  const sortArr = stringArr
    .sort((a, b) => Number(b + a) - Number(a + b))
    .join("");

  return sortArr > 0 ? sortArr : "0";
}
