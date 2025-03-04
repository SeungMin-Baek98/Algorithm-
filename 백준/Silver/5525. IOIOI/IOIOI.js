const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input.shift();
const M = +input.shift();
const S = input.shift();

let answer = 0;
let cnt = 0;

for (let i = 1; i < M - 1; i++) {
  if (S[i - 1] === "I" && S[i] === "O" && S[i + 1] === "I") {
    cnt++;
    if (cnt === N) {
      cnt--;
      answer++;
    }
    i++;
  } else {
    cnt = 0;
  }
}

console.log(answer);
