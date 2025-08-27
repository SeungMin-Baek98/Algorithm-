function solution(numbers) {
  const sortedNum = numbers.sort((a, b) => a - b);
  const maxNum = sortedNum.pop();
  const nextMaxNum = sortedNum.pop();

  return maxNum * nextMaxNum;
}