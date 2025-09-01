function solution(num, k) {
  const strNums = num.toString().split("");

  let result = 0;
  for (let i = 0; i < strNums.length; i++) {
    if (+strNums[i] === k) {
      return (result = i + 1);
    }
  }
  return -1;
}