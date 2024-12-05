const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

const inputNum = Number(input);

function fibonacci(n) {
  let answer = 0;
  let dy = Array.from({ length: n + 1 });
  dy[0] = 0;
  dy[1] = 1;
  for (let i = 2; i <= n + 1; i++) {
    dy[i] = dy[i - 2] + dy[i - 1];
  }
  answer = dy[n];
  return answer;
}

console.log(fibonacci(inputNum));
