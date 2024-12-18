const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, k] = input.shift().split(" ").map(Number);
const nums = input[0].split(" ").map(Number);

function solution(k, arr) {
  let maxSum = 0;
  let currentSum = 0;
  let count = 0;

  for (let i = 0; i < k; i++) {
    currentSum += arr[i];
  }

  maxSum = currentSum;
  count = 1;

  for (let i = k; i < arr.length; i++) {
    currentSum += arr[i] - arr[i - k];

    if (currentSum > maxSum) {
      maxSum = currentSum;
      count = 1;
    } else if (currentSum === maxSum) {
      count++;
    }
  }

  if (maxSum === 0) {
    return "SAD";
  }

  return `${maxSum}\n${count}`;
}

const result = solution(k, nums);

console.log(result);
