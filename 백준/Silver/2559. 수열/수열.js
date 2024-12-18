const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, k] = input.shift().split(" ").map(Number);
const nums = input[0].split(" ").map(Number);

function solution(k, arr) {
  let answer = 0;
  let sum = 0;

  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }

  answer = sum;

  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k];
    answer = Math.max(answer, sum);
  }
  return answer;
}

console.log(solution(k, nums));
