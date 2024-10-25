const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const numbers = [];
for (let i = 0; i < input.length - 1; i++) {
  numbers.push(Number(input[i]));
}

for (let i = 0; i < numbers.length; i++) {
  const start = numbers[i] + 1;
  const end = numbers[i] * 2;
  let result = [];

  for (let j = start; j <= end; j++) {
    if (j < 2) continue; // 2 미만은 소수가 아님
    if (j === 2) {
      result.push(j); // 2는 소수
      continue;
    }
    if (j % 2 === 0) continue; // 짝수는 소수가 아님

    let isPrime = true;
    for (let k = 3; k <= Math.sqrt(j); k += 2) {
      if (j % k === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      result.push(j); // 소수라면 결과에 추가
    }
  }
  console.log(result.length);
}
