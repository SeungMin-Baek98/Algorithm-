const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const t = Number(input[0]);
const n = Number(input[1]);
const numA = input[2].split(" ").map(Number);
const m = Number(input[3]);
const numB = input[4].split(" ").map(Number);

function solution(t, a, b) {
  const sumA = new Map();
  const sumB = new Map();

  //a배열의 부분합
  for (let i = 0; i < a.length; i++) {
    let sum = 0;
    for (let j = i; j < a.length; j++) {
      sum += a[j];
      if (sumA.has(sum)) {
        sumA.set(sum, sumA.get(sum) + 1);
      } else {
        sumA.set(sum, 1);
      }
    }
  }

  //b배열의 부분합
  for (let i = 0; i < b.length; i++) {
    let sum = 0;
    for (let j = i; j < b.length; j++) {
      sum += b[j];
      if (sumB.has(sum)) {
        sumB.set(sum, sumB.get(sum) + 1);
      } else {
        sumB.set(sum, 1);
      }
    }
  }

  let count = 0;
  for (const [key, value] of sumA) {
    const target = t - key;

    if (sumB.has(target)) {
      count += value * sumB.get(target);
    }
  }

  return count;
}

console.log(solution(t, numA, numB));
