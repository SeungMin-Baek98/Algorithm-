const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(m, arr) {
  arr.sort((a, b) => a - b);
  let left = 0;
  let right = arr.length - 1;
  let answer = 0;

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === m) {
      answer++;
      left++;
      right--;
    } else if (sum < m) {
      left++;
    } else {
      right--;
    }
  }
  return answer;
}

const nums = input[1].split(" ").map(Number);
const x = Number(input[2]);

console.log(solution(x, nums));
