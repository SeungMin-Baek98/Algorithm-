// 백준 1929
// 소수 구하기

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

const [M, N] = input.map(Number);
let isPrimeNum = new Array(N + 1).fill(true);

isPrimeNum[0] = false; // 0은 소수가 될 수 없다
isPrimeNum[1] = false; // 1도 소수가 될 수 없다

for (let i = 2; i <= Math.ceil(Math.sqrt(N)); i++) {
  if (!isPrimeNum[i]) {
    continue;
  }

  // 자기자신만을 제외하고 그 숫자의 배수들은 소수가 될 수 없다
  for (let j = i * 2; j <= N; j += i) {
    isPrimeNum[j] = false;
  }
}

const result = [];

for (let i = M; i <= N; i++) {
  if (isPrimeNum[i]) {
    result.push(i);
  }
}
console.log(result.join("\n"));
