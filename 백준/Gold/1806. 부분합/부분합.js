const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(m, arr) {
  let sum = 0;
  let lt = 0;
  let minLength = Infinity;

  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];

    while (sum >= m) {
      minLength = Math.min(minLength, rt - lt + 1);
      sum -= arr[lt++];
    }
  }

  return minLength === Infinity ? 0 : minLength;
}

const [n, s] = input.shift().split(" ").map(Number);
const nums = input.toString().split(" ").map(Number);

console.log(solution(s, nums));
