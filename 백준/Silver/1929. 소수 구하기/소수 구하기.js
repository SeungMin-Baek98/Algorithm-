const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

const startNum = Number(input[0]);
const endNum = Number(input[1]);

let result = [];

for (let i = startNum; i <= endNum; i++) {
  if (i < 2) continue; // 2 미만은 소수가 아님
  if (i === 2) {
    result.push(i); // 2는 소수
    continue;
  }
  if (i % 2 === 0) continue; // 짝수는 소수가 아님

  let isPrime = true;
  for (let j = 3; j <= Math.sqrt(i); j += 2) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    result.push(i); // 소수라면 결과에 추가
  }
}

console.log(result.join("\n"));
