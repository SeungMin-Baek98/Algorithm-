const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const tryCount = Number(input.shift());

function fibonnaci(n) {
  let zero = 0;
  let one = 0;

  let dy = Array.from({ length: n });

  dy[0] = 0;
  dy[1] = 1;

  for (let i = 2; i <= n; i++) {
    dy[i] = dy[i - 2] + dy[i - 1];
  }

  zero = dy[n - 1] === undefined ? 1 : dy[n - 1];
  one = dy[n];

  let answer = [];
  answer.push(zero, one);

  return answer.join(" ");
}

for (let i = 0; i < tryCount; i++) {
  console.log(fibonnaci(input[i]));
}
