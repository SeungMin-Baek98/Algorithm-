const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

let N = Number(input);
let count = 0;

while (true) {
  if (N % 5 === 0) {
    count += N / 5; // 5키로로 나눌 수 있는 최대 개수
    console.log(count);
    break;
  }

  N -= 3; // 3키로 봉지 사용
  count++;

  if (N < 0) {
    console.log(-1);
    break;
  }
}
