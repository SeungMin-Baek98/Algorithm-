function solution(numbers) {
  const len = numbers.length;
  numbers.sort((a, b) => b - a);

  let mul1 = numbers[0] * numbers[1];
  let mul2 = numbers[len - 1] * numbers[len - 2];

  return Math.max(mul1, mul2);
}
