const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const stairs = Number(input.shift());
const scores = [0, ...input.map(Number)];

function solution(stairs, scores) {
  let dy = Array.from({ length: stairs + 1 }, () => 0);

  dy[1] = scores[1];
  dy[2] = scores[1] + scores[2];

  for (let i = 3; i <= stairs; i++) {
    dy[i] = Math.max(
      dy[i - 2] + scores[i],
      dy[i - 3] + scores[i - 1] + scores[i]
    );
  }
  return dy[stairs];
}

console.log(solution(stairs, scores));
