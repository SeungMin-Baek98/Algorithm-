function solution(numbers) {
  numbers.sort((a, b) => a - b);
  let sum = 0;
  for (let i = 0; i < 10; i++) {
    if (!numbers.includes(i)) {
      sum += i;
    }
  }

  return sum;
}
